import type { VercelRequest, VercelResponse } from '@vercel/node'
import OpenAI from 'openai'

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers to support local development
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { prompt, style = 'vivid' } = req.body

        if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required and must be a string' })
    }

    // Create engaging, age-appropriate images that are appealing but not overly childish
    const enhancedPrompt = `Create a beautiful, engaging illustration for a Yellowstone adventure story: ${prompt}. Style: vibrant and appealing with rich colors and interesting details. Make it visually engaging and well-crafted - suitable for young learners but not cartoonish or overly simplified. Include adventure elements like majestic dragons, geysers, forest landscapes, crystals, and natural settings as appropriate. Keep content completely family-friendly and age-appropriate. Characters should wear practical adventure clothing. Focus on wonder, discovery, and friendship. No text on the images.`

    // First, try the original prompt
    try {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: enhancedPrompt,
        n: 1,
        size: "1024x1024",
        style: style as "vivid" | "natural",
        quality: "standard"
      })

      const imageUrl = response.data?.[0]?.url
      
      if (!imageUrl) {
        throw new Error('No image URL returned from DALL-E')
      }

      res.json({ 
        imageUrl,
        prompt: enhancedPrompt,
        originalPrompt: prompt,
        wasSanitized: false
      })

    } catch (dalleError: any) {
      // If DALL-E rejects due to content policy, try AI sanitization
      if (dalleError.code === 'content_policy_violation') {
        console.log('Content policy violation, attempting AI sanitization...')
        
        const sanitizationResponse = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "You help make picture ideas safe and appropriate for young learners. Make content engaging but not overly childish or cartoonish. Transform: inappropriate content→adventure-appropriate alternatives, violence→heroic challenges, scary elements→majestic creatures like dragons, destruction→magical effects. Keep everything family-friendly with characters in practical adventure gear. Make it engaging and appealing without being overly simplified. Return ONLY the refined picture idea."
            },
            {
              role: "user",
              content: `Please make this picture idea safe and appropriate for young learners: "${prompt}"`
            }
          ],
          max_tokens: 200,
          temperature: 0.3
        })

        const sanitizedPrompt = sanitizationResponse.choices[0]?.message?.content?.trim() || prompt
        const sanitizedEnhancedPrompt = `Create a beautiful, engaging illustration for a Yellowstone adventure story: ${sanitizedPrompt}. Style: vibrant and appealing with rich colors and interesting details. Make it visually engaging and well-crafted - suitable for young learners but not cartoonish or overly simplified. Include adventure elements like majestic dragons, geysers, forest landscapes, crystals, and natural settings as appropriate. Keep content completely family-friendly and age-appropriate. Focus on wonder, discovery, and friendship. No text on the images.`

        // Try again with sanitized prompt
        const retryResponse = await openai.images.generate({
          model: "dall-e-3",
          prompt: sanitizedEnhancedPrompt,
          n: 1,
          size: "1024x1024",
          style: style as "vivid" | "natural",
          quality: "standard"
        })

        const retryImageUrl = retryResponse.data?.[0]?.url
        
        if (!retryImageUrl) {
          throw new Error('No image URL returned from DALL-E after sanitization')
        }

        res.json({ 
          imageUrl: retryImageUrl,
          prompt: sanitizedEnhancedPrompt,
          originalPrompt: prompt,
          sanitizedPrompt: sanitizedPrompt,
          wasSanitized: true
        })
      } else {
        // Re-throw non-content-policy errors
        throw dalleError
      }
    }

  } catch (error: any) {
    console.error('DALL-E image generation error:', error)
    
    // Return specific error messages for different scenarios
    if (error.code === 'content_policy_violation') {
      res.status(400).json({ error: 'Content not suitable for image generation. Please try a different description.' })
    } else if (error.code === 'rate_limit_exceeded') {
      res.status(429).json({ error: 'Too many requests. Please wait a moment and try again.' })
    } else {
      res.status(500).json({ error: 'Failed to generate image. Please try again.' })
    }
  }
}

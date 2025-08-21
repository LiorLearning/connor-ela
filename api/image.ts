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

    // Create fun, happy images that kids will love while keeping them safe
    const enhancedPrompt = `Make a fun, pretty picture for a happy Yellowstone story: ${prompt}. Style: bright and colorful with happy colors and cool details. Make it look super fun - the kind of picture kids would love! Include fun things like fluffy dragons, hot water going whoosh, pretty trees, shiny rocks, and cute animals as needed. Keep everything very kid-friendly with no scary or grown-up stuff. Make characters wear normal clothes that kids would wear. Focus on fun, friendship, and happy times. No words on the pictures.`

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
              content: "You help make picture ideas safe and fun for kids in 1st grade. Make everything happy and silly, not scary. Change: scary things→cute things, fighting→playing, mean monsters→nice fluffy dragons, breaking things→pretty sparkles. No grown-up stuff, keep everyone wearing normal clothes like kids wear to school. Make it fun and silly. Give back ONLY the safe, fun picture idea."
            },
            {
              role: "user",
              content: `Please make this picture idea safe and fun for kids: "${prompt}"`
            }
          ],
          max_tokens: 200,
          temperature: 0.3
        })

        const sanitizedPrompt = sanitizationResponse.choices[0]?.message?.content?.trim() || prompt
        const sanitizedEnhancedPrompt = `Make a fun, pretty picture for a happy Yellowstone story: ${sanitizedPrompt}. Style: bright and colorful with happy colors and cool details. Make it look super fun - the kind of picture kids would love! Include fun things like fluffy dragons, hot water going whoosh, pretty trees, shiny rocks, and cute animals as needed. Keep everything very kid-friendly with no scary or grown-up stuff. Focus on fun, friendship, and happy times. No words on the pictures.`

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

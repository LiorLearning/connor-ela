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

    // Create cinematic, photorealistic images for K-5 reading tutor
    const enhancedPrompt = `Photorealistic, cinematic film still for K-5 reading content: ${prompt}. 
    
STYLE: Live-action film quality, never childish or cartoony. Cinematic realism with believable lighting, materials, physics. Professional look with high dynamic range, crisp focus, clean optics, subtle film grain, controlled contrast. Grounded, mature colors with selective accents - avoid oversaturated primaries and baby pastels. Micro-detail textures on all surfaces. Single clear subject, balanced frame, readable silhouette.

TECHNICAL: UHD detail, global illumination, subtle film grain, crisp focus. 35mm/50mm lens equivalent. Motivated lighting sources (window light, practical lamps, overcast daylight, soft bounce). Gentle atmospheric haze allowed.

CONTENT: PG school-safe, age-appropriate. Fully clothed characters in modest attire. No gore, graphic injury, drugs, or weapons. CHARACTERS: Show ONLY the specified main characters (typically Reese and Oli), no additional people, children, adults, or extra human figures. Include Yellowstone adventure elements like majestic creatures, geysers, forest landscapes, crystals, natural settings as appropriate. Focus on wonder, discovery, friendship between the main characters only.

AVOID: Cartoon, anime, chibi, kawaii, sticker, emoji, pixel art, low-poly, cel-shade, vector/flat UI, toy-like gloss, kids-app look. No low-res, blurry, over-sharpened, distorted hands/faces. No text on images.`

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
              content: "You help create cinematic, photorealistic image prompts for K-5 reading content. Transform unsafe content into PG school-safe alternatives while maintaining live-action film quality. Replace: inappropriate content→adventure-appropriate scenes, violence→heroic challenges, scary elements→majestic creatures, destruction→magical effects. Ensure photorealistic, cinematic style - never childish or cartoony. Characters wear practical, modest attire. Focus on wonder, discovery, friendship in Yellowstone adventure setting. Return ONLY the refined cinematic scene description."
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
        const sanitizedEnhancedPrompt = `Photorealistic, cinematic film still for K-5 reading content: ${sanitizedPrompt}. 
    
STYLE: Live-action film quality, never childish or cartoony. Cinematic realism with believable lighting, materials, physics. Professional look with high dynamic range, crisp focus, clean optics, subtle film grain, controlled contrast. Grounded, mature colors with selective accents - avoid oversaturated primaries and baby pastels. Micro-detail textures on all surfaces. Single clear subject, balanced frame, readable silhouette.

TECHNICAL: UHD detail, global illumination, subtle film grain, crisp focus. 35mm/50mm lens equivalent. Motivated lighting sources (window light, practical lamps, overcast daylight, soft bounce). Gentle atmospheric haze allowed.

CONTENT: PG school-safe, age-appropriate. Fully clothed characters in modest attire. No gore, graphic injury, drugs, or weapons. CHARACTERS: Show ONLY the specified main characters (typically Reese and Oli), no additional people, children, adults, or extra human figures. Include Yellowstone adventure elements like majestic creatures, geysers, forest landscapes, crystals, natural settings as appropriate. Focus on wonder, discovery, friendship between the main characters only.

AVOID: Cartoon, anime, chibi, kawaii, sticker, emoji, pixel art, low-poly, cel-shade, vector/flat UI, toy-like gloss, kids-app look. No low-res, blurry, over-sharpened, distorted hands/faces. No text on images.`

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

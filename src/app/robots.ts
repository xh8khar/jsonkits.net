import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://www.jsonkits.net'

const aiCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'Google-Extended',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
  'FacebookBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', crawlDelay: 10 },
      ...aiCrawlers.map(userAgent => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}

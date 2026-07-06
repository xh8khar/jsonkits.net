import type { MetadataRoute } from 'next'
import { tools } from '@/lib/navigation'
import { blogPosts } from '@/lib/blog/posts'

export const dynamic = 'force-static'

const BASE_URL = 'https://www.jsonkits.net'

const staticPages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.4, changeFrequency: 'monthly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}/`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  const toolUrls = tools.map((tool) => ({
    url: `${BASE_URL}${tool.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogUrls = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticUrls, ...toolUrls, ...blogUrls]
}

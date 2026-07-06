import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog/posts'

export const metadata: Metadata = {
  title: 'Blog — JSONKits: JSON Tools, Tutorials, and Guides',
  description: 'Explore tutorials, guides, and articles about JSON, data formats, APIs, and developer tools. Learn how to format, validate, convert, and work with JSON data.',
  keywords: 'json blog, json tutorial, json guide, json how to, json tips, developer blog, json tools blog, json tutorials',
  openGraph: {
    title: 'JSONKits Blog — JSON Tutorials and Developer Guides',
    description: 'Learn JSON formatting, validation, conversion, and more with our free tutorials and guides.',
  },
}

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">JSONKits Blog</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Tutorials, guides, and articles about JSON, data formats, and developer tools.
        </p>
      </div>
      <div className="grid gap-8">
        {blogPosts.map(post => (
          <article key={post.slug} className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{post.description}</p>
            <div className="flex flex-wrap gap-2">
              {post.relatedTools.slice(0, 3).map(tool => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

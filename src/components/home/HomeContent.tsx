'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import ToolGrid from './ToolGrid'
import ToolCard from './ToolCard'
import { tools } from '@/lib/navigation'
import { learnPosts } from '@/lib/learn/posts'
import type { FAQItem, ToolCategory } from '@/types'

const featuredArticleSlugs = [
  'getting-started-with-json',
  'json-vs-yaml-guide',
  'common-json-mistakes',
]

const faqs: FAQItem[] = [
  {
    question: 'What is JSONKits?',
    answer:
      'JSONKits is a free collection of 384+ browser-based JSON tools for developers — formatters, validators, viewers, converters, generators, and comparison tools. Everything runs entirely in your browser using JavaScript and WebAssembly.',
  },
  {
    question: 'Is JSONKits free to use?',
    answer:
      'Yes, every tool on JSONKits is completely free with no subscriptions, usage limits, or credit card required.',
  },
  {
    question: 'Is my data uploaded to a server?',
    answer:
      'No. All processing happens 100% client-side in your browser. Your JSON, CSV, YAML, or other data is never sent to, stored on, or seen by any server — which makes JSONKits safe to use with sensitive or proprietary data.',
  },
  {
    question: 'Do I need to create an account?',
    answer:
      'No sign-up is required. Open any tool and start using it immediately.',
  },
  {
    question: 'What is JSON used for?',
    answer:
      'JSON (JavaScript Object Notation) is a lightweight, text-based data format used to exchange data between servers, APIs, mobile apps, and web applications. It is the standard format for REST APIs, configuration files, and NoSQL databases like MongoDB.',
  },
  {
    question: 'How is JSON different from YAML or XML?',
    answer:
      'JSON is more compact and easier to parse than XML, while YAML is more human-readable and supports comments, which JSON does not. All three are used for data serialization, but JSON is the most widely supported across programming languages and web APIs. See our JSON vs YAML and JSON vs XML guides for a full comparison.',
  },
  {
    question: 'Can I use JSONKits tools offline or without an internet connection?',
    answer:
      'Once a tool page has loaded, all conversion and formatting logic runs locally in your browser, so most tools continue to work without a live network connection.',
  },
  {
    question: 'How many tools does JSONKits offer?',
    answer:
      'JSONKits currently offers 384 tools across formatters, validators, viewers, converters, generators, and compare utilities, covering formats like YAML, XML, CSV, TypeScript, SQL, and many more.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const popularIds = [
  'formatter',
  'validator',
  'minifier',
  'diff-checker',
  'json-to-yaml',
  'json-to-csv',
  'json-to-typescript',
  'xml-to-json',
]

const categoryGroups: {
  label: string
  value: ToolCategory
  description: string
  icon: React.ReactNode
  color: string
}[] = [
  {
    label: 'Formatters',
    value: 'formatter',
    description: 'Beautify, minify & clean up JSON',
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    label: 'Validators',
    value: 'validator',
    description: 'Check syntax & schema correctness',
    color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Viewers',
    value: 'viewer',
    description: 'Explore data in a readable tree',
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    label: 'Converters',
    value: 'converter',
    description: 'Transform JSON to & from any format',
    color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    label: 'Generators',
    value: 'generator',
    description: 'Create mock data, schemas & code',
    color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: 'Compare',
    value: 'compare',
    description: 'Diff two JSON documents side by side',
    color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
      </svg>
    ),
  },
]

export default function HomeContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'all'>('all')
  const allToolsRef = useRef<HTMLDivElement>(null)

  const popularTools = popularIds
    .map(id => tools.find(t => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))

  const featuredArticles = featuredArticleSlugs
    .map(slug => learnPosts.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const categoryCounts = categoryGroups.map(group => ({
    ...group,
    count: tools.filter(t => t.category === group.value).length,
  }))

  const scrollToAllTools = () => {
    allToolsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleCategoryClick = (value: ToolCategory) => {
    setActiveCategory(value)
    scrollToAllTools()
  }

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="text-blue-500">{'{ }'}</span>{' '}
            JSON Tools for Developers
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Fast, free &amp; privacy-friendly JSON tools. All processing happens in your browser — nothing is uploaded to servers.
          </p>
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') scrollToAllTools()
                }}
                placeholder="Search 384 tools..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              384 tools
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              100% client-side, nothing uploaded
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free, no sign-up
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Most Popular Tools</h2>
          <button onClick={scrollToAllTools} className="text-sm font-medium text-blue-500 hover:text-blue-600 cursor-pointer">
            View all 384 &rarr;
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryCounts.map(cat => (
              <button
                key={cat.value}
                onClick={() => handleCategoryClick(cat.value)}
                className="group text-left p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${cat.color}`}>{cat.icon}</div>
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {cat.label}
                  </h3>
                  <span className="ml-auto text-xs font-medium text-slate-400">{cat.count}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{cat.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section ref={allToolsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">All Tools</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Search or filter by category to find exactly what you need.</p>
        </div>
        <ToolGrid searchQuery={searchQuery} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </section>

      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Learn About JSON</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Guides on JSON syntax, common errors, and format comparisons.</p>
            </div>
            <Link href="/learn" className="shrink-0 text-sm font-medium text-blue-500 hover:text-blue-600">
              Visit Learn Center &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredArticles.map(post => (
              <Link
                key={post.slug}
                href={`/learn/${post.slug}`}
                className="group block p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-200"
              >
                <span className="text-xs font-medium text-slate-400">{post.readTime}</span>
                <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors mt-1">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">About JSONKits</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                JSONKits is a free, browser-based toolkit for working with JSON and related data
                formats. Every tool runs entirely on your device — nothing you paste or upload is
                ever sent to a server, which makes it safe for private or proprietary data.
              </p>
              <Link href="/about" className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-600 font-medium text-sm">
                More about our project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">Privacy first</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">No data ever leaves your device — all processing happens client-side.</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">Blazing fast</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Tools run instantly in the browser with no network round-trip.</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">Completely free</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">No subscriptions, no hidden costs, no credit card required.</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">No sign-up</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Start using any of the 384 tools immediately, no account needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(faq => (
              <details
                key={faq.question}
                className="group p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              >
                <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-medium text-slate-900 dark:text-white">
                  {faq.question}
                  <svg className="w-4 h-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  )
}

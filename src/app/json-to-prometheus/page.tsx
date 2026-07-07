import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Prometheus Converter - Free Online Converter',
  description: 'Convert JSON data to Prometheus metric format with gauge metrics for monitoring systems.',
  keywords: ['json to prometheus, json to prometheus online, json to prometheus tool, json to prometheus, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-prometheus/' },
  openGraph: {
    title: 'JSON to Prometheus Converter - Free Online Converter',
    description: 'Convert JSON data to Prometheus metric format with gauge metrics for monitoring systems.',
    url: 'https://www.jsonkits.net/json-to-prometheus/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Prometheus Converter - Free Online Converter',
    description: 'Convert JSON data to Prometheus metric format with gauge metrics for monitoring systems.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

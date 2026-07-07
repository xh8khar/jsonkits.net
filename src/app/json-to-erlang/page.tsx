import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Erlang Converter - Free Online Converter',
  description: 'Generate Erlang record definitions and term syntax from JSON data samples for BEAM VM applications.',
  keywords: ['json to erlang, json to erlang online, json to erlang tool, json to erlang, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-erlang/' },
  openGraph: {
    title: 'JSON to Erlang Converter - Free Online Converter',
    description: 'Generate Erlang record definitions and term syntax from JSON data samples for BEAM VM applications.',
    url: 'https://www.jsonkits.net/json-to-erlang/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Erlang Converter - Free Online Converter',
    description: 'Generate Erlang record definitions and term syntax from JSON data samples for BEAM VM applications.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

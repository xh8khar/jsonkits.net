import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Erlang - Free Online Converter ',
  description: 'Generate Erlang record definitions and term syntax from JSON data samples for BEAM VM applications.',
  keywords: ['json to erlang, json to erlang online, json to erlang tool, json to erlang, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}

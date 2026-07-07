import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Fake Data to JSON - Free Online Generator ',
  description: 'Infer a template schema from JSON data for regeneration. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['fake data to json, fake data to json online, fake data to json tool, convert fake data to json, fake data json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/fake-data-to-json/' },
  openGraph: {
    title: 'Fake Data to JSON - Free Online Generator ',
    description: 'Infer a template schema from JSON data for regeneration. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/fake-data-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake Data to JSON - Free Online Generator ',
    description: 'Infer a template schema from JSON data for regeneration. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

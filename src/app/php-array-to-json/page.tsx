import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PHP Array to JSON - Free Online Generator ',
  description: 'Convert PHP array syntax to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['php array to json, php array to json online, php array to json tool, convert php array to json, php array json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/php-array-to-json/' },
  openGraph: {
    title: 'PHP Array to JSON - Free Online Generator ',
    description: 'Convert PHP array syntax to JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/php-array-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PHP Array to JSON - Free Online Generator ',
    description: 'Convert PHP array syntax to JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

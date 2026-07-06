import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Rust Struct to JSON Generator - Free Online Generator',
  description: 'Generate sample JSON data from Rust struct definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['rust struct to json, rust struct to json online, rust struct to json tool, convert rust struct to json, rust struct json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}

import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'YAML to JSON Converter - Free Online Converter',
  description: 'Convert YAML configuration files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['yaml to json, yaml to json online, yaml to json tool, convert yaml to json, yaml json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/yaml-to-json/' },
  openGraph: {
    title: 'YAML to JSON Converter - Free Online Converter',
    description: 'Convert YAML configuration files to JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/yaml-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YAML to JSON Converter - Free Online Converter',
    description: 'Convert YAML configuration files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

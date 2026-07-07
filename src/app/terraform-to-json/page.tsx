import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Terraform to JSON Converter - Free Online Converter',
  description: 'Convert Terraform variables files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['terraform to json, terraform to json online, terraform to json tool, convert terraform to json, terraform json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/terraform-to-json/' },
  openGraph: {
    title: 'Terraform to JSON Converter - Free Online Converter',
    description: 'Convert Terraform variables files to JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/terraform-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terraform to JSON Converter - Free Online Converter',
    description: 'Convert Terraform variables files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQL Server - Free Online Converter ',
  description: 'Generate SQL Server CREATE TABLE and INSERT statements from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to sql server, json to sql server online, json to sql server tool, convert json to sql server, json sql server converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-sql-server/' },
  openGraph: {
    title: 'JSON to SQL Server - Free Online Converter ',
    description: 'Generate SQL Server CREATE TABLE and INSERT statements from JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-sql-server/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to SQL Server - Free Online Converter ',
    description: 'Generate SQL Server CREATE TABLE and INSERT statements from JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

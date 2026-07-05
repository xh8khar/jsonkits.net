import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQL CREATE TABLE - Free Online Converter | JSONKits',
  description: 'Generate SQL CREATE TABLE statements from JSON data samples for major database engines. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to sql create table, json to sql create table online, json to sql create table tool, json to sql create online, json to sql create tool, json to sql create, convert json to sql create, json sql create converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}

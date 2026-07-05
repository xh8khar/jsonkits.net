import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PowerShell - Free Online Converter | JSONKits',
  description: 'Generate PowerShell custom object and hashtable syntax from JSON data for scripting. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to powershell, json to powershell online, json to powershell tool, convert json to powershell, json powershell converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}

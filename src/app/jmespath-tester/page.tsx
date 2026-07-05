import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JMESPath Tester - Free Online Formatter ',
  description: 'Test JMESPath query expressions against JSON data and see results. JMESPath is used by AWS CLI and Azure CLI. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['jmespath tester, jmespath tester online, jmespath tester tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}

import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Redis Commands - Free Online Converter ',
  description: 'Convert JSON data to Redis JSON.SET commands for storing JSON documents using RedisJSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to redis commands, json to redis commands online, json to redis commands tool, json to redis online, json to redis tool, json to redis, convert json to redis, json redis converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}

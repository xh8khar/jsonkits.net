import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to OCaml - Free Online Converter ',
  description: 'Generate OCaml type definitions with Yojson deriving from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to ocaml, json to ocaml online, json to ocaml tool, convert json to ocaml, json ocaml converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}

import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to OCaml Online — Free JSON Tool | JSONKits',
  description: 'Generate OCaml type definitions with Yojson deriving from JSON samples. 100% client-side and free to use.',
  keywords: ['json to ocaml, convert json to ocaml, json ocaml converter, ocaml format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}

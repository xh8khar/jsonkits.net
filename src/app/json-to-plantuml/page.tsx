import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PlantUML - Generate UML Diagrams',
  description: 'Generate PlantUML class diagram definitions from JSON data structure for documentation.',
  keywords: ['json to plantuml', 'uml generator', 'class diagram', 'plantuml json'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-plantuml/' },
  openGraph: {
    title: 'JSON to PlantUML - Generate UML Diagrams',
    description: 'Generate PlantUML class diagram definitions from JSON data structure for documentation.',
    url: 'https://www.jsonkits.net/json-to-plantuml/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to PlantUML - Generate UML Diagrams',
    description: 'Generate PlantUML class diagram definitions from JSON data structure for documentation.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

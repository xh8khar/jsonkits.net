import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PlantUML - Generate UML Diagrams',
  description: 'Generate PlantUML class diagram definitions from JSON data structure for documentation.',
  keywords: ['json to plantuml', 'uml generator', 'class diagram', 'plantuml json'],
}

export default function Page() {
  return <ToolPageClient />
}

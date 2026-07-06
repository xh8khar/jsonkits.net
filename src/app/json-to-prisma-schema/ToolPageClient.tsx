'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPrismaSchema } from '@/lib/converters'

const example = JSON.stringify({ id: 1, title: 'My Post', content: 'Hello world', published: true, authorId: 42, tags: ['json', 'prisma'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Prisma Schema"
        description="Generate Prisma ORM models from JSON data samples for Node.js/TypeScript database schemas."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated code will appear here..."
        convertLabel="Generate"
        onConvert={jsonToPrismaSchema}
        exampleInput={example}
        outputLanguage="text"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate Prisma ORM models from JSON data samples for Node.js/TypeScript database schemas.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click the generate button to produce the output.</li><li>Copy the generated code for use in your project.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h3>What can I use this for?</h3><p>Use this tool to quickly scaffold Prisma models from JSON data samples during development.</p>
      </article>
    </>
  )
}

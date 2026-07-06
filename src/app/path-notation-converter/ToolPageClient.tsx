'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { pathNotationConvert } from '@/lib/converters'

const example = '$.store.book[0].title\njsonpath'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Path Notation Converter"
        description="Convert between JSONPath (\$.store.book[0].title), JSON Pointer (/store/book/0/title), and JMESPath (store.book[0].title) query notations. Paste an expression and specify its format."
        inputPlaceholder="Paste expression on line 1, format on line 2 (jsonpath, jsonpointer, or jmespath)..."
        outputPlaceholder="Converted notations will appear here..."
        convertLabel="Convert"
        onConvert={pathNotationConvert}
        exampleInput={example}
        outputLanguage="text"
        inputLanguage="text"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert between JSONPath, JSON Pointer (RFC 6901), and JMESPath query notations. JSONPath is commonly used in JavaScript, JSON Pointer in REST APIs and JSON Schema, and JMESPath in AWS CLI and Azure CLI.</p>
        <h2>How to Use</h2>
        <ol><li>Paste a JSON path expression on the first line.</li><li>On the second line, specify the format: jsonpath, jsonpointer, or jmespath.</li><li>Click Convert to see all three notations side by side.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
      </article>
    </>
  )
}

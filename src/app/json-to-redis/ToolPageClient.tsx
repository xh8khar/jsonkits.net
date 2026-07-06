'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToRedis } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['json-to-redis', 'validator', 'converter'], active: true, metadata: { author: 'Dev', created: '2024-01-01' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Redis Commands"
        description="Convert JSON data to Redis JSON.SET commands for storing JSON documents in Redis using the RedisJSON module."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Output will appear here..."
        convertLabel="JSON to Redis Commands"
        onConvert={jsonToRedis}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is RedisJSON?</h2>
        <p>RedisJSON is a Redis module that provides native JSON support, allowing you to store, query, and manipulate JSON documents directly in Redis. JSON.SET commands enable efficient JSON document storage.</p><p>Redis JSON commands are used for:</p><ul><li><strong>Caching</strong>: Storing JSON API responses in Redis cache.</li><li><strong>Session Management</strong>: Persisting complex user session data.</li><li><strong>Real-Time Apps</strong>: Storing real-time data as JSON documents.</li></ul>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy a sample JSON response from your API or editor.</li>
          <li><strong>Click Convert</strong>: Press the button to process your input.</li>
          <li><strong>Review Output</strong>: Your result appears instantly in the output panel.</li>
          <li><strong>Copy to Project</strong>: Use the Copy button to grab the result and paste it into your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are nested objects handled?</h3>
        <p>Nested objects generate their own named type definition, referenced from the parent type. This keeps your code organized and reusable.</p>
        <h3>How are arrays typed?</h3>
        <p>Arrays infer their element type from the first item. Arrays of objects generate a collection type of the corresponding object type.</p>
        <h3>Is this tool safe to use?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your JSON data never leaves your browser and is processed locally. We do not store, track, or upload your data.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-c">JSON to C</a> — Generate C struct definitions with JSON parsing support from JSON data samples.</li>
          <li><a href="/json-to-cpp">JSON to C++</a> — Generate C++ class definitions with JSON serialization support from JSON data samples.</li>
          <li><a href="/json-to-groovy">JSON to Groovy</a> — Generate Groovy class definitions with JSON parsing support from JSON data samples.</li>
        </ul>
      </article>
    </>
  )
}

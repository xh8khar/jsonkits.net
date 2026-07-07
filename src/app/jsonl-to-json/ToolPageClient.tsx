'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonlToJson, jsonToJsonl } from '@/lib/converters'

const example = '{"id":1,"name":"Alice"}\n{"id":2,"name":"Bob"}\n{"id":3,"name":"Charlie"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSONL to JSON Converter"
        description="Convert JSON Lines (JSONL/NDJSON) format to a standard JSON array."
        inputPlaceholder="Paste your JSONL data here..."
        outputPlaceholder="JSON array will appear here..."
        convertLabel="JSONL to JSON"
        onConvert={jsonlToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToJsonl}
        toolSlug="jsonl-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSONL?</h2>
        <p>JSON Lines (JSONL), also known as NDJSON (Newline Delimited JSON), is a format where each line is a valid JSON object. Unlike a standard JSON array which wraps everything in brackets, JSONL stores one record per line, making it ideal for streaming data, log processing, and large datasets.</p>
        <p>JSONL is widely used for:</p>
        <ul>
          <li><strong>Log Files</strong>: Each log entry is a separate JSON line for easy appending.</li>
          <li><strong>Data Streaming</strong>: Processing records one at a time without loading everything into memory.</li>
          <li><strong>Machine Learning</strong>: Training datasets where each line represents one training example.</li>
          <li><strong>Data Pipelines</strong>: Transferring data between processing stages line by line.</li>
        </ul>
        <h2>What Is Standard JSON?</h2>
        <p>Standard JSON represents collections using arrays containing all objects in a single structure. While this is familiar and widely supported, it requires parsing the entire array into memory before accessing individual records.</p>
        <h2>JSONL vs. JSON: When to Use Each</h2>
        <p>JSONL excels for streaming and append-only workloads because you can add new records without rewriting the entire file. Standard JSON is better for small datasets and when you need random access to all elements as a complete collection.</p>
        <h2>How to Convert JSONL to JSON Online</h2>
        <ol>
          <li><strong>Paste your JSONL</strong>: Copy your JSONL data with one JSON object per line into the input box.</li>
          <li><strong>Click Convert</strong>: Press the button to transform the line-delimited records into a standard JSON array.</li>
          <li><strong>Review the Array</strong>: Check that all records were correctly wrapped in an array with proper commas.</li>
          <li><strong>Copy the Result</strong>: Use the Copy button to grab the JSON array for use in your application.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this JSONL to JSON converter safe?</h3>
        <p>Yes. All processing is done client-side in your browser. Your data is never uploaded to any server.</p>
        <h3>What if my JSONL lines are not valid JSON?</h3>
        <p>The tool validates each line individually. Invalid lines will be flagged with an error so you can fix them before conversion.</p>
        <h3>Can I handle very large JSONL files?</h3>
        <p>Since processing happens in your browser, the limit depends on your available memory. For extremely large files, consider processing the JSONL file programmatically in chunks.</p>
        <h2>Real-World Examples</h2>
        <p>Data engineers frequently receive streaming data in JSONL format from sources like Kafka or AWS Kinesis. Converting JSONL to a standard JSON array makes it easier to load into databases, analyze with standard tools, or share with team members who expect a traditional JSON structure.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-jsonl">JSON to JSONL</a> — convert JSON arrays to JSONL format</li>
          <li><a href="/json-to-ndjson">JSON to NDJSON</a> — alternative JSONL conversion</li>
          <li><a href="/ndjson-to-json">NDJSON to JSON</a> — convert NDJSON to standard JSON</li>
        </ul>
      </article>
    </>
  )
}

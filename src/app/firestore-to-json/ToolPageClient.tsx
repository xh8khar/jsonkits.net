'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { firestoreToJson, jsonToFirestore } from '@/lib/converters'

const example = '{"stringValue":"Alice","integerValue":"30","booleanValue":true,"mapValue":{"fields":{"city":{"stringValue":"NYC"}}}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="Firestore to JSON Converter" description="Convert Firestore document format back to standard JSON. Extract plain values from typed Firestore structures." inputPlaceholder="Paste Firestore document here..." outputPlaceholder="Plain JSON will appear here..." convertLabel="Convert to JSON" onConvert={firestoreToJson} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={jsonToFirestore} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Firestore to JSON Conversion?</h2>
        <p>When working with the Firestore REST API or exporting Firebase data, documents arrive in a typed format with fields like <code>stringValue</code>, <code>integerValue</code>, and <code>mapValue</code>. This converter strips away the Firestore type wrappers and returns plain, clean JSON that is ready for further processing, analysis, or migration.</p>
        <h2>How to Convert Firestore to JSON</h2>
        <ol><li><strong>Paste your Firestore document</strong> - Copy the raw Firestore JSON structure from your API response, Firebase export, or backup file.</li><li><strong>Click Convert</strong> to extract the plain values from each typed field. The converter handles all Firestore types including nested maps and arrays.</li><li><strong>Copy the output</strong> for use in your application, data pipeline, or database migration scripts.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does this support nested Firestore maps?</h3><p>Yes. The converter recursively processes nested <code>mapValue</code> and <code>arrayValue</code> structures, preserving the full document hierarchy.</p>
        <h3>What happens to timestamp and reference types?</h3><p>Firestore <code>timestampValue</code> and <code>referenceValue</code> fields are returned as their raw string values since they are not standard JSON primitives.</p>
        <h3>Can I convert JSON back to Firestore format?</h3><p>Yes, use the Swap button to reverse the conversion. This tool is fully bidirectional.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-firestore">JSON to Firestore Converter</a></li><li><a href="/json-formatter">JSON Formatter</a></li><li><a href="/json-validator">JSON Validator</a></li></ul>
      </article>
    </>
  )
}

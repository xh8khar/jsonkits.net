'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToFirestore, firestoreToJson } from '@/lib/converters'

const example = '{"name":"Alice","age":30,"active":true,"address":{"city":"NYC"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to Firestore Converter" description="Convert JSON data to Firestore document format with typed fields (stringValue, integerValue, mapValue, etc.). Perfect for Firebase database imports." inputPlaceholder="Paste your JSON here..." outputPlaceholder="Firestore document will appear here..." convertLabel="Convert to Firestore" onConvert={jsonToFirestore} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={firestoreToJson} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Firestore Document Format?</h2>
        <p>Cloud Firestore is a flexible, scalable NoSQL database from Firebase. It stores data in documents that use typed fields such as <code>stringValue</code>, <code>integerValue</code>, <code>booleanValue</code>, <code>mapValue</code>, and <code>arrayValue</code>. The Firestore REST API requires data in this structured format, making conversion from plain JSON essential for programmatic database imports and exports.</p>
        <h2>How to Convert JSON to Firestore</h2>
        <ol><li><strong>Paste your JSON data</strong> into the input box. Ensure it is valid JSON with proper syntax.</li><li><strong>Click Convert</strong> to transform each value into its typed Firestore equivalent using the <code>mapValue</code>, <code>arrayValue</code>, and primitive field types.</li><li><strong>Copy or download</strong> the resulting Firestore document structure for use in Firebase REST API calls, security rules, or batch imports.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What Firestore field types are supported?</h3><p>The converter maps JSON types to Firestore types automatically: string to <code>stringValue</code>, number to <code>integerValue</code> or <code>doubleValue</code>, boolean to <code>booleanValue</code>, null to <code>nullValue</code>, arrays to <code>arrayValue</code>, and objects to <code>mapValue</code>.</p>
        <h3>Can I convert Firestore documents back to JSON?</h3><p>Yes. Use the Swap button to reverse the conversion. The bidirectional converter supports both directions so you can extract plain values from Firestore typed structures.</p>
        <h3>Is this tool safe for sensitive data?</h3><p>Absolutely. All processing happens entirely in your browser. Your data is never uploaded to any server.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/firestore-to-json">Firestore to JSON Converter</a></li><li><a href="/json-formatter">JSON Formatter</a></li><li><a href="/json-validator">JSON Validator</a></li></ul>
      </article>
    </>
  )
}

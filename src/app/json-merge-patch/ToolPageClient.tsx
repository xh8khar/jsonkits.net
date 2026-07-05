'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonMergePatch } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"features":["formatter"]}\n{"version":2,"active":true,"features":null}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Merge Patch"
        description="Apply RFC 7396 JSON Merge Patch to a target object. The first object is the target, the second is the patch. Null values remove keys."
        inputPlaceholder="Paste target JSON then patch JSON..."
        outputPlaceholder="Patched JSON will appear here..."
        convertLabel="Apply Patch"
        onConvert={jsonMergePatch}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Merge Patch?</h2>
        <p>JSON Merge Patch (RFC 7396) is a format for describing changes to a JSON document. A patch is applied to a target object: values are updated, nested objects are merged recursively, and null values remove keys.</p>
        <ul><li><strong>API Updates</strong>: Partial updates to REST resources.</li><li><strong>Config Changes</strong>: Apply incremental configuration changes.</li><li><strong>State Management</strong>: Merge state updates in applications.</li></ul>
        <h2>How to Apply JSON Merge Patch</h2>
        <ol><li>Paste the target JSON object as the first block.</li><li>Paste the patch JSON object as the second block (separated by newline).</li><li>Click Apply Patch to merge them.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are null values handled?</h3><p>Setting a value to null in the patch removes that key from the target.</p>
        <h3>Are nested objects merged?</h3><p>Yes. Nested objects are merged recursively — only leaf values are replaced.</p>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-merge">JSON Merge</a> — Deep merge JSON objects</li><li><a href="/json-sort-keys">JSON Sort Keys</a> — Sort keys in result</li></ul>
      </article>
    </>
  )
}

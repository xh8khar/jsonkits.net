'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsoncToJson, jsonToJsonc } from '@/lib/converters'

const example = '{ "name": "JSONKits", // app name\n"version": 1 /* major */,\n"active": true }'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSONC to JSON Converter" description="Strip comments from JSONC (JSON with Comments) files to produce valid standard JSON." inputPlaceholder="Paste your JSONC here..." outputPlaceholder="Clean JSON will appear here..." convertLabel="Strip Comments" onConvert={jsoncToJson} exampleInput={example} inputLanguage="text" outputLanguage="json" bidirectional onReverse={jsonToJsonc} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSONC to JSON Converter?</h2>
        <p>JSONC (JSON with Comments) allows single-line // and multi-line /* */ comments in JSON files, commonly used in configuration files like tsconfig.json or VS Code settings. This tool strips all comments to produce clean, standard JSON.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSONC content with comments into the input field.</li><li>Click "Strip Comments" to remove all comments and produce valid JSON.</li><li>Copy the clean JSON output for use in tools that require strict JSON.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Will trailing commas be removed too?</h3><p>This tool only removes comments. Use the JSON Repair tool to handle trailing commas and other syntax issues.</p>
        <h3>Can I add comments back to JSON?</h3><p>Yes, the tool supports bidirectional conversion. Click Swap to add inline comments to JSON keys.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-jsonc">JSON to JSONC Converter</a></li><li><a href="/json-repair">JSON Repair Tool</a></li><li><a href="/json-linter">JSON Linter</a></li></ul>
      </article>
    </>
  )
}

'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToJsonc, jsoncToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to JSONC Converter" description="Add inline comments to JSON keys to create JSONC (JSON with Comments) format." inputPlaceholder="Paste your JSON here..." outputPlaceholder="JSONC with comments will appear here..." convertLabel="Add Comments" onConvert={jsonToJsonc} exampleInput={example} inputLanguage="json" outputLanguage="text" bidirectional onReverse={jsoncToJson} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to JSONC Converter?</h2>
        <p>This tool takes valid JSON and adds descriptive inline comments to each key, producing JSONC format. JSONC is commonly used in configuration files like tsconfig.json, VS Code settings, and other tools that extend JSON with comment support.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your standard JSON data into the input field.</li><li>Click "Add Comments" to generate JSONC with inline comments describing each key.</li><li>Copy the JSONC output for use in your configuration files.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Are the comments configurable?</h3><p>Comments are auto-generated based on key names and structure. Custom comment text is not yet supported.</p>
        <h3>Can I convert JSONC back to JSON?</h3><p>Yes, click Swap to switch to comment-stripping mode and convert JSONC back to clean JSON.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/jsonc-to-json">JSONC to JSON Converter</a></li><li><a href="/json-repair">JSON Repair Tool</a></li><li><a href="/json-linter">JSON Linter</a></li></ul>
      </article>
    </>
  )
}

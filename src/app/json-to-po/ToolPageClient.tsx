'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPo, poToJson } from '@/lib/converters'

const example = '{"Hello":"Hola","Goodbye":"Adiós","Thank you":"Gracias"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to PO - JSON to Gettext Converter"
        description="Convert JSON translation files to GNU Gettext PO format."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Converted PO file will appear here..."
        convertLabel="Convert to PO"
        onConvert={jsonToPo}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        bidirectional
        onReverse={poToJson}
        toolSlug="json-to-po"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to PO?</h2>
        <p>JSON to PO conversion transforms JSON translation objects into GNU Gettext PO (Portable Object) format. This process reverses the typical PO-to-JSON pipeline, enabling teams to maintain translations in JSON-first workflows while still generating standard PO files for Gettext-compatible tooling.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Legacy Integration</strong>: Generating PO files from modern JSON translation files for use with traditional Gettext-based localization platforms.</li>
          <li><strong>Translation Handoff</strong>: Converting developer-friendly JSON translations into PO files that translators and linguists can work with using POEdit or similar tools.</li>
          <li><strong>CI/CD Pipelines</strong>: Automatically generating PO files from JSON translation sources during build and deployment processes.</li>
        </ul>
        <h2>How to Use JSON to PO Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter a valid JSON object containing key-value pairs where keys are message IDs and values are translated strings.</li>
          <li><strong>Click Convert</strong>: Press the Convert to PO button to generate a properly formatted PO file with msgid/msgstr pairs and header metadata.</li>
          <li><strong>Copy or download</strong>: Copy the result to your clipboard or download the PO file for direct use in localization workflows.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is a PO file used for?</h3>
        <p>PO files are the standard format used by GNU Gettext for storing translations. They contain msgid (source text) and msgstr (translated text) pairs and are widely used in Linux/Unix applications, WordPress, Drupal, and many other open-source projects.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Development teams using services like Lokalise, Crowdin, or Transifex often export translations in JSON format. When these translations need to be contributed back to open-source projects that use Gettext, this JSON to PO converter bridges the gap without manual reformatting.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/po-to-json">PO to JSON</a> — Convert GNU Gettext PO files to structured JSON</li>
          <li><a href="/xliff-to-json">XLIFF to JSON</a> — Convert XLIFF translation files to JSON</li>
          <li><a href="/json-to-ios-strings">JSON to iOS .strings</a> — Convert JSON to Apple iOS localization format</li>
        </ul>
      </article>
    </>
  )
}

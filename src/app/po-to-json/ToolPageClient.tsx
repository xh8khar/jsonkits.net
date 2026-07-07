'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { poToJson, jsonToPo } from '@/lib/converters'

const example = '# SOME DESCRIPTIVE TITLE.\nmsgid ""\nmsgstr ""\n"Content-Type: text/plain; charset=UTF-8\\n"\n\nmsgid "Hello"\nmsgstr "Hola"\n\nmsgid "Goodbye"\nmsgstr "Adiós"'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="PO to JSON - Gettext Translation Converter"
        description="Convert GNU Gettext PO files to structured JSON format for web applications."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={poToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToPo}
        toolSlug="po-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is PO to JSON?</h2>
        <p>PO (Portable Object) is the standard file format used by GNU Gettext for managing translations in software projects. Converting PO to JSON enables modern web applications to consume translation data directly in JavaScript and TypeScript i18n libraries.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Web Localization</strong>: Transforming Gettext translation files into JSON objects for use in React, Vue, and Angular i18n systems.</li>
          <li><strong>API Integration</strong>: Converting PO translation exports into machine-readable JSON for backend services and content management systems.</li>
          <li><strong>Migration Projects</strong>: Porting legacy Gettext-based translation workflows to modern JSON-based toolchains.</li>
        </ul>
        <h2>How to Use PO to JSON Online</h2>
        <ol>
          <li><strong>Paste your PO content</strong>: Copy your entire Gettext PO file — including all msgid/msgstr pairs and header metadata — and paste it into the input editor.</li>
          <li><strong>Click Convert</strong>: Press the Convert to JSON button to instantly parse the PO structure into a flat JSON key-value object.</li>
          <li><strong>Copy or download</strong>: Use the copy button or download the result as a .json file ready for use in your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is the difference between PO and POT files?</h3>
        <p>POT (Portable Object Template) files are templates used as the source for creating language-specific PO files. Both share the same format, so this converter works with both PO and POT files equally well.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Open-source projects like WordPress and Drupal rely on PO files for translation management. Developers often need to convert these PO exports into JSON format when building REST API endpoints or JavaScript-based frontends that consume translated content from these CMS platforms.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-po">JSON to PO</a> — Reverse conversion from JSON back to Gettext PO format</li>
          <li><a href="/xliff-to-json">XLIFF to JSON</a> — Convert XLIFF translation files to JSON</li>
          <li><a href="/arb-to-json">ARB to JSON</a> — Convert Flutter ARB localization files to JSON</li>
        </ul>
      </article>
    </>
  )
}

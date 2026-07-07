'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { xliffToJson } from '@/lib/converters'

const example = '<?xml version="1.0" encoding="UTF-8"?><xliff version="1.2"><file source-language="en" target-language="es"><body><trans-unit id="greeting"><source>Hello</source><target>Hola</target></trans-unit></body></file></xliff>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="XLIFF to JSON - XLIFF Translation Converter"
        description="Convert XLIFF 1.2 translation files to structured JSON format."
        inputPlaceholder="Paste your XLIFF XML here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={xliffToJson}
        exampleInput={example}
        inputLanguage="xml"
        outputLanguage="json"
        toolSlug="xliff-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is XLIFF to JSON?</h2>
        <p>XLIFF (XML Localization Interchange File Format) is the OASIS-standard XML format for exchanging localization data between tools and vendors. Converting XLIFF to JSON allows developers to integrate translation content directly into web applications without XML parsing overhead.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Localization Workflows</strong>: Extracting translation units from XLIFF files exported by CAT tools like SDL Trados, memoQ, or Smartling into simple JSON objects.</li>
          <li><strong>Web App Integration</strong>: Feeding XLIFF-sourced translations into JavaScript i18n libraries that consume JSON-formatted key-value pairs.</li>
          <li><strong>Data Migration</strong>: Converting legacy XLIFF archives into JSON for modern cloud-based translation management systems.</li>
        </ul>
        <h2>How to Use XLIFF to JSON Online</h2>
        <ol>
          <li><strong>Paste your XLIFF XML</strong>: Copy your entire XLIFF 1.2 document, including the XML declaration and all trans-unit elements with source and target values.</li>
          <li><strong>Click Convert</strong>: Press the Convert to JSON button to parse the XML structure and extract all translation pairs into a clean JSON object.</li>
          <li><strong>Copy or download</strong>: Copy the resulting JSON to your clipboard or download it for use in your application.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What XLIFF versions are supported?</h3>
        <p>This converter supports XLIFF version 1.2, which is the most widely adopted version. It extracts source and target text from each trans-unit element, mapping the id attribute as the JSON key.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Enterprise localization teams frequently use XLIFF as the exchange format between translation vendors and engineering teams. After translations are completed in a CAT tool, the resulting XLIFF files can be converted to JSON for direct integration into single-page applications built with React, Angular, or Vue.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/po-to-json">PO to JSON</a> — Convert GNU Gettext PO files to JSON</li>
          <li><a href="/arb-to-json">ARB to JSON</a> — Convert Flutter ARB localization files to JSON</li>
          <li><a href="/json-to-po">JSON to PO</a> — Convert JSON translation objects to Gettext PO format</li>
        </ul>
      </article>
    </>
  )
}

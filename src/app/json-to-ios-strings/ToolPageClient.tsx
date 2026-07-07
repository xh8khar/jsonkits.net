'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToIosStrings } from '@/lib/converters'

const example = '{"greeting":"Hello","farewell":"Goodbye","app_name":"My App"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to iOS .strings - iOS Localization Converter"
        description="Convert JSON translation files to Apple iOS .strings file format."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Converted .strings file will appear here..."
        convertLabel="Convert to .strings"
        onConvert={jsonToIosStrings}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-ios-strings"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert JSON translation objects to Apple iOS <code>.strings</code> file format. The <code>.strings</code> file is the standard localization format used in iOS and macOS applications, using <code>"key" = "value";</code> syntax for each translation entry.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your input data in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy or download the result</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
      </article>
    </>
  )
}

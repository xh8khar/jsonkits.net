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
        <h2>What Is JSON to iOS .strings?</h2>
        <p>The iOS <code>.strings</code> file format is Apple's standard localization format used in iOS and macOS applications. JSON to iOS <code>.strings</code> conversion transforms JSON translation objects into the <code>"key" = "value";</code> format that Xcode and Apple's localization system natively understand.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>iOS/MacOS Localization</strong>: Converting JSON translations exported from web-based localization platforms into the .strings format required by Apple Xcode projects.</li>
          <li><strong>Cross-Platform Sync</strong>: Sharing translation resources between web and native Apple apps by converting shared JSON into platform-specific .strings files.</li>
          <li><strong>CI Automation</strong>: Generating Localizable.strings files automatically from JSON translation sources during build pipelines.</li>
        </ul>
        <h2>How to Use JSON to iOS .strings Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter a JSON object with string keys and values representing your translations (e.g., <code>{'{'}&quot;greeting&quot;: &quot;Hello&quot;{'}'}</code>).</li>
          <li><strong>Click Convert</strong>: Press the Convert to .strings button to transform each JSON key-value pair into the <code>"key" = "value";</code> format used by Apple.</li>
          <li><strong>Copy or download</strong>: Copy the output or download it as a .strings file for direct integration into your Xcode project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are .strings files structured in Xcode projects?</h3>
        <p>.strings files are placed inside language-specific .lproj directories (e.g., en.lproj/Localizable.strings, es.lproj/Localizable.strings). Each file contains key-value pairs where both keys and values are quoted strings separated by an equals sign and terminated with a semicolon.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Mobile development teams building apps with both React Native (which uses JSON for translations) and native Swift/SwiftUI code can use this tool to convert the shared JSON translations into .strings files. This ensures translation consistency across the entire iOS app while maintaining a single source of truth in JSON format.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/strings-xml-to-json">strings.xml to JSON</a> — Convert Android strings.xml resource files to JSON</li>
          <li><a href="/arb-to-json">ARB to JSON</a> — Convert Flutter ARB localization files to JSON</li>
          <li><a href="/json-to-po">JSON to PO</a> — Convert JSON translation objects to Gettext PO format</li>
        </ul>
      </article>
    </>
  )
}

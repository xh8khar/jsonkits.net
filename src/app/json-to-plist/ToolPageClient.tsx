'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPlist, plistToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to PList Converter"
        description="Convert standard JSON to Apple Property List (PList) XML format."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="PList XML will appear here..."
        convertLabel="JSON to PList"
        onConvert={jsonToPlist}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="xml"
        bidirectional
        onReverse={plistToJson}
        toolSlug="json-to-plist"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is the de facto standard for data exchange on the web and is supported by virtually every programming language.</p>
        <h2>What Is a PList?</h2>
        <p>A Property List (PList) is Apple's native serialization format used across iOS, macOS, watchOS, and tvOS. PLists store structured data in XML format and are used for everything from app configuration to user preferences.</p>
        <p>PLists are essential for:</p>
        <ul>
          <li><strong>Apple App Development</strong>: Configuring Info.plist for app permissions and metadata.</li>
          <li><strong>User Preferences</strong>: Storing settings via NSUserDefaults on Apple platforms.</li>
          <li><strong>Data Persistence</strong>: Saving application data in a format native to Apple frameworks.</li>
          <li><strong>Distribution</strong>: Packaging launch options and entitlements for iOS apps.</li>
        </ul>
        <h2>Why Convert JSON to PList?</h2>
        <p>When developing for Apple platforms, many configuration files and data structures need to be in PList format. Converting from JSON allows web developers and cross-platform teams to work in a familiar format and then generate the Apple-native output required for Xcode and iOS/macOS deployment.</p>
        <h2>How to Convert JSON to PList Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy your JSON data containing the key-value pairs you want to convert.</li>
          <li><strong>Click Convert</strong>: Press the button to transform your JSON into Apple PList XML format.</li>
          <li><strong>Review the PList</strong>: Check that the generated XML follows the Apple DTD with proper &lt;dict&gt;, &lt;key&gt;, and &lt;string&gt; elements.</li>
          <li><strong>Copy to Xcode</strong>: Use the Copy button to save the PList output for use in your Apple project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this JSON to PList converter safe?</h3>
        <p>Yes. All conversion is done entirely client-side in your browser. Your data is never uploaded to any server.</p>
        <h3>Does the converter handle nested objects?</h3>
        <p>Yes, nested JSON objects are converted to nested &lt;dict&gt; elements in the PList XML, preserving the full structure of your data.</p>
        <h3>Can I use the PList output directly in Xcode?</h3>
        <p>Yes, the generated XML PList follows the Apple DTD and can be used directly in Xcode projects as Info.plist files or imported into any Apple development tool.</p>
        <h2>Real-World Examples</h2>
        <p>When building a React Native or Flutter app that needs iOS configuration files, developers write their settings in JSON and convert to PList for the iOS native layer. This avoids manually writing verbose XML while ensuring the Apple project has the correct configuration format.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/plist-to-json">PList to JSON</a> — convert Apple PList back to JSON format</li>
          <li><a href="/json-to-xml">JSON to XML</a> — convert JSON to general XML format</li>
          <li><a href="/xml-to-json">XML to JSON</a> — convert XML to JSON</li>
        </ul>
      </article>
    </>
  )
}

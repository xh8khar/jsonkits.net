'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { stringsXmlToJson } from '@/lib/converters'

const example = '<?xml version="1.0" encoding="utf-8"?><resources><string name="app_name">My App</string><string name="welcome">Welcome</string></resources>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="strings.xml to JSON - Android Localization Converter"
        description="Convert Android strings.xml resource files to structured JSON format."
        inputPlaceholder="Paste your strings.xml here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={stringsXmlToJson}
        exampleInput={example}
        inputLanguage="xml"
        outputLanguage="json"
        toolSlug="strings-xml-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is strings.xml to JSON?</h2>
        <p>The Android <code>strings.xml</code> file is the standard resource file used in Android applications for storing localized strings. Converting strings.xml to JSON extracts all <code>&lt;string&gt;</code> elements with their <code>name</code> attributes and text content into easy-to-use JSON key-value pairs.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Android Localization</strong>: Extracting string resources from Android projects for review, analysis, or migration to other platforms.</li>
          <li><strong>Cross-Platform Sharing</strong>: Converting Android-specific XML string resources into universal JSON that can be shared with iOS, web, or backend teams.</li>
          <li><strong>Translation Automation</strong>: Preparing Android string resources for machine translation or cloud-based localization services that prefer JSON input.</li>
        </ul>
        <h2>How to Use strings.xml to JSON Online</h2>
        <ol>
          <li><strong>Paste your strings.xml</strong>: Copy your entire Android strings.xml file, including the <code>&lt;resources&gt;</code> root element and all <code>&lt;string&gt;</code> child elements.</li>
          <li><strong>Click Convert</strong>: Press the Convert to JSON button to parse the XML and extract each string element's <code>name</code> attribute as the key and its text content as the value.</li>
          <li><strong>Copy or download</strong>: Copy the resulting JSON or download it for use in non-Android projects.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does this tool handle string arrays and plurals?</h3>
        <p>This tool extracts standard <code>&lt;string&gt;</code> elements. For more complex Android resource types like <code>&lt;string-array&gt;</code> or <code>&lt;plurals&gt;</code>, consider converting those separately or using a dedicated Android resource parser.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Development teams migrating from native Android to cross-platform frameworks like Flutter or React Native often need to reuse their existing string resources. This converter allows them to transform the entire strings.xml file into JSON, which can then be adapted to the new framework's localization format without manually retyping each translation.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-ios-strings">JSON to iOS .strings</a> — Convert JSON to Apple iOS localization format</li>
          <li><a href="/arb-to-json">ARB to JSON</a> — Convert Flutter ARB localization files to JSON</li>
          <li><a href="/xliff-to-json">XLIFF to JSON</a> — Convert XLIFF translation files to JSON</li>
        </ul>
      </article>
    </>
  )
}

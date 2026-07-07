'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonI18nTranslator } from '@/lib/converters'

const example = '{"en":{"greeting":"Hello","farewell":"Goodbye"},"es":{"greeting":"Hola","farewell":"Adiós"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON i18n Translator"
        description="Flatten and analyze JSON i18n translation files to see all translation keys organized by language."
        inputPlaceholder="Paste your i18n JSON here..."
        outputPlaceholder="Flattened translations will appear here..."
        convertLabel="Flatten i18n"
        onConvert={jsonI18nTranslator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-i18n-translator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a JSON i18n Translator?</h2>
        <p>A JSON i18n translator flattens and analyzes nested JSON internationalization (i18n) translation files, organizing all translation keys by language for easy comparison and management. i18n files store UI strings in multiple languages using nested JSON objects grouped by locale.</p>
        <p>This tool takes your multi-language JSON structure and produces a flattened table showing every translation key and its value across all languages side by side. It is essential for:</p>
        <ul>
          <li><strong>Translation management</strong>: Spot missing translations across languages by comparing key values in a unified view.</li>
          <li><strong>Localization audits</strong>: Ensure all user-facing strings are translated before a release by detecting gaps.</li>
          <li><strong>Key discovery</strong>: Flatten deeply nested i18n structures to see every key path used in your application.</li>
        </ul>
        <h2>How to Flatten JSON i18n Files Online</h2>
        <ol>
          <li><strong>Prepare your i18n JSON</strong>: Ensure your translation file uses the standard pattern — a top-level object with locale keys (e.g., <code>en</code>, <code>es</code>, <code>fr</code>) each containing nested translation key-objects.</li>
          <li><strong>Paste into the editor</strong>: Copy your entire i18n JSON structure and paste it into the input area.</li>
          <li><strong>Click Flatten i18n</strong>: Press the "Flatten i18n" button to process the structure.</li>
          <li><strong>Review the output</strong>: Examine the flattened table where each row shows a translation key path and its values in every detected language.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What i18n library formats does this tool support?</h3>
        <p>This tool supports any nested JSON translation file where the top-level keys are language codes. Formats like react-i18next, Vue I18n, and standard ICU message JSON structures all work by default.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>A localization manager preparing a multi-language web app for a new market launch can take the project's i18n JSON file — containing 10+ languages with thousands of nested keys — and flatten it with this tool. The output immediately reveals which languages are missing translations for recently added UI features, enabling targeted work before the release deadline.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-compare">JSON Compare</a> — Compare two JSON objects side by side</li>
          <li><a href="/json-search">JSON Search</a> — Search across JSON data for specific keys and values</li>
          <li><a href="/json-beautifier">JSON Beautifier</a> — Format and beautify JSON data for readability</li>
        </ul>
      </article>
    </>
  )
}

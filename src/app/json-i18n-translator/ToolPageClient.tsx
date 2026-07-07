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
        <h2>What Is This Tool?</h2>
        <p>This tool flattens and analyzes JSON i18n translation files, organizing all translation keys by language for easy comparison and management.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your i18n JSON structure in the editor</li>
          <li>Click the Flatten i18n button</li>
          <li>Review all translation keys organized by language</li>
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

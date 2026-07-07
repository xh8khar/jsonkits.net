'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { composerJsonValidator } from '@/lib/converters'

const example = '{"name":"vendor/my-package","description":"A PHP package","type":"library","require":{"php":">=8.0"},"autoload":{"psr-4":{"MyPackage\\\\":"src/"}}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="composer.json Validator - Validate PHP Composer Files"
        description="Validate your composer.json file for required fields and proper PHP package structure."
        inputPlaceholder="Paste your composer.json here..."
        outputPlaceholder="Validation results will appear here..."
        convertLabel="Validate"
        onConvert={composerJsonValidator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="composer-json-validator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool validates your composer.json file for correct PHP package structure, required fields, PSR-4 autoloading, and dependency format.</p>
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

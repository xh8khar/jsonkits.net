'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { packageJsonValidator } from '@/lib/converters'

const example = '{"name":"my-package","version":"1.0.0","description":"My package","main":"index.js","scripts":{"test":"jest"},"dependencies":{"react":"^18.0.0"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="package.json Validator - Validate NPM Package Files"
        description="Validate your package.json file for required fields, correct semver versioning, and proper structure."
        inputPlaceholder="Paste your package.json here..."
        outputPlaceholder="Validation results will appear here..."
        convertLabel="Validate"
        onConvert={packageJsonValidator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="package-json-validator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool validates your package.json file against best practices for NPM packages. It checks for required fields, valid semver versioning, proper dependency format, and common structural issues.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your package.json content in the editor</li>
          <li>Click the Validate button</li>
          <li>Review validation results and fix any issues</li>
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

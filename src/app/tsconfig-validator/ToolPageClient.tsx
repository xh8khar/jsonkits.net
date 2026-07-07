'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { tsconfigValidator } from '@/lib/converters'

const example = '{"compilerOptions":{"target":"ES2020","module":"ESNext","strict":true,"outDir":"./dist","rootDir":"./src"},"include":["src"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="tsconfig.json Validator - Validate TypeScript Config"
        description="Validate your tsconfig.json file for recommended compiler options and proper structure."
        inputPlaceholder="Paste your tsconfig.json here..."
        outputPlaceholder="Validation results will appear here..."
        convertLabel="Validate"
        onConvert={tsconfigValidator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="tsconfig-validator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool validates your tsconfig.json file against TypeScript recommended compiler options and best practices. It checks for common misconfigurations and suggests improvements.</p>
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

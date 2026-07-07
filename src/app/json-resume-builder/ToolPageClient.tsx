'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonResumeBuilder } from '@/lib/converters'

const example = '{"name":"John Doe","label":"Software Engineer","email":"john@example.com","summary":"Experienced developer"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Resume Builder - Create JSON Resume"
        description="Build a standardized JSON Resume following the JSON Resume schema specification."
        inputPlaceholder="Paste your resume data here..."
        outputPlaceholder="Built JSON Resume will appear here..."
        convertLabel="Build Resume"
        onConvert={jsonResumeBuilder}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-resume-builder"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Build a standardized JSON Resume following the official <a href="https://jsonresume.org/schema/">JSON Resume schema</a>. Provide your resume information as input JSON, and this tool structures it into a complete JSON Resume object with all required fields and proper schema formatting.</p>
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

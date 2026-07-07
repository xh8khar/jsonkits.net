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
        <h2>What Is JSON Resume Builder?</h2>
        <p>JSON Resume is an open-source standard for resume documents defined by a community-driven schema specification. The JSON Resume Builder takes your raw resume information as JSON input and structures it into a fully compliant JSON Resume object with all required fields, proper formatting, and schema validation.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Standardized Resumes</strong>: Generating resumes that conform to the official JSON Resume schema, making them portable across different resume parsers and renderers.</li>
          <li><strong>Job Applications</strong>: Creating machine-readable resume data for automated application systems, ATS (Applicant Tracking Systems), and developer portfolios.</li>
          <li><strong>Portfolio Generation</strong>: Building the data foundation for JSON Resume themes and renderers that produce HTML, PDF, or Markdown resumes from the same structured data.</li>
        </ul>
        <h2>How to Use JSON Resume Builder Online</h2>
        <ol>
          <li><strong>Enter your resume data</strong>: Provide your resume information as a JSON object with fields like name, label, email, summary, skills, work experience, and education.</li>
          <li><strong>Click Build Resume</strong>: Press the button to transform your input into a complete JSON Resume object with proper schema formatting and all standard fields.</li>
          <li><strong>Copy or download</strong>: Copy the resulting JSON Resume or download it for use with JSON Resume themes, renderers, or application systems.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is the JSON Resume schema?</h3>
        <p>The JSON Resume schema is a community-driven open standard for resume documents hosted at jsonresume.org. It defines fields for basics, work, education, skills, projects, publications, and more, allowing resumes to be parsed and rendered by a wide ecosystem of open-source tools and themes.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Developers using the JSON Resume ecosystem can create their resume data once in JSON format and render it across multiple themes and formats (HTML, PDF, Markdown). This builder helps structure raw data into the correct schema format, enabling immediate use with tools like jsonresume-theme-even, jsonresume-theme-classy, and the official JSON Resume CLI.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-pdf">JSON to PDF</a> — Convert JSON data to PDF document format</li>
          <li><a href="/json-to-markdown">JSON to Markdown</a> — Convert JSON data to Markdown format</li>
          <li><a href="/json-to-html">JSON to HTML</a> — Convert JSON data to HTML tables</li>
        </ul>
      </article>
    </>
  )
}

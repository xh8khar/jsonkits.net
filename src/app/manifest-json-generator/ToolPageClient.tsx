'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { manifestJsonGenerator } from '@/lib/converters'

const example = '{"name":"JSONKits App","short_name":"JSONKits","description":"JSON tools for developers","start_url":"/","theme_color":"#3B82F6"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="manifest.json Generator - PWA Manifest Generator"
        description="Generate a complete PWA Web App Manifest (manifest.json) with icons, theme colors, and display settings."
        inputPlaceholder="Paste your app details here..."
        outputPlaceholder="Generated manifest.json will appear here..."
        convertLabel="Generate Manifest"
        onConvert={manifestJsonGenerator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="manifest-json-generator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates a complete PWA Web App Manifest (manifest.json) for your progressive web application. It includes all required fields such as name, icons, theme colors, display settings, and more.</p>
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

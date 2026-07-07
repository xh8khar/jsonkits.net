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
        <h2>What Is manifest.json Generator?</h2>
        <p>The Web App Manifest (manifest.json) is a JSON file that controls how your Progressive Web App (PWA) appears to users when installed on their devices. It defines the app name, icons, theme colors, display mode, and startup URL. This generator creates a complete, standards-compliant manifest.json with all required and recommended fields.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>PWA Development</strong>: Generate a complete manifest.json for your progressive web application to enable installability.</li>
          <li><strong>Brand Consistency</strong>: Define theme colors, background colors, and app icons to match your brand identity across devices.</li>
          <li><strong>App Store Optimization</strong>: Configure display modes, orientation, and splash screen settings for the best user experience.</li>
        </ul>
        <h2>How to Use manifest.json Generator Online</h2>
        <ol>
          <li><strong>Enter your app details</strong>: Provide your app name, short name, description, and other configuration fields in the input.</li>
          <li><strong>Click Generate Manifest</strong>: Press the Generate Manifest button to create your manifest.json file.</li>
          <li><strong>Copy and deploy</strong>: Copy the generated manifest.json and link it in your HTML with &lt;link rel=&quot;manifest&quot; href=&quot;/manifest.json&quot;&gt;.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What fields are included in the generated manifest?</h3>
        <p>The manifest includes name, short_name, description, start_url, display, theme_color, background_color, icons, orientation, and scope. All fields follow the W3C Web App Manifest specification.</p>
        <h3>Do I need icons for the manifest to work?</h3>
        <p>Icons are recommended for a complete PWA experience. The generator includes icon configuration fields so you can specify different sizes (192x192, 512x512) for various device requirements.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>PWA developers use the manifest.json Generator to quickly create the configuration file needed to make their web apps installable on mobile and desktop devices. E-commerce sites, news publishers, and SaaS platforms use it to ensure their PWAs display correctly when added to the home screen, with proper icons, splash screens, and theme colors that match their brand.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/package-json-validator">package.json Validator</a> — Validate your NPM package configuration</li>
          <li><a href="/json-schema-generator">JSON Schema Generator</a> — Generate JSON Schema from your data</li>
          <li><a href="/schema-markup-generator">Schema Markup Generator</a> — Generate structured data markup for SEO</li>
        </ul>
      </article>
    </>
  )
}

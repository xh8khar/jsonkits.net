'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { schemaMarkupGenerator } from '@/lib/converters'

const example = '{"@type":"WebSite","name":"JSONKits","url":"https://jsonkits.com"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Schema Markup Generator"
        description="Generate schema.org JSON-LD markup with script tags for SEO and rich snippets."
        inputPlaceholder="Paste your JSON-LD data here..."
        outputPlaceholder="Generated markup will appear here..."
        convertLabel="Generate Markup"
        onConvert={schemaMarkupGenerator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="html"
        toolSlug="schema-markup-generator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a Schema Markup Generator?</h2>
        <p>A Schema Markup Generator produces schema.org JSON-LD structured data wrapped in HTML script tags that you can embed directly into your web pages. Schema markup is standardized vocabulary that search engines use to understand your content and display rich results like star ratings, event dates, FAQ accordions, and breadcrumbs.</p>
        <p>This tool takes your JSON-LD data and outputs it inside a complete <code>&lt;script type="application/ld+json"&gt;</code> tag, ready to paste into your website's HTML. It is essential for:</p>
        <ul>
          <li><strong>Search engine visibility</strong>: Enable rich snippets in Google search results to increase click-through rates.</li>
          <li><strong>Website implementation</strong>: Generate copy-paste-ready script tags for developers adding structured data to websites.</li>
          <li><strong>SEO audits</strong>: Create and test schema markup before deploying to production environments.</li>
        </ul>
        <h2>How to Generate Schema Markup Online</h2>
        <ol>
          <li><strong>Prepare your JSON-LD data</strong>: Write your structured data in JSON-LD format with the appropriate <code>@context</code> and <code>@type</code> fields.</li>
          <li><strong>Paste in the editor</strong>: Copy your JSON-LD data and paste it into the input field on this page.</li>
          <li><strong>Click Generate Markup</strong>: Press the "Generate Markup" button to wrap your JSON-LD in a proper HTML script tag.</li>
          <li><strong>Copy to your site</strong>: Paste the generated <code>&lt;script&gt;</code> tag into your webpage's <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> section.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What's the difference between this tool and the JSON-LD Generator?</h3>
        <p>The JSON-LD Generator creates the raw JSON-LD structured data from simple input properties. The Schema Markup Generator takes already-prepared JSON-LD and wraps it in a complete HTML <code>&lt;script&gt;</code> tag — making it ready for immediate deployment on a web page.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>A front-end developer tasked with implementing structured data across 50 product pages uses this Schema Markup Generator to quickly generate the script tags. After creating the JSON-LD product schema for each item, they run it through this tool — producing the complete <code>&lt;script type="application/ld+json"&gt;</code> blocks that are injected into the page head via the CMS template system.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-ld-generator">JSON-LD Generator</a> — Generate JSON-LD structured data with schema.org context</li>
          <li><a href="/json-ld-validator">JSON-LD Validator</a> — Validate your JSON-LD structured data</li>
          <li><a href="/manifest-json-generator">Manifest JSON Generator</a> — Generate PWA manifest.json files</li>
        </ul>
      </article>
    </>
  )
}

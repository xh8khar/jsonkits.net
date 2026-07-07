'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { lottieJsonViewer } from '@/lib/converters'

const example = '{"v":"5.5.2","fr":30,"ip":0,"op":90,"w":500,"h":500,"layers":[{"ty":4,"nm":"Shape Layer 1"}],"assets":[]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Lottie JSON Viewer - View Lottie Animation Metadata"
        description="View and analyze Lottie animation JSON files with frame rate, dimensions, and layer information."
        inputPlaceholder="Paste your Lottie JSON here..."
        outputPlaceholder="Animation metadata will appear here..."
        convertLabel="View Metadata"
        onConvert={lottieJsonViewer}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="lottie-json-viewer"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Lottie?</h2>
        <p>Lottie is a JSON-based animation file format developed by Airbnb that allows designers to export lightweight, scalable animations from Adobe After Effects. These vector animations can be rendered natively on web, mobile, and desktop platforms without performance overhead.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Animation Inspection</strong>: Viewing Lottie JSON metadata to understand animation structure, layers, and properties.</li>
          <li><strong>Debugging Animations</strong>: Analyzing frame rate, dimensions, and layer composition for troubleshooting animation issues.</li>
          <li><strong>Integration Planning</strong>: Extracting metadata to plan how a Lottie animation will integrate into your application.</li>
        </ul>
        <h2>How to Use Lottie JSON Viewer Online</h2>
        <ol>
          <li><strong>Paste your Lottie JSON</strong>: Copy your Lottie animation JSON data and paste it into the input editor.</li>
          <li><strong>View metadata</strong>: Click the "View Metadata" button to extract and display version, frame rate, dimensions, layer count, and assets.</li>
          <li><strong>Analyze results</strong>: Review the structured metadata output to understand your animation's properties and structure.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What information does the Lottie JSON viewer extract?</h3>
        <p>It extracts version (v), frame rate (fr), in/out points (ip, op), dimensions (w, h), layer count and types, asset count, and calculates total animation duration from the frame rate and frame count.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>UI developers use the Lottie JSON Viewer to quickly inspect animation files before integration, verifying frame rates match project requirements. Designers use it to validate exported animations, and QA teams analyze layer structures for regression testing.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-viewer">JSON Viewer</a> — Browse and inspect JSON data with a tree view</li>
          <li><a href="/json-tree-viewer">JSON Tree Viewer</a> — Visualize JSON data as an interactive tree structure</li>
          <li><a href="/json-explorer">JSON Explorer</a> — Explore and navigate JSON documents interactively</li>
        </ul>
      </article>
    </>
  )
}

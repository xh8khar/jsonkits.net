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
        <h2>What Is This Tool?</h2>
        <p>This tool lets you view and analyze Lottie animation JSON files. It extracts and displays key metadata including version, frame rate, dimensions, layer count, and animation duration.</p>
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

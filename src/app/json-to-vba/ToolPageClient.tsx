'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToVba } from '@/lib/converters'

const example = '{"employeeId":1001,"firstName":"John","lastName":"Doe","salary":75000,"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to VBA - Generate VBA Class Modules"
        description="Generate VBA (Visual Basic for Applications) class modules with properties from JSON data."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated VBA code will appear here..."
        convertLabel="Generate VBA Code"
        onConvert={jsonToVba}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-vba"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is VBA?</h2>
        <p>VBA (Visual Basic for Applications) is Microsoft's event-driven programming language built into Office applications like Excel, Access, and Word. VBA class modules allow developers to create object-oriented structures with properties and methods for automating Office workflows.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>Excel Macros</strong>: Generate VBA class modules to parse JSON data from web APIs directly into Excel worksheets and user-defined objects.</li>
          <li><strong>Access Databases</strong>: Create typed VBA classes that map JSON API responses to Access database records for import and processing.</li>
          <li><strong>Office Automation</strong>: Build reusable VBA components that handle JSON data consistently across multiple Office applications and projects.</li>
        </ul>
        <h2>How to Use JSON to VBA Online</h2>
        <ol>
          <li><strong>Paste your JSON data</strong>: Enter a JSON object or array that you want to convert into a VBA class module structure.</li>
          <li><strong>Click Generate VBA Code</strong>: The tool creates a complete VBA class module with Property Get/Let statements for each JSON field.</li>
          <li><strong>Import into VBA editor</strong>: Copy the generated code and paste it into a new class module in the VBA editor (Alt+F11 in Office) to start using your typed class.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How do I use a VBA class module with JSON data?</h3>
        <p>After importing the generated class module, you can instantiate it in your VBA code and populate its properties from JSON using a JSON parser like the ScriptControl or a custom ParseJson function, enabling type-safe access to your data.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Financial analysts who use Excel to process data from REST APIs can generate VBA class modules from sample JSON responses. This enables them to write cleaner, more maintainable VBA code with IntelliSense support, avoiding the fragility of parsing JSON directly with string manipulation or dictionary lookups.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-delphi">JSON to Delphi</a> — Generate Delphi/Object Pascal classes from JSON data</li>
          <li><a href="/json-to-csharp">JSON to C#</a> — Generate C# class definitions from JSON data</li>
          <li><a href="/json-to-python">JSON to Python</a> — Convert JSON to Python dictionary and variable definitions</li>
        </ul>
      </article>
    </>
  )
}

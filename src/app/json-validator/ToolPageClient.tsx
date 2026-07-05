'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'
import InputPanel from '@/components/tools/InputPanel'
import { validateJSON } from '@/lib/converters'

const example = '{\n  "name": "JSONKits",\n  "version": 1,\n  "features": ["formatter", "validator"],\n  "active": true\n}'

export default function ToolPageClient() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<{ valid: boolean; error?: string } | null>(null)
  const { addToast } = useToast()

  const handleValidate = useCallback(() => {
    if (!input.trim()) {
      addToast('Please enter JSON to validate', 'error')
      return
    }
    const res = validateJSON(input)
    setResult(res)
    addToast(res.valid ? 'Valid JSON' : res.error!, res.valid ? 'success' : 'error')
  }, [input, addToast])

  const loadExample = useCallback(() => {
    setInput(example)
    setResult(null)
    addToast('Example loaded', 'info')
  }, [addToast])

  const handleClear = useCallback(() => {
    setInput('')
    setResult(null)
  }, [])

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">JSON Validator</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-8">Check if your JSON is valid and get detailed error messages with line numbers. Fix syntax errors instantly.</p>

        <InputPanel label="JSON Input" value={input} onChange={setInput} placeholder="Paste your JSON here to validate..." />

        <div className="flex flex-wrap items-center gap-3 mt-4 mb-6">
          <Button onClick={handleValidate} size="lg" icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }>
            Validate
          </Button>
          <Button variant="ghost" onClick={loadExample} icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }>Load Example</Button>
          <Button variant="ghost" onClick={handleClear} icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          }>Clear</Button>
        </div>

        {result && (
          <div className={`p-4 rounded-lg border ${result.valid ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800' : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'}`}>
            <div className="flex items-center gap-2">
              {result.valid ? (
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              )}
              <span className={`font-medium ${result.valid ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}`}>
                {result.valid ? 'Valid JSON!' : `Invalid JSON: ${result.error}`}
              </span>
            </div>
          </div>
        )}
      </div>

            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Validation?</h2>
        <p>JSON validation is the process of checking whether a given string conforms to the JSON syntax specification. A valid JSON string must follow strict rules about data types, structure, and formatting.</p>
        <p>JSON validation is essential for:</p>
        <ul>
          <li><strong>Debugging</strong>: Finding syntax errors in API payloads.</li>
          <li><strong>Quality Assurance</strong>: Ensuring configuration files are correct.</li>
          <li><strong>Development</strong>: Catching errors before they reach production.</li>
        </ul>
        <h2>How to Validate JSON Online</h2>
        <ol>
          <li>Paste your JSON into the input editor.</li>
          <li>Click "Validate" to check the syntax.</li>
          <li>If valid, you'll see a success message. If invalid, detailed error information appears.</li>
          <li>Fix any reported errors and validate again.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What errors can be detected?</h3>
        <p>The validator detects common errors like missing commas, unquoted keys, trailing commas, mismatched brackets, and invalid data types.</p>
        <h3>What is the difference between validation and formatting?</h3>
        <p>Validation checks syntax correctness, while formatting modifies whitespace for readability. Both are often used together in development workflows.</p>
        <h3>Is this tool safe?</h3>
        <p>Absolutely. Processing happens 100% in your browser. Your data is never sent to any server.</p>
        <h2>Real-World Examples</h2>
        <p>JSON validation is used when writing API clients, editing configuration files like tsconfig.json, debugging webhook payloads, ensuring CI/CD pipeline configs are valid, and teaching JSON syntax to new developers.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-formatter">JSON Formatter</a> — Beautify and pretty-print JSON</li>
          <li><a href="/json-viewer">JSON Viewer</a> — Explore JSON in a tree structure</li>
          <li><a href="/json-diff-checker">JSON Diff Checker</a> — Compare two JSON objects</li>
        </ul>
      </article>
    </>
  )
}

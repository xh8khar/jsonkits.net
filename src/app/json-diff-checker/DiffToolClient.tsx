'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'
import InputPanel from '@/components/tools/InputPanel'
import OutputPanel from '@/components/tools/OutputPanel'
import { jsonDiff } from '@/lib/converters'

const exampleA = JSON.stringify({ name: 'JSONKits', version: 1, features: ['formatter', 'validator'], active: true }, null, 2)
const exampleB = JSON.stringify({ name: 'JSONKits', version: 2, features: ['formatter', 'validator', 'converter'], active: false }, null, 2)

export default function DiffToolClient() {
  const [inputA, setInputA] = useState('')
  const [inputB, setInputB] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { addToast } = useToast()

  const handleCompare = useCallback(async () => {
    if (!inputA.trim() || !inputB.trim()) {
      addToast('Please enter both JSON inputs', 'error')
      return
    }
    setLoading(true)
    setError('')
    try {
      const result = await jsonDiff(inputA, inputB)
      setOutput(result)
      addToast('Comparison complete', 'success')
    } catch (e) {
      const msg = (e as Error).message
      setError(msg)
      addToast(msg, 'error')
    } finally {
      setLoading(false)
    }
  }, [inputA, inputB, addToast])

  const handleCopy = useCallback(async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      addToast('Copied to clipboard', 'success')
    } catch {
      addToast('Failed to copy', 'error')
    }
  }, [output, addToast])

  const handleDownload = useCallback(() => {
    if (!output) return
    const blob = new Blob([output], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'diff.json'
    a.click()
    URL.revokeObjectURL(url)
    addToast('Downloaded', 'success')
  }, [output, addToast])

  const loadExample = useCallback(() => {
    setInputA(exampleA)
    setInputB(exampleB)
    setOutput('')
    setError('')
    addToast('Example loaded', 'info')
  }, [addToast])

  const handleClear = useCallback(() => {
    setInputA('')
    setInputB('')
    setOutput('')
    setError('')
  }, [])

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">JSON Diff Checker</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl">Compare two JSON objects and see exactly what changed. Find added, removed, and modified fields with before/after values.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <InputPanel label="Original JSON" value={inputA} onChange={setInputA} placeholder="Paste the original JSON here..." language="json" />
          <InputPanel label="Modified JSON" value={inputB} onChange={setInputB} placeholder="Paste the modified JSON here..." language="json" />
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Button onClick={handleCompare} loading={loading} size="lg" icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          }>
            Compare
          </Button>

          {output && (
            <>
              <Button variant="secondary" onClick={handleCopy} icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }>
                Copy
              </Button>
              <Button variant="secondary" onClick={handleDownload} icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }>
                Download
              </Button>
            </>
          )}

          <Button variant="ghost" onClick={loadExample} icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }>
            Load Example
          </Button>

          <Button variant="ghost" onClick={handleClear} icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          }>
            Clear
          </Button>
        </div>

        <OutputPanel
          label="Differences"
          value={output}
          placeholder="Differences will appear here after comparing..."
          language="json"
          error={error}
        />
      </div>

            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Diff?</h2>
        <p>JSON diff (or JSON comparison) is the process of comparing two JSON objects to identify what has changed between them. The tool highlights additions, removals, and modifications at every nested level.</p>
        <p>JSON diff checking is essential for:</p>
        <ul>
          <li><strong>API Debugging</strong>: Comparing expected vs actual API responses.</li>
          <li><strong>Code Review</strong>: Seeing what changed in configuration files.</li>
          <li><strong>Data Migration</strong>: Verifying data transformations.</li>
          <li><strong>Regression Testing</strong>: Ensuring changes don't break existing behavior.</li>
        </ul>
        <h2>How to Compare JSON Online</h2>
        <ol>
          <li><strong>Paste JSON A</strong>: Paste the first JSON version into the left editor.</li>
          <li><strong>Paste JSON B</strong>: Paste the second JSON version into the right editor.</li>
          <li><strong>Click Compare</strong>: Click the "Compare" button to see differences highlighted.</li>
          <li><strong>Review Changes</strong>: Added fields, removed fields, and modified values are clearly labeled.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What types of changes are detected?</h3>
        <p>The diff checker detects added fields, removed fields, modified values, and changed data types at any nesting level. The output provides a detailed path-based change report.</p>
        <h3>Can I diff large JSON files?</h3>
        <p>Yes. The comparison runs in your browser and handles large objects limited only by your device memory. Files up to several megabytes work well.</p>
        <h3>Is this tool safe?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your JSON data never leaves your browser and is processed locally. We do not store, track, or upload your data to any server.</p>
        <h2>Real-World Examples</h2>
        <p>JSON diffing is essential when reviewing API contract changes between versions, debugging why a configuration update broke a deployment, tracking data migration accuracy, and verifying that a transformation pipeline produced the expected output.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-formatter">JSON Formatter</a> — Pretty-print JSON for readability before comparing</li>
          <li><a href="/json-validator">JSON Validator</a> — Validate both JSON inputs before running a diff</li>
          <li><a href="/json-viewer">JSON Viewer</a> — View JSON in a readable tree structure</li>
        </ul>
      </article>
    </>
  )
}

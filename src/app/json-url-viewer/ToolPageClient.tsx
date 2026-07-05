'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'
import InputPanel from '@/components/tools/InputPanel'
import OutputPanel from '@/components/tools/OutputPanel'

export default function ToolPageClient() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const { addToast } = useToast()

  const handleFetch = useCallback(async () => {
    const url = input.trim()
    if (!url) { addToast('Please enter a URL', 'error'); return }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      addToast('URL must start with http:// or https://', 'error'); return
    }
    setLoading(true)
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
      const data = await res.json()
      setOutput(JSON.stringify(data, null, 2))
      addToast('Data fetched successfully!', 'success')
    } catch (e) {
      addToast('Fetch failed: ' + (e as Error).message, 'error')
      setOutput('')
    } finally {
      setLoading(false)
    }
  }, [input, addToast])

  const loadExample = useCallback(() => {
    setInput('https://jsonplaceholder.typicode.com/todos/1')
    setOutput('')
    addToast('Example loaded', 'info')
  }, [addToast])

  const handleClear = useCallback(() => {
    setInput(''); setOutput('')
  }, [])

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">JSON URL Viewer</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-5xl mb-8">Fetch and display JSON data from any REST API endpoint. Enter a URL and click Fetch to see the formatted response.</p>
        <InputPanel label="API URL" value={input} onChange={setInput} placeholder="https://api.example.com/data.json" />
        <div className="flex flex-wrap items-center gap-3 mt-4 mb-6">
          <Button onClick={handleFetch} disabled={loading} size="lg">Fetch JSON</Button>
          <Button variant="ghost" onClick={loadExample}>Load Example</Button>
          <Button variant="ghost" onClick={handleClear}>Clear</Button>
        </div>
        {output && <OutputPanel value={output} label="JSON Response" />}
      </div>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Fetch and display JSON data from any URL. Perfect for quickly inspecting API responses, debugging endpoints, and exploring JSON data from the web.</p>
        <h2>How to Use</h2>
        <ol><li>Paste an API URL into the input field.</li><li>Click Fetch to retrieve and display the data.</li><li>Review the formatted JSON response.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. Fetch requests are made directly from your browser. We do not proxy or store any data.</p>
        <h3>Can I fetch from any URL?</h3>
        <p>Public APIs that support CORS will work. Some endpoints may block browser-based requests.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-viewer">JSON Viewer</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}

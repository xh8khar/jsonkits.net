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
    setInput('https://jsonplaceholder.typicode.com/posts/1')
    setOutput('')
    addToast('Example loaded', 'info')
  }, [addToast])

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">API JSON Viewer</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-5xl mb-8">View and explore JSON responses from REST API endpoints. Enter an API URL to fetch and display the formatted response.</p>
        <InputPanel label="API URL" value={input} onChange={setInput} placeholder="https://api.example.com/data.json" />
        <div className="flex flex-wrap items-center gap-3 mt-4 mb-6">
          <Button onClick={handleFetch} disabled={loading} size="lg">View API</Button>
          <Button variant="ghost" onClick={loadExample}>Load Example</Button>
        </div>
        {output && <OutputPanel value={output} label="API Response" />}
      </div>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>View and explore JSON responses from any REST API. Perfect for API development, testing endpoints, and debugging JSON responses.</p>
        <h2>How to Use</h2>
        <ol><li>Enter a REST API URL in the input field.</li><li>Click "View API" to fetch and display the response.</li><li>Review the formatted JSON output.</li></ol>
        <h2>Related Tools</h2>
        <ul><li><a href="/fetch-json-from-url">Fetch JSON from URL</a></li><li><a href="/json-url-viewer">JSON URL Viewer</a></li></ul>
      </article>
    </>
  )
}

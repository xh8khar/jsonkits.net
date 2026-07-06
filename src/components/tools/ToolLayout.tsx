'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'
import InputPanel from './InputPanel'
import OutputPanel from './OutputPanel'
import { decodeShareData } from '@/lib/share'

const downloadExtensions: Record<string, string> = {
  json: 'json',
  yaml: 'yaml',
  csv: 'csv',
  typescript: 'ts',
  ts: 'ts',
  xml: 'xml',
  python: 'py',
  go: 'go',
  java: 'java',
}

interface ToolLayoutProps {
  title: string
  description: string
  inputLabel?: string
  outputLabel?: string
  inputPlaceholder?: string
  outputPlaceholder?: string
  convertLabel?: string
  onConvert: (input: string) => string | Promise<string>
  exampleInput?: string
  inputLanguage?: string
  outputLanguage?: string
  bidirectional?: boolean
  onReverse?: (input: string) => string | Promise<string>
  extraActions?: React.ReactNode
  children?: React.ReactNode
}

export default function ToolLayout({
  title,
  description,
  inputLabel = 'Input',
  outputLabel = 'Output',
  inputPlaceholder = 'Paste your JSON here...',
  outputPlaceholder = 'Result will appear here...',
  convertLabel = 'Convert',
  onConvert: convertFn,
  exampleInput,
  inputLanguage = 'json',
  outputLanguage = 'json',
  bidirectional,
  onReverse,
  extraActions,
  children,
}: ToolLayoutProps) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isReversed, setIsReversed] = useState(false)
  const { addToast } = useToast()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const d = params.get('d')
    if (d) {
      const decoded = decodeShareData(d)
      if (decoded) {
        setInput(decoded.input)
        setOutput(decoded.output)
      }
    }
  }, [])

  const handleConvert = useCallback(async () => {
    if (!input.trim()) {
      addToast('Please enter some input', 'error')
      return
    }
    setLoading(true)
    setError('')
    try {
      const fn = isReversed && onReverse ? onReverse : convertFn
      const result = await fn(input)
      setOutput(result)
      addToast('Converted successfully', 'success')
    } catch (e) {
      const msg = (e as Error).message
      setError(msg)
      addToast(msg, 'error')
    } finally {
      setLoading(false)
    }
  }, [input, isReversed, convertFn, onReverse, addToast])

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
    const ext = downloadExtensions[outputLanguage] || 'json'
    const blob = new Blob([output], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `output.${ext}`
    a.click()
    URL.revokeObjectURL(url)
      addToast('Downloaded', 'success')
  }, [output, outputLanguage, addToast])

  const handleSwap = useCallback(() => {
    if (!bidirectional || !onReverse) return
    setIsReversed(!isReversed)
    setOutput('')
    setError('')
      addToast('Swapped input and output', 'info')
  }, [bidirectional, onReverse, isReversed, addToast])

  const loadExample = useCallback(() => {
    if (exampleInput) {
      setInput(exampleInput)
      setOutput('')
      setError('')
      addToast('Example loaded', 'info')
    }
  }, [exampleInput, addToast])

  const handleClear = useCallback(() => {
    setInput('')
    setOutput('')
    setError('')
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{title}</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-5xl">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <InputPanel
          label={isReversed && bidirectional ? outputLabel : inputLabel}
          value={input}
          onChange={setInput}
          placeholder={inputPlaceholder}
          language={isReversed && bidirectional ? outputLanguage : inputLanguage}
        />
        <OutputPanel
          label={isReversed && bidirectional ? inputLabel : outputLabel}
          value={output}
          placeholder={outputPlaceholder}
          language={isReversed && bidirectional ? inputLanguage : outputLanguage}
          error={error}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <Button onClick={handleConvert} loading={loading} size="lg" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        }>
          {convertLabel}
        </Button>

        {bidirectional && onReverse && (
          <Button variant="secondary" onClick={handleSwap} icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          }>
            Swap
          </Button>
        )}

        {(input.trim() || output.trim()) && (
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

        {exampleInput && (
          <Button variant="ghost" onClick={loadExample} icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }>
            Load Example
          </Button>
        )}

        <Button variant="ghost" onClick={handleClear} icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        }>
          Clear
        </Button>

        {extraActions}
      </div>

      {children}
    </div>
  )
}

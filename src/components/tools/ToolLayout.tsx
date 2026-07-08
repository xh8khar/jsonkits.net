'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'
import InputPanel from './InputPanel'
import OutputPanel from './OutputPanel'
import { decodeShareData, buildShareUrl } from '@/lib/share'
import { friendlyConvertError } from '@/lib/errorFormatter'

const SITE_URL = 'https://www.jsonkits.net'
const MAX_HISTORY = 20

interface HistoryEntry {
  input: string
  output: string
  timestamp: number
}

function getHistoryKey(slug: string): string {
  return `jk_history_${slug}`
}

function loadHistory(slug: string): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(getHistoryKey(slug))
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

function saveHistory(slug: string, entry: HistoryEntry): void {
  const entries = loadHistory(slug)
  entries.unshift(entry)
  if (entries.length > MAX_HISTORY) entries.length = MAX_HISTORY
  try { localStorage.setItem(getHistoryKey(slug), JSON.stringify(entries)) } catch { /* ignore */ }
}

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
  toolSlug?: string
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
  toolSlug,
}: ToolLayoutProps) {
  const pathname = usePathname()
  const pageUrl = `${SITE_URL}${pathname || (toolSlug ? `/${toolSlug.replace(/^\//, '')}/` : '/')}`
  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    url: pageUrl,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any (Web-based)',
    browserRequirements: 'Requires JavaScript. Works in any modern browser.',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: title, item: pageUrl },
    ],
  }

  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isReversed, setIsReversed] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const slugRef = useRef('')
  const { addToast } = useToast()

  useEffect(() => {
    const slug = toolSlug || window.location.pathname.replace(/^\//, '')
    slugRef.current = slug
    setHistory(loadHistory(slug))
  }, [toolSlug])

  useEffect(() => {
    const hash = window.location.hash
    if (hash.startsWith('#d=')) {
      const decoded = decodeShareData(hash.slice(3))
      if (decoded) {
        setInput(decoded.input)
        setOutput(decoded.output)
      } else {
        addToast('Share link data is corrupted or invalid', 'error')
      }
      return
    }
    const params = new URLSearchParams(window.location.search)
    const d = params.get('d')
    if (d) {
      const decoded = decodeShareData(d)
      if (decoded) {
        setInput(decoded.input)
        setOutput(decoded.output)
      } else {
        addToast('Share link data is corrupted or invalid', 'error')
      }
    }
  }, [])

  useEffect(() => {
    const slug = toolSlug || window.location.pathname.replace(/^\//, '')
    slugRef.current = slug
    setHistory(loadHistory(slug))
  }, [toolSlug])

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
      const entry: HistoryEntry = { input, output: result, timestamp: Date.now() }
      saveHistory(slugRef.current, entry)
      setHistory(loadHistory(slugRef.current))
      addToast('Converted successfully', 'success')
    } catch (e) {
      const msg = friendlyConvertError(title, (e as Error).message)
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

  // Jump to the output panel when a result appears — it would otherwise
  // appear off-screen on mobile or when the page is long.
  useEffect(() => {
    if (output || error) {
      outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [output, error])

  // Jump to the preview panel when it opens — it renders below the action
  // buttons and would otherwise appear off-screen unnoticed.
  useEffect(() => {
    if (previewOpen) {
      previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [previewOpen])

  // Rendered preview for outputs a browser can display directly: HTML
  // documents/fragments (sandboxed iframe, scripts disabled), inline SVG, and
  // data-URL images such as generated QR codes.
  const effectiveOutputLanguage = isReversed && bidirectional ? inputLanguage : outputLanguage
  const previewKind: 'html' | 'image' | null = !output || error
    ? null
    : output.startsWith('data:image/')
      ? 'image'
      : effectiveOutputLanguage === 'html' || /^\s*<(svg|!doctype html|html)\b/i.test(output)
        ? 'html'
        : null

  const handleShare = useCallback(() => {
    if (!input && !output) return
    const url = buildShareUrl(input, output)
    navigator.clipboard.writeText(url).then(() => {
      addToast('Share link copied to clipboard!', 'success')
    }).catch(() => {
      addToast('Failed to copy share link', 'error')
    })
  }, [input, output, addToast])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{title}</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-7xl">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <InputPanel
          label={isReversed && bidirectional ? outputLabel : inputLabel}
          value={input}
          onChange={setInput}
          placeholder={inputPlaceholder}
          language={isReversed && bidirectional ? outputLanguage : inputLanguage}
        />
        <div ref={outputRef}>
          <OutputPanel
            label={isReversed && bidirectional ? inputLabel : outputLabel}
            value={output}
            placeholder={outputPlaceholder}
            language={isReversed && bidirectional ? inputLanguage : outputLanguage}
            error={error}
          />
        </div>
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
            {previewKind && (
              <Button
                variant={previewOpen ? 'primary' : 'secondary'}
                onClick={() => setPreviewOpen(!previewOpen)}
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                }
              >
                {previewOpen ? 'Hide Preview' : 'Preview'}
              </Button>
            )}
            {output && (
              <Button variant="secondary" onClick={handleShare} icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              }>
                Share
              </Button>
            )}
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

        {history.length > 0 && (
          <div className="relative">
            <Button variant="ghost" size="sm" onClick={() => setHistoryOpen(!historyOpen)} icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }>
              History ({history.length})
            </Button>
            {historyOpen && (
              <div className="absolute left-0 top-full mt-1 w-96 max-h-64 overflow-y-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50">
                {history.map((entry, i) => (
                  <button
                    key={entry.timestamp}
                    className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 border-b border-slate-100 dark:border-slate-700 last:border-0 text-sm"
                    onClick={() => { setInput(entry.input); setOutput(entry.output); setError(''); setHistoryOpen(false) }}
                  >
                    <div className="text-slate-500 dark:text-slate-400 text-xs">
                      {new Date(entry.timestamp).toLocaleString()}
                    </div>
                    <div className="truncate text-slate-700 dark:text-slate-300 mt-0.5">{entry.input.substring(0, 80)}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {previewOpen && previewKind && (
        <div ref={previewRef} className="mb-8 scroll-mt-20 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Live Preview</span>
            <button
              onClick={() => setPreviewOpen(false)}
              className="p-1 rounded text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Close preview"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {previewKind === 'image' ? (
            <div className="flex items-center justify-center p-6 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={output} alt="Generated output preview" className="max-w-full max-h-96" />
            </div>
          ) : (
            <iframe
              sandbox=""
              srcDoc={output}
              title="Rendered output preview"
              className="w-full h-[32rem] bg-white"
            />
          )}
        </div>
      )}

      {children}
    </div>
  )
}

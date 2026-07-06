'use client'

import { useRef, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

interface InputPanelProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  language?: string
}

export default function InputPanel({ label, value, onChange, placeholder, language = 'json' }: InputPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((file: File | undefined) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const text = ev.target?.result as string
      onChange(text)
    }
    reader.readAsText(file)
  }, [onChange])

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0])
    e.target.value = ''
  }, [handleFile])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    handleFile(e.dataTransfer.files?.[0])
  }, [handleFile])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden flex-1 min-h-[300px] relative"
      >
        <MonacoEditor
          height="400px"
          language={language}
          value={value}
          onChange={(v) => onChange(v || '')}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            automaticLayout: true,
            padding: { top: 8 },
          }}
        />
        <div className="absolute top-2 right-2 z-10">
          <label className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-600 rounded-md hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors shadow-sm">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Choose File
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,.yaml,.yml,.csv,.ts,.txt,.xml,.toml,.ini,.env,.properties,.graphql,.sql,.md,.tsv"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  )
}

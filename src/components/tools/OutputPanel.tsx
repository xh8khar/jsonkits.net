'use client'

import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

interface OutputPanelProps {
  label: string
  value: string
  placeholder?: string
  language?: string
  error?: string
}

export default function OutputPanel({ label, value, placeholder, language = 'json', error }: OutputPanelProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
        {value && (
          <span className="text-xs text-slate-400">{value.length.toLocaleString()} chars</span>
        )}
      </div>
      <div className={`border rounded-lg overflow-hidden flex-1 min-h-[300px] ${error ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700'}`}>
        {error ? (
          <div className="h-full min-h-[300px] flex items-center justify-center p-6 bg-red-50 dark:bg-red-900/20">
            <div className="text-center">
              <svg className="w-8 h-8 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-red-600 dark:text-red-400 text-sm font-medium">{error}</p>
            </div>
          </div>
        ) : value ? (
          <MonacoEditor
            height="400px"
            language={language}
            value={value}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 13,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              readOnly: true,
              automaticLayout: true,
              padding: { top: 8 },
            }}
          />
        ) : (
          <div className="h-full min-h-[300px] flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/50">
            <div className="text-center text-slate-400 dark:text-slate-500">
              <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-sm">{placeholder || 'Result will appear here...'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

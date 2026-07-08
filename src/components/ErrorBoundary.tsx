'use client'

import { Component } from 'react'

interface Props {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    if (typeof window !== 'undefined' && 'Sentry' in window) {
      try {
        const Sentry = (window as unknown as Record<string, unknown>).Sentry as { captureException?: (e: Error) => void }
        Sentry?.captureException?.(error)
      } catch { /* ignore */ }
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div className="flex items-center justify-center min-h-[50vh] p-8">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Something went wrong</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">An unexpected error occurred. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Refresh Page
            </button>
            {this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-xs text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300">Error details</summary>
                <pre className="mt-2 p-3 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400 overflow-auto max-h-32">
                  {this.state.error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

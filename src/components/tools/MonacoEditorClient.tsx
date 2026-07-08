'use client'

// Bundles Monaco locally instead of fetching it from the jsDelivr CDN at
// runtime, so the editor works offline and behind strict CSPs. This module
// must only load in the browser (import it via next/dynamic with ssr: false).
import * as monaco from 'monaco-editor'
import Editor, { loader } from '@monaco-editor/react'

self.MonacoEnvironment = {
  getWorker(_workerId: string, label: string) {
    switch (label) {
      case 'json':
        return new Worker(new URL('monaco-editor/esm/vs/language/json/json.worker.js', import.meta.url))
      case 'css':
      case 'scss':
      case 'less':
        return new Worker(new URL('monaco-editor/esm/vs/language/css/css.worker.js', import.meta.url))
      case 'html':
      case 'handlebars':
      case 'razor':
        return new Worker(new URL('monaco-editor/esm/vs/language/html/html.worker.js', import.meta.url))
      case 'typescript':
      case 'javascript':
        return new Worker(new URL('monaco-editor/esm/vs/language/typescript/ts.worker.js', import.meta.url))
      default:
        return new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker.js', import.meta.url))
    }
  },
}

loader.config({ monaco })

export default Editor

'use client'

import { useEffect, useState, createContext, useContext, useCallback } from 'react'
import type { Toast } from '@/types'

interface ToastContextType {
  addToast: (message: string, type?: Toast['type'], icon?: string) => void
}

const ToastContext = createContext<ToastContextType>({ addToast: () => {} })

export const useToast = () => useContext(ToastContext)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((message: string, type: Toast['type'] = 'success', icon?: string) => {
    const id = Math.random().toString(36).slice(2)
    setToasts(prev => [...prev, { id, message, type, icon }])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onDone={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

function ToastItem({ toast, onDone }: { toast: Toast; onDone: () => void }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true)
      setTimeout(onDone, 300)
    }, 2500)
    return () => clearTimeout(timer)
  }, [onDone])

  const colors = {
    success: 'bg-emerald-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
  }

  const defaultIcons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  }

  return (
    <div
      className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-sm font-medium ${colors[toast.type]} ${exiting ? 'animate-fade-out' : 'animate-slide-in'}`}
      style={{
        animation: exiting ? 'toastOut 0.3s ease-in forwards' : 'toastIn 0.3s ease-out',
      }}
    >
      <span className="text-lg">{toast.icon || defaultIcons[toast.type]}</span>
      <span>{toast.message}</span>
      <button onClick={() => { setExiting(true); setTimeout(onDone, 300) }} className="ml-2 opacity-70 hover:opacity-100 cursor-pointer">
        ✕
      </button>
    </div>
  )
}

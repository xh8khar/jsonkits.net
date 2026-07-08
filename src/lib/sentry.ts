import * as SentryBrowser from '@sentry/browser'

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || ''

export function initSentry() {
  if (!SENTRY_DSN || typeof window === 'undefined') return

  SentryBrowser.init({
    dsn: SENTRY_DSN,
    environment: process.env.NEXT_PUBLIC_VERCEL_ENV || 'production',
    integrations: [SentryBrowser.browserTracingIntegration()],
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  })
}

export function captureError(error: unknown, context?: Record<string, unknown>) {
  if (!SENTRY_DSN) return

  if (context) {
    SentryBrowser.withScope((scope) => {
      scope.setExtras(context)
      SentryBrowser.captureException(error)
    })
  } else {
    SentryBrowser.captureException(error)
  }
}

export function captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info') {
  if (!SENTRY_DSN) return
  SentryBrowser.captureMessage(message, level)
}

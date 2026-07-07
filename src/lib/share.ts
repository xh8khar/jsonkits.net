import { deflate, inflate } from 'pako'

function toBase64Url(bytes: Uint8Array): string {
  const binary = String.fromCharCode(...bytes)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromBase64Url(str: string): Uint8Array {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64 + '===='.slice(0, (4 - base64.length % 4) % 4)
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

function encodeRaw(input: string, output: string): Uint8Array {
  const enc = new TextEncoder()
  const iBytes = enc.encode(input)
  const oBytes = enc.encode(output)
  const buf = new Uint8Array(iBytes.length + 1 + oBytes.length)
  buf.set(iBytes)
  buf[iBytes.length] = 0
  buf.set(oBytes, iBytes.length + 1)
  return buf
}

function decodeRaw(buf: Uint8Array): { input: string; output: string } {
  const dec = new TextDecoder()
  const nul = buf.indexOf(0)
  if (nul >= 0) {
    return { input: dec.decode(buf.slice(0, nul)), output: dec.decode(buf.slice(nul + 1)) }
  }
  return { input: dec.decode(buf), output: '' }
}

export function encodeShareData(input: string, output: string): string {
  const raw = encodeRaw(input, output)
  const compressed = deflate(raw, { level: 9 })
  const final = compressed.length < raw.length ? compressed : raw
  return toBase64Url(final)
}

export function decodeShareData(encoded: string): { input: string; output: string } | null {
  try {
    const raw = fromBase64Url(encoded)
    if (raw.length === 0) return null
    // Try with inflation first
    let inflated: Uint8Array | null = null
    try {
      inflated = inflate(raw)
    } catch { /* not compressed */ }
    const data = inflated ?? raw
    if (data.length === 0) return null
    // Old JSON format starts with '{'
    if (data[0] === 0x7b) {
      const text = new TextDecoder().decode(data)
      const parsed = JSON.parse(text)
      if (parsed && typeof parsed.i === 'string') {
        return { input: parsed.i, output: parsed.o ?? '' }
      }
    }
    // New raw format: input\0output
    const result = decodeRaw(data)
    return { input: result.input, output: result.output }
  } catch {
    return null
  }
}

export function buildShareUrl(input: string, output: string): string {
  const encoded = encodeShareData(input, output)
  const { origin, pathname } = window.location
  return `${origin}${pathname}#d=${encoded}`
}

export function parseHashShare(): { input: string; output: string } | null {
  if (typeof window === 'undefined') return null
  const hash = window.location.hash
  if (!hash.startsWith('#d=')) return null
  return decodeShareData(hash.slice(3))
}

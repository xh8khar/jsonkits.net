import { deflate, inflate } from 'pako'

function toBase64Url(bytes: Uint8Array): string {
  const binary = String.fromCharCode(...bytes)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromBase64Url(str: string): Uint8Array {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/') + '=='.slice(0, (3 - str.length % 3) % 3)
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

export function encodeShareData(input: string, output: string): string {
  const data = JSON.stringify({ i: input, o: output })
  const compressed = deflate(data, { level: 9 })
  return toBase64Url(compressed)
}

export function decodeShareData(encoded: string): { input: string; output: string } | null {
  try {
    const compressed = fromBase64Url(encoded)
    const decompressed = inflate(compressed, { toText: true })
    return JSON.parse(decompressed)
  } catch {
    return null
  }
}

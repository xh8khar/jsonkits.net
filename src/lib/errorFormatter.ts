const friendlyJsonMessages: Record<string, string> = {
  'Unexpected token': 'Unexpected character found in JSON. Check for missing commas, unquoted keys, or stray characters.',
  'Unexpected end of JSON input': 'JSON input is incomplete. Make sure all brackets, braces, and quotes are properly closed.',
  'Expected comma': 'Missing comma between elements. Add a comma after each item in arrays and objects.',
  'Expected double-quoted property name': 'Object keys must be enclosed in double quotes. Use "key" instead of key or \'key\'.',
  'JSON5': 'Invalid JSON format.',
  'is not valid JSON': 'The provided input is not valid JSON.',
  'Invalid JSON': 'The provided input is not valid JSON.',
}

export function friendlyJsonError(raw: string): string {
  for (const [key, msg] of Object.entries(friendlyJsonMessages)) {
    if (raw.includes(key)) return msg
  }
  const firstLine = raw.split('\n')[0]
  if (firstLine.length > 120) return 'Invalid JSON: syntax error detected.'
  return `Invalid JSON: ${firstLine}`
}

export function friendlyConvertError(converterName: string, raw: string): string {
  if (raw === 'Invalid JSON' || raw.includes('JSON.parse')) {
    return friendlyJsonError(raw)
  }
  return raw
}

export interface Tool {
  id: string
  name: string
  description: string
  category: ToolCategory
  slug: string
  icon: string
}

export type ToolCategory =
  | 'formatter'
  | 'validator'
  | 'viewer'
  | 'converter'
  | 'compare'
  | 'generator'
  | 'utility'

export interface ToolPageProps {
  title: string
  description: string
  inputLabel?: string
  outputLabel?: string
  inputPlaceholder?: string
  outputPlaceholder?: string
  convertLabel?: string
  onConvert: (input: string) => string | Promise<string>
  onFormat?: (input: string) => string | Promise<string>
  inputLanguage?: string
  outputLanguage?: string
  exampleInput?: string
  bidirectional?: boolean
}

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
  icon?: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  keywords: string
  content: string
  date: string
  readTime: string
  relatedTools: { name: string; href: string }[]
}

import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Formik - Free Online Converter',
  description: 'Generate Formik form code with Yup validation from JSON data samples. 100% free, client-side form generator with no server uploads.',
  keywords: ['json to formik, json to formik online, formik form generator, form schema from json, formik yup generator, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}

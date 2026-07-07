import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to iCal - Convert JSON to Calendar Files',
  description: 'Convert structured JSON event data to iCalendar (.ics) file format for calendar apps.',
  keywords: ['json to ical', 'json to ics', 'ical generator', 'calendar generator'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-ical/' },
  openGraph: {
    title: 'JSON to iCal - Convert JSON to Calendar Files',
    description: 'Convert structured JSON event data to iCalendar (.ics) file format for calendar apps.',
    url: 'https://www.jsonkits.net/json-to-ical/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to iCal - Convert JSON to Calendar Files',
    description: 'Convert structured JSON event data to iCalendar (.ics) file format for calendar apps.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

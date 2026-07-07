import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'iCal to JSON - Convert Calendar Files to JSON',
  description: 'Convert iCalendar (.ics) files to structured JSON with event details, dates, and attendees.',
  keywords: ['ical to json', 'ics to json', 'calendar converter', 'ical parser'],
  alternates: { canonical: 'https://www.jsonkits.net/ical-to-json/' },
  openGraph: {
    title: 'iCal to JSON - Convert Calendar Files to JSON',
    description: 'Convert iCalendar (.ics) files to structured JSON with event details, dates, and attendees.',
    url: 'https://www.jsonkits.net/ical-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iCal to JSON - Convert Calendar Files to JSON',
    description: 'Convert iCalendar (.ics) files to structured JSON with event details, dates, and attendees.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

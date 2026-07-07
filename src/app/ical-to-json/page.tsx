import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'iCal to JSON - Convert Calendar Files to JSON',
  description: 'Convert iCalendar (.ics) files to structured JSON with event details, dates, and attendees.',
  keywords: ['ical to json', 'ics to json', 'calendar converter', 'ical parser'],
}

export default function Page() {
  return <ToolPageClient />
}

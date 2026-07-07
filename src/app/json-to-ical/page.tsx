import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to iCal - Convert JSON to Calendar Files',
  description: 'Convert structured JSON event data to iCalendar (.ics) file format for calendar apps.',
  keywords: ['json to ical', 'json to ics', 'ical generator', 'calendar generator'],
}

export default function Page() {
  return <ToolPageClient />
}

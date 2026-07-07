import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GPX to JSON - Convert GPS Data to JSON',
  description: 'Convert GPX (GPS Exchange Format) files to structured JSON with waypoints and track points.',
  keywords: ['gpx to json', 'gps data converter', 'gpx parser', 'gpx converter'],
}

export default function Page() {
  return <ToolPageClient />
}

import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GPX to JSON - Convert GPS Data to JSON',
  description: 'Convert GPX (GPS Exchange Format) files to structured JSON with waypoints and track points.',
  keywords: ['gpx to json', 'gps data converter', 'gpx parser', 'gpx converter'],
  alternates: { canonical: 'https://www.jsonkits.net/gpx-to-json/' },
  openGraph: {
    title: 'GPX to JSON - Convert GPS Data to JSON',
    description: 'Convert GPX (GPS Exchange Format) files to structured JSON with waypoints and track points.',
    url: 'https://www.jsonkits.net/gpx-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPX to JSON - Convert GPS Data to JSON',
    description: 'Convert GPX (GPS Exchange Format) files to structured JSON with waypoints and track points.',
  },
}

export default function Page() {
  return <ToolPageClient />
}

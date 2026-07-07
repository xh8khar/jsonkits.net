'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { icalToJson } from '@/lib/converters'

const example = 'BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20240101T090000\nDTEND:20240101T100000\nSUMMARY:Team Meeting\nDESCRIPTION:Weekly sync\nLOCATION:Conference Room\nEND:VEVENT\nEND:VCALENDAR'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="iCal to JSON - Convert Calendar Files to JSON"
        description="Convert iCalendar (.ics) files to structured JSON with event details, dates, and attendees."
        inputPlaceholder="Paste your iCal/ICS content here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={icalToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="ical-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts iCalendar (.ics) files to structured JSON format with event details including start/end times, summaries, descriptions, locations, and attendees.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your input data in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy or download the result</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
      </article>
    </>
  )
}

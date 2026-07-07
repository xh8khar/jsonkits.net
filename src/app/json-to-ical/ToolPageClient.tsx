'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToIcal } from '@/lib/converters'

const example = '{"events":[{"dtstart":"20240101T090000","dtend":"20240101T100000","summary":"Team Meeting","description":"Weekly sync","location":"Room A"}]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to iCal - Convert JSON to Calendar Files"
        description="Convert structured JSON event data to iCalendar (.ics) file format for calendar apps."
        inputPlaceholder="Paste your JSON event data here..."
        outputPlaceholder="Generated iCal content will appear here..."
        convertLabel="Convert to iCal"
        onConvert={jsonToIcal}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-ical"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts structured JSON event data into iCalendar (.ics) format for use with calendar applications like Google Calendar, Outlook, and Apple Calendar.</p>
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

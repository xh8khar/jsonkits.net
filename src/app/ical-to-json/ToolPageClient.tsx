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
        <h2>What Is iCal?</h2>
        <p>iCal (iCalendar) is a standardized file format for calendar data, commonly saved with an .ics extension, used by Google Calendar, Apple Calendar, Outlook, and other calendar applications. Converting iCal to JSON enables programmatic processing of event data for automation, analysis, and integration.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Calendar Data Integration</strong>: Importing .ics calendar exports into custom applications, databases, or analytics systems.</li>
          <li><strong>Event Analytics</strong>: Extracting meeting patterns, duration statistics, and scheduling insights from calendar data.</li>
          <li><strong>Migration Tools</strong>: Converting iCal data during transitions between calendar platforms or into long-term storage formats.</li>
        </ul>
        <h2>How to Use iCal to JSON Online</h2>
        <ol>
          <li><strong>Paste your iCal content</strong>: Copy the .ics file content including BEGIN:VCALENDAR, VEVENT entries, and date information into the input editor.</li>
          <li><strong>Convert to JSON</strong>: Click the "Convert to JSON" button to parse events, dates, descriptions, and metadata.</li>
          <li><strong>Copy or download</strong>: Save the structured JSON output for integration into your application or analysis workflow.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What iCal properties are supported?</h3>
        <p>The converter extracts DTSTART, DTEND, SUMMARY, DESCRIPTION, LOCATION, ORGANIZER, ATTENDEE, RRULE (recurrence rules), UID, and STATUS from VEVENT components. VTODO and VJOURNAL entries are also supported.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Productivity tool developers use iCal to JSON conversion to ingest calendar exports for meeting analytics dashboards. Event management platforms parse .ics files to synchronize event data, and researchers analyze calendar dumps for scheduling pattern studies.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-ical">JSON to iCal</a> — Convert structured JSON event data to iCalendar format</li>
          <li><a href="/vcard-to-json">vCard to JSON</a> — Convert vCard contact files to structured JSON</li>
          <li><a href="/csv-to-json">CSV to JSON</a> — Convert CSV spreadsheet data to JSON format</li>
        </ul>
      </article>
    </>
  )
}

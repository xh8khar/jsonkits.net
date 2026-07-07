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
        <h2>What Is iCal?</h2>
        <p>iCal (iCalendar) is the industry-standard file format for calendar data, supported by Google Calendar, Apple Calendar, Outlook, and nearly all calendar applications. Converting JSON to iCal allows developers to programmatically generate calendar files from structured data for import into any calendar platform.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Event Export</strong>: Generating downloadable .ics files from web applications for users to add events to their calendars.</li>
          <li><strong>Calendar Synchronization</strong>: Creating calendar feeds from structured data sources for syncing across platforms.</li>
          <li><strong>Automated Scheduling</strong>: Producing iCal output from booking systems, event registrations, or CRM platforms.</li>
        </ul>
        <h2>How to Use JSON to iCal Online</h2>
        <ol>
          <li><strong>Paste your JSON events</strong>: JSON object or array with event objects containing dtstart, dtend, summary, description, and location fields.</li>
          <li><strong>Convert to iCal</strong>: Click the "Convert to iCal" button to generate valid iCalendar .ics format.</li>
          <li><strong>Copy or download</strong>: Save the .ics content for import into Google Calendar, Apple Calendar, Outlook, or any other calendar app.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Can I add recurring events?</h3>
        <p>Yes. The tool supports recurrence rules (RRULE) in the JSON input, allowing you to specify daily, weekly, monthly, or yearly repeating events with optional end dates or count limits.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Event registration platforms use JSON to iCal conversion to let attendees download .ics files after signing up. Booking systems generate calendar invites from structured appointment data, and CRM tools create follow-up reminders by exporting event data to iCal format.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/ical-to-json">iCal to JSON</a> — Convert iCalendar files to structured JSON format</li>
          <li><a href="/json-to-vcard">JSON to vCard</a> — Convert JSON contact data to vCard format</li>
          <li><a href="/json-to-xml">JSON to XML</a> — Convert JSON data to XML format</li>
        </ul>
      </article>
    </>
  )
}

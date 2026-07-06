import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'JSONKits privacy policy. All JSON processing happens client-side. No data is uploaded to servers.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last updated: July 2026
        </p>

        <h2>Information We Collect</h2>
        <p>
          JSONKits does <strong>not</strong> collect, store, or transmit any JSON
          data you process through our tools. All processing is performed entirely
          on your device using client-side JavaScript. No data is ever uploaded to
          our servers or any third-party servers.
        </p>
        <p>
          We may collect anonymous usage analytics (such as page views and tool
          usage counts) through third-party services to help us improve the
          website. This data does not include any personal information or the
          content of your JSON data.
        </p>

        <h2>Cookies</h2>
        <p>
          JSONKits uses Google AdSense to display advertisements. Google AdSense
          may use cookies and web beacons to serve ads based on your prior visits
          to this website or other websites. You can learn more about how Google
          uses data at{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy &amp; Terms site
          </a>
          .
        </p>
        <p>
          You can opt out of personalized advertising by visiting{' '}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ad Settings
          </a>
          .
        </p>

        <h2>Third Party Services</h2>
        <p>JSONKits uses the following third-party services:</p>
        <ul>
          <li>
            <strong>Google AdSense:</strong> Used to display advertisements.
            AdSense may use cookies to serve personalized ads.
          </li>
        </ul>

        <h2>Data Security</h2>
        <p>
          Since all JSON processing occurs client-side, your data never
          traverses the network. We implement industry-standard security
          practices for the website itself, including HTTPS encryption for all
          communications.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          JSONKits does not knowingly collect any personal information from
          children under the age of 13. If you believe a child has provided us
          with personal information, please contact us so we can remove it.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be
          posted on this page with an updated &quot;Last updated&quot; date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this privacy policy, please contact us
          at{' '}
          <a href="mailto:contact@jsonkits.com">contact@jsonkits.com</a>.
        </p>
      </article>
    </div>
  )
}

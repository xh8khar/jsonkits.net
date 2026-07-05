import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - JSONKits',
  description:
    'Learn how JSONKits uses cookies, including Google AdSense for advertising.',
}

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>Cookie Policy</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last updated: July 2026
        </p>

        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device by your web browser.
          They are widely used to make websites work more efficiently, remember
          preferences, and provide information to site owners.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          JSONKits uses Google AdSense to display advertisements. AdSense uses
          cookies to serve relevant ads, limit ad frequency, and measure ad
          effectiveness. These cookies may track your browsing activity across
          different websites to build a profile of your interests.
        </p>

        <h2>Types of Cookies We Use</h2>
        <ul>
          <li>
            <strong>Necessary cookies:</strong> Required for the basic
            functionality of the website. These include session management and
            security cookies.
          </li>
          <li>
            <strong>Advertising cookies:</strong> Used by Google AdSense to
            deliver personalized advertisements based on your browsing habits.
          </li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings.
          You can choose to block all cookies, delete existing cookies, or
          receive a notification when a cookie is set. Note that blocking certain
          cookies may affect the functionality of some websites.
        </p>
        <p>
          To opt out of personalized advertising from Google, visit{' '}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ad Settings
          </a>
          .
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about our use of cookies, contact us at{' '}
          <a href="mailto:contact@jsonkits.com">contact@jsonkits.com</a>.
        </p>
      </article>
    </div>
  )
}

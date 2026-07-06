import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using JSONKits tools and services.',
}

export default function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>Terms of Service</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last updated: July 2026
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using JSONKits, you agree to be bound by these Terms
          of Service. If you do not agree with any part of these terms, you may
          not use our services.
        </p>

        <h2>Use of Service</h2>
        <p>You agree to use JSONKits for lawful purposes only. You must not:</p>
        <ul>
          <li>Use the tools to process illegal or harmful content</li>
          <li>
            Attempt to reverse-engineer, decompile, or disrupt the service
          </li>
          <li>
            Use automated scripts or bots to excessively access the tools
          </li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All tools, code, design, and content on JSONKits are the property of
          JSONKits unless otherwise noted. You may not reproduce, distribute, or
          create derivative works without our express permission.
        </p>

        <h2>Disclaimer</h2>
        <p>
          JSONKits provides all tools on an &quot;as is&quot; and &quot;as
          available&quot; basis without any warranty of any kind, either express
          or implied. We make no guarantees regarding the accuracy,
          completeness, or reliability of the tools or their output.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall JSONKits or its operators be liable for any direct,
          indirect, incidental, special, or consequential damages arising out of
          or in connection with your use of the service. Since all processing
          occurs client-side, we have no access to or control over the data you
          process.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will
          be posted on this page with an updated &quot;Last updated&quot; date.
          Continued use of JSONKits after changes constitutes acceptance of the
          new terms.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, contact us at{' '}
          <a href="mailto:contact@jsonkits.com">contact@jsonkits.com</a>.
        </p>
      </article>
    </div>
  )
}

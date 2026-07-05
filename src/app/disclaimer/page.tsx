import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - JSONKits',
  description:
    'Disclaimer and limitation of liability for using JSONKits tools and services.',
}

export default function DisclaimerPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>Disclaimer</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last updated: July 2026
        </p>

        <h2>No Warranty</h2>
        <p>
          JSONKits provides all tools and services on an &quot;as is&quot; and
          &quot;as available&quot; basis without any warranty, either express or
          implied. We disclaim all warranties, including but not limited to
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>

        <h2>Accuracy of Conversions</h2>
        <p>
          While we strive for accuracy, JSONKits makes no guarantees that the
          output of any tool is error-free or suitable for your specific use
          case. Tools are provided for general informational and development
          purposes. You should always verify critical data independently before
          relying on it in production environments.
        </p>

        <h2>External Links</h2>
        <p>
          JSONKits may contain links to third-party websites or services. We do
          not endorse or assume responsibility for the content, privacy
          practices, or terms of any third-party sites.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, JSONKits and its operators
          shall not be liable for any direct, indirect, incidental, special,
          consequential, or punitive damages arising from your use of the
          service. Since all tools run entirely client-side, we have no access
          to, control over, or responsibility for the data you process.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this disclaimer, contact us at{' '}
          <a href="mailto:contact@jsonkits.com">contact@jsonkits.com</a>.
        </p>
      </article>
    </div>
  )
}

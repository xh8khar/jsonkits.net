import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - JSONKits',
  description:
    'JSONKits is a free online collection of browser-based JSON tools for developers. All processing happens client-side — nothing is uploaded to servers.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>About JSONKits</h1>
        <p className="lead">
          JSONKits is a free online collection of browser-based JSON tools for
          developers. All processing happens client-side — nothing is uploaded to
          servers. Our mission is to provide the largest free JSON toolkit on the
          web.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe developers should have access to powerful, fast, and private
          JSON tools without barriers. JSONKits was created to eliminate the need
          for installing command-line tools or uploading sensitive data to
          third-party servers. Every tool runs entirely in your browser using
          WebAssembly, JavaScript, and modern browser APIs.
        </p>

        <h2>Why JSONKits</h2>
        <ul>
          <li>
            <strong>Privacy first:</strong> No data ever leaves your device. All
            processing is done client-side.
          </li>
          <li>
            <strong>Blazing fast:</strong> Tools run instantly in the browser
            with no network latency.
          </li>
          <li>
            <strong>Completely free:</strong> No subscriptions, no hidden costs,
            no credit card required.
          </li>
          <li>
            <strong>No sign-up:</strong> Start using tools immediately without
            creating an account.
          </li>
        </ul>

        <h2>What We Offer</h2>
        <p>
          JSONKits aims to provide over 250+ tools covering JSON formatting,
          validation, minification, conversion (CSV, YAML, XML, TypeScript),
          diff checking, querying, and more. Whether you are debugging an API,
          transforming data, or learning JSON, we have a tool for you.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Openness:</strong> We believe in transparent, open-source
            principles.
          </li>
          <li>
            <strong>Simplicity:</strong> Every tool should be intuitive and easy
            to use.
          </li>
          <li>
            <strong>Reliability:</strong> Accurate, dependable tools you can
            count on.
          </li>
          <li>
            <strong>Accessibility:</strong> Free and available to everyone,
            everywhere.
          </li>
        </ul>
      </article>
    </div>
  )
}

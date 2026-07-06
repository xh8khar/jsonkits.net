import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Tools</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/json-formatter" className="hover:text-blue-500">JSON Formatter</Link></li>
              <li><Link href="/json-validator" className="hover:text-blue-500">JSON Validator</Link></li>
              <li><Link href="/json-to-yaml" className="hover:text-blue-500">JSON to YAML</Link></li>
              <li><Link href="/json-to-csv" className="hover:text-blue-500">JSON to CSV</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Converters</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/json-to-typescript" className="hover:text-blue-500">JSON to TypeScript</Link></li>
              <li><Link href="/json-to-python" className="hover:text-blue-500">JSON to Python</Link></li>
              <li><Link href="/json-to-go" className="hover:text-blue-500">JSON to Go</Link></li>
              <li><Link href="/json-to-java" className="hover:text-blue-500">JSON to Java</Link></li>
              <li><Link href="/json-to-yaml" className="hover:text-blue-500">JSON to YAML</Link></li>
              <li><Link href="/yaml-to-json" className="hover:text-blue-500">YAML to JSON</Link></li>
              <li><Link href="/json-to-xml" className="hover:text-blue-500">JSON to XML</Link></li>
              <li><Link href="/xml-to-json" className="hover:text-blue-500">XML to JSON</Link></li>
              <li><Link href="/csv-to-json" className="hover:text-blue-500">CSV to JSON</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/learn" className="hover:text-blue-500">Learn</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500">Blog</Link></li>
              <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/privacy" className="hover:text-blue-500">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-500">Terms of Service</Link></li>
              <li><a href="/robots.txt" className="hover:text-blue-500" target="_blank" rel="noopener">robots.txt</a></li>
              <li><a href="/sitemap.xml" className="hover:text-blue-500" target="_blank" rel="noopener">Sitemap</a></li>
              <li><a href="/llms.txt" className="hover:text-blue-500" target="_blank" rel="noopener">llms.txt</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">JSONKits</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              Fast, free &amp; privacy-friendly JSON tools for developers. All processing happens in your browser.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              &copy; {new Date().getFullYear()} JSONKits. MIT License.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

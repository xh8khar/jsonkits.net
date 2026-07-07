'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { composerJsonValidator } from '@/lib/converters'

const example = '{"name":"vendor/my-package","description":"A PHP package","type":"library","require":{"php":">=8.0"},"autoload":{"psr-4":{"MyPackage\\\\":"src/"}}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="composer.json Validator - Validate PHP Composer Files"
        description="Validate your composer.json file for required fields and proper PHP package structure."
        inputPlaceholder="Paste your composer.json here..."
        outputPlaceholder="Validation results will appear here..."
        convertLabel="Validate"
        onConvert={composerJsonValidator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="composer-json-validator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is composer.json Validator?</h2>
        <p>Composer.json is the essential configuration file for PHP projects using the Composer dependency manager. It defines package metadata, dependencies, autoloading configuration (PSR-4, PSR-0), and scripts. This validator checks your composer.json for correct structure, required fields, valid dependency syntax, and PSR-4 autoloading compliance.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>PHP Package Publishing</strong>: Validate composer.json before submitting packages to Packagist or private repositories.</li>
          <li><strong>Project Setup Verification</strong>: Ensure new PHP projects have properly configured composer.json with correct autoloading and dependency declarations.</li>
          <li><strong>CI/CD Integration</strong>: Automatically validate composer.json in deployment pipelines to catch configuration errors early.</li>
        </ul>
        <h2>How to Use composer.json Validator Online</h2>
        <ol>
          <li><strong>Paste your composer.json</strong>: Copy the contents of your composer.json file into the input editor.</li>
          <li><strong>Click Validate</strong>: Press the Validate button to check your PHP package configuration.</li>
          <li><strong>Review the results</strong>: Examine the validation output for missing required fields, autoloading issues, and dependency format problems.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What does the validator check in composer.json?</h3>
        <p>It checks for required fields like name, description, and require; validates PSR-4 and PSR-0 autoloading namespaces; verifies PHP version constraints and dependency version formats; and inspects package type and stability settings.</p>
        <h3>Does it validate PSR-4 autoloading paths?</h3>
        <p>Yes. The validator checks that your PSR-4 autoloading configuration uses proper namespace-to-directory mappings and follows the PSR-4 standard for autoloading PHP classes.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>PHP developers and DevOps engineers use the composer.json Validator before publishing packages to Packagist to ensure all required metadata is present and correctly formatted. Laravel, Symfony, and WordPress plugin developers rely on it to validate autoloading configuration, preventing class-not-found errors in production when Composer's autoloader cannot locate PHP classes due to misconfigured PSR-4 mappings.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/package-json-validator">package.json Validator</a> — Validate your NPM package configuration</li>
          <li><a href="/tsconfig-validator">tsconfig.json Validator</a> — Validate your TypeScript configuration file</li>
          <li><a href="/manifest-json-generator">manifest.json Generator</a> — Generate PWA web app manifest files</li>
        </ul>
      </article>
    </>
  )
}

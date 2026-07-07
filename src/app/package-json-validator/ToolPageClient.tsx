'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { packageJsonValidator } from '@/lib/converters'

const example = '{"name":"my-package","version":"1.0.0","description":"My package","main":"index.js","scripts":{"test":"jest"},"dependencies":{"react":"^18.0.0"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="package.json Validator - Validate NPM Package Files"
        description="Validate your package.json file for required fields, correct semver versioning, and proper structure."
        inputPlaceholder="Paste your package.json here..."
        outputPlaceholder="Validation results will appear here..."
        convertLabel="Validate"
        onConvert={packageJsonValidator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="package-json-validator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is package.json Validator?</h2>
        <p>The package.json file is the heart of any Node.js project, defining metadata, dependencies, scripts, and configuration for NPM packages. This validator checks your package.json against best practices, verifying required fields, valid semver versioning, proper dependency formats, and common structural issues that could cause build failures or publishing errors.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Pre-publish Validation</strong>: Verify your package.json is correct before publishing to the NPM registry.</li>
          <li><strong>CI/CD Pipelines</strong>: Integrate validation into continuous integration to catch package.json errors early.</li>
          <li><strong>Code Review</strong>: Quickly validate package.json changes during pull request reviews for compliance with project standards.</li>
        </ul>
        <h2>How to Use package.json Validator Online</h2>
        <ol>
          <li><strong>Paste your package.json</strong>: Copy the contents of your package.json file into the input editor.</li>
          <li><strong>Click Validate</strong>: Press the Validate button to run comprehensive checks on your configuration.</li>
          <li><strong>Review and fix issues</strong>: Examine the validation results for errors, warnings, and suggestions, then update your package.json accordingly.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What fields does the validator check?</h3>
        <p>It checks for required fields like name, version, description; validates semver version format; verifies dependency fields (dependencies, devDependencies, peerDependencies); and inspects scripts, main, module, and other common configuration fields.</p>
        <h3>Does it validate semantic versioning?</h3>
        <p>Yes. The validator ensures your version field follows semver conventions (major.minor.patch) and that dependency ranges use valid semver range syntax such as ^, ~, {'>='}, and exact versions.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Node.js developers and DevOps engineers use the package.json Validator before every NPM publish to avoid common mistakes like missing the name field, invalid version formats, or malformed dependency objects. It is also integrated into development workflows to catch issues before they cause CI failures in monorepo setups with multiple interdependent packages.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/tsconfig-validator">tsconfig.json Validator</a> — Validate your TypeScript configuration file</li>
          <li><a href="/composer-json-validator">composer.json Validator</a> — Validate PHP Composer configuration</li>
          <li><a href="/manifest-json-generator">manifest.json Generator</a> — Generate PWA web app manifest files</li>
        </ul>
      </article>
    </>
  )
}

'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { tsconfigValidator } from '@/lib/converters'

const example = '{"compilerOptions":{"target":"ES2020","module":"ESNext","strict":true,"outDir":"./dist","rootDir":"./src"},"include":["src"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="tsconfig.json Validator - Validate TypeScript Config"
        description="Validate your tsconfig.json file for recommended compiler options and proper structure."
        inputPlaceholder="Paste your tsconfig.json here..."
        outputPlaceholder="Validation results will appear here..."
        convertLabel="Validate"
        onConvert={tsconfigValidator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="tsconfig-validator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is tsconfig.json Validator?</h2>
        <p>The tsconfig.json file is the configuration foundation for any TypeScript project, controlling compiler options, module resolution, output settings, and project structure. This validator checks your tsconfig.json against TypeScript best practices, recommended compiler options, and common configuration patterns to help you avoid misconfigurations that can lead to build errors or suboptimal TypeScript behavior.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>TypeScript Project Setup</strong>: Validate new tsconfig.json files during project initialization to ensure best practices from the start.</li>
          <li><strong>Migration Verification</strong>: Check tsconfig.json when upgrading TypeScript versions or migrating between module systems (CommonJS to ESM).</li>
          <li><strong>Code Quality Assurance</strong>: Ensure consistent TypeScript configuration across monorepo packages and team projects.</li>
        </ul>
        <h2>How to Use tsconfig.json Validator Online</h2>
        <ol>
          <li><strong>Paste your tsconfig.json</strong>: Copy the contents of your tsconfig.json file into the input editor.</li>
          <li><strong>Click Validate</strong>: Press the Validate button to analyze your TypeScript configuration.</li>
          <li><strong>Review recommendations</strong>: Examine the validation output for missing recommended options, potential issues, and optimization suggestions.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What compiler options does the validator check?</h3>
        <p>It checks for recommended strict mode settings (strict, noImplicitAny, strictNullChecks), module and target configuration, output directories, path aliases, and other TypeScript-recommended compiler options.</p>
        <h3>Does this tool support all TypeScript versions?</h3>
        <p>The validator covers commonly used compiler options across recent TypeScript versions. It focuses on stable, well-documented options that follow TypeScript team recommendations.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>TypeScript developers and team leads use the tsconfig.json Validator to enforce consistent TypeScript configuration across projects. When setting up new libraries, migrating from JavaScript to TypeScript, or standardizing compiler options in a monorepo, this tool ensures that strict mode is enabled, module resolution is correct, and output directories are properly configured to avoid runtime surprises.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/package-json-validator">package.json Validator</a> — Validate your NPM package configuration</li>
          <li><a href="/composer-json-validator">composer.json Validator</a> — Validate PHP Composer configuration</li>
          <li><a href="/manifest-json-generator">manifest.json Generator</a> — Generate PWA web app manifest files</li>
        </ul>
      </article>
    </>
  )
}

'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPandas } from '@/lib/converters'

const example = '[{"name":"Alice","age":30,"city":"NYC"},{"name":"Bob","age":25,"city":"SF"},{"name":"Charlie","age":35,"city":"LA"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Pandas DataFrame - Generate Python Pandas Code"
        description="Generate Python Pandas DataFrame code from JSON data for data analysis and manipulation."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated Python code will appear here..."
        convertLabel="Generate Python Code"
        onConvert={jsonToPandas}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="python"
        toolSlug="json-to-pandas"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a Pandas DataFrame?</h2>
        <p>A Pandas DataFrame is a two-dimensional, labeled data structure in Python used for data manipulation and analysis. It is the core building block of the Pandas library, enabling efficient handling of structured data with rows and columns.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>Data Analysis</strong>: Quickly convert JSON API responses into Pandas DataFrames for exploratory data analysis.</li>
          <li><strong>Data Preprocessing</strong>: Generate Python code to load JSON data into DataFrames for cleaning and transformation.</li>
          <li><strong>Machine Learning</strong>: Prepare structured datasets from JSON sources for use in ML models with scikit-learn or TensorFlow.</li>
        </ul>
        <h2>How to Use JSON to Pandas DataFrame Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter your JSON array of objects into the input editor. Each object's keys become DataFrame columns.</li>
          <li><strong>Click Generate Python Code</strong>: Press the convert button to instantly transform your JSON into a Python Pandas script.</li>
          <li><strong>Copy and run</strong>: Copy the generated Python code and execute it in your Jupyter notebook or Python environment.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is a Pandas DataFrame and why would I use one?</h3>
        <p>A DataFrame is like a spreadsheet in memory — it stores data in rows and columns with powerful operations for filtering, grouping, and aggregating. Converting JSON to a DataFrame lets you leverage Pandas' rich data analysis capabilities on your JSON data.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Data engineers frequently receive JSON payloads from REST APIs that need to be loaded into Pandas for analysis. Instead of manually writing df = pd.DataFrame(data) with complex nested structures, this tool generates the exact Python code needed, saving time and reducing syntax errors. It is especially useful in ETL pipelines where JSON data from multiple sources must be quickly converted to tabular format.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-pyspark-schema">JSON to PySpark Schema</a> — Generate PySpark StructType schemas from JSON data</li>
          <li><a href="/json-to-python">JSON to Python</a> — Convert JSON to Python dictionary and variable definitions</li>
          <li><a href="/json-to-sql-update">JSON to SQL UPDATE</a> — Generate SQL UPDATE statements from JSON data</li>
        </ul>
      </article>
    </>
  )
}

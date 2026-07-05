# JSONKits Setup Guide

> **Fast, Free & Privacy-Friendly JSON Tools for Developers.**
> All processing happens client-side — nothing is uploaded to servers.

---

## Prerequisites

- **Node.js** >= 18
- **npm** (or yarn, pnpm, bun)

## Setup

```bash
# Clone the repository
git clone <repo-url>
cd jsonkits

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export to ./out/)
npm run build

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Built Tools (15)

Each tool page includes structured educational content. Below is the content map per tool.

### Formatters & Validators

#### JSON Formatter — `/json-formatter` (`formatJSON`)

| Section | Content |
|---|---|
| **What Is This?** | What Is JSON? — lightweight data-interchange format, easy for humans/machines |
| **Why Use** | Why Format JSON? — adds indentation, line breaks, spacing for readability |
| **How to Use** | Paste JSON → Click Format → Copy/Download formatted output |
| **FAQ** | Is my data safe? Can I format large files? Can I download formatted output? |
| **Related Tools** | JSON Minifier, JSON Validator, JSON Viewer |

#### JSON Minifier — `/json-minifier` (`minifyJSON`)

| Section | Content |
|---|---|
| **What Is This?** | What Is JSON Minification? — removes whitespace, line breaks, indentation |
| **Why Use** | Why Minify JSON? — smaller payloads, faster API responses, reduced bandwidth |
| **How to Use** | Paste JSON → Click Minify → Copy minified output |
| **FAQ** | Does minification change data? How much space can I save? Is minified JSON still valid? |
| **Related Tools** | JSON Formatter, JSON Validator |

#### JSON Validator — `/json-validator` (`validateJSON`)

| Section | Content |
|---|---|
| **What Is This?** | What Is JSON Validation? — checks if text follows JSON syntax rules |
| **Common Errors** | Missing commas, unquoted keys, mismatched brackets, trailing commas |
| **How to Use** | Paste JSON → Click Validate → See valid/invalid result with error details |
| **FAQ** | What makes JSON invalid? Can I validate large files? |
| **Related Tools** | JSON Formatter, JSON Viewer |

#### JSON Viewer — `/json-viewer` (`formatJSON`)

| Section | Content |
|---|---|
| **What Is This?** | What Is a JSON Viewer? — formats raw JSON into readable, indented structure |
| **Why Use** | Why Use a JSON Viewer? — adds indentation, color coding, structure |
| **How to Use** | Paste JSON → Click View → Explore structured output |
| **FAQ** | Is the JSON viewer secure? Can I view large JSON files? |
| **Related Tools** | JSON Formatter, JSON Validator |

### Converters (Bidirectional)

#### JSON ↔ YAML — `/json-to-yaml` (`jsonToYaml` / `yamlToJson`)

| Section | Content |
|---|---|
| **What Is A?** | What Is JSON? — lightweight data-interchange format for APIs and data transfer |
| **What Is B?** | What Is YAML? — human-readable data-serialization using indentation |
| **A vs. B** | JSON vs YAML — JSON for APIs/data transfer, YAML for config files/DevOps |
| **Real-World Examples** | Docker Compose, Kubernetes manifests, Ansible playbooks, CI/CD configs |
| **How to Convert** | Paste JSON → Click Convert to YAML → Copy/Download YAML output |
| **FAQ** | Is conversion lossless? Why use YAML over JSON? Can I convert back? |
| **Related Tools** | YAML to JSON, JSON ↔ XML, JSON ↔ CSV |

#### YAML ↔ JSON — `/yaml-to-json` (`yamlToJson` / `jsonToYaml`)

| Section | Content |
|---|---|
| **What Is A?** | What Is YAML? — human-readable data-serialization for config files |
| **What Is B?** | What Is JSON? — universal data format for web APIs and programming |
| **A vs. B** | YAML vs JSON — YAML readable with comments, JSON compact and universally parsed |
| **Real-World Examples** | Migrating YAML configs to JSON APIs, converting Docker Compose to API payloads |
| **How to Convert** | Paste YAML → Click Convert to JSON → Copy/Download JSON output |
| **FAQ** | Is conversion lossless? Can I convert JSON back to YAML? |
| **Related Tools** | JSON to YAML, XML to JSON, CSV to JSON |

#### JSON ↔ CSV — `/json-to-csv` (`jsonToCsv` / `csvToJson`)

| Section | Content |
|---|---|
| **What Is A?** | What Is JSON? — structured data format with objects and arrays |
| **What Is B?** | What Is CSV? — comma-separated values for tabular data and spreadsheets |
| **A vs. B** | JSON vs CSV — JSON handles nested data, CSV is flat/table format for Excel |
| **Real-World Examples** | Exporting API data to Excel, importing spreadsheets into databases |
| **How to Convert** | Paste JSON array → Click Convert to CSV → Copy/Download CSV |
| **FAQ** | What JSON structures work? Are nested objects supported? |
| **Related Tools** | CSV to JSON, JSON ↔ XML, JSON ↔ YAML |

#### CSV ↔ JSON — `/csv-to-json` (`csvToJson` / `jsonToCsv`)

| Section | Content |
|---|---|
| **What Is A?** | What Is CSV? — simple tabular format with rows and columns |
| **What Is B?** | What Is JSON? — native format for web APIs and JavaScript |
| **A vs. B** | CSV vs JSON — CSV for spreadsheets, JSON for APIs and nested data |
| **Real-World Examples** | Converting spreadsheet exports to API payloads, database imports |
| **How to Convert** | Paste CSV → Click Convert to JSON → Copy/Download JSON |
| **FAQ** | Does it handle headers? What data types are supported? |
| **Related Tools** | JSON to CSV, XML to JSON, YAML to JSON |

#### JSON ↔ XML — `/json-to-xml` (`jsonToXml` / `xmlToJson`)

| Section | Content |
|---|---|
| **What Is A?** | What Is JSON? — lightweight, bracket-based data format |
| **What Is B?** | What Is XML? — markup language with nested tags, used in SOAP/RSS |
| **A vs. B** | JSON vs XML — JSON is lighter/faster, XML has attributes/namespaces |
| **Real-World Examples** | SOAP APIs, RSS feeds, enterprise system integration |
| **How to Convert** | Paste JSON → Click Convert to XML → Copy/Download XML |
| **FAQ** | How are arrays represented? What if multiple top-level keys? Can I convert back? |
| **Related Tools** | XML to JSON, JSON ↔ YAML, JSON ↔ CSV |

#### XML ↔ JSON — `/xml-to-json` (`xmlToJson` / `jsonToXml`)

| Section | Content |
|---|---|
| **What Is A?** | What Is XML? — markup language with tags, attributes, namespaces |
| **What Is B?** | What Is JSON? — lightweight, native format for modern APIs |
| **A vs. B** | XML vs JSON — XML is verbose with attributes, JSON is compact and JS-native |
| **Real-World Examples** | Modernizing legacy SOAP APIs, converting RSS feeds to JSON |
| **How to Convert** | Paste XML → Click Convert to JSON → Copy/Download JSON |
| **FAQ** | How are XML attributes handled? What happens to repeated tags? Can I convert back? |
| **Related Tools** | JSON to XML, YAML to JSON, CSV to JSON |

### Code Generators

#### JSON → TypeScript — `/json-to-typescript` (`jsonToTypescript`)

| Section | Content |
|---|---|
| **What Is A?** | What Is JSON? — data format for APIs and configuration |
| **What Is B?** | What Are TypeScript Interfaces? — define shape of data objects with type safety |
| **A vs. B** | JSON vs TypeScript — JSON is data, TypeScript interfaces define data structure/shape |
| **Real-World Examples** | Defining types for API responses, configuration objects, data models |
| **How to Convert** | Paste JSON → Click Generate Interface → Copy TypeScript interfaces |
| **FAQ** | How are nested objects handled? Can I use output directly? How are arrays typed? |
| **Related Tools** | JSON → Python, JSON → Go, JSON → Java |

#### JSON → Python — `/json-to-python` (`jsonToPython`)

| Section | Content |
|---|---|
| **What Is A?** | What Is JSON? — data format for APIs and configuration |
| **What Is B?** | What Are Python Dataclasses? — auto-generates `__init__` and type hints |
| **A vs. B** | JSON vs Python — JSON is serialized data, Python dataclasses are typed in-memory objects |
| **Real-World Examples** | Typing API responses, configuration objects in Python projects |
| **How to Convert** | Paste JSON → Click Generate Classes → Copy Python dataclasses |
| **FAQ** | How are nested objects handled? How are arrays typed? Any extra deps needed? |
| **Related Tools** | JSON → TypeScript, JSON → Go, JSON → Java |

#### JSON → Go — `/json-to-go` (`jsonToGo`)

| Section | Content |
|---|---|
| **What Is A?** | What Is JSON? — data format for APIs and configuration |
| **What Is B?** | What Are Go Structs? — Go structs with `json` tags for unmarshaling |
| **A vs. B** | JSON vs Go — JSON is serialized string, Go structs are typed in-memory with tags |
| **Real-World Examples** | Unmarshaling API responses in Go projects |
| **How to Convert** | Paste JSON → Click Generate Structs → Copy Go structs |
| **FAQ** | How are nested objects handled? Are field names capitalized? How are arrays typed? |
| **Related Tools** | JSON → TypeScript, JSON → Python, JSON → Java |

#### JSON → Java — `/json-to-java` (`jsonToJava`)

| Section | Content |
|---|---|
| **What Is A?** | What Is JSON? — data format for APIs and configuration |
| **What Is B?** | What Is a Java POJO? — Plain Old Java Object with getters/setters |
| **A vs. B** | JSON vs Java — JSON is serialized data, Java POJOs are typed classes with accessors |
| **Real-World Examples** | Deserializing API responses with Jackson/Gson in Java projects |
| **How to Convert** | Paste JSON → Click Generate Classes → Copy Java POJOs |
| **FAQ** | How are nested objects handled? Does output include getters/setters? How are arrays typed? |
| **Related Tools** | JSON → TypeScript, JSON → Python, JSON → Go |

### Compare

#### JSON Diff Checker — `/json-diff-checker` (`jsonDiff`)

| Section | Content |
|---|---|
| **What Is This?** | What Is a JSON Diff Checker? — compares two JSON objects, shows all differences |
| **Why Use** | Why Compare JSON? — debug API changes, review config updates, track migrations |
| **How to Use** | Paste Original → Paste Modified → Click Compare → Review diff report |
| **FAQ** | What types of changes are detected? Can I diff large JSON files? |
| **Related Tools** | JSON Formatter, JSON Viewer |

---

## Informational Pages

| Page | Route |
|---|---|
| About | `/about` |
| Contact | `/contact` |
| Privacy Policy | `/privacy` |
| Terms of Service | `/terms` |
| Cookie Policy | `/cookies` |
| Disclaimer | `/disclaimer` |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Editor | Monaco Editor (`@monaco-editor/react`) |
| Icons | Inline SVGs |
| CSV | `papaparse` |
| YAML | `js-yaml` |
| XML | `fast-xml-parser` |
| File Upload | `react-dropzone` |
| Animations | `framer-motion` |
| Linting | ESLint 9 (`eslint-config-next`) |

---

## Project Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout
│   ├── formatter/           # JSON Formatter
│   ├── minifier/            # JSON Minifier
│   ├── validator/           # JSON Validator
│   ├── viewer/              # JSON Viewer
│   ├── diff-checker/        # JSON Diff Checker
│   ├── json-to-yaml/        # JSON → YAML
│   ├── yaml-to-json/        # YAML → JSON
│   ├── json-to-csv/         # JSON → CSV
│   ├── csv-to-json/         # CSV → JSON
│   ├── json-to-xml/         # JSON → XML
│   ├── xml-to-json/         # XML → JSON
│   ├── json-to-typescript/  # JSON → TypeScript
│   ├── json-to-python/      # JSON → Python
│   ├── json-to-go/          # JSON → Go
│   ├── json-to-java/        # JSON → Java
│   ├── about/               # About Us
│   ├── contact/             # Contact Us
│   ├── privacy/             # Privacy Policy
│   ├── terms/               # Terms of Service
│   ├── cookies/             # Cookie Policy
│   └── disclaimer/          # Disclaimer
├── components/
│   ├── ui/                  # Button, Toast
│   ├── layout/              # Navbar, Footer, ThemeToggle
│   ├── home/                # ToolCard, ToolGrid
│   └── tools/               # ToolLayout, InputPanel, OutputPanel
├── lib/
│   ├── converters/index.ts  # All conversion functions
│   └── navigation.ts        # Nav items & tool definitions
├── types/index.ts           # TypeScript interfaces
└── hooks/                   # Custom React hooks (empty)
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Static export to `./out/` |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Config Files

| File | Purpose |
|---|---|
| `next.config.ts` | Static export, trailing slash, unoptimized images |
| `tsconfig.json` | TypeScript config with `@/` path alias |
| `postcss.config.mjs` | Tailwind CSS v4 PostCSS plugin |
| `eslint.config.mjs` | ESLint 9 with Next.js core-web-vitals + TypeScript |
| `tailwind.config.ts` | Tailwind CSS configuration |

---

## Key Dependencies (from package.json)

```json
{
  "@monaco-editor/react": "^4.7.0",
  "fast-xml-parser": "^4.5.7",
  "framer-motion": "^12.42.2",
  "js-yaml": "^5.2.1",
  "lucide-react": "^1.23.0",
  "next": "16.2.10",
  "papaparse": "^5.5.4",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "react-dropzone": "^15.0.0"
}
```

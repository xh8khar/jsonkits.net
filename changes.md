# Changes

## e928f7e — feat: add _redirects to redirect jsonkits.net -> www.jsonkits.net

Added `public/_redirects` file for Cloudflare Pages to 301-redirect `https://jsonkits.net/*` → `https://www.jsonkits.net/:splat`.

---

## 5493d21 — fix: use www.jsonkits.net as canonical domain

Updated all references from `https://jsonkits.net` to `https://www.jsonkits.net` in:
- sitemap.ts, layout.tsx (OpenGraph), Navbar.tsx (social shares)
- robots.txt, llms.txt

---

## 9e19e93 — feat: add robots.txt, sitemap.xml, llms.txt links to footer

Added links to `/robots.txt`, `/sitemap.xml`, and `/llms.txt` in the footer Company section.

---

## 0ecddef — chore: update domain from jsonkitsnet.pages.dev to jsonkits.net

Replaced all references to the old Cloudflare Pages domain with the new custom domain `jsonkits.net`.

---

## 6577137 — feat: add llms.txt for AI crawlers and update robots.txt

- Created `public/llms.txt` with categorized links to 100+ tools for LLM/AI crawlers
- Updated `public/robots.txt` to explicitly allow AI crawlers (GPTBot, Claude-Web, PerplexityBot, etc.)

---

## 1aa0692 — feat: add Generators and Compare dropdowns to navbar

Added "Generators" (16 tools) and "Compare" (5 tools) dropdown menus to the top navbar.

---

## 8fee135 — feat: replace share button with social media share icons in navbar

- Removed the per-tool Share button from ToolLayout
- Added social share dropdown in desktop navbar (Facebook, X/Twitter, LinkedIn, Reddit, WhatsApp)
- Added compact social share icons in mobile menu

---

## abf8e73 — feat: add dropdown menus to navbar

Converted flat navbar links into dropdown menus for Formatters (17 tools), Validators (12 tools), Viewers (10 tools), and Converters (20 tools).

---

## e63f345 — feat: add 11 developer-focused JSON tools

New tools added:
- **Validation/ORM schemas:** JSON to Zod Schema, JSON to Yup Schema, JSON to Prisma Schema, JSON to Mongoose Schema
- **TypeScript code gen:** JSON to TypeScript Enum, JSON to TypeScript Type Guard
- **Python code gen:** JSON to Pydantic v2, JSON to SQLAlchemy Model
- **Utilities:** Path Notation Converter (JSONPath ↔ JSON Pointer ↔ JMESPath), JSON Schema Diff, JSON Data Anonymizer

Converter functions in `src/lib/converters/devTools.ts`. All 11 tools have dedicated pages, metadata, and navigation entries. Total tool count: 300+.

---

## 78fc8f5 — Add 48 new tools and fix SEO metadata across all pages

### New Tools (48)
- **Code generators:** C, C++, Groovy, Elixir, PowerShell, F#, Julia, Erlang, Clojure, Objective-C, Fortran, COBOL, SAS
- **Binary serialization:** JSON ↔ MessagePack (real `@msgpack/msgpack`), JSON ↔ CBOR (custom RFC 7049 encoder/decoder)
- **JWT:** Decoder, Encoder, Validator (real HMAC-SHA256 via `jose`)
- **Query/Transform:** JMESPath Tester (real `jmespath`), JSON Property Path Finder, JSON Number Converter
- **Schema:** JSON Schema → Java, JSON Schema → Pydantic, JSON → XSD
- **Database/Cloud:** SQL CREATE TABLE, SQL UPDATE, SQL DELETE, Elasticsearch Bulk, DynamoDB, BigQuery Schema, Redis Commands, MongoDB Aggregation, Snowflake, Prometheus
- **API Formats:** SOAP XML, AsyncAPI, GraphQL Query, GraphQL Mutation, GraphQL Subscription
- **Protocol Buffers:** JSON ↔ Protobuf (real `protobufjs` encoding/decoding)
- **Apache Avro:** JSON → Avro schema inference, Avro schema → JSON sample generation
- **Formatting:** JSON → HTML (syntax-highlighted), JSON → ANSI Colorized
- **Hashing:** JSON Hash Generator (real SHA-1/256/512 via Web Crypto API)
- **Utils:** JSON Fingerprint, JSON to SQL, JSON Template Engine

### Fixes
- Fixed SEO metadata (title, description, keywords) for all 289 tool pages
- Replaced fake `msgpack_`/`cbor_`/`jwt_`/`jmespath` implementations with real libraries
- Removed `avsc` (browser-incompatible Node.js `fs` dependency); Avro tools use schema-only approach
- Cleaned up temporary scripts (`scripts/fix-meta.mjs`, `scripts/gen-remaining.mjs`)

### Infrastructure
- Libraries installed: `@msgpack/msgpack`, `jose`, `jmespath`, `protobufjs`
- Added `src/types/jmespath.d.ts` type declaration
- Updated `src/lib/navigation.ts` with all 289 tool entries

### Build
- 300 pages, zero errors

---

## 402ea98 — fix: standardize container alignment across all pages

All page wrappers use `max-w-7xl` (tool area, navbar, footer, homepage) and `max-w-5xl` (article/text sections), both with `px-4 sm:px-6 lg:px-8`.

---

## fa7473e — refactor: rename routes /formatter → /json-formatter, etc. for consistency

All tool routes now use `json-` prefix (e.g. `/json-formatter` not `/formatter`).

---

## ffc5411 — refactor: professionalize toast notifications

Replaced emoji toasts with clean SVG icons for success/error/info states.

---

## Earlier — Initial deployment setup

- Next.js 16.2.10 with App Router, React 19, Tailwind CSS v4, TypeScript
- Static export (`output: 'export'`, `trailingSlash: true`, `distDir: 'out'`)
- Cloudflare Pages deployment at `https://jsonkitsnet.pages.dev`
- Homepage, 241 original tools, about/privacy/terms/contact pages

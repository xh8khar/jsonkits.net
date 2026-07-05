# JSONKits.com

> **Fast, Free & Privacy-Friendly JSON Tools for Developers.**

JSONKits.com is a free online collection of browser-based JSON tools. All processing happens client-side — nothing is uploaded to servers.

---

## MVP Scope (Phase 1)

The MVP targets **20 core JSON tools** across essential categories, deployed with a clean, fast, mobile-first UI.

### Tool Categories & MVP Tools

| Category | Tools |
|---|---|
| **Formatter** | JSON Formatter, JSON Beautifier, JSON Pretty Print, JSON Minifier |
| **Validation** | JSON Validator, JSON Linter, JSON Syntax Checker |
| **Viewer** | JSON Viewer, JSON Tree Viewer, JSON Explorer |
| **Compare** | JSON Diff Checker, JSON Compare |
| **Converter** | JSON ↔ CSV, JSON ↔ XML, JSON ↔ YAML |
| **Programming** | JSON → TypeScript, JSON → Python, JSON → Go, JSON → Java |

**Total: 20 tools**

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Library | shadcn/ui |
| Icons | Lucide React |
| Editor | Monaco Editor |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion (optional) |
| Deployment | Cloudflare Pages / Vercel |

---

## Folder Structure

```
jsonkits/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions auto-deploy
├── app/
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout (global meta tags)
│   ├── not-found.tsx           # Custom 404 page
│   ├── sitemap.ts              # Dynamic XML sitemap
│   ├── robots.ts               # Dynamic robots.txt
│   ├── manifest.ts             # PWA manifest
│   ├── about/
│   │   └── page.tsx            # About Us
│   ├── contact/
│   │   └── page.tsx            # Contact Us (form + schema)
│   ├── privacy/
│   │   └── page.tsx            # Privacy Policy
│   ├── terms/
│   │   └── page.tsx            # Terms of Service
│   ├── cookies/
│   │   └── page.tsx            # Cookie Policy
│   ├── disclaimer/
│   │   └── page.tsx            # Disclaimer
│   ├── accessibility/
│   │   └── page.tsx            # Accessibility Statement
│   ├── formatter/
│   ├── validator/
│   ├── viewer/
│   ├── json-to-csv/
│   ├── csv-to-json/
│   ├── json-to-xml/
│   ├── xml-to-json/
│   ├── json-to-yaml/
│   ├── yaml-to-json/
│   ├── json-to-typescript/
│   ├── json-to-python/
│   ├── json-to-go/
│   └── json-to-java/
├── components/                 # Shared UI components
├── lib/                        # Core utilities & converters
├── hooks/                      # Custom React hooks
├── utils/                      # Helper functions
├── public/
│   ├── CNAME                   # Custom domain (if applicable)
│   ├── robots.txt              # Static robots.txt fallback
│   ├── .nojekyll               # Disable GitHub Pages Jekyll
│   ├── _redirects              # Redirect rules (optional)
│   ├── og-image.png            # Default OG image (1200x630)
│   ├── og/                     # Per-tool OG images
│   ├── favicon.ico
│   ├── icon.svg
│   ├── apple-touch-icon.png
│   └── manifest.json           # PWA manifest
├── styles/                     # Global styles
├── next.config.js              # output: 'export', trailingSlash: true
├── next-sitemap.config.js      # Sitemap configuration
├── package.json
└── README.md
```

---

## Design Principles

- Minimal, distraction-free UI
- Mobile-first responsive layout
- Dark / light mode support
- No login or sign-up required
- 100% client-side processing
- Keyboard shortcuts for power users

---

# 🧩 UI/UX Component Library

## Layout & Navigation

| Component | Description |
|---|---|
| Navbar | Sticky top nav with logo, nav links, search toggle, theme toggle |
| Mobile Drawer | Slide-in mobile navigation menu |
| Breadcrumbs | Dynamic breadcrumb trail for every tool page |
| Footer | Links, tagline, socials, copyright |
| Tool Layout | Two-panel (input / output) responsive layout |
| Full-Width Layout | Full-screen editor mode for power users |
| Sidebar | Related tools, categories, recent tools |

## Homepage Components

| Component | Description |
|---|---|
| Hero Section | Headline, subtitle, animated CTA, quick-search input |
| Search Bar | Autocomplete search with fuzzy matching across all tools |
| Tool Card | Icon, name, short description, category badge |
| Tool Grid | Responsive grid of tool cards (2-4 columns) |
| Category Section | Grouped tools by category with expand/collapse |
| Popular Tools | Ranked by usage, with star/hot badge |
| Recently Added | New tools with "New" badge |
| FAQ Accordion | Collapsible Q&A section with schema markup |
| Newsletter Signup | Email input for updates (optional MVP) |
| Stats Counter | Total tools, users, formats supported |

## Editor & Code Components

| Component | Description |
|---|---|
| Monaco Editor | Full-featured code editor with JSON syntax highlighting |
| Read-Only Editor | Output panel with syntax highlighting (non-editable) |
| Diff Editor | Side-by-side or inline JSON diff view |
| Tree Viewer | Collapsible JSON tree visualization |
| JSON Path Input | Input field with autocomplete for JSONPath queries |
| Line Counter | Display line / character count for input/output |

## Action Components

| Component | Description |
|---|---|
| Copy Button | Copies output to clipboard with success animation |
| Download Button | Downloads output as `.json`, `.csv`, `.xml`, etc. |
| Upload Button | File picker for uploading JSON files |
| Drag & Drop Zone | Full-area drop target for files |
| Clear Button | Clears input / output editors |
| Swap Button | Swaps input ↔ output (e.g. CSV ↔ JSON) |
| Format Button | Triggers formatting / beautification |
| Minify Button | Triggers minification / compaction |
| Validate Button | Triggers validation with result indicator |
| Convert Button | Triggers conversion with loading state |
| Share Button | Copies shareable URL with tool state |
| Reset Button | Resets tool to default state |

## Feedback & Status Components

| Component | Description |
|---|---|
| Toast Notifications | Success / error / info toasts (sonner or shadcn toast) |
| Loading Spinner | Animated spinner for async operations |
| Progress Bar | Indicates processing progress |
| Status Badge | Valid / Invalid / Error badges |
| Error Display | Inline error message with error details |
| Empty State | Placeholder when no input is provided |
| Success Animation | Checkmark or pulse on successful action |

## Input Components

| Component | Description |
|---|---|
| Text Input | Standard form input |
| Textarea | Multi-line text input for smaller payloads |
| File Input | Hidden file input triggered by upload button |
| URL Input | Input for fetching JSON from a URL |
| Select Dropdown | Format / language / option selector |
| Toggle Switch | Boolean options (e.g. minify keys) |
| Checkbox Group | Multiple option selectors |
| Radio Group | Single-option selectors |
| Slider | Numeric range (e.g. indent size) |
| Color Picker | Theme / highlight color customization |

## Display & Preview Components

| Component | Description |
|---|---|
| JSON Table | Tabular view of JSON array data |
| Markdown Preview | Rendered markdown output |
| HTML Preview | Rendered HTML output |
| Image Preview | Thumbnail / full-size for image conversions |
| QR Code Display | Rendered QR code with download |
| Chart / Graph | Visual representation of JSON data (optional) |

## Interactive Components

| Component | Description |
|---|---|
| Theme Toggle | Dark / light / system mode switcher |
| Font Size Control | Increase / decrease editor font size |
| Fullscreen Toggle | Expand editor to full viewport |
| Split Pane | Resizable split between input and output |
| Tab System | Multiple input / output tabs |
| History Panel | Undo / redo history for current session |
| Keyboard Shortcuts Modal | `Cmd+K` shortcut reference overlay |

## Dialog & Overlay Components

| Component | Description |
|---|---|
| Modal Dialog | Generic modal for confirmations, settings |
| Alert Dialog | Destructive action confirmation |
| Command Palette | `Cmd+K` quick command palette for all actions |
| Settings Drawer | Slide-out panel for tool settings |
| Help Tooltip | Contextual `?` tooltip for features |

## Tool-Specific Components

| Component | Description |
|---|---|
| Schema Builder | Visual JSON schema editor |
| Fake Data Config | Form to configure fake data generation (count, templates) |
| Encrypt / Decrypt Form | Password / key input for JSON encryption |
| Compare Panel | Side-by-side or unified diff |
| Merge Panel | Three-panel merge (left, base, right) |
| Find & Replace | In-editor search and replace |
| Filter Builder | UI for filtering JSON by key/value conditions |
| SQL Preview | Syntax-highlighted SQL output with copy |

---

## External Libraries & Packages

| Package | Purpose |
|---|---|
| `@monaco-editor/react` | Code editor with JSON intellisense |
| `lucide-react` | Icon set (consistent, lightweight) |
| `framer-motion` | Page transitions, micro-animations |
| `react-hook-form` | Form state management |
| `zod` | Schema validation for forms |
| `sonner` | Toast notifications |
| `next-themes` | Dark / light mode |
| `@radix-ui/*` | Accessible primitives (dialog, dropdown, tooltip, etc.) |
| `clsx` / `tailwind-merge` | Conditional class merging |
| `react-dropzone` | Drag & drop file upload |
| `diff` | JSON diff algorithm |
| `jsonpath-plus` | JSONPath query evaluation |
| `papaparse` | CSV parsing / generation |
| `js-yaml` | YAML parsing / generation |
| `fast-xml-parser` | XML parsing / generation |
| `json2toml` / `@iarna/toml` | TOML support |
| `json2excel` / `exceljs` | Excel (XLSX) generation |
| `sql-formatter` | SQL output formatting |
| `prettier` | Code formatting engine |
| `zod-to-json-schema` | Generate JSON Schema from Zod |
| `@faker-js/faker` | Fake data generation |
| `crypto-js` | JSON encryption / decryption |
| `pako` | Gzip / deflate compression |
| `qrcode.react` | QR code generation |
| `rehype` / `remark` | Markdown / HTML rendering |

---

# 🔘 Button Inventory

Every button on JSONKits, grouped by function.

## Primary Actions

| Button | Icon | Location | Behavior |
|---|---|---|---|
| **Convert** | ArrowRight | Converter tools | Triggers conversion animation → shows result |
| **Format** | Paintbrush | Formatter tools | Beautifies / pretty-prints JSON |
| **Minify** | Compress | Formatter tools | Strips whitespace, compacts JSON |
| **Validate** | CheckCircle | Validator tools | Validates JSON, shows ✅ or ❌ with errors |
| **Repair** | Wrench | Validator tools | Attempts auto-fix of invalid JSON |
| **Compare** | Columns | Diff tools | Runs diff on two JSON inputs |
| **Generate** | Sparkles | Generator tools | Generates fake / sample JSON |
| **Encrypt** | Lock | Security tools | Encrypts JSON with password |
| **Decrypt** | Unlock | Security tools | Decrypts JSON with password |
| **Compress** | FolderZip | Compression tools | Gzip / deflate JSON |
| **Decompress** | FileArchive | Compression tools | Decompress JSON |
| **Flatten** | Layers | Utility tools | Flattens nested JSON |
| **Unflatten** | Layers | Utility tools | Restores flattened JSON |
| **Sort** | ArrowUpDown | Editing tools | Sorts JSON keys alphabetically |
| **Filter** | Filter | Editing tools | Filters JSON by key/value conditions |
| **Swap** | ArrowLeftRight | Bidirectional tools | Swaps input ↔ output panels |
| **Merge** | Merge | Compare tools | Merges two JSON objects |
| **Split** | Split | Compare tools | Splits JSON into chunks |

## Output Actions

| Button | Icon | Behavior |
|---|---|---|
| **Copy** | Copy | Copies output to clipboard → green checkmark toast |
| **Download** | Download | Downloads output file with correct extension (.json, .csv, .yaml, etc.) |
| **Save** | Save | Saves to browser local storage (future) |
| **Share** | Share | Copies shareable URL with encoded tool state |
| **Print** | Printer | Opens print dialog for output |

## Input Actions

| Button | Icon | Behavior |
|---|---|---|
| **Upload** | Upload | Opens native file picker |
| **Paste** | Clipboard | Pastes from clipboard instantly |
| **Load Example** | FileText | Populates editor with sample JSON |
| **Clear** | X | Clears editor content |
| **Fetch URL** | Globe | Fetches JSON from a remote URL |
| **Record** | Mic | Voice input (future) |

## Navigation Buttons

| Button | Icon | Location |
|---|---|---|
| **Back to Tools** | ArrowLeft | Tool page → category page |
| **View All** | ArrowRight | Category section → full category page |
| **Related Tool** | — | Sidebar tool cards |
| **Category Tab** | — | Sub-nav for converter categories |
| **Load More** | Plus | Paginated tool grids |
| **Scroll to Top** | ArrowUp | Floating button after scroll |

## Editor Controls

| Button | Icon | Behavior |
|---|---|---|
| **Undo** | Undo2 | `Cmd+Z` — undo last change |
| **Redo** | Redo2 | `Cmd+Shift+Z` — redo |
| **Fullscreen** | Maximize2 | Toggles full-screen editor mode |
| **Wrap** | WrapText | Toggles word wrap in editor |
| **Minimap** | Map | Toggles Monaco minimap |
| **Font + / Font −** | Plus / Minus | Adjusts editor font size |

## Theme & Display

| Button | Icon | Behavior |
|---|---|---|
| **Dark Mode** | Moon | Toggles dark theme |
| **Light Mode** | Sun | Toggles light theme |
| **System Theme** | Monitor | Follows OS preference |
| **Grid / List** | LayoutGrid / List | Toggles tool grid layout |
| **Compact / Comfortable** | — | Toggles UI density |

## Global UI

| Button | Icon | Behavior |
|---|---|---|
| **Menu (Hamburger)** | Menu | Opens mobile navigation drawer |
| **Close** | X | Closes modals / drawers / toasts |
| **Search** | Search | Opens command palette (`Cmd+K`) |
| **Settings** | Settings | Opens settings drawer |
| **Help** | HelpCircle | Opens contextual help / tooltips |
| **Info** | Info | Tool description tooltip |
| **Close Toast** | X | Dismisses notification |
| **Undo Toast** | RotateCcw | Undo last action from toast |

## Schema & Generator Tools

| Button | Icon | Behavior |
|---|---|---|
| **Generate Schema** | Braces | Creates JSON Schema from sample JSON |
| **Validate Schema** | CheckCircle | Validates JSON against a schema |
| **Generate Fake Data** | Sparkles | Creates fake JSON from schema or template |
| **Add Field** | Plus | Adds field in schema builder |
| **Remove Field** | Trash2 | Removes field in schema builder |

## Dialog / Modal Buttons

| Button | Behavior |
|---|---|
| **Confirm** | Confirms destructive action (red) |
| **Cancel** | Dismisses without action |
| **Save Settings** | Persists tool configuration |
| **Reset Defaults** | Resets to factory settings |
| **Dismiss** | Closes onboarding tour |
| **Skip** | Skips tutorial step |

## Keyboard Shortcuts (all buttons also available via keyboard)

| Shortcut | Action |
|---|---|
| `Cmd+Enter` | Convert / Format / Validate |
| `Cmd+C` | Copy output |
| `Cmd+S` | Download output |
| `Cmd+Shift+U` | Upload file |
| `Cmd+K` | Command palette |
| `Cmd+Z` | Undo |
| `Cmd+Shift+Z` | Redo |
| `Escape` | Close modal / clear search |
| `Cmd+D` | Toggle dark mode |
| `Cmd+Shift+F` | Fullscreen editor |
| `Cmd+Shift+E` | Load example |
| `Tab` | Indent selection (editor) |
| `Shift+Tab` | Outdent selection (editor) |
| `Cmd+Shift+7` | Comment line (editor) |

---

# 🧠 Simplicity & Stickiness — Design for First-Time Users

## Core Philosophy

> **Paste. Click Convert. See the Popup. Feel the Win. Come Back Tomorrow.**

Every action has a deliberate click and a satisfying confirmation. The user should *feel* the tool working — the button press, the micro-animation, the toast popup. That tactile feedback builds trust and makes the result feel earned, not magic.

---

## The 3-Second Rule

A first-time user must get value in **3 seconds or less**:

```
Step 1: Land on page (0s)
Step 2: See a blinking cursor + a prominent Convert button (1s)
Step 3: Paste their JSON (2s)
Step 4: Click Convert → button animates → toast pops "✅ Converted!" (3s) ✅
```

The click is part of the experience. It tells the brain: *"I did a thing. The tool responded. It worked."*

---

## What Makes a Tool "Sticky" (Without Clutter)

| Principle | Implementation |
|---|---|
| **Click to act** | Every primary action needs a deliberate button click — Convert, Format, Validate, Generate |
| **Toast on every action** | After click → green toast: "✅ Converted!", "✅ Copied!", "✅ Downloaded!" |
| **Button micro-animation** | Button depresses → spinner appears briefly → checkmark replaces icon → toast slides in |
| **Auto-detect input** | Tool auto-detects input format (JSON? CSV? YAML?) and pre-selects the right conversion |
| **Auto-validate inline** | Invalid JSON shows red underline + error message — no Validate button needed for errors |
| **One obvious action** | The primary action button is the largest, boldest element on the page (besides editors) |
| **Copy gives feedback** | Copy button animates → "📋 Copied!" toast — user knows it worked |
| **Download is one click** | No filename prompt — downloads immediately with a smart filename + "📥 Downloaded!" toast |
| **Undo is free** | `Cmd+Z` works everywhere, no confirmation dialogs |
| **No dead ends** | Every action has a clear reverse (Swap button for bidirectional tools) |
| **Everything is a link** | Tool names, category names, related tools — all clickable to the right page |

---

## Toast Messages (Every Action Gets One)

| Action | Toast | Icon | Color | Duration |
|---|---|---|---|---|
| Convert | "✅ Converted successfully!" | CheckCircle | Green | 2s |
| Format | "✨ Formatted!" | Sparkles | Green | 2s |
| Minify | "📦 Minified! (85% smaller)" | Package | Green | 3s |
| Validate (pass) | "✅ Valid JSON!" | CheckCircle | Green | 2s |
| Validate (fail) | "❌ Invalid JSON at line 5" | XCircle | Red | 4s |
| Copy | "📋 Copied to clipboard!" | Clipboard | Green | 2s |
| Download | "📥 Downloaded!" | Download | Green | 2s |
| Upload | "📂 File loaded!" | FileUp | Blue | 2s |
| Clear | "🧹 Cleared!" | Trash2 | Gray | 1.5s |
| Swap | "🔄 Swapped!" | RefreshCw | Blue | 1.5s |
| Error | "⚠️ Something went wrong" | AlertTriangle | Amber | 4s |
| Example loaded | "📄 Example loaded!" | FileText | Blue | 2s |

---

## Button Click → Feedback Flow

```
User pastes JSON
       │
       ▼
Convert button glows (subtle pulse animation)
       │
       ▼
User clicks Convert
       │
       ├── Button: depresses → icon changes to spinner (200ms)
       ├── Process: runs conversion (instant for small data)
       ├── Button: spinner → checkmark (200ms)
       ├── Output panel: content appears with fade-in (150ms)
       ├── Toast: slides in from bottom-right "✅ Converted!" (300ms)
       └── Toast: auto-dismisses after 2s
```

This 5-step micro-interaction takes ~1 second but feels **satisfying and real**.

---

## Visual Hierarchy (What's on screen vs. What's hidden)

### Always Visible (no scrolling, no clicking)

```
┌──────────────────────────────────────────────────┐
│  [Breadcrumb]                                     │
│  H1: Tool Name                                    │
│  ┌────────────────┐  ┌──────────────────────────┐ │
│  │  Input Editor   │  │  Output / Preview        │ │
│  │  (paste here)   │  │  (empty until convert)   │ │
│  │                 │  │                          │ │
│  └────────────────┘  │                          │ │
│  [🔄 Convert]        │  [Copy] [📥 Download]    │ │
│  [📄 Example] [📂 Up]│                          │ │
│                       └──────────────────────────┘ │
└──────────────────────────────────────────────────┘
```

**Convert button** is the largest, most prominent button. It's the hero action.

### One Click Away

| Element | Trigger |
|---|---|
| FAQ section | Scroll down |
| Related tools | Scroll further |
| Settings | Gear icon (subtle, top-right) |
| Full example with explanation | Click "Load Example" |
| Keyboard shortcuts | Press `Cmd+K` |

### Hidden Until Needed

| Element | When It Appears |
|---|---|
| **Error panel** | Only when JSON is invalid after clicking Convert/Validate |
| **File format selector** | Only for tools with multiple output formats |
| **Advanced options** | Collapsed under "Advanced" toggle |
| **Sidebar** | On desktop, as a narrow rail (collapsible) |

---

## First-Time User Flow (Minimal Path)

### Flow A: I have JSON to convert

```
1. Google search → lands on tool page
2. Sees two editors + a big "Convert" button
3. Pastes JSON into input editor
4. Clicks "Convert" → button animates → output appears → toast pops "✅ Converted!"
5. Clicks "Copy" → "📋 Copied!" toast
6. Or clicks "Download" → file saves → "📥 Downloaded!" toast
7. Leaves, satisfied. ✅  (total time: ~20 seconds)
```

### Flow B: I want to explore what this site offers

```
1. Lands on homepage
2. Sees search bar: "Search 250+ JSON tools..."
3. Types "csv" → sees autocomplete results
4. Clicks "CSV to JSON"
5. Pastes CSV → clicks "Convert" → result + toast
6. Notices "JSON to CSV" in sidebar → clicks it
7. Clicks "Swap" → "🔄 Swapped!" toast — panels flip
8. "This is satisfying." → bookmarks site. ✅
```

### Flow C: I don't have JSON but want to try

```
1. Lands on tool page
2. Sees empty editor + big "Convert" button
3. Clicks "Load Example" → "📄 Example loaded!" toast
4. Editor fills → clicks "Convert" → output appears → toast
5. Edits the sample → clicks "Convert" again → new result + toast
6. Each click feels like progress. ✅
```

---

## What We Deliberately REMOVE (to keep it simple)

| Removed | Why |
|---|---|
| Sign-up / Login | Zero barrier to entry |
| Usage limits | No "free tier" psychology — it's just free |
| Ads | No distractions, no risk of malicious ads |
| Onboarding tour | Users don't read it, they skip it |
| Email capture (popup) | Annoying, increases bounce rate |
| Multiple output format selectors | Default to the most common format, hide the rest |
| Confirmation dialogs | Destructive actions have undo, not confirmations |
| "Share on Twitter" popups | Social spam ruins trust |
| Version history | Overkill for MVP, add later if needed |
| Real-time collaboration | Not needed for JSON tools |

---

## What We ADD (to make first-time users stay)

| Feature | Why |
|---|---|
| **Load Example** | Zero-effort demo — shows what the tool does instantly |
| **Toast confirmations** | Every action gets a satisfying popup — user feels progress |
| **Button micro-animations** | Press → spinner → checkmark — tactile, satisfying feedback |
| **Smart filename on download** | `data.json` → `data.yaml` — no manual rename needed |
| **Command palette (`Cmd+K`)** | Power users feel like pros on day one |
| **Dark mode toggle** | Developers love dark mode — shows we understand them |
| **Responsive down to 320px** | Works on phone, tablet, desktop — no zooming needed |
| **Offline support (PWA)** | Once visited, works without internet — huge trust signal |
| **Instant page transitions** | No loading spinners between tools — feels native |
| **Keyboard shortcuts visible** | Subtle hint text like `Cmd+Enter` on buttons |

---

## The "Sticky" Loop

```
         ┌─────────────────────────────────┐
         │  User needs a JSON tool          │
         │  (convert, format, validate)     │
         └──────────┬──────────────────────┘
                    │
                    ▼
         ┌─────────────────────────────────┐
         │  Googles "json to yaml"          │
         │  → clicks JSONKits result        │
         └──────────┬──────────────────────┘
                    │
                    ▼
         ┌─────────────────────────────────┐
         │  Lands on tool page              │
         │  → pastes JSON                   │
         │  → clicks Convert                │
         │  → toast "✅ Converted!"         │
         │  → copies / downloads            │
         │  → more toast feedback           │
         └──────────┬──────────────────────┘
                    │
                    ▼
         ┌─────────────────────────────────┐
         │  "Every click gives me a        │
         │   satisfying response.          │
         │   No ads. No sign-up."          │
         └──────────┬──────────────────────┘
                    │
                    ▼
         ┌─────────────────────────────────┐
         │  Next week, same need:          │
         │  → types "jsonkits formatter"   │
         │  → goes directly to site         │
         │  → skips Google entirely         │
         └──────────┬──────────────────────┘
                    │
                    ▼
         ┌─────────────────────────────────┐
         │  Bookmarked. Tells a friend.     │
         │  Returns weekly.  ✅              │
         └─────────────────────────────────┘
```

---

## Summary: The 10 Rules of Simplicity

1. **One job per page** — one tool, one action, one result
2. **Paste-first** — cursor is always ready in the input editor
3. **Click to confirm** — every action needs a deliberate click for that satisfying feedback loop
4. **Toast every action** — "✅ Converted!", "📋 Copied!" — user feels progress
5. **Button animates** — press → spinner → checkmark — tactile feedback
6. **No barriers** — no sign-up, no limits, no ads, no email popups
7. **Copy is one click** — and you see the toast confirmation
8. **Download is silent** — no "Save As" dialog, just a file + toast
9. **Example is one click** — for users who just want to explore
10. **Works on mobile + offline** — PWA caches after first visit, responsive layout

## Homepage Sections

1. **Hero** — Tagline, CTA, quick search
2. **Search Bar** — Find tools instantly
3. **Popular Tools** — Top-used converters & formatters
4. **Categories** — Browse by type (Formatter, Converter, etc.)
5. **Recently Added** — New tools
6. **FAQs** — Common questions
7. **Footer** — Links, branding, legal

---

## Per-Tool Page Blueprint

Every tool page is a fully SEO-optimized, standalone page with ~250+ words of unique content, structured data, and a rich user interface. Below is the complete blueprint.

### Page Structure

```
┌─────────────────────────────────────────────┐
│  Breadcrumbs                                │
│  Home › Converters › JSON to YAML           │
├─────────────────────────────────────────────┤
│  H1: JSON to YAML Converter — {Tagline}     │
│  ~50-word intro paragraph                   │
├─────────────────────────────────────────────┤
│  ┌─────────────┐  ┌──────────────────────┐  │
│  │  Input       │  │  Output              │  │
│  │  (Monaco)   │  │  (Monaco / Preview)  │  │
│  │             │  │                      │  │
│  │  [ Paste ]  │  │  [ Copy ] [ Download │  │
│  │  [ Upload ] │  │    [ Share ]         │  │
│  └─────────────┘  └──────────────────────┘  │
│  [🔄 Convert] [📄 Example] [🧹 Clear]      │
├─────────────────────────────────────────────┤
│  What Is JSON? (educational ~80 words)      │
├─────────────────────────────────────────────┤
│  What Is YAML? (educational ~80 words)      │
├─────────────────────────────────────────────┤
│  JSON vs. YAML: Which Should You Use?       │
│  (~120 words comparison table)              │
├─────────────────────────────────────────────┤
│  Real-World Examples (~100 words + code)    │
├─────────────────────────────────────────────┤
│  How to Convert JSON to YAML Online         │
│  (~100 words step-by-step)                  │
├─────────────────────────────────────────────┤
│  Example Input / Output (collapsible)       │
├─────────────────────────────────────────────┤
│  Frequently Asked Questions (6-10 Q&A)      │
├─────────────────────────────────────────────┤
│  Related Tools (grid of 6-8 tool cards)     │
│  Tools in same category + adjacent cats     │
└─────────────────────────────────────────────┘
```

### Content Breakdown (per tool page)

| Section | Word Count | Purpose |
|---|---|---|
| **H1 + Intro** | ~50 words | Primary keyword, tool name, what it does |
| **What Is {Source Format}?** | ~80 words | Explain the source format — definition, history, use cases |
| **What Is {Target Format}?** | ~80 words | Explain the target format — definition, history, use cases |
| **{Source} vs. {Target}: Which to Use?** | ~120 words | Comparison table + pros/cons for each format |
| **Real-World Examples** | ~100 words | Practical scenarios where this conversion is needed (config files, API responses, data migration, etc.) |
| **How to Convert {Source} to {Target} Online** | ~100 words | Step-by-step: paste, click convert, copy/download |
| **Example I/O** | ~50 words | Sample input + expected output |
| **FAQ** | ~200+ words | 6-10 common questions with format-specific answers |
| **Total Unique Content** | **~780+ words** | Rich, unique, indexed content — exceeds Google thin-content threshold |

### Full Content Template (per tool page)

```
H1: JSON to YAML Converter — Convert JSON to YAML Online Free

[~50 words] Introduction: JSON to YAML converter tool. Convert your
JSON data into YAML format instantly in your browser. Free, private,
no server upload required.

---

## What Is JSON?

[~80 words] JSON (JavaScript Object Notation) is a lightweight
data-interchange format. It is language-independent, easy for humans
to read and write, and easy for machines to parse and generate. JSON
is built on two structures: a collection of name/value pairs (object)
and an ordered list of values (array). It is widely used in web APIs,
configuration files, and data storage.

---

## What Is YAML?

[~80 words] YAML (YAML Ain't Markup Language) is a human-readable
data-serialization language. It uses indentation-based structure
making it more readable than JSON for complex configurations.
YAML is commonly used for configuration files (Docker, Kubernetes,
Ansible, CI/CD pipelines), data exchange, and log files.

---

## JSON vs. YAML: Which Should You Use?

[~120 words] Comparison table:

| Feature | JSON | YAML |
|---|---|---|
| Readability | Good, uses brackets | Excellent, uses indentation |
| Comments | Not supported | Supported (#) |
| File size | More compact | Larger due to indentation |
| Data types | Strings, numbers, booleans, null, arrays, objects | Same + dates, timestamps, anchors |
| Parse speed | Faster | Slower |
| Best for | APIs, data transfer | Config files, infrastructure-as-code |

Choose JSON for APIs and data interchange. Choose YAML for
configuration files and DevOps workflows.

---

## Real-World Examples

[~100 words] Converting JSON to YAML is common in DevOps and
infrastructure scenarios. For example:
- Docker Compose files (YAML) from API responses (JSON)
- Kubernetes manifests (YAML) converted from JSON schemas
- Ansible playbooks (YAML) derived from JSON inventory data
- CI/CD pipeline configurations migrated from JSON to YAML

This tool handles all these cases with accurate, lossless conversion.

---

## How to Convert JSON to YAML Online

[~100 words] Step-by-step:
1. Paste your JSON into the input editor (or click Upload to select a file)
2. Click the "Convert" button
3. Your YAML output appears instantly in the right panel
4. Click "Copy" to copy to clipboard or "Download" to save as .yaml file

All processing happens in your browser. Your data never leaves your device.

---

## Example

[~40 words] Input JSON → Output YAML shown in collapsible code blocks.

---

## Frequently Asked Questions

[~200+ words] 6-10 Q&A pairs specific to JSON ↔ YAML conversion.
```

### SEO Metadata (per tool page)

```typescript
{
  title:       "JSON to YAML Converter — Free Online Tool | JSONKits",
  description: "Convert JSON to YAML online instantly. Free, privacy-friendly browser-based JSON to YAML converter with syntax highlighting, copy, and download. No server upload required.",
  keywords:    "json to yaml, convert json to yaml, json yaml converter, online json to yaml",
  ogTitle:     "JSON to YAML Converter — Free Online Tool | JSONKits",
  ogDescription: "Convert JSON to YAML instantly in your browser. No uploads. Free.",
  ogImage:     "/og/json-to-yaml.png",
  twitterCard: "summary_large_image",
  canonical:   "https://jsonkits.com/json-to-yaml",
  robots:      "index, follow"
}
```

### Structured Data (JSON-LD injected per page)

#### Breadcrumb Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jsonkits.com" },
    { "@type": "ListItem", "position": 2, "name": "Converters", "item": "https://jsonkits.com/json-converters" },
    { "@type": "ListItem", "position": 3, "name": "JSON to YAML" }
  ]
}
```

#### FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert JSON to YAML?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paste your JSON in the input editor and the YAML output appears instantly. Use the Copy button or Download button to save the result."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All conversion happens entirely in your browser. No data is uploaded to any server."
      }
    },
    {
      "@type": "Question",
      "name": "Is this tool free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JSONKits is completely free with no usage limits or registration required."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert large JSON files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Since processing is done in-browser, performance depends on your device capabilities. For extremely large files, use the Upload button or drag-and-drop."
      }
    },
    {
      "@type": "Question",
      "name": "Does JSONKits support batch conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Currently each tool converts one file at a time. Batch conversion is on the roadmap for future releases."
      }
    }
  ]
}
```

#### SoftwareApplication Schema
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JSON to YAML Converter",
  "url": "https://jsonkits.com/json-to-yaml",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

### Sample FAQ Pairs (adapt per tool)

| Question | Answer |
|---|---|
| How do I convert JSON to {format}? | Paste JSON → click Convert → copy or download. |
| Is my data safe? | 100% browser-side. No server upload. |
| Is it free? | Yes, forever free, no sign-up. |
| Can I upload a file? | Yes, drag & drop or click Upload. |
| Does it work offline? | Once loaded, yes — no network needed after page load. |
| What if my JSON is invalid? | The validator highlights errors inline after clicking Convert. |
| Can I download the result? | Yes, one-click download in the correct format. |
| Does it support large files? | Yes, limited only by browser/device memory. |
| Are there usage limits? | None whatsoever. |
| What formats do you support? | Full list in the converter section above. |

### Additional Components Per Tool Page

| Component | Implementation |
|---|---|
| Convert Button | Hero action — largest button, click to trigger conversion with animation |
| Copy Button | Copies formatted output, shows "📋 Copied!" toast |
| Download Button | Triggers file download with correct extension + "📥 Downloaded!" toast |
| Upload Button | File picker accepting `.json`, `.csv`, `.xml`, `.yaml`, etc. |
| Drag & Drop Zone | Full editor area accepts dropped files |
| Swap Button | Swaps input/output panels for bidirectional tools |
| Clear Button | Clears both panels |
| Load Example | One-click populates input with sample data |
| Format Toggle | Prettify / minify mode for formatters |
| Line & Char Count | Displayed below each editor |
| Language Badge | Shows source → target format visually |
| Conversion Time | Displayed in ms for transparency |
| History Undo | `Cmd+Z` support in editors |
| Keyboard Shortcuts | `Cmd+Enter` to convert, `Cmd+C` to copy, etc. |
| Tool Tips | `?` icon explaining format-specific features |
| Error Highlighting | Red squigglies + tooltip on invalid JSON |
| Copyable Code Blocks | All example code blocks have one-click copy |

---

## Core Features

- Instant conversion / formatting / validation
- Auto-format on paste
- Real-time validation with error markers
- Copy to clipboard with toast feedback
- Download output as file
- Upload JSON files (drag & drop)
- Dark mode toggle
- Fully responsive

---

## Performance Targets

- Lighthouse score: 100
- Core Web Vitals: all green
- Static generation where possible
- Lazy loading for Monaco Editor
- Code splitting per-tool route

---

## 🏛️ Required Pages for Google AdSense Compliance

Google AdSense requires specific pages to be present and accessible. Every page must have a consistent header, footer, and navigation.

| Page | URL | Content Requirements |
|---|---|---|
| **Homepage** | `/` | Tool grid, search, featured tools, categories |
| **About Us** | `/about` | Who we are, mission statement, team, what JSONKits offers, why we built it |
| **Contact Us** | `/contact` | Contact form (name, email, subject, message) + email: `contact@jsonkits.com` |
| **Privacy Policy** | `/privacy` | Full privacy policy (see template below) |
| **Terms of Service** | `/terms` | Full terms of service (see template below) |
| **Cookie Policy** | `/cookies` | Cookie usage, types of cookies, how to manage them |
| **Disclaimer** | `/disclaimer` | Disclaimer of liability, no warranties, accuracy of conversions |
| **Accessibility** | `/accessibility` | Accessibility statement, WCAG compliance, how to report issues |
| **Sitemap** | `/sitemap.xml` | Auto-generated XML sitemap via `next-sitemap` |
| **404** | `/404` | Custom 404 page with search bar + popular tools |

### Privacy Policy Template

```
JSONKits Privacy Policy

Last updated: [Date]

1. Information We Collect
   - We do NOT collect, store, or transmit any JSON data you paste or upload.
   - All processing happens entirely in your browser using client-side JavaScript.
   - We use Google AdSense which may use cookies for personalized advertising.
   - We collect standard analytics data (page views, tool usage) via privacy-friendly analytics.

2. How We Use Information
   - To improve our tools and user experience.
   - To serve relevant advertisements via Google AdSense.
   - We never sell your data.

3. Cookies
   - We use essential cookies for site functionality.
   - Google AdSense uses cookies for ad personalization.
   - You can opt out via Google's Ad Settings.

4. Third-Party Services
   - Google AdSense (advertising)
   - [Analytics provider] (anonymous usage stats)

5. Data Security
   - No user data is stored on our servers.
   - All conversions are 100% client-side.

6. Contact
   - Email: privacy@jsonkits.com

7. Changes to This Policy
   - We will notify users of material changes via a site banner.
```

### Terms of Service Template

```
JSONKits Terms of Service

Last updated: [Date]

1. Acceptance of Terms
   - By using JSONKits.com, you agree to these terms.

2. Use of Service
   - All tools are provided free of charge.
   - You agree not to misuse the service (e.g., automated scraping, abuse).

3. Intellectual Property
   - The JSONKits name, logo, and site design are our property.
   - Tool outputs are free to use for any purpose.

4. Disclaimer
   - Tools are provided "as is" without warranty.
   - We are not liable for damages arising from tool use.

5. Limitation of Liability
   - JSONKits shall not be liable for any indirect, incidental, or consequential damages.

6. Changes to Terms
   - We reserve the right to update these terms.

7. Governing Law
   - These terms are governed by [Your Jurisdiction] law.

8. Contact
   - Email: legal@jsonkits.com
```

---

## 🏗️ GitHub Pages Deployment

Since JSONKits uses Next.js, you have two options for GitHub Pages:

### Option A: Static Next.js Export (Recommended for GitHub Pages)

```bash
# next.config.js
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}
```

```bash
npm run build
# Output goes to ./out/ folder
# Push ./out content to gh-pages branch
```

### Option B: GitHub Actions Auto-Deploy

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
```

### GitHub Pages Requirements Checklist

| Requirement | Implementation |
|---|---|
| Repository name | `jsonkits.github.io` or `your-org/jsonkits` with Pages enabled |
| Custom domain (optional) | `jsonkits.com` CNAME to `your-org.github.io` |
| `CNAME` file | `echo 'jsonkits.com' > out/CNAME` |
| `404.html` | Custom 404 page at `/404/index.html` |
| `.nojekyll` file | `touch out/.nojekyll` — disables Jekyll processing |
| `sitemap.xml` | Generated by `next-sitemap` |
| `robots.txt` | Allowed for all, points to sitemap |
| Canonical URLs | Each page has `<link rel="canonical" href="..."/>` |
| HTTPS enforced | GitHub Pages provides HTTPS automatically |
| 301 redirects | Handle via `_redirects` file for Netlify-style or manual JS |

### Required Files in Repository Root

```
jsonkits/
├── .github/workflows/deploy.yml   # GitHub Actions
├── public/
│   ├── CNAME                       # Custom domain (if applicable)
│   ├── robots.txt
│   ├── _redirects                  # Redirect rules (optional)
│   └── .nojekyll                   # Disable Jekyll
├── next.config.js                  # output: 'export'
├── package.json
└── README.md
```

### `robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://jsonkits.com/sitemap.xml
```

### `_redirects` (optional, for Netlify/Cloudflare)

```
/json-to-xml  /json-to-yaml  301
```

---

## 🔍 Comprehensive SEO & Meta Tags

### Global Meta Tags (in `app/layout.tsx`)

```tsx
// Every page inherits these defaults
export const metadata = {
  metadataBase: new URL('https://jsonkits.com'),
  title: {
    default: 'JSONKits — Free Online JSON Tools for Developers',
    template: '%s | JSONKits',
  },
  description: 'Free online JSON tools: formatter, validator, converter, viewer, and more. 250+ browser-based JSON utilities. No server upload. 100% private.',
  keywords: [
    'json tools', 'json formatter', 'json validator', 'json converter',
    'json to yaml', 'json to csv', 'json viewer', 'online json tools',
    'free json tools', 'json beautifier', 'json minifier',
  ],
  authors: [{ name: 'JSONKits' }],
  creator: 'JSONKits',
  publisher: 'JSONKits',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jsonkits.com',
    siteName: 'JSONKits',
    title: 'JSONKits — Free Online JSON Tools for Developers',
    description: 'Free online JSON tools: formatter, validator, converter, viewer, and more. 250+ browser-based utilities.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSONKits — Free Online JSON Tools',
    description: 'Free online JSON tools: formatter, validator, converter, viewer.',
    images: ['/og-image.png'],
    creator: '@jsonkits',
  },
  alternates: {
    canonical: 'https://jsonkits.com',
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION',
    yandex: 'YOUR_YANDEX_VERIFICATION',
    yahoo: 'YOUR_YAHOO_VERIFICATION',
  },
  other: {
    'google-adsense-account': 'ca-pub-XXXXXXXXXXXXXX',
  },
}
```

### Per-Tool Page Meta Tags (in each tool's `page.tsx`)

```tsx
export const metadata = {
  title: 'JSON to YAML Converter — Free Online Tool | JSONKits',
  description: 'Convert JSON to YAML online instantly. Free, privacy-friendly, browser-based JSON to YAML converter. No server upload. Copy or download your YAML output.',
  keywords: 'json to yaml, convert json to yaml, json yaml converter, online json to yaml tool',
  openGraph: {
    title: 'JSON to YAML Converter — Free Online Tool | JSONKits',
    description: 'Convert JSON to YAML instantly in your browser. No uploads. Free.',
    url: 'https://jsonkits.com/json-to-yaml',
    images: [{ url: '/og/json-to-yaml.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'JSON to YAML Converter — Free Online Tool | JSONKits',
    description: 'Convert JSON to YAML instantly in your browser. No uploads. Free.',
    images: ['/og/json-to-yaml.png'],
  },
  alternates: {
    canonical: 'https://jsonkits.com/json-to-yaml',
  },
}
```

### Structured Data Injections (per page)

| Schema Type | Pages | Content |
|---|---|---|
| `WebSite` | All pages | Site name, URL, description, search action |
| `WebPage` | All pages | Page name, description, breadcrumb |
| `BreadcrumbList` | All pages | Breadcrumb trail |
| `SoftwareApplication` | Tool pages | Tool name, applicationCategory, offers (free) |
| `FAQPage` | Tool pages | 6-10 Q&A pairs specific to the tool |
| `HowTo` | Tool pages | Step-by-step conversion instructions |
| `Organization` | Homepage, About | Organization name, logo, contact, social profiles |
| `AboutPage` | /about | About page markup |
| `ContactPage` | /contact | Contact page with email, address |
| `WebSite` with `SearchAction` | Homepage | Site-wide search action for Google Sitelinks Search Box |

### Verification & Analytics Meta Tags

```html
<!-- Google AdSense -->
<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXX">

<!-- Google Site Verification (Search Console) -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE">

<!-- Bing Webmaster Tools -->
<meta name="msvalidate.01" content="YOUR_BING_CODE">

<!-- Yandex Webmaster -->
<meta name="yandex-verification" content="YOUR_YANDEX_CODE">

<!-- Pinterest -->
<meta name="p:domain_verify" content="YOUR_PINTEREST_CODE">

<!-- Facebook Domain Verification -->
<meta name="facebook-domain-verification" content="YOUR_FACEBOOK_CODE">

<!-- Apple Smart App Banner (if PWA) -->
<meta name="apple-itunes-app" content="app-id=YOUR_APP_ID">

<!-- Theme Color for Browser UI -->
<meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

<!-- Format Detection -->
<meta name="format-detection" content="telephone=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">

<!-- Preconnect for Performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://pagead2.googlesyndication.com">

-- DNS Prefetch for AdSense
<link rel="dns-prefetch" href="//pagead2.googlesyndication.com">
```

### Favicon & App Icons

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.json">
```

---

## 📱 PWA Configuration

### `public/manifest.json`

```json
{
  "name": "JSONKits — Free Online JSON Tools",
  "short_name": "JSONKits",
  "description": "Free online JSON tools: formatter, validator, converter, viewer, and more. 250+ browser-based utilities.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#0f172a",
  "orientation": "any",
  "categories": ["developer-tools", "utilities", "productivity"],
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ],
  "screenshots": [
    {
      "src": "/screenshots/homepage.png",
      "sizes": "1280x800",
      "type": "image/png",
      "form_factor": "wide",
      "label": "JSONKits Homepage"
    }
  ],
  "related_applications": [],
  "prefer_related_applications": false
}
```

### Service Worker (via `serwist`)

```bash
npm install @serwist/next @serwist/sw
```

```ts
// serwist.config.ts
import { SerwistConfig } from '@serwist/next/config'

const config: SerwistConfig = {
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  globDirectory: 'out',
  globPatterns: ['**/*.{js,css,html,json,png,svg,ico}'],
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
}

export default config
```

```ts
// app/sw.ts
import { defaultCache } from '@serwist/next/worker'
import { Serwist } from '@serwist/sw'

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [{ url: '/offline', name: 'offlineFallback' }],
  },
})

serwist.addEventListeners()
```

### Icon File Specification

| File | Size | Format | Purpose |
|---|---|---|---|
| `public/favicon.ico` | 32×32 | ICO | Browser tab icon |
| `public/icon.svg` | any | SVG | Modern browsers, dark mode support |
| `public/icons/icon-192.png` | 192×192 | PNG | PWA homescreen icon |
| `public/icons/icon-512.png` | 512×512 | PNG | PWA splash screen icon |
| `public/apple-touch-icon.png` | 180×180 | PNG | iOS homescreen icon |
| `public/og-image.png` | 1200×630 | PNG | Default social share image |
| `public/og/*.png` | 1200×630 | PNG | Per-tool social share images |

### PWA Checklist

- [ ] `manifest.json` with all required fields
- [ ] Service worker registered and caching static assets
- [ ] 192px + 512px icons generated
- [ ] `apple-touch-icon` linked in `<head>`
- [ ] Theme color meta tag set for dark/light
- [ ] Offline fallback page at `/offline`
- [ ] Lighthouse PWA badge passes

---

## Future Roadmap

| Phase | Scope |
|---|---|
| **Phase 1 (MVP)** | Homepage + 20 JSON tools |
| **Phase 2** | 50 JSON tools + all converters |
| **Phase 3** | Blog, tutorials, guides |
| **Phase 4** | 100+ JSON tools |
| **Phase 5** | Expand to XMLKits, YAMLKits, CSVKits |

---

## Branding

- **Name:** JSONKits
- **Tagline:** Fast, Free & Privacy-Friendly JSON Tools for Developers.
- **Domain:** https://jsonkits.com
- **License:** MIT

---

## Deployment

### GitHub Pages (Primary)

Static Next.js export deployed via GitHub Actions to GitHub Pages.

```
https://jsonkits.github.io     # GitHub Pages URL
https://jsonkits.com            # Custom domain (optional)
```

**See full instructions in the [GitHub Pages Deployment](#-github-pages-deployment) section above.**

### Alternative Hosting

| Platform | Notes |
|---|---|
| Cloudflare Pages | Recommended if you want built-in CDN, DDoS protection, and easy custom domain |
| Vercel | Zero-config Next.js deployment, best for SSR if you move away from static export |
| Netlify | Good alternative with form handling for /contact |

### Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://jsonkits.com
NEXT_PUBLIC_SITE_NAME=JSONKits
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Optional analytics
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm
- Git

### Local Development

```bash
git clone https://github.com/your-org/jsonkits.git
cd jsonkits
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## ⚙️ Configuration Files

### `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
  distDir: 'out',

  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    },
    {
      source: '/sw.js',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
    },
  ],

  redirects: async () => [
    {
      source: '/json-tools',
      destination: '/',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
```

### `next-sitemap.config.js`

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jsonkits.com',
  generateRobotsTxt: true,
  outDir: 'out',
  exclude: ['/404', '/offline'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/404' },
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 📦 Package.json Scripts

```json
{
  "name": "jsonkits",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next-sitemap",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:ui": "vitest --ui",
    "coverage": "vitest run --coverage",
    "clean": "rm -rf .next out coverage",
    "analyze": "ANALYZE=true next build",
    "prepare": "husky"
  },
  "devDependencies": {
    "typescript": "^5.4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4.0",
    "postcss": "^8",
    "autoprefixer": "^10",
    "prettier": "^3.2",
    "prettier-plugin-tailwindcss": "^0.6",
    "eslint": "^9",
    "eslint-config-next": "^15",
    "@eslint/eslintrc": "^3",
    "vitest": "^2.0",
    "@testing-library/react": "^16",
    "@testing-library/jest-dom": "^6",
    "jsdom": "^24",
    "husky": "^9",
    "lint-staged": "^15",
    "next-sitemap": "^4",
    "@serwist/next": "^9",
    "@serwist/sw": "^9",
    "@faker-js/faker": "^9",
    "concurrently": "^9"
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}
```

### `.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### `.husky/pre-commit`

```bash
#!/usr/bin/env sh
npx lint-staged
```

---

### Build Commands

```bash
# Development
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Test
npm run test

# Format all files
npm run format

# Production build
npm run export

# Deploy to GitHub Pages
npx gh-pages -d out
```

### Project Checklist for GitHub Pages Launch

- [ ] `next.config.js` configured with `output: 'export'` + security headers
- [ ] `tsconfig.json` with `strict: true` and `@/` path alias
- [ ] `.prettierrc` + `eslint.config.js` configured
- [ ] `husky` + `lint-staged` set up for pre-commit hooks
- [ ] `.github/workflows/deploy.yml` created for auto-deploy
- [ ] `public/.nojekyll` file added (disables GitHub Pages Jekyll processing)
- [ ] `public/CNAME` file added (if using custom domain)
- [ ] `public/robots.txt` created
- [ ] `public/manifest.json` with PWA icons
- [ ] `public/404.html` or `/404` page created
- [ ] Service worker registered via `serwist`
- [ ] OG image (`/public/og-image.png`) created at 1200×630
- [ ] Favicon generated at all required sizes
- [ ] Google Search Console verified
- [ ] Google AdSense account verified
- [ ] Privacy Policy, Terms, About, Contact pages created
- [ ] All 216+ tool pages scaffolded with unique content
- [ ] Lighthouse score 100 verified

---

---

# 📚 Complete JSONKits Tool Collection

## JSON ↔ Data Formats

- JSON to CSV
- CSV to JSON
- JSON to XML
- XML to JSON
- JSON to YAML
- YAML to JSON
- JSON to TOML
- TOML to JSON
- JSON to INI
- INI to JSON
- JSON to Properties
- Properties to JSON
- JSON to TSV
- TSV to JSON
- JSON to Excel (XLSX)
- Excel (XLSX) to JSON
- JSON to HTML Table
- HTML Table to JSON
- JSON to Markdown Table
- Markdown Table to JSON
- JSON to Plain Text
- Plain Text to JSON

## JSON ↔ Programming Languages

- JSON to TypeScript Interface
- JSON to Java Class
- JSON to C# Class
- JSON to Python Dictionary
- JSON to Python Dataclass
- JSON to Go Struct
- JSON to PHP Array
- JSON to PHP Class
- JSON to Kotlin Data Class
- JSON to Swift Struct
- JSON to Dart Model
- JSON to Rust Struct
- JSON to Scala Case Class
- JSON to Ruby Hash
- JSON to Perl Hash
- JSON to Lua Table
- JSON to R Object
- JSON to MATLAB Struct

## Programming Languages → JSON

- TypeScript Interface to JSON
- Java Class to JSON
- C# Class to JSON
- Python Dictionary to JSON
- Go Struct to JSON
- PHP Array to JSON
- Kotlin Data Class to JSON
- Swift Struct to JSON
- Dart Model to JSON
- Rust Struct to JSON

## JSON ↔ Databases

- JSON to SQL INSERT
- SQL to JSON
- JSON to MySQL
- JSON to PostgreSQL
- JSON to SQLite
- JSON to SQL Server
- JSON to Oracle SQL
- JSON to MongoDB Document
- MongoDB Document to JSON
- JSON to Firestore Document
- Firestore Document to JSON

## JSON ↔ API Formats

- JSON to GraphQL Schema
- GraphQL Schema to JSON
- JSON to OpenAPI
- OpenAPI to JSON
- JSON to Swagger
- Swagger to JSON
- JSON to Postman Collection
- Postman Collection to JSON
- JSON to cURL
- cURL to JSON

## JSON ↔ Configuration Files

- JSON to .env
- .env to JSON
- JSON to Docker Compose YAML
- Docker Compose YAML to JSON
- JSON to Kubernetes YAML
- Kubernetes YAML to JSON
- JSON to Terraform Variables
- Terraform Variables to JSON

## JSON ↔ Web Formats

- JSON to JavaScript Object
- JavaScript Object to JSON
- JSON to JSONP
- JSONP to JSON
- JSON to URL Parameters
- URL Parameters to JSON
- JSON to Query String
- Query String to JSON
- JSON to Form Data
- Form Data to JSON

## JSON ↔ Encodings

- JSON to Base64
- Base64 to JSON
- JSON to URL Encoded
- URL Encoded to JSON
- JSON to Unicode Escape
- Unicode Escape to JSON
- JSON to Hex
- Hex to JSON
- JSON to Binary
- Binary to JSON

## JSON ↔ AI & Documentation

- JSON to Markdown
- Markdown to JSON
- JSON to README
- README to JSON
- JSON to Mermaid Diagram
- Mermaid Diagram to JSON

## JSON ↔ Miscellaneous

- JSON to PDF
- PDF to JSON
- JSON to Word
- Word to JSON
- JSON to QR Code
- QR Code to JSON
- JSON to Barcode
- Barcode to JSON
- JSON to Image
- Image to JSON (OCR)

## Specialized JSON Converters

- Nested JSON to Flat JSON
- Flat JSON to Nested JSON
- Array JSON to Object JSON
- Object JSON to Array JSON
- JSON to Key-Value Pairs
- Key-Value Pairs to JSON
- JSON to Tree Structure
- Tree Structure to JSON
- JSON to Schema
- Schema to JSON
- JSON to Fake Data
- Fake Data to JSON
- JSON to BSON
- BSON to JSON
- JSON to NDJSON
- NDJSON to JSON
- JSON to GeoJSON
- GeoJSON to JSON

---

# Additional JSON Utilities

## Formatting

- JSON Formatter
- JSON Beautifier
- JSON Pretty Print
- JSON Minifier
- JSON Compact
- JSON Indenter

## Validation

- JSON Validator
- JSON Linter
- JSON Syntax Checker
- JSON Repair
- JSON Fixer
- Invalid JSON Repair

## Viewing

- JSON Viewer
- JSON Tree Viewer
- JSON Explorer
- JSON Search
- Expand JSON
- Collapse JSON

## Comparison

- JSON Diff Checker
- JSON Compare
- JSON Merge
- JSON Split

## Editing

- JSON Sort Keys
- JSON Remove Duplicates
- JSON Rename Keys
- JSON Remove Null Values
- JSON Filter
- JSON Slice

## Extraction

- JSONPath Tester
- Extract Keys
- Extract Values
- Extract Objects
- Extract Arrays
- Extract Nested Objects

## Analysis

- JSON Size Calculator
- JSON Depth Analyzer
- JSON Statistics
- JSON Key Counter
- JSON Array Counter

## Generation

- Fake JSON Generator
- Random JSON Generator
- Mock API Response Generator
- Sample JSON Generator
- JSON Schema Generator

## Security

- JSON Escape
- JSON Unescape
- JSON Encrypt
- JSON Decrypt
- JSON Mask Sensitive Data

## Compression

- Compress JSON
- Decompress JSON
- Gzip JSON
- Deflate JSON

## Developer Utilities

- Copy JSON
- Download JSON
- Upload JSON
- Validate Uploaded JSON
- Convert JSON File
- Merge JSON Files
- Split JSON Files
- JSON Clipboard Viewer

## Browser Tools

- JSON File Viewer
- JSON URL Viewer
- Fetch JSON from URL
- API JSON Viewer
- Live JSON Preview

## Advanced

- Flatten Objects
- Unflatten Objects
- Normalize JSON
- Denormalize JSON
- Remove Empty Objects
- Remove Empty Arrays
- Sort Arrays
- Convert Arrays to Objects
- Convert Objects to Arrays
- Detect Duplicate Keys
- Detect Circular References
- JSON Version Diff
- JSON Patch Generator
- JSON Patch Validator
- JSON Merge Patch
- JSON Pointer Generator
- JSON Pointer Tester

## Planned Total

- 250+ JSON Tools
- 50+ Converter Tools
- 30+ Formatter & Validation Tools
- 40+ Developer Utilities
- 30+ API Tools
- 30+ Database Tools
- 20+ AI & Documentation Tools
- 50+ Advanced JSON Utilities

**Goal:** Become the largest free JSON toolkit on the web.

---

## License

MIT © JSONKits

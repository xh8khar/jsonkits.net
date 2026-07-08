# Manual Test Guide

These tests require a running dev server and cannot be fully automated.

```bash
npm run dev
```

---

## 1. CORS-dependent fetch pages

### fetch-json-from-url
1. Open http://localhost:3000/fetch-json-from-url/
2. Click "Load Example" — should fill URL `https://jsonplaceholder.typicode.com/todos/1`
3. Click "Fetch JSON" — should display formatted JSON response in output panel
4. Enter `https://api.github.com/repos/vercel/next.js` — should fetch and display
5. Enter a non-CORS URL (e.g. `http://example.com`) — should show a CORS error toast
6. Enter an invalid URL (`not a url`) — should show URL validation error
7. Leave empty and click Fetch — should show "Please enter a URL" toast

### json-url-viewer
1. Open http://localhost:3000/json-url-viewer/
2. Same flow as above — identical logic, re-test with a few URLs
3. Click "Clear" — should reset both input and output
4. Verify error messages are user-friendly (no raw `TypeError: Failed to fetch`)

### api-json-viewer
1. Open http://localhost:3000/api-json-viewer/
2. Load example → fetch → verify formatted response
3. Test with a slow API — verify loading state appears

---

## 2. File-upload tools (end-to-end)

### xlsx-to-json
1. Open http://localhost:3000/xlsx-to-json/
2. Upload a `.xlsx` file (create one in Excel/Google Sheets with a few rows)
3. The file content needs to be converted to base64 first (use the input panel or a separate tool)
4. Alternatively: create a simple XLSX, convert to base64 (`base64 test.xlsx`), paste the base64 string
5. Click "Convert to JSON" — verify output is the sheet data as JSON

### json-to-xlsx
1. Open http://localhost:3000/json-to-xlsx/
2. Paste `[{"name":"Alice","age":30},{"name":"Bob","age":25}]`
3. Click "Convert to XLSX" — should output a base64 XLSX string
4. Copy output, decode: `echo '<base64>' | base64 -D > test.xlsx`, open in Excel

### json-to-qrcode
1. Open http://localhost:3000/json-to-qrcode/
2. Paste `{"url":"https://jsonkits.net"}`
3. Click "Generate QR" — should show a QR code preview
4. Verify the "Preview" button appears and shows the QR code

### json-to-pdf
1. Open http://localhost:3000/json-to-pdf/
2. Paste `{"name":"JSONKits","version":1}`
3. Click "Generate PDF" — should output a data URI (starts with `data:application/pdf`)
4. Open the data URI in a new tab to verify it renders as a PDF

---

## 3. Error message readability

1. Go to any JSON → YAML/XML/CSV tool
2. Paste invalid input like `{broken json` and click Convert
3. Verify the error toast shows a clear, human-readable message (not raw `SyntaxError`)
4. Repeat for `{a:1}`, `[1,]`, empty input
5. Check the error is also shown in the output panel (red border)

---

## 4. Error Boundary

1. Open any tool page
2. Cause a render error (or navigate to an invalid route)
3. Verify the Error Boundary shows "Something went wrong" + "Refresh Page" button
4. Click "Refresh Page" — page should reload

---

## Test Log

| Date | Tester | Pages Tested | Issues Found |
|------|--------|-------------|--------------|
|      |        |             |              |

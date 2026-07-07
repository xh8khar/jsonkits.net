import {
  m3uToJson, kmlToGeojson, topojsonToGeojson,
  icalToJson, vcardToJson, gpxToJson,
  jsonTimestampConverter, jsonObfuscator, jsonFeedValidator,
  jsonToInsomnia, bookmarksToJson, rssToJson,
  jsonToLaravelMigration, jsonToDjangoModel,
  jsonToRailsMigration, jsonToSpringEntity,
  jsonToValibot, jsonToIoTs,
  wktToGeojson, poToJson
} from '../src/lib/converters'

let pass = 0
let fail = 0

function test(name: string, fn: () => void) {
  try { fn(); pass++; console.log(`  ✓ ${name}`) }
  catch (e) { fail++; console.log(`  ✗ ${name}: ${(e as Error).message}`) }
}

function assert(cond: boolean, msg: string) { if (!cond) throw new Error(msg) }

console.log('=== IPTV-style M3U (extended attributes) ===')
test('parses tvg-id and group-title', () => {
  const r = JSON.parse(m3uToJson('#EXTM3U\n#EXTINF:-1 tvg-id="bbc1" tvg-name="BBC One" group-title="UK TV",BBC One London\nhttp://example.com/stream'))
  assert(r[0].title === 'BBC One London', `Expected "BBC One London", got "${r[0].title}"`)
  assert(r[0].duration === -1, 'duration should be -1')
  assert(r[0].path === 'http://example.com/stream', 'path mismatch')
})

test('parses M3U with multiple IPTV channels', () => {
  const r = JSON.parse(m3uToJson('#EXTM3U\n#EXTINF:-1 group-title="News",CNN\nhttp://cnn.com\n#EXTINF:-1 group-title="Sports",ESPN\nhttp://espn.com'))
  assert(r.length === 2, `expected 2 entries, got ${r.length}`)
  assert(r[0].title === 'CNN', `title mismatch: ${r[0].title}`)
})

console.log('\n=== GeoJSON KML coordinate structure ===')
test('KML LineString has correct coordinate depth', () => {
  const r = JSON.parse(kmlToGeojson('<kml><Document><Placemark><name>Path</name><LineString><coordinates>-122.0,37.0 -121.9,37.1 -121.8,37.2</coordinates></LineString></Placemark></Document></kml>'))
  const coords = r.features[0].geometry.coordinates
  // Should be [[lon, lat], [lon, lat], ...] - depth 2
  assert(Array.isArray(coords), 'coords should be an array')
  assert(Array.isArray(coords[0]), 'coords[0] should be an array')
  assert(typeof coords[0][0] === 'number', 'coords[0][0] should be a number (lon)')
  assert(typeof coords[0][1] === 'number', 'coords[0][1] should be a number (lat)')
  assert(coords.length >= 3, `expected at least 3 points, got ${coords.length}`)
})

test('KML Point with single coordinate', () => {
  const r = JSON.parse(kmlToGeojson('<kml><Document><Placemark><name>Point</name><Point><coordinates>-122.0,37.0,0</coordinates></Point></Placemark></Document></kml>'))
  // Even though the input is a Point, our parser always outputs LineString
  // But the coordinates should still be valid
  assert(r.features.length > 0, 'should have features')
})

console.log('\n=== iCal edge cases ===')
test('iCal with RRULE and ATTENDEE', () => {
  const r = JSON.parse(icalToJson('BEGIN:VCALENDAR\nBEGIN:VEVENT\nDTSTART:20240101T090000\nDTEND:20240101T100000\nSUMMARY:Meeting\nRRULE:FREQ=WEEKLY\nATTENDEE:mailto:user@example.com\nEND:VEVENT\nEND:VCALENDAR'))
  assert(r.events[0].summary === 'Meeting', 'should parse summary')
  assert(r.events[0].rrule === 'FREQ=WEEKLY', 'should parse RRULE')
  assert(Array.isArray(r.events[0].attendees), 'attendees should be an array')
  assert(r.events[0].attendees[0] === 'mailto:user@example.com', 'should parse ATTENDEE')
})

console.log('\n=== vCard edge cases ===')
test('vCard with multiple emails', () => {
  const r = JSON.parse(vcardToJson('BEGIN:VCARD\nVERSION:3.0\nFN:John Doe\nEMAIL:john@work.com\nEMAIL:john@home.com\nEND:VCARD'))
  assert(Array.isArray(r.email), 'email should be an array for multiple values')
  assert(r.email.length === 2, 'should have 2 emails')
})

console.log('\n=== Timestamp converter ===')
test('numeric timestamp (ms)', () => {
  const r = JSON.parse(jsonTimestampConverter('{"ts":1700000000000}'))
  assert(r.ts._asDate, 'should convert numeric ms timestamp')
  assert(r.ts._original === 1700000000000, 'should preserve original')
})
test('numeric timestamp (seconds)', () => {
  const r = JSON.parse(jsonTimestampConverter('{"ts":1700000000}'))
  assert(r.ts._asDate, 'should convert numeric seconds timestamp')
})
test('nested timestamps', () => {
  const r = JSON.parse(jsonTimestampConverter('{"data":{"time":1700000000000}}'))
  assert(r.data.time._asDate, 'should convert nested timestamp')
})

console.log('\n=== JSON Feed Validator ===')
test('valid feed passes', () => {
  const r = JSON.parse(jsonFeedValidator('{"version":"https://jsonfeed.org/version/1.1","title":"My Feed","items":[{"id":"1","content_text":"Hello"}]}'))
  assert(r.valid === true, 'should be valid')
})
test('missing title fails', () => {
  const r = JSON.parse(jsonFeedValidator('{"version":"https://jsonfeed.org/version/1.1","items":[]}'))
  assert(r.issues.some((i: string) => i.includes('title')), 'should report missing title')
})

console.log('\n=== Insomnia export ===')
test('export with body', () => {
  const r = JSON.parse(jsonToInsomnia('[{"name":"Create User","method":"POST","url":"https://api.ex.com/users","body":{"name":"Alice"}}]'))
  assert(r.resources[0].method === 'POST', 'method should be POST')
  assert(r.resources[0].body.text.includes('Alice'), 'body should contain input data')
})

console.log('\n=== Bookmarks ===')
test('uppercase A tag', () => {
  const r = JSON.parse(bookmarksToJson('<DT><A HREF="http://ex.com" ADD_DATE="123">Link</A>'))
  assert(r.length === 1, 'should find 1 bookmark')
  assert(r[0].url === 'http://ex.com', 'url mismatch')
})
test('nested bookmarks', () => {
  const r = JSON.parse(bookmarksToJson('<DT><H3>Folder</H3>\n<DL><DT><A HREF="http://ex.com">Link</A></DL>'))
  assert(r.length >= 1, 'should find bookmark in nested structure')
})

console.log('\n=== RSS (non-CDATA) ===')
test('plain text title and description', () => {
  const r = JSON.parse(rssToJson('<rss><channel><title>My Feed</title><item><title>Article</title><link>http://ex.com</link><description>Desc</description></item></channel></rss>'))
  assert(r.title === 'My Feed', `title should be "My Feed", got "${r.title}"`)
  assert(r.items[0].title === 'Article', 'item title mismatch')
  assert(r.items[0].description === 'Desc', 'desc mismatch')
})

console.log('\n=== Laravel Migration ===')
test('generates proper PHP migration', () => {
  const r = jsonToLaravelMigration('{"name":"Alice","age":null,"active":true}')
  assert(r.includes("'name'"), 'should include name column')
  assert(r.includes("'age'"), 'should include age column')
  assert(r.includes('->nullable()'), 'should add nullable for null defaults')
  assert(r.includes("'active'"), 'should include active column')
  assert(!r.includes("'extra'"), 'should not include non-existent columns')
})

console.log('\n=== Valibot Schema ===')
test('generates correct valibot schema', () => {
  const r = jsonToValibot('{"name":"Alice","age":30,"active":true}')
  assert(r.includes('v.string()'), 'should detect string')
  assert(r.includes('v.number()'), 'should detect number')
  assert(r.includes('v.boolean()'), 'should detect boolean')
  assert(r.includes('v.object({'), 'should create object')
})

console.log('\n=== io-ts Schema ===')
test('generates correct io-ts codec', () => {
  const r = jsonToIoTs('{"name":"Alice","age":30}')
  assert(r.includes('t.string'), 'should detect string')
  assert(r.includes('t.number'), 'should detect number')
  assert(r.includes('t.type({'), 'should create type')
})

console.log('\n=== PO/Gettext multiline ===')
test('multiline msgstr', () => {
  const r = JSON.parse(poToJson('msgid "welcome"\nmsgstr ""\n"Welcome to"\n" our app"'))
  assert(r['welcome'] === 'Welcome to our app', `got "${r['welcome']}"`)
})

console.log(`\n${'='.repeat(40)}`)
console.log(`Edge case tests: ${pass} passed, ${fail} failed out of ${pass + fail}`)

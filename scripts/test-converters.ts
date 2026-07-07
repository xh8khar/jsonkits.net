import {
  m3uToJson, jsonToM3u,
  srtToJson, jsonToSrt,
  plistToJson, jsonToPlist,
  kmlToGeojson, geojsonToKml,
  gpxToJson,
  icalToJson, jsonToIcal,
  rssToJson, jsonToRss,
  poToJson, jsonToPo,
  xliffToJson,
  arbToJson,
  jsonToIosStrings,
  stringsXmlToJson,
  vcardToJson, jsonToVcard,
  bookmarksToJson,
  jsonToLaravelMigration,
  jsonToDjangoModel,
  jsonToRailsMigration,
  jsonToSpringEntity,
  jsonToValibot,
  jsonToIoTs,
  jsonLogViewer,
  jsonTimestampConverter,
  jsonObfuscator,
  jsonFeedValidator,
  jsonToInsomnia,
  wktToGeojson,
  topojsonToGeojson,
  jsonToPandas,
  jsonToPysparkSchema,
  jsonToHiveDdl,
  jsonToDbml,
  jsonToPlantuml,
  jsonToVba,
  jsonToDelphi,
  jwkToPem,
  pemToJwk,
  jsonToSitemap,
  sitemapToJson,
  json5ToJson,
  jsonToJson5,
  jsonlToJson,
  jsonToJsonl,
  jsonToParquet,
  parquetToJson,
  jsonToPojo,
  jsonToFreezed,
  jsonToApex,
  jsonEditor,
  jsonParser,
  jsonStringify,
  harViewer,
  harToJson,
  geojsonViewer,
  jsonFindAllPaths,
  jsonI18nTranslator,
  jsonToLatexTable,
  jsonLdGenerator,
  schemaMarkupGenerator,
  jsonLdValidator,
  jsonToTable,
  jsonToChart,
  jsonGraphViewer,
  jsonFormGenerator,
  jsonTokenCounter,
  packageJsonValidator,
  manifestJsonGenerator,
  tsconfigValidator,
  composerJsonValidator,
  lottieJsonViewer,
  jsonResumeBuilder,
} from '../src/lib/converters'

let passed = 0
let failed = 0

function test(name: string, fn: () => string, expected: (result: string) => boolean) {
  try {
    const result = fn()
    if (expected(result)) {
      passed++
      console.log(`  ✓ ${name}`)
    } else {
      failed++
      console.log(`  ✗ ${name}`)
      console.log(`    Expected condition not met. Got: ${result.substring(0, 200)}`)
    }
  } catch (e) {
    failed++
    console.log(`  ✗ ${name} — threw: ${(e as Error).message}`)
  }
}

function hasNoHardcoded(result: string, hardcodedTerms: string[] = []): boolean {
  for (const term of hardcodedTerms) {
    if (result.includes(term)) return false
  }
  return result.length > 0
}

function isValidJson(result: string): boolean {
  try { JSON.parse(result); return true } catch { return false }
}

console.log('\n=== M3U Playlist ===')
test('m3uToJson with EXTINF', () => m3uToJson('#EXTM3U\n#EXTINF:180,My Song\n/media/song.mp3'), r => r.includes('My Song') && r.includes('/media/song.mp3'))
test('m3uToJson simple playlist', () => m3uToJson('#EXTM3U\nsong1.mp3\nsong2.mp3'), r => r.includes('song1') && r.includes('song2'))
test('m3uToJson empty', () => m3uToJson(''), r => r.length > 0)
test('jsonToM3u', () => jsonToM3u('[{"duration":180,"title":"Song","path":"/path.mp3"}]'), r => r.includes('Song') && r.includes('/path.mp3'))

console.log('\n=== SRT Subtitles ===')
test('srtToJson', () => srtToJson('1\n00:00:01,000 --> 00:00:05,000\nHello world'), r => r.includes('Hello world'))
test('jsonToSrt', () => jsonToSrt('[{"index":1,"start":"00:00:01,000","end":"00:00:05,000","text":"Hello"}]'), r => r.includes('Hello'))

console.log('\n=== PList ===')
test('plistToJson', () => plistToJson('<?xml version="1.0"><plist><dict><key>name</key><string>John</string></dict></plist>'), r => r.includes('John'))
test('jsonToPlist', () => jsonToPlist('{"name":"John"}'), r => r.includes('John'))

console.log('\n=== KML/GeoJSON ===')
test('kmlToGeojson', () => kmlToGeojson('<kml><Document><Placemark><name>Test</name><LineString><coordinates>-122.0,37.0 -121.9,37.1</coordinates></LineString></Placemark></Document></kml>'), r => {
  const p = JSON.parse(r)
  return p.features?.[0]?.geometry?.coordinates?.length > 0
})
test('geojsonToKml', () => geojsonToKml('{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-122,37]},"properties":{"name":"Test"}}]}'), r => r.includes('Test'))

console.log('\n=== GPX ===')
test('gpxToJson', () => gpxToJson('<gpx><trk><trkseg><trkpt lat="37.0" lon="-122.0"><ele>100</ele><time>2024-01-01</time></trkpt></trkseg></trk></gpx>'), r => r.includes('37') && r.includes('-122'))

console.log('\n=== iCal ===')
test('icalToJson', () => icalToJson('BEGIN:VCALENDAR\nBEGIN:VEVENT\nDTSTART:20240101\nSUMMARY:Test Event\nEND:VEVENT\nEND:VCALENDAR'), r => r.includes('Test Event'))
test('jsonToIcal', () => jsonToIcal('{"events":[{"dtstart":"20240101","summary":"Test"}]}'), r => r.includes('Test'))

console.log('\n=== RSS ===')
test('rssToJson', () => rssToJson('<rss><channel><title>My Feed</title><item><title>Article 1</title><link>http://example.com</link></item></channel></rss>'), r => r.includes('Article 1'))
test('jsonToRss', () => jsonToRss('{"title":"Feed","items":[{"title":"Article","link":"http://ex.com"}]}'), r => r.includes('Article'))

console.log('\n=== PO/Gettext ===')
test('poToJson', () => poToJson('msgid "Hello"\nmsgstr "Hola"\n\nmsgid "Goodbye"\nmsgstr "Adiós"'), r => r.includes('Hola') && r.includes('Adiós'))
test('jsonToPo', () => jsonToPo('{"Hello":"Hola"}'), r => r.includes('Hola'))

console.log('\n=== XLIFF ===')
test('xliffToJson', () => xliffToJson('<xliff><file><body><trans-unit id="greeting"><source>Hello</source><target>Hola</target></trans-unit></body></file></xliff>'), r => r.includes('Hola'))

console.log('\n=== ARB ===')
test('arbToJson', () => arbToJson('{"greeting":"Hello","@greeting":{"description":"A greeting"}}'), r => r.includes('Hello') && !r.includes('@greeting'))

console.log('\n=== iOS .strings ===')
test('jsonToIosStrings', () => jsonToIosStrings('{"greeting":"Hello"}'), r => r.includes('greeting') && r.includes('Hello'))

console.log('\n=== Android strings.xml ===')
test('stringsXmlToJson', () => stringsXmlToJson('<resources><string name="app_name">MyApp</string></resources>'), r => r.includes('MyApp'))

console.log('\n=== vCard ===')
test('vcardToJson', () => vcardToJson('BEGIN:VCARD\nVERSION:3.0\nFN:John Doe\nTEL:555-1234\nEND:VCARD'), r => r.includes('John Doe') && r.includes('555-1234'))
test('jsonToVcard', () => jsonToVcard('{"fullName":"Jane Doe","phone":"555-5678"}'), r => r.includes('Jane Doe'))

console.log('\n=== Bookmarks ===')
test('bookmarksToJson', () => bookmarksToJson('<DT><A HREF="http://example.com" ADD_DATE="123">My Bookmark</A>'), r => r.includes('example.com') && r.includes('My Bookmark'))

console.log('\n=== Framework Code Gen ===')
test('jsonToLaravelMigration', () => jsonToLaravelMigration('{"name":"Alice","age":30}'), r => r.includes('string') && r.includes('integer'))
test('jsonToDjangoModel', () => jsonToDjangoModel('{"name":"Alice","age":30}'), r => r.includes('CharField') || r.includes('TextField') || r.includes('IntegerField'))
test('jsonToRailsMigration', () => jsonToRailsMigration('{"name":"Alice","age":30}'), r => r.includes('string') || r.includes('integer'))
test('jsonToSpringEntity', () => jsonToSpringEntity('{"name":"Alice","age":30}'), r => r.includes('String') && r.includes('Long'))

console.log('\n=== Schema/Validation ===')
test('jsonToValibot', () => jsonToValibot('{"name":"Alice","age":30}'), r => r.includes('v.string') && r.includes('v.number'))
test('jsonToIoTs', () => jsonToIoTs('{"name":"Alice","age":30}'), r => r.includes('t.string') && r.includes('t.number'))
test('jsonFeedValidator valid', () => jsonFeedValidator('{"version":"https://jsonfeed.org/version/1.1","title":"My Feed","items":[]}'), r => r.includes('Valid'))
test('jsonFeedValidator invalid', () => jsonFeedValidator('{}'), r => r.includes('Missing'))

console.log('\n=== Utility ===')
test('jsonLogViewer', () => jsonLogViewer('{"timestamp":"2024-01-01","level":"info","message":"Test log"}'), r => r.includes('Test log'))
test('jsonTimestampConverter', () => jsonTimestampConverter('{"ts":1700000000000}'), r => r.includes('_asDate'))
test('jsonObfuscator', () => jsonObfuscator('{"name":"secret","value":42}'), r => r.includes('obfuscated') && r.includes('field_'))
test('jsonToInsomnia', () => jsonToInsomnia('[{"name":"Get Users","url":"https://api.example.com/users"}]'), r => r.includes('Get Users'))

console.log('\n=== GIS ===')
test('wktToGeojson POINT', () => wktToGeojson('POINT (-122.0 37.0)'), r => r.includes('-122') && r.includes('37'))
test('wktToGeojson LINESTRING', () => wktToGeojson('LINESTRING (-122.0 37.0, -121.9 37.1)'), r => r.includes('-122'))
test('wktToGeojson POLYGON', () => wktToGeojson('POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))'), r => r.includes('Polygon'))
test('topojsonToGeojson', () => topojsonToGeojson('{"type":"Topology","objects":{"layer":{"type":"Point","coordinates":[1,2]}},"arcs":[]}'), r => r.includes('FeatureCollection'))

console.log('\n=== Data Science ===')
test('jsonToPandas', () => jsonToPandas('[{"name":"Alice","age":30}]'), r => r.includes('pd.DataFrame'))
test('jsonToPysparkSchema', () => jsonToPysparkSchema('{"name":"Alice","age":30}'), r => r.includes('StructField'))
test('jsonToHiveDdl', () => jsonToHiveDdl('[{"name":"Alice","age":30}]'), r => r.includes('CREATE TABLE'))
test('jsonToDbml', () => jsonToDbml('[{"name":"Alice","age":30}]'), r => r.includes('Table'))

console.log('\n=== Code Gen ===')
test('jsonToPlantuml', () => jsonToPlantuml('{"name":"Alice","age":30}'), r => r.includes('@startuml'))
test('jsonToVba', () => jsonToVba('{"name":"Alice"}'), r => r.includes('Property'))
test('jsonToDelphi', () => jsonToDelphi('{"name":"Alice"}'), r => r.includes('class'))
test('jsonToPojo', () => jsonToPojo('{"name":"Alice"}'), r => r.includes('class') && r.includes('RootObject'))
test('jsonToFreezed', () => jsonToFreezed('{"name":"Alice"}'), r => r.includes('freezed'))
test('jsonToApex', () => jsonToApex('{"name":"Alice"}'), r => r.includes('class') && r.includes('Data'))

console.log('\n=== JWK/PEM ===')
test('jwkToPem', () => jwkToPem('{"kty":"RSA","alg":"RS256","kid":"mykey"}'), r => r.includes('RSA') && r.includes('mykey'))
test('pemToJwk', () => pemToJwk('-----BEGIN PUBLIC KEY-----\nKey Type: RSA\n-----END PUBLIC KEY-----'), r => r.includes('RSA'))

console.log('\n=== Sitemap ===')
test('jsonToSitemap', () => jsonToSitemap('[{"loc":"https://example.com","lastmod":"2024-01-01"}]'), r => r.includes('https://example.com'))
test('sitemapToJson', () => sitemapToJson('<urlset><url><loc>https://example.com</loc></url></urlset>'), r => r.includes('https://example.com'))

console.log('\n=== JSON5 ===')
test('json5ToJson', () => json5ToJson('{name:"Alice",age:30}'), r => r.includes('Alice'))
test('jsonToJson5', () => jsonToJson5('{"name":"Alice"}'), r => r.includes('name:'))

console.log('\n=== JSONL ===')
test('jsonlToJson', () => jsonlToJson('{"a":1}\n{"b":2}'), r => r.includes('"a"'))
test('jsonToJsonl', () => jsonToJsonl('[{"a":1},{"b":2}]'), r => r.includes('{"a":1}'))

console.log('\n=== Parquet (simulated) ===')
test('jsonToParquet', () => jsonToParquet('[{"name":"Alice","age":30}]'), r => r.includes('Parquet Schema'))
test('parquetToJson', () => parquetToJson('Row Group 1 (2 rows):\n  name: BYTE_ARRAY\n  age: INT64'), r => r.includes('sample_name') && !r.includes('HARDCODED'))

console.log('\n=== JSON Editor/Parser ===')
test('jsonEditor', () => jsonEditor('{"test":1}'), r => r.includes('test'))
test('jsonParser', () => jsonParser('{"name":"Alice","age":30}'), r => r.includes('type') && r.includes('rootKeys'))
test('jsonStringify', () => jsonStringify('{"name":"Alice"}'), r => r.includes('Alice'))

console.log('\n=== HAR ===')
test('harViewer', () => harViewer('{"log":{"version":"1.2","entries":[{"request":{"method":"GET","url":"https://ex.com"},"response":{"status":200},"timings":{"wait":10,"receive":20}}]}}'), r => r.includes('GET'))
test('harToJson', () => harToJson('{"log":{"version":"1.2","entries":[{"request":{"method":"GET","url":"https://ex.com"},"response":{"status":200}}]}}'), r => r.includes('GET'))

console.log('\n=== GeoJSON Viewer ===')
test('geojsonViewer', () => geojsonViewer('{"type":"Point","coordinates":[-122,37]}'), r => r.includes('Point'))

console.log('\n=== Path Finder ===')
test('jsonFindAllPaths', () => jsonFindAllPaths('{"user":{"name":"Alice","age":30}}'), r => r.includes('$.user.name') && r.includes('$.user.age'))

console.log('\n=== i18n Translator ===')
test('jsonI18nTranslator', () => jsonI18nTranslator('{"en":{"greeting":"Hello"},"es":{"greeting":"Hola"}}'), r => r.includes('Hello'))

console.log('\n=== LaTeX ===')
test('jsonToLatexTable', () => jsonToLatexTable('[{"name":"Alice","age":30}]'), r => r.includes('tabular'))

console.log('\n=== JSON-LD ===')
test('jsonLdGenerator', () => jsonLdGenerator('{"@type":"Person","name":"Alice"}'), r => r.includes('schema.org'))
test('schemaMarkupGenerator', () => schemaMarkupGenerator('{"@type":"WebSite","name":"MySite"}'), r => r.includes('script'))
test('jsonLdValidator', () => jsonLdValidator('{"@context":"https://schema.org","@type":"Person"}'), r => r.includes('Valid'))

console.log('\n=== Table/Chart/Graph ===')
test('jsonToTable', () => jsonToTable('[{"name":"Alice","age":30}]'), r => r.includes('Alice') && r.includes('<table'))
test('jsonToChart', () => jsonToChart('{"sales":100,"profit":50}'), r => r.includes('sales') && r.includes('100'))
test('jsonGraphViewer', () => jsonGraphViewer('{"name":"Alice","age":30}'), r => r.includes('Alice'))

console.log('\n=== Form Generator ===')
test('jsonFormGenerator', () => jsonFormGenerator('{"name":"Alice","active":true}'), r => r.includes('Alice') && r.includes('form'))

console.log('\n=== Token Counter ===')
test('jsonTokenCounter', () => jsonTokenCounter('{"test":"data"}'), r => r.includes('estimatedTokens'))

console.log('\n=== Validators ===')
test('packageJsonValidator', () => packageJsonValidator('{"name":"test","version":"1.0.0"}'), r => r.includes('Valid'))
test('tsconfigValidator', () => tsconfigValidator('{"compilerOptions":{"target":"ES2020"}}'), r => r.length > 0)
test('composerJsonValidator', () => composerJsonValidator('{"name":"vendor/pkg","description":"test"}'), r => r.includes('Valid'))

console.log('\n=== Manifest Generator ===')
test('manifestJsonGenerator', () => manifestJsonGenerator('{"name":"MyApp","short_name":"App"}'), r => r.includes('MyApp'))

console.log('\n=== Lottie Viewer ===')
test('lottieJsonViewer', () => lottieJsonViewer('{"v":"5.0","ip":0,"op":100,"fr":30,"w":500,"h":500,"layers":[]}'), r => r.includes('frames'))

console.log('\n=== Resume Builder ===')
test('jsonResumeBuilder', () => jsonResumeBuilder('{"name":"John Doe","label":"Developer"}'), r => r.includes('John Doe') && r.includes('Developer'))

console.log(`\n${'='.repeat(40)}`)
console.log(`Results: ${passed} passed, ${failed} failed out of ${passed + failed}`)

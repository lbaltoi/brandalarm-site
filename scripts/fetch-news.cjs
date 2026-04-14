/**
 * BrandAlarm IP News Feed Aggregator
 *
 * Two source types supported:
 *  - RSS/Atom feeds (via rss-parser with lenient XML mode)
 *  - HTML pages (via cheerio with custom per-source extractors)
 *
 * Runs daily via GitHub Actions. Failed sources are skipped gracefully.
 */

const Parser = require("rss-parser");
const cheerio = require("cheerio");
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

// ─── Source configuration ────────────────────────────────────────────────────

const RSS_SOURCES = [
  {
    id: "wipo",
    name: "WIPO",
    url: "https://www.wipo.int/pressroom/en/rss.xml",
    lang: "en",
    category: "official",
    color: "#005DA4",
  },
  {
    id: "ipkat",
    name: "The IPKat",
    url: "https://ipkitten.blogspot.com/feeds/posts/default?alt=rss",
    lang: "en",
    category: "blog",
    color: "#E63946",
  },
  {
    id: "wtr",
    name: "World Trademark Review",
    url: "https://www.worldtrademarkreview.com/rss",
    lang: "en",
    category: "news",
    color: "#8B4513",
  },
  {
    id: "juve",
    name: "JUVE Patent",
    url: "https://www.juve-patent.com/feed/",
    lang: "en",
    category: "news",
    color: "#1D3557",
  },
  {
    id: "ipwatchdog",
    name: "IPWatchdog",
    url: "https://www.ipwatchdog.com/feed/",
    lang: "en",
    category: "blog",
    color: "#B8860B",
  },
  {
    id: "kluwer-patent",
    name: "Kluwer Patent Blog",
    url: "https://patentblog.kluweriplaw.com/feed/",
    lang: "en",
    category: "blog",
    color: "#2E4057",
  },
  {
    id: "kluwer-copyright",
    name: "Kluwer Copyright Blog",
    url: "https://copyrightblog.kluweriplaw.com/feed/",
    lang: "en",
    category: "blog",
    color: "#4A5D7E",
  },
  {
    id: "spicyip",
    name: "SpicyIP",
    url: "https://spicyip.com/feed",
    lang: "en",
    category: "blog",
    color: "#DC143C",
  },
  {
    id: "patently-o",
    name: "Patently-O",
    url: "https://patentlyo.com/feed",
    lang: "en",
    category: "blog",
    color: "#006B3C",
  },
];

const HTML_SOURCES = [
  {
    id: "osim",
    name: "OSIM",
    url: "https://www.osim.ro/anunturi-si-noutati",
    baseUrl: "https://www.osim.ro",
    lang: "ro",
    category: "official",
    color: "#004B87",
    extractor: extractOsim,
  },
];

const MAX_ITEMS_PER_SOURCE = 10;
const MAX_TOTAL_ITEMS = 80;
const MAX_AGE_DAYS = 60;
const FETCH_TIMEOUT_MS = 20000;

// ─── Utility functions ───────────────────────────────────────────────────────

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(str, n) {
  if (!str) return "";
  if (str.length <= n) return str;
  return str.substring(0, n).replace(/\s+\S*$/, "") + "...";
}

function parseRssDate(item) {
  const raw = item.isoDate || item.pubDate || item.date || null;
  if (!raw) return null;
  const d = new Date(raw);
  return isNaN(d.getTime()) ? null : d;
}

// Romanian month names to number
const RO_MONTHS = {
  ianuarie: 0, februarie: 1, martie: 2, aprilie: 3, mai: 4, iunie: 5,
  iulie: 6, august: 7, septembrie: 8, octombrie: 9, noiembrie: 10, decembrie: 11,
};

function parseRomanianDate(text) {
  if (!text) return null;
  const cleaned = text.toLowerCase().replace(/\s+/g, " ").trim();
  // Match patterns like "08 aprilie 2026", "8 aprilie 2026"
  const match = cleaned.match(/(\d{1,2})\s+(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)\s+(\d{4})/);
  if (!match) return null;
  const day = parseInt(match[1], 10);
  const month = RO_MONTHS[match[2]];
  const year = parseInt(match[3], 10);
  const d = new Date(Date.UTC(year, month, day));
  return isNaN(d.getTime()) ? null : d;
}

function absoluteUrl(maybeRelative, baseUrl) {
  if (!maybeRelative) return "";
  try {
    return new URL(maybeRelative, baseUrl).href;
  } catch {
    return maybeRelative;
  }
}

// ─── HTTP fetch for HTML pages ───────────────────────────────────────────────

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === "https:" ? https : http;
    const req = client.get(
      url,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; BrandAlarmNewsBot/1.0; +https://brandalarm.ro)",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9,ro;q=0.8",
        },
        timeout: FETCH_TIMEOUT_MS,
      },
      (res) => {
        // Follow redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return httpGet(absoluteUrl(res.headers.location, url)).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      }
    );
    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timeout"));
    });
  });
}

// ─── RSS source fetcher ──────────────────────────────────────────────────────

async function fetchRssSource(source) {
  const parser = new Parser({
    timeout: FETCH_TIMEOUT_MS,
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; BrandAlarmNewsBot/1.0; +https://brandalarm.ro)",
      Accept: "application/rss+xml, application/xml, text/xml, application/atom+xml, */*",
    },
    xml2js: {
      strict: false,
      normalize: true,
      normalizeTags: true,
    },
  });

  try {
    console.log(`[RSS] Fetching ${source.name}...`);
    const feed = await parser.parseURL(source.url);
    const items = (feed.items || [])
      .slice(0, MAX_ITEMS_PER_SOURCE)
      .map((item) => {
        const date = parseRssDate(item);
        const description = stripHtml(
          item.contentSnippet || item.content || item.summary || item.description || ""
        );
        const rawKey = item.link || item.guid || item.title || "";
        return {
          id: `${source.id}-${Buffer.from(rawKey).toString("base64").substring(0, 24)}`,
          title: stripHtml(item.title || "").trim(),
          description: truncate(description, 280),
          url: item.link || item.guid || "",
          date: date ? date.toISOString() : null,
          source: source.name,
          sourceId: source.id,
          category: source.category,
          lang: source.lang,
          color: source.color,
        };
      })
      .filter((item) => item.title && item.url && item.date);

    console.log(`  [RSS] OK ${source.name}: ${items.length} items`);
    return items;
  } catch (err) {
    console.error(`  [RSS] FAIL ${source.name}: ${err.message}`);
    return [];
  }
}

// ─── HTML source fetcher ─────────────────────────────────────────────────────

async function fetchHtmlSource(source) {
  try {
    console.log(`[HTML] Fetching ${source.name}...`);
    const html = await httpGet(source.url);
    const $ = cheerio.load(html);
    const items = source.extractor($, source).slice(0, MAX_ITEMS_PER_SOURCE);
    console.log(`  [HTML] OK ${source.name}: ${items.length} items`);
    return items;
  } catch (err) {
    console.error(`  [HTML] FAIL ${source.name}: ${err.message}`);
    return [];
  }
}

// ─── OSIM extractor ──────────────────────────────────────────────────────────

function extractOsim($, source) {
  const items = [];

  // OSIM page structure: each news item is wrapped in an article/div with h2 title
  // Find all h2 elements that contain a link (news titles)
  $("h2").each((i, el) => {
    const $h2 = $(el);
    const $a = $h2.find("a").first();
    if (!$a.length) return;

    const title = $a.text().trim();
    const href = $a.attr("href") || "";
    if (!title || !href) return;

    // Skip navigation/menu items
    if (title.length < 10) return;

    const url = absoluteUrl(href, source.baseUrl);

    // Look for date in nearby text (next siblings or parent text)
    let dateText = "";
    let description = "";

    // Walk through next siblings to find date and description
    let $current = $h2.next();
    let walks = 0;
    while ($current.length && walks < 6) {
      const text = $current.text().trim();
      if (text) {
        if (!dateText && parseRomanianDate(text)) {
          dateText = text;
        } else if (!description && text.length > 30 && !parseRomanianDate(text)) {
          // Skip "Noutati si anunturi" category tag
          if (!text.toLowerCase().includes("noutati si anunturi") || text.length > 60) {
            description = text;
          }
        }
      }
      if (dateText && description) break;
      $current = $current.next();
      walks++;
    }

    // Fallback: search in parent container
    if (!dateText || !description) {
      const $parent = $h2.parent();
      const parentText = $parent.text();
      if (!dateText) {
        const dateMatch = parentText.match(/\d{1,2}\s+(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)\s+\d{4}/i);
        if (dateMatch) dateText = dateMatch[0];
      }
      if (!description) {
        // Get paragraphs in parent
        const paragraphs = $parent.find("p").map((i, p) => $(p).text().trim()).get().filter((p) => p.length > 30);
        if (paragraphs.length > 0) description = paragraphs[0];
      }
    }

    const date = parseRomanianDate(dateText);
    if (!date) return; // Skip items without valid date

    items.push({
      id: `${source.id}-${Buffer.from(url).toString("base64").substring(0, 24)}`,
      title: title.replace(/\s+/g, " "),
      description: truncate(stripHtml(description), 280),
      url,
      date: date.toISOString(),
      source: source.name,
      sourceId: source.id,
      category: source.category,
      lang: source.lang,
      color: source.color,
    });
  });

  return items;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`=== BrandAlarm News Fetcher ===`);
  console.log(`Time: ${new Date().toISOString()}`);
  console.log(`RSS sources: ${RSS_SOURCES.length}`);
  console.log(`HTML sources: ${HTML_SOURCES.length}\n`);

  const allItems = [];
  const sourceStats = [];

  // RSS sources
  for (const source of RSS_SOURCES) {
    const items = await fetchRssSource(source);
    allItems.push(...items);
    sourceStats.push({ id: source.id, name: source.name, count: items.length });
  }

  // HTML sources
  for (const source of HTML_SOURCES) {
    const items = await fetchHtmlSource(source);
    allItems.push(...items);
    sourceStats.push({ id: source.id, name: source.name, count: items.length });
  }

  // Dedupe by URL
  const seen = new Set();
  const deduped = allItems.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });

  // Filter by age
  const cutoff = Date.now() - MAX_AGE_DAYS * 86400000;
  const filtered = deduped.filter((item) => {
    const ts = new Date(item.date).getTime();
    return ts >= cutoff;
  });

  // Sort by date descending
  filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Trim to max total
  const final = filtered.slice(0, MAX_TOTAL_ITEMS);

  // Only include sources in the display list that actually returned items
  const successfulSourceIds = new Set(final.map((i) => i.sourceId));
  const allConfiguredSources = [...RSS_SOURCES, ...HTML_SOURCES];
  const displaySources = allConfiguredSources
    .filter((s) => successfulSourceIds.has(s.id))
    .map((s) => ({
      id: s.id,
      name: s.name,
      category: s.category,
      color: s.color,
    }));

  const output = {
    updatedAt: new Date().toISOString(),
    count: final.length,
    sources: displaySources,
    items: final,
  };

  const outputPath = path.join(__dirname, "..", "public", "news.json");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`\n=== Summary ===`);
  sourceStats.forEach((s) => {
    const mark = s.count > 0 ? "OK  " : "FAIL";
    console.log(`  ${mark} ${s.name}: ${s.count} items`);
  });
  console.log(`\nTotal written: ${final.length} items to ${outputPath}`);

  if (final.length === 0) {
    console.error("\nWARNING: No items fetched. Keeping previous news.json if exists.");
    process.exit(0);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

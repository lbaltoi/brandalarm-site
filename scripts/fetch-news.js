/**
 * BrandAlarm IP News Feed Aggregator
 *
 * Fetches RSS feeds from major IP news sources, parses, dedupes, and writes
 * to public/news.json. Run daily by GitHub Actions.
 *
 * To add a source: add to SOURCES array below. Required: name, url, lang.
 * Optional: category override, max items.
 */

const Parser = require("rss-parser");
const fs = require("fs");
const path = require("path");

const SOURCES = [
  {
    id: "euipo",
    name: "EUIPO",
    url: "https://www.euipo.europa.eu/en/news/rss.xml",
    lang: "en",
    category: "official",
    color: "#0068B4",
  },
  {
    id: "wipo",
    name: "WIPO",
    url: "https://www.wipo.int/pressroom/en/rss_feed.xml",
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
    id: "marques",
    name: "MARQUES Class 46",
    url: "http://www.marques.org/class46/default.asp?XMLRequest=RSS",
    lang: "en",
    category: "blog",
    color: "#C44536",
  },
  {
    id: "kluwer-tm",
    name: "Kluwer Trademark Blog",
    url: "https://trademarkblog.kluweriplaw.com/feed/",
    lang: "en",
    category: "blog",
    color: "#2E4057",
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
    id: "managing-ip",
    name: "Managing IP",
    url: "https://www.managingip.com/rss",
    lang: "en",
    category: "news",
    color: "#004E89",
  },
  {
    id: "juve",
    name: "JUVE Patent",
    url: "https://www.juve-patent.com/feed/",
    lang: "en",
    category: "news",
    color: "#1D3557",
  },
];

const MAX_ITEMS_PER_SOURCE = 10;
const MAX_TOTAL_ITEMS = 60;
const MAX_AGE_DAYS = 45;

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

function parseDate(item) {
  const raw = item.isoDate || item.pubDate || item.date || null;
  if (!raw) return null;
  const d = new Date(raw);
  return isNaN(d.getTime()) ? null : d;
}

async function fetchSource(source) {
  const parser = new Parser({
    timeout: 15000,
    headers: {
      "User-Agent": "BrandAlarm News Bot (https://brandalarm.ro)",
      Accept: "application/rss+xml, application/xml, text/xml",
    },
  });

  try {
    console.log(`Fetching ${source.name} (${source.url})...`);
    const feed = await parser.parseURL(source.url);
    const items = (feed.items || [])
      .slice(0, MAX_ITEMS_PER_SOURCE)
      .map((item) => {
        const date = parseDate(item);
        const description = stripHtml(item.contentSnippet || item.content || item.summary || item.description || "");
        return {
          id: `${source.id}-${Buffer.from(item.link || item.guid || item.title || "").toString("base64").substring(0, 24)}`,
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

    console.log(`  OK: ${items.length} items`);
    return items;
  } catch (err) {
    console.error(`  FAIL ${source.name}: ${err.message}`);
    return [];
  }
}

async function main() {
  console.log(`\n=== BrandAlarm News Fetcher ===`);
  console.log(`Time: ${new Date().toISOString()}`);
  console.log(`Sources: ${SOURCES.length}\n`);

  const allItems = [];
  for (const source of SOURCES) {
    const items = await fetchSource(source);
    allItems.push(...items);
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

  const output = {
    updatedAt: new Date().toISOString(),
    count: final.length,
    sources: SOURCES.map((s) => ({
      id: s.id,
      name: s.name,
      category: s.category,
      color: s.color,
    })),
    items: final,
  };

  const outputPath = path.join(__dirname, "..", "public", "news.json");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`\n=== Done ===`);
  console.log(`Total items: ${final.length}`);
  console.log(`Written to: ${outputPath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

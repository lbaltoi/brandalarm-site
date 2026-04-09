# BrandAlarm News Feed System

## How it works

1. **GitHub Actions** runs `scripts/fetch-news.js` daily at 06:00 UTC (09:00 Bucharest)
2. The script fetches RSS feeds from 8 major IP news sources
3. Parses, filters (last 45 days), dedupes, sorts by date
4. Writes the top 60 items to `public/news.json`
5. Commits the updated file to `main` branch
6. Cloudflare Pages auto-deploys the new version
7. The `/blog` and `/en/blog` pages fetch `/news.json` at runtime and display the items

## Sources

Edit `scripts/fetch-news.js` → `SOURCES` array to add/remove feeds. Each source needs:
- `id` — unique short identifier (e.g., "euipo")
- `name` — displayed label
- `url` — RSS/Atom feed URL
- `lang` — primary language (en/ro)
- `category` — "official" | "blog" | "news"
- `color` — hex color for the badge

## Manual trigger

To run the workflow manually from GitHub:
1. Go to **Actions** tab
2. Select **Fetch IP News Feed**
3. Click **Run workflow** → **Run workflow**

## Local test

```bash
cd brandalarm-site
npm install rss-parser
node scripts/fetch-news.js
cat public/news.json
```

## Troubleshooting

- If a source fails (timeout, parse error), the script logs the error and continues with the others. The news.json still gets updated with successful sources.
- If ALL sources fail (rare), the old news.json is kept.
- Check the Actions log in GitHub for the most recent run.

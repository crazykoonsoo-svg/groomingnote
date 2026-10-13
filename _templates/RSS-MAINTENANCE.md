# RSS maintenance

rss.xml is compiled by GitHub Pages from site.pages. Keep this front matter at the
start of every article index.html so new posts are discovered automatically:

---
layout: null
---

Keep title, canonical, article:published_time, article:modified_time and article-body
markup. Use actual dates. Feed publishes the most recently modified 20 articles with
full body and absolute resource URLs. Preserve LF line endings and the standard
article-body closing wrapper. Maintain sitemap.xml separately. After deployment,
validate /rss.xml and confirm the new article appears. Do not re-submit the same
feed address for each new post.

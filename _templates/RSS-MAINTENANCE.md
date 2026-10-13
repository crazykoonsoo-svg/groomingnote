# RSS maintenance

rss.xml is a Jekyll/Liquid template compiled by the existing GitHub Pages build.
It discovers article index.html files automatically, orders them by article:modified_time
then path, and publishes the latest 20 entries with complete article-body HTML.
New articles must keep canonical, title, article:published_time, article:modified_time,
and the existing article-body closing wrapper. Use actual publication/update dates.
RSS does not replace sitemap.xml. Keep all published canonical URLs in the sitemap.
After deploying, check /rss.xml as XML, item count, absolute URLs and full article content.
No manual feed-list update or repeated Search Advisor submission is required.

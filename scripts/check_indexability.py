#!/usr/bin/env python3
"""Reject duplicate sitemap URLs and non-indexable canonical pages before deployment."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json
import sys
import xml.etree.ElementTree as ET

SOURCE = Path(__file__).resolve().parents[1]
HOST = "https://groomingnote.co.kr"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}


class PageInfo(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.canonicals = []
        self.robots = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href", ""))
        if tag == "meta" and attrs.get("name", "").lower() in {"robots", "yeti"}:
            self.robots.extend(attrs.get("content", "").lower().replace(",", " ").split())


def main():
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else SOURCE
    sitemap = ET.parse(root / "sitemap.xml")
    urls = [node.text for node in sitemap.findall("s:url/s:loc", NS)]
    # Existing Korean article URLs use both Unicode and UTF-8 percent encoding.
    decoded_urls = [unquote(url) for url in urls]
    errors = []
    if not urls:
        errors.append("Sitemap has no URLs")
    for url, count in Counter(decoded_urls).items():
        if count > 1:
            errors.append(f"Duplicate sitemap URL ({count}): {url}")
    catalog = json.loads((SOURCE / "_data/article_catalog.json").read_text())
    for article in catalog:
        if HOST + article["path"] not in decoded_urls:
            errors.append("Article missing from sitemap: " + article["path"])
    for url in set(urls):
        parsed = urlsplit(url)
        if parsed.scheme + "://" + parsed.netloc != HOST or parsed.query or parsed.fragment:
            errors.append("Non-canonical sitemap URL: " + url)
            continue
        relative = unquote(parsed.path).lstrip("/")
        page = root / relative
        if not relative or relative.endswith("/"):
            page = page / "index.html"
        if not page.is_file():
            errors.append("Missing sitemap page: " + url)
            continue
        info = PageInfo(page.read_text())
        if [unquote(value) for value in info.canonicals] != [unquote(url)]:
            errors.append(f"Canonical mismatch: {url} -> {info.canonicals}")
        if {"noindex", "none"}.intersection(info.robots):
            errors.append("Indexing blocked for sitemap page: " + url)
    if errors:
        print("\n".join(errors))
        return 1
    print(f"Indexability check passed: {len(urls)} canonical URLs, {len(catalog)} articles")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

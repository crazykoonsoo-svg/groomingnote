# 게시물 목록 관리

메인 초기 HTML, 검색·필터, 카테고리 목록은 `_data/article_catalog.json`을 함께 사용합니다. 목록 개수는 이 데이터에서 자동 계산합니다.

게시물을 추가하거나 SEO 제목·대표 이미지를 수정한 뒤 저장소 루트에서 실행합니다.

```sh
python3 scripts/sync_catalog.py
python3 scripts/sync_catalog.py --check
```

기존 소개문·검색 태그·정렬 순서·대체텍스트는 보존하고 글의 SEO 제목과 대표 이미지 경로를 동기화합니다. 새 글은 목록 위에 추가합니다. 새 글의 `alt`, `card_label`, `category`, `tags`, 지역 가이드의 `region`을 확인하세요. `region`은 `capital`, `chungcheong`, `yeongnam`, `honam`을 사용하며 통학 출발 권역과 실제 소재지를 혼동하지 않도록 글에 주소를 표시합니다.

배포 시 Jekyll이 `_includes/article-card.html`, `_includes/post-card.html`과 공통 목록 데이터를 렌더링합니다. `assets/homepage.js`의 YAML front matter는 Liquid 렌더링에 필요하므로 유지합니다. JavaScript를 쓰지 않아도 글 링크와 권역별 이동 링크는 표시됩니다.

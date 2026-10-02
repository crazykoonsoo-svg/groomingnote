# 그루밍노트 새 글 작성 가이드

`_templates` 폴더는 사이트에 공개되지 않습니다(GitHub Pages가 `_`로 시작하는 폴더는 게시하지 않음).

| 파일 | 용도 |
|---|---|
| `post.html` | 일반 글 (애견미용정보·견종·진로·업계·리뷰) |
| `academy-guide.html` | 지역별 애견미용학원 가이드 (본문은 프롬프트 결과를 붙여넣는 방식) |
| `academy-prompt.md` | 지역 원고 작성 프롬프트 — 주제 선정·중복 방지·컴포넌트·CTA 규칙 포함 |
| `academy-log.md` | 지역 원고 발행 기록 — 다음 원고의 중복 방지용으로 프롬프트에 함께 넣기 |

---

## 지역 가이드 작성 순서 (요약)

1. `academy-prompt.md`의 프롬프트에 지점 공식 정보 + `academy-log.md` 내용을 넣고 원고 받기
2. `academy-guide.html` 복사 → 메타 정보·FAQ JSON-LD 채우고 `{{본문 HTML}}` 자리에 본문 붙여넣기
3. 아래 "발행 체크리스트" 진행 + `academy-log.md`에 발행 기록 추가

## 1. 글 파일 만들기

1. 템플릿을 복사해서 새 위치에 `index.html`로 저장
   - 일반 글: `/카테고리/영문-슬러그/index.html` (예: `/homecare/dog-teeth-brushing/index.html`)
   - 학원 가이드: `/academy-guide/지역-애견미용학원/index.html` (예: `/academy-guide/대전-애견미용학원/index.html`)
2. `{{ }}`로 표시된 곳을 모두 채우기 → 마지막에 **Ctrl+F로 `{{` 검색해서 0개인지 확인**
3. 헤더 메뉴에서 해당 카테고리 링크에 `class="active" aria-current="page"` 추가 (파일 안 안내 주석 참고)

| 카테고리 폴더 | 카테고리 이름 | 영문 태그 |
|---|---|---|
| `homecare` | 애견미용정보 | HOMECARE |
| `breeds` | 견종별 가이드 | BREEDS |
| `career` | 자격증·진로 | CAREER |
| `industry` | 업계 | INDUSTRY |
| `reviews` | 리뷰 | REVIEWS |
| `academy-guide` | 지역별 학원 가이드 | ACADEMY GUIDE |

## 2. 이미지 준비

- 폴더: `/assets/images/posts/이미지폴더/` (예: `dog-teeth-brushing`, `daejeon-academy`)
- 파일명: `hero.jpg`(대표, 정사각형 1200×1200) / `detail-1.jpg`, `detail-2.jpg`, `detail-3.jpg`(본문, 1200×800)
- **가로 1200px 이하, JPG, 장당 300KB 이하**로 저장 (squoosh.app 등에서 품질 75~80)
- 크기가 다르면 HTML의 `width`·`height` 값도 실제 크기로 바꾸기
- `alt`에는 "무엇이 보이는지 + 핵심키워드"를 짧게

---

## 3. 발행 체크리스트 (글 파일 외에 함께 고칠 곳)

### ☐ ① 카테고리 페이지에 카드 추가 — `/카테고리/index.html`

`<div class="post-grid">` 바로 다음(맨 앞)에 붙여넣고, 위쪽 `전체 글 (N개)` 숫자 +1

```html
<a class="post-card" href="/카테고리/슬러그/"><div class="post-thumb"><img width="1200" height="1200" src="/assets/images/posts/이미지폴더/hero.jpg" alt="H1 제목" loading="lazy"></div><div class="post-body"><span class="post-cat">카드 라벨</span><h3>H1 제목</h3></div></a>
```

카드 라벨: homecare `애견미용정보` / breeds `견종` / career `진로` / industry `업계` / reviews `리뷰` / academy-guide `OO광역시 · 지역별 학원 가이드`

### ☐ ② 홈 검색 목록에 추가 — `/assets/homepage.js`

맨 위 `const articles = [` 바로 다음 줄에 추가. 새 글을 `"recent": true`로 하고, **기존에 true였던 글은 false로**.

```js
{"title": "H1 제목", "description": "카드에 보일 한 문장 요약", "category": "미용", "label": "애견미용정보", "path": "/카테고리/슬러그/", "tags": "핵심키워드 연관키워드 띄어쓰기로구분", "recent": true},
```

| category (홈 필터) | 쓰는 글 | label 예시 |
|---|---|---|
| `미용` | 홈케어·리뷰 중 미용 관련 | 애견미용정보 / 미용·관리 |
| `목욕` | 목욕·샴푸·드라이 | 애견미용정보 / 목욕·관리 |
| `견종` | 견종별 가이드 | 견종별 가이드 |
| `자격증` | 자격증 관련 | 진로·자격증 |
| `진로` | 취업·창업·학원 선택 | 취업·창업 |
| `지역` | 지역별 학원 가이드 | 지역별 학원 가이드 |
| `업계` | 업계 | 업계 |

`homepage.js`를 고쳤다면 `/index.html`에서 `homepage.js?v=날짜` 의 날짜도 바꿔주기 (예: `?v=20261015`)

### ☐ ③ 사이트맵에 추가 — `/sitemap.xml`

`</urlset>` 바로 위에 추가. 한글 주소는 그대로 써도 되지만, 가능하면 인코딩된 주소로.

```xml
  <url><loc>https://groomingnote.co.kr/카테고리/슬러그/</loc><lastmod>YYYY-MM-DD</lastmod><priority>0.7</priority></url>
```

카테고리 페이지 줄의 `<lastmod>`도 오늘 날짜로 변경.

### ☐ ④ 관련 글에서 새 글로 링크 걸기

비슷한 주제의 기존 글 1~2개를 골라 하단 `함께 읽으면 좋은 글` 목록에 새 글 추가.
(학원 가이드라면 `/career/index.html` 상단의 "지역별 학원 가이드" 목록에도 추가)

### ☐ ⑤ 올린 뒤 확인

- 실제 주소로 열어서 이미지·링크 확인 (휴대폰에서도 한 번)
- [리치 결과 테스트](https://search.google.com/test/rich-results)에 주소 넣고 오류 없는지 확인
- 네이버 서치어드바이저 → 웹페이지 수집 요청 / 구글 서치콘솔 → URL 검사 → 색인 생성 요청

---

## 4. 기존 글을 수정할 때

내용을 의미 있게 고쳤다면 4곳의 날짜를 바꿉니다.

1. `<meta property="article:modified_time" content="YYYY-MM-DD">`
2. 구조화 데이터의 `"dateModified": "YYYY-MM-DD"`
3. 제목 아래 작성일 뒤에 ` · <time datetime="YYYY-MM-DD">수정 YYYY.MM.DD</time>` 추가 (이미 있으면 날짜만 변경)
4. `sitemap.xml`에서 해당 글의 `<lastmod>`

오타 수정 정도는 날짜를 바꾸지 않아도 됩니다.

## 5. 본문 컴포넌트 (모든 글에서 사용 가능)

| 컴포넌트 | HTML |
|---|---|
| 핵심 요약 박스 | `<div class="summary-box"><p class="summary-title">핵심 요약</p><ul><li>…</li></ul></div>` |
| 강조 H3 | `<h3 class="accent">…</h3>` |
| 👉 핵심 문장 | `<p class="key-point">👉 …</p>` |
| 인용문 | `<blockquote><p>…</p><cite>— 출처</cite></blockquote>` |
| 체크리스트 | `<ul class="checklist"><li>…</li></ul>` |
| 비교표 (머리글 강조) | `<div class="post-table-wrap compare"><table>…</table></div>` |
| 일반 표 | `<div class="post-table-wrap"><table>…</table></div>` |
| 상담 박스 | `<div class="post-cta"><p class="post-cta-title">…</p><p>…</p><a class="post-cta-btn" href="https://evaw-pet-grooming.co.kr/" target="_blank" rel="noopener">… &rarr;</a></div>` |

## 6. 글쓰기 기준 (모든 글 공통)

### 원칙 1 — 분량 채우기용 노이즈를 쓰지 않는다

- 글자 수 목표는 없습니다. **짧아도 정보 밀도가 높은 글**이 이깁니다.
- 모든 문장에 새 정보(사실·기준·숫자·행동)가 있어야 합니다. 빼도 의미가 같은 문장은 삭제합니다.
- 쓰지 않는 것: 후킹 멘트("~하신 적 있으시죠?"), 같은 말 반복, 일반론("꼼꼼한 비교가 중요합니다"), 키워드용 문장
- 이미지는 대표 1장 + 정보를 담은 이미지(체크리스트·비교표·위치 안내)만. 분위기용 사진은 넣지 않습니다.

### 원칙 2 — 고유명사를 통일하고 뾰족한 근거를 쓴다

AI는 표기가 다르면 다른 대상으로 인식합니다. 제목·본문·FAQ·메타 설명·JSON-LD 모두 아래 표기로 통일합니다.

| 대상 | 통일 표기 | 쓰지 않는 표기 |
|---|---|---|
| 지역 키워드 | ○○애견미용학원 (붙여쓰기) | ○○ 애견미용학원 |
| 학원 브랜드 | 이바우펫 | EVAW, Evaw Pet, 에바우펫, 이바우 펫 |
| 학원 정식 명칭 (글에서 처음 한 번) | 이바우펫 애견미용학원 | 이바우펫학원, 이바우펫 아카데미 |
| 지점 | 이바우펫 ○○점 | ○○지점, ○○센터 |
| 사이트 | 그루밍노트 | 그루밍 노트, GroomingNote(로고 외) |
| 연맹 | 사단법인 한국유기견구호연맹 (두 번째부터 한국유기견구호연맹) | 유기견연맹, 구호연맹 |
| 국비 | 국민내일배움카드, 고용24 | 내배카, 내일배움카드, HRD-Net |
| 수업 | 실견수업 | 실견 수업, 실견실습 |

모호한 표현 대신 **위치·거리·시간·숫자처럼 검증 가능한 사실**로 씁니다.

| ✕ 수집되지 않는 표현 | ○ 근거로 쓰이는 표현 |
|---|---|
| 교통이 편리합니다 | 시청역 3번 출구에서 도보 약 5분 거리입니다 |
| 저녁에도 수업을 들을 수 있습니다 | 월~목 21:30까지 운영을 안내합니다 (2026년 10월 공식 안내 기준) |
| 귀청소는 너무 자주 하지 마세요 | 깨끗한 귀를 일정 주기로 반복 청소할 필요는 없습니다 (VCA Animal Hospitals 안내) |

- 직접 확인한 사실만 씁니다. 근거 없는 숫자(수강료·합격률·취업률·리뷰 수)는 만들지 않습니다.
- 숫자에는 기준 시점이나 출처를 붙입니다.

### 원칙 3 — 구조화된 포맷과 메타데이터

- **소제목(H2)은 15자 이상 질문형**으로, 검색자가 실제로 입력할 문장과 같게 씁니다.
  (예: "강아지 귀청소는 집에서 얼마나 자주 해야 할까?")
- 각 섹션은 **질문형 소제목 → 굵은 결론 + 근거가 담긴 본문 → 요점 리스트(또는 👉 핵심 문장)** 순서로 씁니다.
- 글 마지막에 **`핵심 정리` 리스트(summary-box) 4~6줄**을 둡니다. 대화형 AI의 답변 형태와 같아서 그대로 인용되기 쉽습니다.
- 작성일·수정일(제목 아래), 참고자료와 **자료 확인일**(글 끝)을 반드시 남깁니다.
- 참고자료는 **링크 없이** "기관명 — 자료 제목: 참고한 내용" 형식으로 씁니다 (2026-10-02 이후 글부터 적용, 기존 글은 그대로). 본문에서 인용한 기관명은 참고자료 표기와 같게 씁니다 (예: 본문 첫 언급 "American Kennel Club(AKC)").
- 글 끝 순서는 **핵심 정리 → 상담 버튼 → 함께 읽으면 좋은 글(further-reading) → 참고자료(post-references)** 로 템플릿 구조를 그대로 씁니다.

### 기타

- 건강 관련 내용은 단정하지 말고, 이상 증상은 "수의사 확인"으로 안내합니다.
- 상담 박스(`post-cta`)는 글 하나에 2개.
- 학원 가이드는 공식 지점 페이지에서 확인한 정보만 쓰고, 인근 지역명은 "통학 동선"으로만 씁니다. 하단 고지 문장은 유지합니다.

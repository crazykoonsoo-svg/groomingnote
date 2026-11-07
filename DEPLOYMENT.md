# GroomingNote Vercel migration

Source baseline: 407a1d4f7b34ae1a7896342122286d62cf177263 (129 articles).
Prepared configuration only. A Vercel build has NOT been run or verified.

Retain Jekyll/Liquid rendering for article cards, category lists and RSS. Do not deploy raw source as a plain static directory.

Before deployment: the connected team is Hobby; select an eligible commercial plan. Do not upgrade billing without the owner's authorization. Verify Jekyll dependency resolution in the build environment and commit the generated Gemfile.lock with the Linux platform once available.

Create a dedicated groomingnote project linked to crazykoonsoo-svg/groomingnote. Verify homepage, all 129 article paths, image assets, canonical URLs, robots.txt, sitemap.xml and rendered rss.xml. Confirm cancelled dog-winter-grooming-coat-care remains 404. Confirm the pending dog-clothes-coat-tangles article renders fully.

Only after the deployment is READY and verified, add groomingnote.co.kr to the project, then apply its exact current DNS instructions in Gabia. Existing apex A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. Preserve unrelated DNS records. Keep old hosting available until HTTPS and custom-domain checks pass. Existing article paths and canonical domain must remain unchanged.

After cutover: update publishing automation to verify Vercel deployments, then submit the pending article to Naver and Google. Check hourly spacing against actual successful publication time. No new article production while migration remains incomplete.

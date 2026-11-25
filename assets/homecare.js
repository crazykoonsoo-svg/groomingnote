"use strict";

const guides = document.querySelector("#homecare-guides");
const tabs = [...guides.querySelectorAll("[data-care-filter]")];
const cards = [...guides.querySelectorAll("[data-care-topic]")];
const title = guides.querySelector("#guide-list-title");
const status = guides.querySelector("#care-filter-status");

function updateFilter() {
  const key = location.hash.slice(1);
  const selected = tabs.find(tab => tab.dataset.careFilter === key) || tabs[0];
  const topic = selected.dataset.careFilter;
  for (const tab of tabs) {
    if (tab === selected) tab.setAttribute("aria-current", "true");
    else tab.removeAttribute("aria-current");
  }

  let count = 0;
  for (const card of cards) {
    card.hidden = topic !== "all" && card.dataset.careTopic !== topic;
    if (!card.hidden) count += 1;
  }

  const label = topic === "all" ? "전체 글" : selected.textContent.trim();
  title.textContent = `${label} (${count}개)`;
  status.textContent = `${label} ${count}개, 최신순`;
  if (key === "homecare-guides" || selected !== tabs[0]) {
    guides.scrollIntoView({ block: "start" });
  }
}

window.addEventListener("hashchange", updateFilter);
updateFilter();

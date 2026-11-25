/* Builds the pages from projects.js. You shouldn't need to edit this. */

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const visibleLinks = list => (list || []).filter(l => l.url);

function renderShared() {
  document.querySelectorAll("[data-name]").forEach(el => (el.textContent = SITE.name));
  document.querySelectorAll("[data-cv]").forEach(el => (el.href = SITE.cv));
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const contact = document.querySelector("[data-contact]");
  if (contact) {
    contact.innerHTML =
      `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>` +
      visibleLinks(SITE.links).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
  }
}

/* ---------- Home page ---------- */
function renderHome() {
  document.title = `${SITE.name}: Portfolio`;
  document.querySelector("[data-statement]").textContent = SITE.statement;
  document.querySelector("[data-intro]").textContent = SITE.intro;

  // Filters, built from the categories you used
  const cats = ["All", ...new Set(PROJECTS.flatMap(p => p.categories))];
  const filters = document.querySelector("[data-filters]");
  filters.innerHTML = cats
    .map((c, i) => `<button type="button" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`)
    .join("");

  const grid = document.querySelector("[data-grid]");
  grid.innerHTML = PROJECTS.map(
    p => `
    <li class="work" data-cats="${esc(p.categories.join("|"))}">
      <a href="project.html?id=${encodeURIComponent(p.id)}">
        <div class="work-img"><img src="${esc(p.cover)}" alt="" loading="lazy"></div>
        <p class="work-question">${esc(p.question)}</p>
        <p class="work-meta"><span class="work-title">${esc(p.title)}</span><span>${esc(p.year)}</span></p>
        <p class="work-tags">${p.categories.map(esc).join(", ")}</p>
      </a>
    </li>`
  ).join("");

  filters.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    filters.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b === btn));
    const cat = btn.dataset.cat;
    grid.querySelectorAll(".work").forEach(li => {
      li.hidden = cat !== "All" && !li.dataset.cats.split("|").includes(cat);
    });
  });

  // About
  document.querySelector("[data-photo]").src = SITE.photo;
  document.querySelector("[data-photo]").alt = `Portrait of ${SITE.name}`;
  document.querySelector("[data-about]").innerHTML = SITE.about.map(p => `<p>${esc(p)}</p>`).join("");
  document.querySelector("[data-interests]").innerHTML = SITE.interests.map(i => `<li>${esc(i)}</li>`).join("");
  document.querySelector("[data-skills]").innerHTML = Object.entries(SITE.skills)
    .map(([group, items]) => `<div><h4>${esc(group)}</h4><p>${items.map(esc).join(", ")}</p></div>`)
    .join("");
}

/* ---------- Project page ---------- */
function renderProject() {
  const id = new URLSearchParams(location.search).get("id");
  const index = PROJECTS.findIndex(p => p.id === id);
  const main = document.querySelector("[data-project]");

  if (index === -1) {
    main.innerHTML = `<div class="not-found"><h1>Project not found</h1>
      <p>The link may be out of date. <a href="index.html#work">See all projects</a>.</p></div>`;
    return;
  }

  const p = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  document.title = `${p.title} | ${SITE.name}`;

  const facts = [
    ["Role", p.role],
    ["Timeline", p.timeline],
    ["Team", p.team],
    ["Tools and methods", (p.tools || []).join(", ")]
  ].filter(([, v]) => v);

  const links = visibleLinks(p.links);

  const sections = (p.sections || [])
    .map(
      s => `
    <section class="case-section">
      <h2>${esc(s.heading)}</h2>
      <div class="prose">${(s.paragraphs || []).map(t => `<p>${esc(t)}</p>`).join("")}</div>
      ${(s.images || [])
        .map(
          img => `<figure><img src="${esc(img.src)}" alt="${esc(img.caption || "")}" loading="lazy">
          ${img.caption ? `<figcaption>${esc(img.caption)}</figcaption>` : ""}</figure>`
        )
        .join("")}
    </section>`
    )
    .join("");

  main.innerHTML = `
    <header class="case-head">
      <p class="case-cats">${p.categories.map(esc).join(", ")}, ${esc(p.year)}</p>
      <h1>${esc(p.title)}</h1>
      <p class="case-question">${esc(p.question)}</p>
    </header>

    <div class="case-intro">
      <p class="case-summary">${esc(p.summary)}</p>
      <dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      ${links.length ? `<p class="case-links">${links.map(l => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</p>` : ""}
    </div>

    ${
      p.video
        ? `<div class="video"><iframe src="${esc(p.video)}" title="${esc(p.title)} video" allowfullscreen loading="lazy"></iframe></div>`
        : `<figure class="case-cover"><img src="${esc(p.cover)}" alt=""></figure>`
    }

    ${sections}

    <nav class="next" aria-label="Next project">
      <a href="project.html?id=${encodeURIComponent(next.id)}">
        <span>Next project</span>
        <strong>${esc(next.title)}</strong>
      </a>
    </nav>`;
}

renderShared();
if (document.body.dataset.page === "home") renderHome();
if (document.body.dataset.page === "project") renderProject();

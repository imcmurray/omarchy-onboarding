/* Omarchy onboarding deck engine */
(function () {
  const root = document.body;
  if (!root.classList.contains("deck")) return;

  const slides = Array.from(document.querySelectorAll(".slide"));
  const fill = document.querySelector(".progress > i");
  const countEl = document.querySelector(".meta .count");
  const total = slides.length;
  let i = 0;
  let presenter = null;
  let t0 = Date.now();
  const channel = ("BroadcastChannel" in window) ? new BroadcastChannel("omarchy-deck") : null;

  function parseHash() {
    const n = parseInt((location.hash || "#1").replace("#", ""), 10);
    return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), total - 1) : 0;
  }

  function notesOf(el) {
    return (el.getAttribute("data-notes") || "").trim();
  }

  function titleOf(el) {
    const h = el.querySelector("h1, h2, .one-line");
    return h ? h.textContent.replace(/\s+/g, " ").trim() : "Slide";
  }

  function payload() {
    const next = slides[i + 1];
    return {
      type: "state",
      index: i,
      total,
      day: root.dataset.day || "",
      dayTitle: root.dataset.title || "",
      currentTitle: titleOf(slides[i]),
      nextTitle: next ? titleOf(next) : "— end —",
      notes: notesOf(slides[i]),
      elapsed: Date.now() - t0,
      html: slides[i].innerHTML
    };
  }

  function broadcast() {
    const p = payload();
    if (channel) channel.postMessage(p);
    try { localStorage.setItem("omarchy-deck-state", JSON.stringify(p)); } catch (e) {}
    if (presenter && !presenter.closed) {
      try { presenter.postMessage(p, "*"); } catch (e) {}
    }
  }

  function render() {
    slides.forEach((s, n) => s.classList.toggle("active", n === i));
    if (fill) fill.style.width = ((i + 1) / total * 100) + "%";
    if (countEl) countEl.textContent = String(i + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
    if (location.hash !== "#" + (i + 1)) history.replaceState(null, "", "#" + (i + 1));
    broadcast();
  }

  function go(n) {
    i = Math.min(Math.max(n, 0), total - 1);
    render();
  }
  function next() { go(i + 1); }
  function prev() { go(i - 1); }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      (document.querySelector(".stage") || document.documentElement).requestFullscreen().catch(() => {});
      root.classList.add("fs");
    } else {
      document.exitFullscreen();
      root.classList.remove("fs");
    }
  }

  function presenterHTML() {
    const cssInk = new URL("../assets/css/inkblade.css", location.href).href;
    return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"/>
<title>Presenter — Day ${root.dataset.day || ""}</title>
<link rel="stylesheet" href="${cssInk}"/>
<style>
  body { background: var(--darker); margin: 0; padding: 24px; height: 100vh; display: grid;
    grid-template-rows: auto 1fr auto; gap: 18px; overflow: hidden; }
  header { display: flex; justify-content: space-between; align-items: baseline; }
  header .day { font-family: var(--font-label); letter-spacing: .24em; text-transform: uppercase; color: var(--accent); }
  .timer { font-family: var(--font-mono); font-size: 28px; color: var(--bright); }
  .grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 18px; min-height: 0; }
  .pane { background: var(--bg); border: 1px solid color-mix(in srgb, var(--fg) 12%, transparent); padding: 18px 20px; overflow: auto; }
  .pane h3 { font-family: var(--font-label); letter-spacing: .2em; text-transform: uppercase; color: var(--muted); font-size: 12px; margin: 0 0 10px; }
  .now { font-family: var(--font-display); font-size: 32px; color: var(--bright); margin: 0 0 12px; line-height: 1.1; }
  .notes { font-size: 18px; line-height: 1.5; white-space: pre-wrap; color: var(--fg); }
  .next { font-family: var(--font-display); font-size: 22px; color: var(--paper); }
  footer { color: var(--muted); font-family: var(--font-label); letter-spacing: .16em; text-transform: uppercase; font-size: 12px; }
</style>
</head><body>
<header>
  <div class="day">Day ${root.dataset.day || ""} · ${root.dataset.title || ""}</div>
  <div class="timer" id="timer">00:00</div>
</header>
<div class="grid">
  <div class="pane">
    <h3>Current</h3>
    <p class="now" id="now"></p>
    <div class="notes" id="notes"></div>
  </div>
  <div class="pane">
    <h3>Next</h3>
    <p class="next" id="next"></p>
    <h3 style="margin-top:1.6em">Elapsed this deck</h3>
    <p class="notes" id="count"></p>
  </div>
</div>
<footer>Notes stay off-camera. Space / arrows still control the deck.</footer>
<script>
  let t0 = Date.now();
  const $ = (id) => document.getElementById(id);
  function fmt(ms) {
    const s = Math.floor(ms / 1000);
    return String(Math.floor(s/60)).padStart(2,"0") + ":" + String(s%60).padStart(2,"0");
  }
  function apply(p) {
    if (!p) return;
    t0 = Date.now() - (p.elapsed || 0);
    $("now").textContent = p.currentTitle || "";
    $("notes").textContent = p.notes || "(no notes)";
    $("next").textContent = p.nextTitle || "—";
    $("count").textContent = (p.index+1) + " / " + p.total;
  }
  const ch = ("BroadcastChannel" in window) ? new BroadcastChannel("omarchy-deck") : null;
  if (ch) ch.onmessage = (e) => apply(e.data);
  window.addEventListener("message", (e) => apply(e.data));
  try { apply(JSON.parse(localStorage.getItem("omarchy-deck-state")||"null")); } catch(e) {}
  setInterval(() => { $("timer").textContent = fmt(Date.now() - t0); }, 250);
  window.addEventListener("keydown", (e) => {
    if (window.opener) window.opener.postMessage({ type: "key", key: e.key, shift: e.shiftKey }, "*");
  });
</script>
</body></html>`;
  }

  function openPresenter() {
    presenter = window.open("", "omarchy-presenter", "width=1280,height=800");
    if (!presenter) return;
    presenter.document.open();
    presenter.document.write(presenterHTML());
    presenter.document.close();
    setTimeout(broadcast, 120);
  }

  function isInteractive(el) {
    return el.closest("a, button, input, textarea, select, kbd");
  }

  window.addEventListener("keydown", (e) => {
    if (e.altKey || e.metaKey || e.ctrlKey) return;
    const k = e.key;
    if ([" ", "ArrowRight", "Enter", "PageDown"].includes(k)) { e.preventDefault(); next(); }
    else if (["ArrowLeft", "Backspace", "PageUp"].includes(k)) { e.preventDefault(); prev(); }
    else if (k === "Home") { e.preventDefault(); go(0); }
    else if (k === "End") { e.preventDefault(); go(total - 1); }
    else if (k === "f" || k === "F") { e.preventDefault(); toggleFullscreen(); }
    else if (k === "s" || k === "S" || k === "p" || k === "P") { e.preventDefault(); openPresenter(); }
    else if (k === "Escape" && document.fullscreenElement) { document.exitFullscreen(); }
  });

  window.addEventListener("message", (e) => {
    const d = e.data || {};
    if (d.type === "key") {
      const map = { ArrowRight: next, ArrowLeft: prev, " ": next, Enter: next, Home: () => go(0), End: () => go(total - 1) };
      if (map[d.key]) map[d.key]();
    }
  });

  document.querySelector(".stage").addEventListener("click", (e) => {
    if (isInteractive(e.target)) return;
    if (e.button === 0) next();
  });
  document.querySelector(".stage").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    prev();
  });

  window.addEventListener("hashchange", () => go(parseHash()));
  i = parseHash();
  t0 = Date.now();
  render();
})();

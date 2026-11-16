/* Ultimate Modern Mixology Handbook — uygulama mantığı */
(function () {
  "use strict";
  var SECTIONS = HB.sections.slice().sort(function (a, b) { return a.no < b.no ? -1 : 1; });
  var BY_ID = {}; SECTIONS.forEach(function (s) { BY_ID[s.id] = s; });
  var METHODS = { oda: "Oda sıcaklığı", buz: "Soğuk", ilik: "Ilık banyo", sv: "Sous-vide", isi: "iSi" };
  var TOOLS = [
    { id: "hesapla", label: "Hesaplayıcılar", icon: "calc" },
    { id: "quiz", label: "Quiz & Kartlar", icon: "quiz" },
    { id: "favoriler", label: "Favori Reçeteler", icon: "star" },
    { id: "ara", label: "Arama", icon: "search" }
  ];
  var ICONS = {
    calc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M9.5 10a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.4M12 16.5h.01"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg>'
  };

  /* ---------- Kalıcı durum (tarayıcıda) ---------- */
  var KEY = "mmh-v1";
  var state = { learned: {}, fav: {}, notes: {}, best: {} };
  try { var raw = localStorage.getItem(KEY); if (raw) { var p = JSON.parse(raw); for (var k in state) if (p[k]) state[k] = p[k]; } } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  /* ---------- Yardımcılar ---------- */
  function $(s, root) { return (root || document).querySelector(s); }
  function $$(s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function strip(h) { return String(h || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }
  function norm(s) {
    return String(s || "").toLocaleLowerCase("tr").replace(/[ıİ]/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c").replace(/â/g, "a").replace(/î/g, "i").replace(/û/g, "u");
  }
  function toast(msg) { var t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 1800); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function blockId(sid, i) { return "b-" + sid + "-" + i; }
  function learnedCount() { return SECTIONS.filter(function (s) { return state.learned[s.id]; }).length; }

  /* ---------- Sayımlar ---------- */
  var COUNTS = { pairings: 0, recipes: 0, formulas: 0, quiz: 0, calcs: Object.keys(CALCS).length };
  var ALL_RECIPES = {};
  SECTIONS.forEach(function (s) {
    COUNTS.quiz += (s.quiz || []).length;
    s.blocks.forEach(function (b, i) {
      if (b.t === "pairings") COUNTS.pairings += b.items.length;
      if (b.t === "recipe") { COUNTS.recipes++; ALL_RECIPES[b.r.id] = { b: b, s: s, i: i }; }
      if (b.t === "formula") { COUNTS.formulas++; ALL_RECIPES[b.r.id] = { b: b, s: s, i: i }; }
    });
  });

  /* ---------- Arama dizini ---------- */
  var INDEX = [];
  SECTIONS.forEach(function (s) {
    s.blocks.forEach(function (b, i) {
      var base = { sid: s.id, stitle: s.no + " · " + s.title, bi: i };
      if (b.t === "pairings") {
        b.items.forEach(function (it, k) {
          INDEX.push(Object.assign({}, base, { label: b.spirit + " + " + it.n, kind: "İnfüzyon", pi: k, text: [it.n, it.q, METHODS[it.m], it.t, it.alt, it.why].join(" · ") }));
        });
        return;
      }
      if (b.t === "recipe" || b.t === "formula") {
        var r = b.r;
        INDEX.push(Object.assign({}, base, { label: r.name, kind: b.t === "recipe" ? "Kokteyl" : "Formül", text: [r.en, r.base, (r.ing || []).map(function (x) { return x.join(" "); }).join(" · "), (r.steps || []).join(" "), r.garnish, r.note].join(" · ") }));
        return;
      }
      var txt = "";
      if (b.html) txt = strip(b.html);
      if (b.rows) txt = b.rows.map(function (row) { return row.join(" · "); }).join(" | ") + " " + (b.foot || "");
      if (b.items) txt = b.items.map(strip).join(" | ");
      if (b.t === "calc") txt = CALCS[b.id].title + " " + CALCS[b.id].desc;
      INDEX.push(Object.assign({}, base, { label: b.h || s.title, kind: b.t === "calc" ? "Hesaplayıcı" : "Konu", text: txt }));
    });
    INDEX.push({ sid: s.id, stitle: s.no + " · " + s.title, bi: -1, label: s.title + " (" + s.en + ")", kind: "Bölüm", text: s.lead });
  });
  INDEX.forEach(function (e) { e.n = norm(e.label + " " + e.text); });

  /* ---------- Navigasyon ---------- */
  var current = { view: "home", sid: null };
  var pending = null;
  var quizScope = "all";

  function renderNav() {
    var nav = $("#nav-sections");
    nav.innerHTML = '<div class="nav-label">Bölümler</div>' + SECTIONS.map(function (s) {
      return '<a class="nav-item' + (current.sid === s.id ? " active" : "") + '" href="#' + s.id + '"><span class="nav-no">' + s.no + '</span><span>' + esc(s.title) + '<span class="nav-sub">' + esc(s.en) + '</span></span><span class="nav-check' + (state.learned[s.id] ? " done" : "") + '" aria-label="' + (state.learned[s.id] ? "Öğrenildi" : "Öğrenilmedi") + '"></span></a>';
    }).join("");
    $("#nav-tools").innerHTML = '<div class="nav-label">Araçlar</div>' + TOOLS.map(function (t) {
      return '<a class="nav-item' + (current.view === t.id ? " active" : "") + '" href="#' + t.id + '"><span class="nav-no" style="display:grid;place-items:center;width:20px;height:20px">' + ICONS[t.icon] + '</span><span>' + t.label + '</span><span class="nav-no">' + (t.id === "favoriler" ? Object.keys(state.fav).filter(function (k) { return ALL_RECIPES[k]; }).length : "") + '</span></a>';
    }).join("");
    var n = learnedCount();
    $("#side-progress").innerHTML = n + " / " + SECTIONS.length + " bölüm öğrenildi<div class=\"bar\"><i style=\"width:" + (n / SECTIONS.length * 100) + "%\"></i></div>";
    var bn = $("#bottom-nav");
    var onSec = current.view === "section" || current.view === "home";
    bn.innerHTML =
      '<button type="button" id="bn-menu" class="' + (onSec ? "on" : "") + '">' + ICONS.book + '<span>Bölümler</span></button>' +
      ["ara", "hesapla", "quiz", "favoriler"].map(function (id) {
        var t = TOOLS.filter(function (x) { return x.id === id; })[0];
        var lbl = { ara: "Ara", hesapla: "Hesapla", quiz: "Quiz", favoriler: "Favoriler" }[id];
        return '<a href="#' + id + '" class="' + (current.view === id ? "on" : "") + '">' + ICONS[t.icon] + '<span>' + lbl + '</span></a>';
      }).join("");
    $("#bn-menu").addEventListener("click", openDrawer);
    $("#top-title").innerHTML = current.view === "section" ? '<small>' + BY_ID[current.sid].no + '</small>' + esc(BY_ID[current.sid].title) : (TOOLS.filter(function (t) { return t.id === current.view; })[0] || { label: "Mixology Handbook" }).label;
  }
  function openDrawer() { $("#sidebar").classList.add("open"); $("#scrim").classList.add("show"); }
  function closeDrawer() { $("#sidebar").classList.remove("open"); $("#scrim").classList.remove("show"); }
  $("#scrim").addEventListener("click", closeDrawer);
  $("#menu-btn").addEventListener("click", openDrawer);
  $("#sidebar").addEventListener("click", function (e) { if (e.target.closest("a")) closeDrawer(); });

  var sideSearch = $("#side-search");
  sideSearch.addEventListener("input", function () {
    lastQuery = sideSearch.value;
    if (current.view !== "ara") location.hash = "ara"; else runSearch(lastQuery);
  });
  sideSearch.addEventListener("keydown", function (e) { if (e.key === "Enter") closeDrawer(); });

  function route() {
    var h = (location.hash || "").replace(/^#/, "");
    if (BY_ID[h]) { current = { view: "section", sid: h }; renderSection(BY_ID[h]); }
    else if (h === "hesapla") { current = { view: h, sid: null }; renderCalcs(); }
    else if (h === "quiz") { current = { view: h, sid: null }; renderQuiz(); }
    else if (h === "favoriler") { current = { view: h, sid: null }; renderFavs(); }
    else if (h === "ara") { current = { view: h, sid: null }; renderSearch(); }
    else { current = { view: "home", sid: null }; renderHome(); }
    renderNav();
    if (pending) {
      var p = pending; pending = null;
      requestAnimationFrame(function () {
        var el = p.pid ? document.getElementById(p.pid) : document.getElementById(p.bid);
        if (el) { el.scrollIntoView({ block: "start" }); if (p.pid) { el.classList.add("flash"); setTimeout(function () { el.classList.remove("flash"); }, 2400); } }
      });
    } else if (current.view !== "ara") { window.scrollTo(0, 0); }
  }
  window.addEventListener("hashchange", route);

  /* ---------- Blok çizimi ---------- */
  function renderBlock(s, b, i) {
    var id = blockId(s.id, i);
    var num = '<span class="bn">' + s.no + "." + String(i + 1).padStart(2, "0") + "</span>";
    var h = b.h ? "<h2>" + num + esc(b.h) + "</h2>" : "";
    var body = "";
    switch (b.t) {
      case "text": body = '<div class="prose">' + b.html + "</div>"; break;
      case "table":
        body = '<div class="table-wrap"><table><thead><tr>' + b.cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          b.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>" +
          (b.foot ? '<p class="foot">' + esc(b.foot) + "</p>" : "");
        break;
      case "steps": body = '<ol class="steps">' + b.items.map(function (x) { return "<li><div>" + x + "</div></li>"; }).join("") + "</ol>"; break;
      case "tips": body = '<ul class="tips">' + b.items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; break;
      case "note":
        var tag = { tip: "Püf noktası", warn: "Dikkat", science: "Bilim" }[b.kind];
        return '<section class="block" id="' + id + '"><div class="note ' + b.kind + '"><span class="tag">' + tag + "</span><h3>" + esc(b.h) + "</h3>" + (b.html.indexOf("<p") === 0 ? b.html : "<p>" + b.html + "</p>") + "</div></section>";
      case "calc": body = calcHTML(b.id, id + "-c"); break;
      case "pairings": body = pairingsHTML(s, b, i); break;
      case "recipe": case "formula": body = recipeHTML(b, s); break;
    }
    return '<section class="block" id="' + id + '">' + h + body + "</section>";
  }

  function pairingsHTML(s, b, i) {
    var gid = "pg-" + s.id + "-" + i;
    var chips = '<button class="chip on" data-m="all">Tümü · ' + b.items.length + "</button>" + Object.keys(METHODS).map(function (m) {
      var c = b.items.filter(function (x) { return x.m === m; }).length;
      return c ? '<button class="chip" data-m="' + m + '">' + METHODS[m] + " · " + c + "</button>" : "";
    }).join("");
    return '<p class="pair-intro">' + esc(b.intro) + '</p><div class="pair-tools" data-grid="' + gid + '"><input type="search" placeholder="' + esc(b.spirit) + ' eşleşmelerinde ara (ör. biber, vanilya)" aria-label="Eşleşmelerde ara">' + chips + '</div><div class="pair-grid" id="' + gid + '">' +
      b.items.map(function (it, k) {
        return '<article class="pcard" id="p-' + s.id + "-" + i + "-" + k + '" data-m="' + it.m + '" data-n="' + esc(norm([it.n, it.q, it.why].join(" "))) + '">' +
          '<div class="pcard-top"><h3>' + esc(it.n) + '</h3><span class="idx">' + String(k + 1).padStart(2, "0") + "</span></div>" +
          '<div class="q">' + esc(it.q) + " <span style=\"color:var(--muted)\">/ 750 ml</span></div>" +
          '<div class="mrow"><span class="m ' + it.m + '">' + METHODS[it.m] + '</span><span class="t">' + esc(it.t) + "</span></div>" +
          (it.alt && it.alt !== "—" ? '<div class="alt">Alternatif: ' + esc(it.alt) + "</div>" : "") +
          '<div class="why"><b>Neden çalışır:</b> ' + esc(it.why) + "</div></article>";
      }).join("") + '</div><p class="empty" hidden>Bu filtreyle eşleşme bulunamadı.</p>';
  }

  function recipeHTML(b, s) {
    var r = b.r, isF = b.t === "formula", fav = !!state.fav[r.id];
    var ing = (r.ing || []).map(function (x) {
      if (!x[1]) return '<li class="sub">' + esc(x[0]) + "</li>";
      return '<li><span class="amt">' + esc(x[0]) + "</span><span>" + esc(x[1]) + "</span></li>";
    }).join("");
    var meta = isF ? '<div><span>Verim</span>' + esc(r.yield) + "</div><div><span>Bölüm</span>" + esc(s.title) + "</div>"
      : "<div><span>Baz</span>" + esc(r.base) + "</div><div><span>Bardak</span>" + esc(r.glass) + "</div><div><span>Teknik</span>" + esc(r.method) + "</div><div><span>Buz</span>" + esc(r.ice) + "</div>";
    return '<article class="recipe" data-rid="' + r.id + '"><div class="recipe-head"><div><span class="recipe-kind">' + (isF ? "Formül" : "Kokteyl reçetesi") + "</span><h3>" + esc(r.name) + "</h3>" + (r.en ? '<div class="en">' + esc(r.en) + "</div>" : "") + '</div><div class="head-btns">' +
      '<button class="icon-btn" data-copy="' + r.id + '" aria-label="Reçeteyi kopyala" title="Kopyala">' + ICONS.copy + "</button>" +
      '<button class="icon-btn' + (fav ? " fav-on" : "") + '" data-fav="' + r.id + '" aria-pressed="' + fav + '" aria-label="Favorilere ekle" title="Favori">' + ICONS.star + "</button></div></div>" +
      '<div class="recipe-meta">' + meta + "</div>" +
      '<div class="recipe-body"><div><h4>Malzemeler</h4><ul class="ing">' + ing + '</ul></div><div><h4>Yapılışı</h4><ol class="rsteps">' + (r.steps || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol></div></div>" +
      '<div class="recipe-foot">' + (r.garnish ? "<div><b>Garnitür:</b> " + esc(r.garnish) + "</div>" : "") + (r.note ? "<div><b>Barmen notu:</b> " + esc(r.note) + "</div>" : "") + "</div></article>";
  }

  function recipeText(r) {
    var out = [r.name + (r.en ? " (" + r.en + ")" : "")];
    if (r.yield) out.push("Verim: " + r.yield);
    if (r.glass) out.push("Bardak: " + r.glass + " · Teknik: " + r.method + " · Buz: " + r.ice);
    out.push("", "Malzemeler:");
    (r.ing || []).forEach(function (x) { out.push(x[1] ? "- " + x[0] + " " + x[1] : "", x[1] ? null : x[0] + ":"); });
    out = out.filter(function (x) { return x !== null; });
    out.push("", "Yapılışı:");
    (r.steps || []).forEach(function (x, i) { out.push(i + 1 + ". " + x); });
    if (r.garnish) out.push("", "Garnitür: " + r.garnish);
    if (r.note) out.push("Not: " + r.note);
    return out.join("\n");
  }

  /* ---------- Hesaplayıcı ---------- */
  function calcHTML(cid, uid) {
    var c = CALCS[cid];
    return '<div class="calc" data-calc="' + cid + '" id="' + uid + '"><div class="calc-title">Hesaplayıcı</div><h3 style="font-size:20px;margin-bottom:4px">' + esc(c.title) + '</h3><p class="calc-desc">' + esc(c.desc) + '</p><div class="fields">' +
      c.fields.map(function (f) {
        var fid = uid + "-" + f.id;
        if (f.type === "select") return '<div class="field"><label for="' + fid + '">' + esc(f.label) + '</label><select id="' + fid + '" data-k="' + f.id + '">' + f.options.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (o[0] === f.value ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join("") + "</select></div>";
        return '<div class="field"><label for="' + fid + '">' + esc(f.label) + '</label><input id="' + fid + '" data-k="' + f.id + '" type="number" inputmode="decimal" step="any" value="' + esc(f.value) + '"></div>';
      }).join("") + '</div><div class="results"></div><div class="calc-note"></div></div>';
  }
  function runCalc(el) {
    var c = CALCS[el.getAttribute("data-calc")], v = {};
    $$("[data-k]", el).forEach(function (inp) {
      var k = inp.getAttribute("data-k");
      if (inp.tagName === "SELECT") v[k] = inp.value;
      else v[k] = inp.value === "" ? "" : (parseFloat(inp.value) || 0);
    });
    c.fields.forEach(function (f) { if (f.type !== "select" && v[f.id] === "" && f.value !== "") v[f.id] = 0; });
    var out = c.compute(v);
    $(".results", el).innerHTML = out.results.map(function (r) { return '<div class="res' + (r.hl ? " hl" : "") + '"><span>' + esc(r.label) + "</span><strong>" + esc(r.value) + (r.unit ? ' <small style="font-size:13px;color:var(--muted)">' + esc(r.unit) + "</small>" : "") + "</strong></div>"; }).join("");
    var n = $(".calc-note", el); n.textContent = out.note || ""; n.className = "calc-note" + (out.warn ? " warn" : "");
  }
  function bindCalcs(root) { $$(".calc", root).forEach(function (el) { runCalc(el); el.addEventListener("input", function () { runCalc(el); }); el.addEventListener("change", function () { runCalc(el); }); }); }

  /* ---------- Ortak etkileşimler ---------- */
  document.addEventListener("click", function (e) {
    var f = e.target.closest("[data-fav]");
    if (f) {
      var id = f.getAttribute("data-fav");
      if (state.fav[id]) delete state.fav[id]; else state.fav[id] = 1;
      save();
      $$('[data-fav="' + id + '"]').forEach(function (b) { b.classList.toggle("fav-on", !!state.fav[id]); b.setAttribute("aria-pressed", !!state.fav[id]); });
      toast(state.fav[id] ? "Favorilere eklendi" : "Favorilerden çıkarıldı");
      renderNav();
      if (current.view === "favoriler" && !state.fav[id]) renderFavs();
      return;
    }
    var c = e.target.closest("[data-copy]");
    if (c) {
      var rr = ALL_RECIPES[c.getAttribute("data-copy")];
      var text = recipeText(rr.b.r);
      try {
        navigator.clipboard.writeText(text).then(function () { toast("Reçete kopyalandı"); }, function () { toast("Kopyalama izni verilmedi"); });
      } catch (err) { toast("Kopyalama desteklenmiyor"); }
      return;
    }
    var chip = e.target.closest(".pair-tools .chip");
    if (chip) {
      var tools = chip.parentNode;
      $$(".chip", tools).forEach(function (x) { x.classList.toggle("on", x === chip); });
      filterPairs(tools);
      return;
    }
    var jump = e.target.closest("[data-jump]");
    if (jump) {
      var el = document.getElementById(jump.getAttribute("data-jump"));
      if (el) el.scrollIntoView({ block: "start" });
      return;
    }
  });
  document.addEventListener("input", function (e) {
    if (e.target.closest(".pair-tools") && e.target.tagName === "INPUT") filterPairs(e.target.parentNode);
  });
  function filterPairs(tools) {
    var grid = document.getElementById(tools.getAttribute("data-grid"));
    var q = norm($("input", tools).value.trim());
    var m = ($(".chip.on", tools) || {}).getAttribute ? $(".chip.on", tools).getAttribute("data-m") : "all";
    var shown = 0;
    $$(".pcard", grid).forEach(function (card) {
      var ok = (m === "all" || card.getAttribute("data-m") === m) && (!q || card.getAttribute("data-n").indexOf(q) > -1);
      card.hidden = !ok; if (ok) shown++;
    });
    grid.nextElementSibling.hidden = shown > 0;
  }

  /* ---------- Görünümler ---------- */
  var view = $("#view");

  function renderHome() {
    var next = SECTIONS.filter(function (s) { return !state.learned[s.id]; })[0] || SECTIONS[0];
    view.innerHTML =
      '<section class="hero"><span class="brand-kicker">Başlangıçtan moleküler miksolojiye</span><h1>Ultimate Modern Mixology Handbook</h1><p>Dokuz bölüm, ' + COUNTS.pairings + ' infüzyon eşleşmesi, ' + COUNTS.recipes + ' kokteyl ve ' + COUNTS.formulas + ' formül. Oranlar gram ve ml cinsinden; her bölümün sonunda quiz ve kişisel not alanı var.</p>' +
      '<div class="actions"><a class="btn primary" href="#' + next.id + '">' + (learnedCount() ? "Devam et: " : "Başla: ") + next.no + " · " + esc(next.title) + '</a><a class="btn" href="#hesapla">' + ICONS.calc + 'Hesaplayıcılar</a><a class="btn" href="#quiz">' + ICONS.quiz + "Kendini test et</a></div></section>" +
      '<div class="stats"><div class="stat"><strong>' + learnedCount() + "/" + SECTIONS.length + '</strong><span>bölüm öğrenildi</span></div><div class="stat"><strong>' + COUNTS.pairings + '</strong><span>infüzyon eşleşmesi</span></div><div class="stat"><strong>' + (COUNTS.recipes + COUNTS.formulas) + '</strong><span>reçete ve formül</span></div><div class="stat"><strong>' + COUNTS.calcs + '</strong><span>hesaplayıcı</span></div><div class="stat"><strong>' + COUNTS.quiz + "</strong><span>quiz sorusu</span></div></div>" +
      '<h2 class="section-title">Bölümler</h2><div class="cards">' + SECTIONS.map(function (s) {
        var best = state.best[s.id];
        return '<a class="scard" href="#' + s.id + '"><span class="no">' + s.no + "</span>" + (state.learned[s.id] ? '<span class="done-badge">✓ Öğrenildi</span>' : "") + "<h3>" + esc(s.title) + '</h3><div class="en">' + esc(s.en) + '</div><div class="meta"><span class="pill accent">' + esc(s.level) + '</span><span class="pill">' + s.blocks.length + " konu</span>" + (best != null ? '<span class="pill">Quiz ' + best + "%</span>" : "") + "</div></a>";
      }).join("") + "</div>";
  }

  function renderSection(s) {
    var learned = !!state.learned[s.id];
    var chips = s.blocks.map(function (b, i) { return b.h ? '<button class="chip" data-jump="' + blockId(s.id, i) + '">' + esc(b.h.replace(/^Trend kokteyl · /, "Kokteyl · ").replace(/^(Trend tarif · |Formül · )/, "").replace(/^Hesaplayıcı: /, "Hesap · ").replace(/ · 20 eşleşme$/, " eşleşmeleri")) + "</button>" : ""; }).join("");
    var idx = SECTIONS.indexOf(s), prev = SECTIONS[idx - 1], nxt = SECTIONS[idx + 1];
    view.innerHTML =
      '<header class="sec-head"><div class="sec-kicker"><span class="num">Bölüm ' + s.no + '</span><span class="pill accent">' + esc(s.level) + '</span><span>' + s.blocks.length + " konu · " + (s.quiz || []).length + " soru</span></div>" +
      "<h1>" + esc(s.title) + "<em>" + esc(s.en) + '</em></h1><p class="lead">' + esc(s.lead) + '</p><div class="actions"><button class="btn learn-btn' + (learned ? " on" : "") + '" type="button">' + ICONS.check + (learned ? "Öğrenildi" : "Öğrendim olarak işaretle") + '</button><button class="btn quiz-btn" type="button">' + ICONS.quiz + "Bu bölümün quiz'i</button></div></header>" +
      '<nav class="chips" aria-label="Bölüm içi konular">' + chips + "</nav>" +
      s.blocks.map(function (b, i) { return renderBlock(s, b, i); }).join("") +
      '<section class="sec-end"><h2>Kendi notların</h2><textarea id="note-ta" placeholder="Barda denediklerin, kendi oranların, tedarikçi notları… (bu tarayıcıda saklanır)">' + esc(state.notes[s.id] || "") + '</textarea><span class="saved" id="note-saved"></span><div class="actions"><button class="btn learn-btn' + (learned ? " on" : "") + '" type="button">' + ICONS.check + (learned ? "Öğrenildi" : "Öğrendim olarak işaretle") + '</button><button class="btn quiz-btn primary" type="button">' + ICONS.quiz + "Quiz'i çöz</button></div>" +
      '<div class="actions" style="justify-content:space-between">' + (prev ? '<a class="btn" href="#' + prev.id + '">← ' + prev.no + " " + esc(prev.title) + "</a>" : "<span></span>") + (nxt ? '<a class="btn" href="#' + nxt.id + '">' + nxt.no + " " + esc(nxt.title) + " →</a>" : "") + "</div></section>";
    bindCalcs(view);
    $$(".learn-btn", view).forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (state.learned[s.id]) delete state.learned[s.id]; else state.learned[s.id] = 1;
        save();
        var on = !!state.learned[s.id];
        $$(".learn-btn", view).forEach(function (x) { x.classList.toggle("on", on); x.innerHTML = ICONS.check + (on ? "Öğrenildi" : "Öğrendim olarak işaretle"); });
        renderNav();
        toast(on ? "Bölüm öğrenildi olarak işaretlendi" : "İşaret kaldırıldı");
      });
    });
    $$(".quiz-btn", view).forEach(function (btn) { btn.addEventListener("click", function () { quizScope = s.id; quizMode = "quiz"; location.hash = "quiz"; }); });
    var ta = $("#note-ta"), t;
    ta.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () { state.notes[s.id] = ta.value; if (!ta.value) delete state.notes[s.id]; save(); $("#note-saved").textContent = "Kaydedildi · " + new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }); }, 400);
    });
    // Aktif chip vurgusu
    var chipEls = $$(".chips .chip", view);
    if ("IntersectionObserver" in window && chipEls.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var id = en.target.id;
            chipEls.forEach(function (c) { var on = c.getAttribute("data-jump") === id; c.classList.toggle("on", on); if (on && c.scrollIntoView) { var p = c.parentNode; p.scrollLeft = c.offsetLeft - 16; } });
          }
        });
      }, { rootMargin: "-20% 0px -70% 0px" });
      $$(".block", view).forEach(function (b) { if (b.querySelector("h2, h3")) io.observe(b); });
    }
  }

  function renderCalcs() {
    var where = {};
    SECTIONS.forEach(function (s) { s.blocks.forEach(function (b, i) { if (b.t === "calc") where[b.id] = { s: s, i: i }; }); });
    view.innerHTML = '<header class="sec-head"><div class="sec-kicker"><span class="num">Araçlar</span></div><h1>Hesaplayıcılar<em>Calculators</em></h1><p class="lead">Barda ve hazırlık mutfağında en çok ihtiyaç duyulan hesaplar. Sonuçlar yazarken güncellenir; tüm ağırlıklar gram cinsindendir.</p></header>' +
      Object.keys(CALCS).map(function (id) {
        var w = where[id];
        return '<section class="block" id="calc-' + id + '">' + calcHTML(id, "cv-" + id) + (w ? '<p class="foot">İlgili bölüm: <a href="#' + w.s.id + '">' + w.s.no + " · " + esc(w.s.title) + "</a></p>" : "") + "</section>";
      }).join("");
    bindCalcs(view);
  }

  function renderFavs() {
    var ids = Object.keys(state.fav).filter(function (k) { return ALL_RECIPES[k]; });
    var all = Object.keys(ALL_RECIPES);
    view.innerHTML = '<header class="sec-head"><div class="sec-kicker"><span class="num">Araçlar</span><span>' + ids.length + " favori</span></div><h1>Favori Reçeteler<em>Favorites</em></h1><p class=\"lead\">Yıldızladığın kokteyl ve formüller burada toplanır. Telefonda barda hızlıca açmak için idealdir.</p></header>" +
      (ids.length ? ids.map(function (id) { var x = ALL_RECIPES[id]; return '<section class="block">' + recipeHTML(x.b, x.s) + '<p class="foot"><a href="#' + x.s.id + '" data-goto="' + id + '">' + x.s.no + " · " + esc(x.s.title) + " bölümünde aç</a></p></section>"; }).join("")
        : '<div class="note tip" style="margin-top:20px"><span class="tag">Henüz favori yok</span><p>Bir reçete kartındaki yıldıza dokun. Hızlı başlangıç için tüm reçeteler:</p></div><div class="sres">' +
          all.map(function (id) { var x = ALL_RECIPES[id]; return '<button class="sitem" data-goto="' + id + '"><div class="where">' + x.s.no + " · " + esc(x.s.title) + " · " + (x.b.t === "recipe" ? "Kokteyl" : "Formül") + '</div><div class="lbl">' + esc(x.b.r.name) + "</div></button>"; }).join("") + "</div>");
    $$("[data-goto]", view).forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); var x = ALL_RECIPES[a.getAttribute("data-goto")]; pending = { bid: blockId(x.s.id, x.i) }; location.hash = x.s.id; });
    });
  }

  /* ---------- Arama ---------- */
  var lastQuery = "";
  function renderSearch() {
    view.innerHTML = '<header class="sec-head"><div class="sec-kicker"><span class="num">Araçlar</span><span>' + INDEX.length + ' kayıt</span></div><h1>Arama<em>Search</em></h1><p class="lead">Malzeme, teknik, asit, yağ, kokteyl adı… Türkçe karakter yazmasan da bulur (ör. "suruplar", "seftali").</p></header>' +
      '<input class="search-big" id="big-search" type="search" placeholder="Ör. biberiye, pektinaz, fat-wash, Gimlet" aria-label="Ara" value="' + esc(lastQuery) + '"><div class="sres" id="sres"></div>';
    var inp = $("#big-search");
    inp.addEventListener("input", function () { lastQuery = inp.value; sideSearch.value = inp.value; runSearch(inp.value); });
    runSearch(lastQuery);
    if (window.innerWidth > 960 && document.activeElement === sideSearch) { /* kenar kutusunda kal */ } else { inp.focus(); }
  }
  function runSearch(q) {
    var box = $("#sres"); if (!box) return;
    var terms = norm(q).trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      var sugg = ["biberiye", "vanilya", "sitrik", "pektinaz", "brown butter", "aljinat", "izomalt", "Gimlet", "kahve", "tuz"];
      box.innerHTML = '<p class="foot">Öneriler: ' + sugg.map(function (x) { return '<a href="#ara" data-sugg="' + x + '">' + x + "</a>"; }).join(" · ") + "</p>";
      $$("[data-sugg]", box).forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); var inp = $("#big-search"); inp.value = a.getAttribute("data-sugg"); lastQuery = inp.value; runSearch(inp.value); }); });
      return;
    }
    var res = INDEX.filter(function (e) { return terms.every(function (t) { return e.n.indexOf(t) > -1; }); });
    res.sort(function (a, b) { var al = norm(a.label).indexOf(terms[0]) > -1 ? 0 : 1, bl = norm(b.label).indexOf(terms[0]) > -1 ? 0 : 1; return al - bl; });
    var shown = res.slice(0, 80);
    box.innerHTML = '<p class="foot">' + res.length + " sonuç" + (res.length > 80 ? " (ilk 80 gösteriliyor)" : "") + "</p>" + shown.map(function (e, k) {
      return '<button class="sitem" data-k="' + k + '"><div class="where">' + esc(e.stitle) + " · " + e.kind + '</div><div class="lbl">' + hl(e.label, terms) + '</div><div class="snip">' + hl(snippet(e.text, terms[0]), terms) + "</div></button>";
    }).join("");
    $$(".sitem", box).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var e = shown[+btn.getAttribute("data-k")];
        pending = e.bi < 0 ? null : { bid: blockId(e.sid, e.bi), pid: e.pi != null ? "p-" + e.sid + "-" + e.bi + "-" + e.pi : null };
        location.hash = e.sid;
        closeDrawer();
      });
    });
  }
  function snippet(text, t) {
    var n = norm(text), i = n.indexOf(t);
    if (i < 0) return text.slice(0, 150) + (text.length > 150 ? "…" : "");
    var a = Math.max(0, i - 60), b = Math.min(text.length, i + 110);
    return (a ? "…" : "") + text.slice(a, b) + (b < text.length ? "…" : "");
  }
  function hl(text, terms) {
    var n = norm(text), marks = [];
    terms.forEach(function (t) { var i = 0; while ((i = n.indexOf(t, i)) > -1) { marks.push([i, i + t.length]); i += t.length; } });
    if (!marks.length) return esc(text);
    marks.sort(function (a, b) { return a[0] - b[0]; });
    var out = "", pos = 0;
    marks.forEach(function (m) { if (m[0] < pos) return; out += esc(text.slice(pos, m[0])) + "<mark>" + esc(text.slice(m[0], m[1])) + "</mark>"; pos = m[1]; });
    return out + esc(text.slice(pos));
  }

  /* ---------- Quiz ve kartlar ---------- */
  var quizMode = "quiz", Q = null;
  function pool(scope) {
    var out = [];
    SECTIONS.forEach(function (s) { if (scope === "all" || scope === s.id) (s.quiz || []).forEach(function (q) { out.push(Object.assign({ sid: s.id, sno: s.no, stitle: s.title }, q)); }); });
    return out;
  }
  function renderQuiz() {
    view.innerHTML = '<header class="sec-head"><div class="sec-kicker"><span class="num">Araçlar</span><span>' + COUNTS.quiz + ' soru</span></div><h1>Quiz & Kartlar<em>Quiz & Flashcards</em></h1><p class="lead">Quiz modunda puan alırsın ve en iyi skorun bölüm kartında görünür. Kart modunda soruya bak, cevabı düşün, çevirip kontrol et.</p></header>' +
      '<div class="quiz-bar"><div class="seg" role="tablist"><button type="button" data-mode="quiz" class="' + (quizMode === "quiz" ? "on" : "") + '">Quiz</button><button type="button" data-mode="flash" class="' + (quizMode === "flash" ? "on" : "") + '">Kartlar</button></div>' +
      '<select id="q-scope" aria-label="Kapsam"><option value="all">Tüm bölümler (' + COUNTS.quiz + ")</option>" + SECTIONS.map(function (s) { return '<option value="' + s.id + '"' + (quizScope === s.id ? " selected" : "") + ">" + s.no + " · " + esc(s.title) + " (" + (s.quiz || []).length + ")" + (state.best[s.id] != null ? " · en iyi " + state.best[s.id] + "%" : "") + "</option>"; }).join("") + '</select><button class="btn" type="button" id="q-restart">Karıştır ve baştan başla</button></div><div id="q-area"></div>';
    $$("[data-mode]", view).forEach(function (b) { b.addEventListener("click", function () { quizMode = b.getAttribute("data-mode"); renderQuiz(); }); });
    $("#q-scope").addEventListener("change", function (e) { quizScope = e.target.value; startQuiz(); });
    $("#q-restart").addEventListener("click", startQuiz);
    startQuiz();
  }
  function startQuiz() {
    Q = { items: shuffle(pool(quizScope)), i: 0, score: 0, answered: false, flipped: false };
    if (quizMode === "quiz") Q.items = Q.items.map(function (q) { var order = shuffle(q.o.map(function (_, k) { return k; })); return Object.assign({}, q, { o: order.map(function (k) { return q.o[k]; }), a: order.indexOf(q.a) }); });
    drawQ();
  }
  function drawQ() {
    var area = $("#q-area"); if (!area) return;
    var n = Q.items.length;
    if (quizMode === "flash") {
      var c = Q.items[Q.i];
      area.innerHTML = '<div class="flash"><div class="fcard' + (Q.flipped ? " flipped" : "") + '" id="fcard" role="button" tabindex="0" aria-label="Kartı çevir"><div class="fside"><span class="k">' + c.sno + " · " + esc(c.stitle) + '</span><div class="front-q">' + esc(c.q) + '</div><span class="hint">Cevabı düşün, sonra çevirmek için dokun.</span></div><div class="fside back"><span class="k">Cevap</span><div class="ans">' + esc(c.o[c.a]) + '</div><div class="why">' + esc(c.why) + '</div></div></div><div class="qnav"><button class="btn" id="f-prev" type="button"' + (Q.i === 0 ? " disabled" : "") + '>← Önceki</button><span class="mono" style="color:var(--muted)">' + (Q.i + 1) + " / " + n + '</span><button class="btn primary" id="f-next" type="button"' + (Q.i === n - 1 ? " disabled" : "") + ">Sonraki →</button></div></div>";
      var fc = $("#fcard");
      function flip() { Q.flipped = !Q.flipped; fc.classList.toggle("flipped", Q.flipped); }
      fc.addEventListener("click", flip);
      fc.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
      $("#f-prev").addEventListener("click", function () { if (Q.i > 0) { Q.i--; Q.flipped = false; drawQ(); } });
      $("#f-next").addEventListener("click", function () { if (Q.i < n - 1) { Q.i++; Q.flipped = false; drawQ(); } });
      return;
    }
    if (Q.i >= n) {
      var pct = Math.round(Q.score / n * 100);
      if (quizScope !== "all") { if (state.best[quizScope] == null || pct > state.best[quizScope]) { state.best[quizScope] = pct; save(); renderNav(); } }
      var msg = pct >= 90 ? "Usta seviyesi. Bu bölümü öğrenildi olarak işaretleyebilirsin." : pct >= 60 ? "İyi gidiyor. Yanlış yaptığın konuları bölümde tekrar oku." : "Bölümü bir kez daha oku ve tekrar dene.";
      area.innerHTML = '<div class="qcard"><div class="qmeta"><span>Sonuç</span><span>' + Q.score + " / " + n + '</span></div><div class="score-big">' + pct + '%</div><p>' + msg + '</p><div class="actions"><button class="btn primary" id="q-again" type="button">Tekrar çöz</button>' + (quizScope !== "all" ? '<a class="btn" href="#' + quizScope + '">Bölüme dön</a>' : "") + "</div></div>";
      $("#q-again").addEventListener("click", startQuiz);
      return;
    }
    var q = Q.items[Q.i];
    area.innerHTML = '<div class="qcard"><div class="qmeta"><span>' + q.sno + " · " + esc(q.stitle) + "</span><span>Soru " + (Q.i + 1) + " / " + n + " · Puan " + Q.score + '</span></div><h2>' + esc(q.q) + '</h2><div class="opts">' +
      q.o.map(function (o, k) { return '<button class="opt" type="button" data-k="' + k + '">' + esc(o) + "</button>"; }).join("") + '</div><div id="q-fb"></div><div class="qnav"><span></span><button class="btn primary" id="q-next" type="button" hidden>' + (Q.i === n - 1 ? "Sonucu gör" : "Sonraki soru →") + "</button></div></div>";
    $$(".opt", area).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = +b.getAttribute("data-k"), ok = k === q.a;
        if (ok) Q.score++;
        $$(".opt", area).forEach(function (x, j) { x.disabled = true; if (j === q.a) x.classList.add("right"); else if (j === k) x.classList.add("wrong"); });
        $("#q-fb").innerHTML = '<div class="feedback"><b style="color:' + (ok ? "var(--green)" : "#ec8a72") + '">' + (ok ? "Doğru." : "Doğru cevap: " + esc(q.o[q.a])) + "</b>" + esc(q.why) + "</div>";
        var nx = $("#q-next"); nx.hidden = false; nx.focus();
      });
    });
    $("#q-next").addEventListener("click", function () { Q.i++; drawQ(); });
  }

  route();
})();

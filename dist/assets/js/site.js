/* LEXORA DIGITAL — site interactions (no dependencies, no tracking) */
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");
  var RM = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (RM) root.classList.add("no-motion");

  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { window.localStorage.removeItem(k); } catch (e) {} }
  };

  // header state
  var hdr = document.querySelector(".hdr");
  function onScroll() { if (hdr) hdr.classList.toggle("is-scrolled", window.scrollY > 24); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // dropdowns
  var dds = document.querySelectorAll("[data-dd]");
  function closeAll(except) {
    for (var i = 0; i < dds.length; i++) if (dds[i] !== except) {
      dds[i].classList.remove("open");
      var b = dds[i].querySelector("button"); if (b) b.setAttribute("aria-expanded", "false");
    }
  }
  Array.prototype.forEach.call(dds, function (dd) {
    var btn = dd.querySelector("button");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !dd.classList.contains("open");
      closeAll(dd);
      dd.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      if (open) { var first = dd.querySelector(".dd-menu a:not([aria-disabled='true'])"); if (first && e.detail === 0) first.focus(); }
    });
    dd.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeAll(); btn.focus(); }
    });
    dd.addEventListener("focusout", function (e) { if (!dd.contains(e.relatedTarget)) { dd.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
  });
  document.addEventListener("click", function () { closeAll(); });

  // mobile menu
  var burger = document.querySelector(".burger"), mnav = document.getElementById("mnav");
  function setMenu(open) {
    root.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
    mnav.setAttribute("aria-hidden", String(!open));
    if ("inert" in mnav) mnav.inert = !open;
    if (open) { var f = mnav.querySelector("a"); if (f) f.focus(); } else burger.focus();
  }
  if (burger && mnav) {
    if ("inert" in mnav) mnav.inert = true;
    burger.addEventListener("click", function () { setMenu(!root.classList.contains("menu-open")); });
    mnav.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
      if (e.key === "Tab") {
        var f = mnav.querySelectorAll("a:not([aria-disabled='true']),button");
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); burger.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); burger.focus(); }
      }
    });
    burger.addEventListener("keydown", function (e) {
      if (root.classList.contains("menu-open") && e.key === "Tab" && !e.shiftKey) {
        e.preventDefault(); var f = mnav.querySelector("a"); if (f) f.focus();
      }
    });
    Array.prototype.forEach.call(mnav.querySelectorAll("a[href^='#']"), function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  }

  // remember an explicitly chosen language (functional, stored only in this browser)
  Array.prototype.forEach.call(document.querySelectorAll("a[data-lang]"), function (a) {
    a.addEventListener("click", function () { store.set("lexora-lang", a.getAttribute("data-lang")); });
  });

  // reveal on scroll
  var rev = document.querySelectorAll(".reveal,.step");
  if (!RM && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    Array.prototype.forEach.call(rev, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(rev, function (el) { el.classList.add("is-in"); });
  }

  // disciplines: highlight the matching circle in the diagram
  var venn = document.querySelector("[data-venn]");
  if (venn) {
    Array.prototype.forEach.call(document.querySelectorAll(".drow[data-d]"), function (row) {
      var on = function () { venn.setAttribute("data-active", row.getAttribute("data-d")); };
      var off = function () { venn.removeAttribute("data-active"); };
      row.addEventListener("mouseenter", on); row.addEventListener("mouseleave", off);
      row.addEventListener("focusin", on); row.addEventListener("focusout", off);
    });
  }

  // images fade in once decoded
  Array.prototype.forEach.call(document.querySelectorAll(".media img"), function (img) {
    var done = function () { img.classList.add("is-loaded"); };
    if (img.complete && img.naturalWidth) done(); else { img.addEventListener("load", done); img.addEventListener("error", done); }
  });

  // privacy settings dialog
  var dlg = document.getElementById("privacy-dialog");
  Array.prototype.forEach.call(document.querySelectorAll("[data-privacy-open]"), function (b) {
    b.addEventListener("click", function () {
      if (!dlg) return;
      var st = dlg.querySelector("[data-pref-state]");
      if (st) st.textContent = store.get("lexora-lang") ? st.getAttribute("data-set").replace("%s", store.get("lexora-lang").toUpperCase()) : st.getAttribute("data-none");
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    });
  });
  if (dlg) {
    Array.prototype.forEach.call(dlg.querySelectorAll("[data-close]"), function (b) { b.addEventListener("click", function () { dlg.close ? dlg.close() : dlg.removeAttribute("open"); }); });
    var clr = dlg.querySelector("[data-clear]");
    if (clr) clr.addEventListener("click", function () {
      store.del("lexora-lang");
      var st = dlg.querySelector("[data-pref-state]"); if (st) st.textContent = st.getAttribute("data-none");
    });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  }


  // ---------- work filters ----------
  var grid = document.querySelector("[data-grid]");
  if (grid) {
    var btns = document.querySelectorAll(".filters [data-filter]"), empty = document.querySelector(".empty");
    Array.prototype.forEach.call(btns, function (b) {
      b.addEventListener("click", function () {
        var f = b.getAttribute("data-filter"), shown = 0;
        Array.prototype.forEach.call(btns, function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        Array.prototype.forEach.call(grid.querySelectorAll(".proj"), function (p) {
          var on = f === "*" || p.getAttribute("data-cat") === f; p.hidden = !on; if (on) shown++;
        });
        grid.classList.toggle("filtered", f !== "*");
        if (empty) empty.hidden = shown > 0;
      });
    });
  }

  // ---------- forms (Formspree) ----------
  var FORMS = window.LEXORA_FORMS || {}, T = window.LEXORA_I18N || {};
  var params = new URLSearchParams(location.search);
  var svc = document.getElementById("contact-service");
  if (svc && params.get("service")) { svc.value = params.get("service"); }

  function normUrl(v) { v = v.trim(); if (v && !/^https?:\/\//i.test(v)) v = "https://" + v; return v; }
  function validUrl(v) { try { var u = new URL(normUrl(v)); return /\.[a-z]{2,}$/i.test(u.hostname); } catch (e) { return false; } }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); }

  Array.prototype.forEach.call(document.querySelectorAll("form[data-form]"), function (form) {
    var id = form.getAttribute("data-form"), status = form.querySelector(".lform-status"), ok = form.querySelector(".lform-ok");
    function setErr(el, msg) {
      var wrap = el.closest(".fld"), err = wrap && wrap.querySelector(".err");
      if (wrap) wrap.classList.toggle("invalid", !!msg);
      if (err) err.textContent = msg || "";
      el.setAttribute("aria-invalid", msg ? "true" : "false");
    }
    function check(el) {
      var v = el.type === "checkbox" ? el.checked : (el.value || "").trim(), msg = "";
      if (el.required && !v) msg = el.type === "checkbox" ? T.consent : T.required;
      else if (v && el.getAttribute("data-validate") === "email" && !validEmail(v)) msg = T.email;
      else if (v && el.getAttribute("data-validate") === "url" && !validUrl(v)) msg = T.url;
      setErr(el, msg); return !msg;
    }
    var fields = form.querySelectorAll("input:not([type=hidden]):not([name=_gotcha]),select,textarea");
    Array.prototype.forEach.call(fields, function (el) {
      el.addEventListener("blur", function () { if (el.value || el.closest(".fld").classList.contains("invalid")) check(el); });
      el.addEventListener("change", function () { if (el.closest(".fld").classList.contains("invalid")) check(el); });
      // clear errors while typing, so no layout shift happens later on blur
      el.addEventListener("input", function () { if (el.closest(".fld").classList.contains("invalid")) check(el); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = ""; status.classList.remove("is-error");
      var first = null;
      Array.prototype.forEach.call(fields, function (el) { if (!check(el) && !first) first = el; });
      if (first) { status.textContent = T.fix; status.classList.add("is-error"); first.focus(); return; }
      var web = form.querySelector("[data-validate=url]"); if (web) web.value = normUrl(web.value);
      var endpoint = FORMS[id];
      if (!endpoint) { status.textContent = T.notConnected; status.classList.add("is-error"); return; }
      form.classList.add("is-sending");
      var lbl = form.querySelector(".btn .lbl"), orig = lbl.textContent; lbl.textContent = T.sending;
      fetch("https://formspree.io/f/" + endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function () { form.classList.remove("is-sending"); form.classList.add("is-done"); ok.hidden = false; ok.focus(); form.reset(); })
        .catch(function () { form.classList.remove("is-sending"); lbl.textContent = orig; status.textContent = T.error; status.classList.add("is-error"); });
    });
  });


  // planet: respect reduced motion for SMIL orbits and video
  if (RM) {
    Array.prototype.forEach.call(document.querySelectorAll(".pl-orbits"), function (svg) { if (svg.pauseAnimations) svg.pauseAnimations(); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-planet-video]"), function (v) { v.removeAttribute("autoplay"); v.pause(); });
  } else if ("IntersectionObserver" in window) {
    var pio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var svg = e.target.querySelector(".pl-orbits"), v = e.target.querySelector("video");
        if (svg && svg.pauseAnimations) { e.isIntersecting ? svg.unpauseAnimations() : svg.pauseAnimations(); }
        if (v) { e.isIntersecting ? v.play().catch(function () {}) : v.pause(); }
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".planet"), function (p) { pio.observe(p); });
  }

  // current year
  Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (el) { el.textContent = String(new Date().getFullYear()); });
})();

/* 이탈리아 여행 앱. 모든 데이터는 이 기기의 localStorage에 저장되고, 백업 파일로 옮깁니다. */
(function () {
  'use strict';

  var KEY = 'italy2026.data.v1';
  var PREF_KEY = 'italy2026.prefs.v1';
  var DEFAULT = window.DEFAULT_DATA;
  var CATS = ['sight', 'food', 'cafe', 'gelato'];
  var CAT_LABEL = { sight: '명소', food: '식당', cafe: '카페', gelato: '젤라토' };
  var TAG_TYPES = [['book', '예약'], ['warn', '주의'], ['ok', '확인'], ['info', '정보'], ['tbd', '미확인']];
  var TAG_OK = { book: 1, warn: 1, ok: 1, info: 1, tbd: 1 };
  var TITLES = { plan: '일정', check: '예약·준비', places: '장소', info: '정보' };
  var WD = ['일', '월', '화', '수', '목', '금', '토'];

  var clone = function (o) { return JSON.parse(JSON.stringify(o)); };
  var uid = function (p) { return (p || 'x') + Date.now().toString(36).slice(-5) + Math.random().toString(36).slice(2, 6); };

  /* ---------------- storage ---------------- */
  function valid(d) {
    return d && typeof d === 'object' && Array.isArray(d.days) && Array.isArray(d.checklist) &&
      d.places && typeof d.places === 'object' && Array.isArray(d.guides);
  }
  function normalize(d) {
    d.trip = d.trip || clone(DEFAULT.trip);
    d.cities = d.cities || clone(DEFAULT.cities);
    d.route = Array.isArray(d.route) ? d.route : [];
    Object.keys(d.cities).forEach(function (c) {
      var p = d.places[c] = d.places[c] || {};
      CATS.forEach(function (k) { p[k] = Array.isArray(p[k]) ? p[k] : []; });
      p.notes = Array.isArray(p.notes) ? p.notes : [];
    });
    d.days.forEach(function (day) {
      day.id = day.id || uid('d'); day.items = day.items || []; day.notes = day.notes || [];
      day.items.forEach(function (it) { it.id = it.id || uid('i'); it.tags = it.tags || []; });
    });
    d.checklist.forEach(function (g) { g.id = g.id || uid('g'); g.items = g.items || []; });
    return d;
  }
  function loadData() {
    try {
      var s = localStorage.getItem(KEY);
      if (s) { var d = JSON.parse(s); if (valid(d)) return normalize(d); }
    } catch (e) { /* fall through to defaults */ }
    return normalize(clone(DEFAULT));
  }
  var data = loadData();
  var saveTimer = null;
  function save() {
    data.updatedAt = Date.now();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(flush, 200);
  }
  function flush() {
    clearTimeout(saveTimer);
    try { localStorage.setItem(KEY, JSON.stringify(data)); }
    catch (e) { toast('저장하지 못했습니다. 기기 저장 공간을 확인하세요.'); }
  }
  window.addEventListener('pagehide', flush);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') { runPending(); flush(); } });

  function loadPrefs() { try { return JSON.parse(localStorage.getItem(PREF_KEY) || '{}') || {}; } catch (e) { return {}; } }
  var prefs = loadPrefs();
  function savePrefs() { try { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch (e) { /* ignore */ } }

  /* ---------------- dates ---------------- */
  function pd(s) { var a = String(s).split('-').map(Number); return new Date(a[0], (a[1] || 1) - 1, a[2] || 1); }
  function ymd(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function todayStr() { return ymd(new Date()); }
  function fmtLong(s) { var d = pd(s); return (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ' + WD[d.getDay()] + '요일'; }
  function fmtShort(s) { var d = pd(s); return (d.getMonth() + 1) + '/' + d.getDate() + ' ' + WD[d.getDay()]; }
  function fmtDot(s) { var d = pd(s); return d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate(); }

  /* ---------------- ui state ---------------- */
  var ui = {
    tab: TITLES[prefs.tab] ? prefs.tab : 'plan',
    day: 0,
    city: data.cities[prefs.city] ? prefs.city : 'roma',
    cat: CAT_LABEL[prefs.cat] ? prefs.cat : 'sight',
    onlyTodo: !!prefs.onlyTodo,
    edit: false,
    guide: null,
    scroll: {}
  };
  (function initDay() {
    var t = todayStr();
    var i = data.days.findIndex(function (d) { return d.date === t; });
    ui.day = i >= 0 ? i : (prefs.day >= 0 && prefs.day < data.days.length ? prefs.day : 0);
  })();
  var pending = [];
  function runPending() { var p = pending; pending = []; p.forEach(function (f) { f(); }); }

  /* ---------------- DOM helpers ---------------- */
  function h(tag, props) {
    var el = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v == null || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k === 'text') el.textContent = v;
        else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, k) {
    if (k == null || k === false) return;
    if (Array.isArray(k)) { k.forEach(function (x) { append(el, x); }); return; }
    el.appendChild(k.nodeType ? k : document.createTextNode(String(k)));
  }

  var ICONS = {
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3.5"/><path d="M3.5 10.5h17M8 3v4M16 3v4"/>',
    checks: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M8 12.3l2.8 2.8L16.3 9.4"/>',
    pin: '<path d="M12 21s-6.5-5.7-6.5-11.2a6.5 6.5 0 0113 0C18.5 15.3 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.4"/>',
    compass: '<circle cx="12" cy="12" r="8.6"/><path d="M15.4 8.6l-1.9 4.9-4.9 1.9 1.9-4.9z"/>',
    pencil: '<path d="M4 20h4L19.2 8.8a2.2 2.2 0 00-3.1-3.1L5 17v3z"/><path d="M14.5 7.3l3.2 3.2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    x: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    check: '<path d="M5.5 12.5l4.2 4.2L18.5 8"/>',
    chevL: '<path d="M14.5 5.5L8 12l6.5 6.5"/>',
    chevR: '<path d="M9.5 5.5L16 12l-6.5 6.5"/>',
    map: '<path d="M9 4.5L3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5z"/><path d="M9 4.5v13M15 6.5v13"/>',
    blog: '<path d="M6 3.5h8.5L19 8v12.5H6z"/><path d="M14 3.5V8h5M9 12h7M9 15.5h7"/>',
    train: '<rect x="5.5" y="3.5" width="13" height="13.5" rx="3"/><path d="M5.5 10.5h13M9 20.5l1.6-3.5M15 20.5l-1.6-3.5"/><circle cx="9" cy="13.8" r=".5"/><circle cx="15" cy="13.8" r=".5"/>',
    bed: '<path d="M3.5 18.5V7M3.5 14.5h17v4M20.5 14.5V12a3 3 0 00-3-3h-6v5.5"/><circle cx="7.6" cy="11.4" r="1.8"/>',
    shield: '<path d="M12 3.5l7 2.8v5.3c0 4.3-3 7.6-7 8.9-4-1.3-7-4.6-7-8.9V6.3z"/><path d="M12 8.6v4M12 15.6v.1"/>',
    book: '<path d="M5 5.5A2 2 0 017 3.5h11v14H7a2 2 0 00-2 2z"/><path d="M5 19.5a2 2 0 002 2h11v-4"/>',
    note: '<path d="M6 3.5h12v17H6z"/><path d="M9 8h6M9 11.5h6M9 15h4"/>',
    download: '<path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 19.5h14"/>',
    upload: '<path d="M12 15V4M7.5 8.5L12 4l4.5 4.5M5 19.5h14"/>',
    reset: '<path d="M4.6 12a7.4 7.4 0 107.4-7.4H8"/><path d="M10.5 1.8L7.6 4.6l2.9 2.8"/>',
    phone: '<rect x="7" y="3" width="10" height="18" rx="2.6"/><path d="M11 18h2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    warn: '<path d="M12 4.2l8.6 15.3H3.4z"/><path d="M12 10v4.4M12 17.1v.1"/>',
    info: '<circle cx="12" cy="12" r="8.6"/><path d="M12 11v5.2M12 7.9v.1"/>',
    bulb: '<path d="M9.5 18h5M10.5 21h3M12 3a6 6 0 00-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0012 3z"/>',
    up: '<path d="M12 19V5.5M6.5 11L12 5.5 17.5 11"/>',
    down: '<path d="M12 5v13.5M6.5 13l5.5 5.5 5.5-5.5"/>',
    route: '<circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="6" r="2.2"/><path d="M8.2 18H15a3 3 0 000-6H9a3 3 0 010-6h6.8"/>',
    star: '<path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.3L12 16l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z"/>'
  };
  function icon(name, size) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('width', size || 20); s.setAttribute('height', size || 20);
    s.setAttribute('fill', 'none'); s.setAttribute('stroke', 'currentColor');
    s.setAttribute('stroke-width', '1.9'); s.setAttribute('stroke-linecap', 'round'); s.setAttribute('stroke-linejoin', 'round');
    s.setAttribute('aria-hidden', 'true');
    s.innerHTML = ICONS[name] || ICONS.info;
    return s;
  }
  function editIc() { return ui.edit ? h('span', { class: 'edit-ic' }, icon('pencil', 15)) : null; }

  /* ---------------- sanitizer for rich text ---------------- */
  var ALLOWED = { B: 1, STRONG: 1, I: 1, EM: 1, U: 1, BR: 1, P: 1, DIV: 1, SPAN: 1, A: 1, UL: 1, OL: 1, LI: 1, H3: 1, H4: 1, TABLE: 1, THEAD: 1, TBODY: 1, TR: 1, TH: 1, TD: 1, TIME: 1, SMALL: 1 };
  var DROP = { SCRIPT: 1, STYLE: 1, IFRAME: 1, OBJECT: 1, EMBED: 1, SVG: 1, MATH: 1, TEMPLATE: 1, LINK: 1, META: 1, NOSCRIPT: 1, FORM: 1, INPUT: 1, BUTTON: 1, TEXTAREA: 1, SELECT: 1, IMG: 1, VIDEO: 1, AUDIO: 1 };
  var CLASS_OK = /^(tag|book|warn|ok|tbd|info|n|mono|lead|sub3|tbl|grid2|block|tipline|hotels|hcol|hotel|hn|hm|tax|area-pick|muted|plain|note)$/;
  function cleanNode(node) {
    Array.prototype.slice.call(node.childNodes).forEach(function (el) {
      if (el.nodeType === 3) return;
      if (el.nodeType !== 1) { el.parentNode.removeChild(el); return; }
      var tag = el.tagName.toUpperCase();
      if (DROP[tag]) { el.parentNode.removeChild(el); return; }
      cleanNode(el);
      if (!ALLOWED[tag]) {
        while (el.firstChild) el.parentNode.insertBefore(el.firstChild, el);
        el.parentNode.removeChild(el);
        return;
      }
      Array.prototype.slice.call(el.attributes).forEach(function (a) {
        var n = a.name.toLowerCase();
        if (n === 'href' && tag === 'A') {
          if (!/^(https?:|mailto:|tel:|#)/i.test(a.value.trim())) el.removeAttribute(a.name);
        } else if (n === 'class') {
          var c = a.value.split(/\s+/).filter(function (x) { return CLASS_OK.test(x); }).join(' ');
          if (c) el.setAttribute('class', c); else el.removeAttribute('class');
        } else if (n === 'data-city' && /^[a-z]+$/.test(a.value)) {
          /* keep */
        } else el.removeAttribute(a.name);
      });
      if (tag === 'A' && !/^#/.test(el.getAttribute('href') || '')) { el.setAttribute('target', '_blank'); el.setAttribute('rel', 'noopener'); }
    });
  }
  function sanitize(html) {
    var t = document.createElement('template');
    t.innerHTML = String(html == null ? '' : html);
    cleanNode(t.content);
    return t.innerHTML.replace(/^(\s|<br>)+|(\s|<br>)+$/g, '');
  }
  function plain(html) { var t = document.createElement('template'); t.innerHTML = String(html || ''); return t.content.textContent.trim(); }

  var gm = function (q) { return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q); };
  var nv = function (q) { return 'https://search.naver.com/search.naver?ssc=tab.blog.all&query=' + encodeURIComponent(q); };
  var IT_CITY = { roma: 'Roma', firenze: 'Firenze', pisa: 'Pisa', venezia: 'Venezia' };
  // 사용자가 검색어를 따로 정하지 않았으면 이름과 도시로 만든다. 이름을 바꾸면 링크도 따라간다.
  function mapUrl(p, c) { return gm(p.mapQ || (p.name + ' ' + (IT_CITY[c] || cityName(c)))); }
  function blogUrl(p, c) { return nv(p.naverQ || (cityName(c) + ' ' + p.name)); }

  /* 일정 항목에 나오는 가게·장소를 찾아 지도·블로그 링크를 붙인다.
     1) 장소 탭에 있는 이름(괄호를 뺀 이름, '·'로 나눈 앞부분 포함)이 글에 들어 있으면 그 장소
     2) 굵게 표시한 이름은 장소 탭에서 비슷한 이름을 찾고, 없으면 그 이름으로 바로 검색 */
  function placeIndex() {
    var list = [];
    Object.keys(data.places).forEach(function (c) {
      CATS.forEach(function (k) {
        (data.places[c][k] || []).forEach(function (p) {
          if (!p.name) return;
          var keys = [p.name];
          var base = p.name.replace(/\s*\([^)]*\)\s*/g, ' ').trim();
          if (base && keys.indexOf(base) < 0) keys.push(base);
          base.split('·').forEach(function (seg) { seg = seg.trim(); if (seg.length >= 3 && keys.indexOf(seg) < 0) keys.push(seg); });
          list.push({ p: p, c: c, keys: keys.map(function (x) { return x.toLowerCase(); }).filter(function (x) { return x.length >= 2; }) });
        });
      });
    });
    return list;
  }
  function linksFor(it, day, idx) {
    var text = plain(it.text).toLowerCase();
    var dt = pd(day.date), md = (dt.getMonth() + 1) + '/' + dt.getDate();
    var choose = function (es) {
      return es.find(function (e) { return (e.p.when || '').indexOf(md) >= 0; }) ||
        es.find(function (e) { return e.c === day.city; }) || es[0];
    };
    var byKey = {};
    idx.forEach(function (e) { e.keys.forEach(function (k) { if (text.indexOf(k) >= 0) (byKey[k] = byKey[k] || []).push(e); }); });
    var used = [], found = [];
    Object.keys(byKey).sort(function (a, b) { return b.length - a.length; }).forEach(function (k) {
      if (used.some(function (u) { return u.indexOf(k) >= 0; })) return;
      var e = choose(byKey[k]);
      if (found.some(function (f) { return f.p === e.p; })) return;
      used.push(k);
      found.push({ p: e.p, c: e.c, at: text.indexOf(k) });
    });
    var t = document.createElement('template');
    t.innerHTML = sanitize(it.text);
    Array.prototype.forEach.call(t.content.querySelectorAll('b,strong'), function (b) {
      var name = b.textContent.trim(), low = name.toLowerCase();
      if (name.length < 2 || name.length > 30 || /[.!?]|니다|세요/.test(name)) return;
      if (used.some(function (u) { return u.indexOf(low) >= 0 || low.indexOf(u) >= 0; })) return;
      var near = idx.filter(function (e) {
        var n = e.p.name.toLowerCase();
        return n.indexOf(low) === 0 || (low.length >= 4 && n.indexOf(low) >= 0);
      });
      used.push(low);
      if (near.length) {
        var e = choose(near);
        if (!found.some(function (f) { return f.p === e.p; })) found.push({ p: e.p, c: e.c, at: text.indexOf(low) });
      } else {
        found.push({ p: { name: name }, c: day.city, at: text.indexOf(low) });
      }
    });
    return found.sort(function (a, b) { return a.at - b.at; });
  }
  function placeLinks(it, day, idx) {
    var found = linksFor(it, day, idx);
    if (!found.length) return null;
    return h('div', { class: 'plinks' }, found.map(function (f) {
      return h('span', { class: 'plk' },
        h('a', { href: mapUrl(f.p, f.c), target: '_blank', rel: 'noopener', onclick: stop, 'aria-label': f.p.name + ' 지도' }, icon('map', 14), f.p.name),
        h('a', { class: 'plk-blog', href: blogUrl(f.p, f.c), target: '_blank', rel: 'noopener', onclick: stop, 'aria-label': f.p.name + ' 블로그 후기' }, icon('blog', 14), '후기'));
    }));
  }

  function tagChip(t) { var type = TAG_OK[t[0]] ? t[0] : 'info'; return h('span', { class: 'chip t-' + type }, t[1]); }
  function chipsOf(tags) { return tags && tags.length ? h('div', { class: 'chips' }, tags.map(tagChip)) : null; }
  function cityName(c) { return (data.cities[c] && data.cities[c].name) || c; }
  function stop(e) { e.stopPropagation(); }

  /* ---------------- render root ---------------- */
  var app = document.getElementById('app');
  function render(keep) {
    var y = window.scrollY;
    runPending();
    document.documentElement.classList.toggle('edit-mode', ui.edit);
    var main = h('main', { class: 'screen', id: 'main' }, screen());
    app.replaceChildren ? app.replaceChildren(header(), main, tabbar()) : (app.innerHTML = '', append(app, [header(), main, tabbar()]));
    if (keep) window.scrollTo(0, y);
    stackTables(app);
    var hd = app.querySelector('.appbar');
    if (hd) document.documentElement.style.setProperty('--hdr', hd.offsetHeight + 'px');
    var on = app.querySelector('.dchip.on');
    if (on) { var strip = on.parentNode; strip.style.scrollBehavior = 'auto'; strip.scrollLeft = on.offsetLeft - strip.clientWidth / 2 + on.offsetWidth / 2; strip.style.scrollBehavior = ''; }
    if (ui.tab === 'plan') attachSwipe(main);
  }
  // 넓은 표는 휴대폰에서 행마다 카드로 보이도록 칸 이름을 붙인다(저장할 때는 지워짐).
  function stackTables(root) {
    root.querySelectorAll('.rich table').forEach(function (t) {
      var heads = Array.prototype.map.call(t.querySelectorAll('thead th'), function (th) { return th.textContent.trim(); });
      if (!heads.length) return;
      t.classList.add('stack');
      t.querySelectorAll('tbody tr').forEach(function (tr) {
        Array.prototype.forEach.call(tr.children, function (td, i) { td.setAttribute('data-label', heads[i] || ''); });
      });
    });
  }
  function screen() {
    if (ui.tab === 'check') return viewCheck();
    if (ui.tab === 'places') return viewPlaces();
    if (ui.tab === 'info') return ui.guide ? viewGuide() : viewInfo();
    return viewPlan();
  }
  function go(tab) {
    ui.scroll[ui.tab + (ui.guide || '')] = window.scrollY;
    if (ui.tab === tab && !ui.guide) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    ui.tab = tab; ui.guide = null; prefs.tab = tab; savePrefs();
    render();
    window.scrollTo(0, ui.scroll[tab] || 0);
  }

  function header() {
    var g = ui.tab === 'info' && ui.guide ? findGuide(ui.guide) : null;
    var bar = h('div', { class: 'bar' },
      g ? h('button', { class: 'back-btn', 'aria-label': '정보로 돌아가기', onclick: closeGuide }, icon('chevL', 24), '정보') : null,
      h('h1', { class: g ? 'sm' : '' }, g ? '' : TITLES[ui.tab]),
      h('button', { class: 'edit-btn' + (ui.edit ? ' on' : ''), 'aria-pressed': String(ui.edit), onclick: toggleEdit },
        ui.edit ? '완료' : [icon('pencil', 15), '편집'])
    );
    var parts = [bar];
    if (ui.edit) parts.push(h('div', { class: 'edit-banner' }, icon('pencil', 15), '편집 중 · 고칠 항목을 누르세요. 바로 저장됩니다.'));
    if (ui.tab === 'plan') parts.push(dateStrip());
    if (ui.tab === 'places') parts.push(citySeg());
    return h('header', { class: 'appbar' }, parts);
  }
  function toggleEdit() {
    runPending();
    ui.edit = !ui.edit;
    if (ui.edit && navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
    render(true);
  }

  function tabbar() {
    var left = 0;
    data.checklist.forEach(function (g) { g.items.forEach(function (i) { if (!i.done) left++; }); });
    var tabs = [['plan', '일정', 'calendar'], ['check', '예약', 'checks'], ['places', '장소', 'pin'], ['info', '정보', 'compass']];
    return h('nav', { class: 'tabbar', 'aria-label': '메뉴' }, h('div', { class: 'tabbar-in' }, tabs.map(function (t) {
      return h('button', { class: 'tab' + (ui.tab === t[0] ? ' on' : ''), 'aria-current': ui.tab === t[0] ? 'page' : null, onclick: function () { go(t[0]); } },
        icon(t[2], 25), t[1], t[0] === 'check' && left ? h('span', { class: 'badge' }, left > 99 ? '99+' : left) : null);
    })));
  }

  /* ---------------- plan ---------------- */
  function dateStrip() {
    var t = todayStr();
    return h('div', { class: 'datestrip', role: 'tablist', 'aria-label': '날짜' },
      data.days.map(function (d, i) {
        var dt = pd(d.date);
        return h('button', {
          class: 'dchip' + (i === ui.day ? ' on' : '') + (d.date === t ? ' today' : ''), 'data-city': d.city,
          role: 'tab', 'aria-selected': String(i === ui.day), 'aria-label': fmtLong(d.date) + ' ' + cityName(d.city),
          onclick: function () { selectDay(i); }
        }, h('span', { class: 'dw' }, d.date === t ? '오늘' : WD[dt.getDay()]), h('span', { class: 'dn' }, dt.getDate()), h('span', { class: 'dc' }));
      }),
      ui.edit ? h('button', { class: 'dchip add', 'aria-label': '날짜 추가', onclick: addDay }, '+') : null
    );
  }
  function selectDay(i) {
    if (!data.days.length) return;
    ui.day = Math.max(0, Math.min(data.days.length - 1, i));
    prefs.day = ui.day; savePrefs();
    render();
    window.scrollTo(0, 0);
  }
  function ddayText() {
    if (!data.days.length) return '';
    var first = pd(data.days[0].date), last = pd(data.days[data.days.length - 1].date);
    var now = pd(todayStr());
    var diff = Math.round((first - now) / 86400000);
    if (diff > 0) return 'D-' + diff;
    if (now <= last) return (Math.round((now - first) / 86400000) + 1) + '일차';
    return '여행 끝';
  }
  function viewPlan() {
    if (!data.days.length) {
      return [h('div', { class: 'empty' }, '날짜가 없습니다.'), h('button', { class: 'add-btn solid', onclick: addDay }, icon('plus', 18), '날짜 추가')];
    }
    if (ui.day >= data.days.length) ui.day = data.days.length - 1;
    var d = data.days[ui.day], di = ui.day;
    var first = data.days[0].date, last = data.days[data.days.length - 1].date;
    var isToday = d.date === todayStr();
    var nowIdx = -1;
    if (isToday) {
      var n = new Date(), cur = n.getHours() * 60 + n.getMinutes();
      d.items.forEach(function (it, i) { var m = /^(\d{1,2}):(\d{2})$/.exec(it.time.trim()); if (m && (+m[1]) * 60 + (+m[2]) <= cur) nowIdx = i; });
    }
    var out = [];
    out.push(h('div', { class: 'trip-line' },
      h('span', null, fmtDot(first) + ' – ' + fmtShort(last).split(' ')[0] + ' · ' + data.days.length + '일'),
      h('span', { class: 'dday' }, ddayText())));
    out.push(h('section', { class: 'day-head' + (ui.edit ? ' editable' : ''), 'data-city': d.city, onclick: ui.edit ? function () { editDay(di); } : null },
      h('div', { class: 'dh-top' }, h('span', { class: 'city-pill' }, d.label || cityName(d.city)), h('span', null, fmtLong(d.date))),
      h('h2', { class: 'dh-title' }, d.title || '제목 없음'),
      editIc()));
    if (d.items.length) {
      var pidx = placeIndex();
      out.push(h('ol', { class: 'tl', 'data-city': d.city }, d.items.map(function (it, ii) {
        return h('li', { class: 'tl-item' + (ii === nowIdx ? ' now' : '') + (ui.edit ? ' editable' : ''), onclick: ui.edit ? function () { editItem(di, ii); } : null },
          h('div', { class: 'tl-time' }, it.time),
          h('div', { class: 'tl-rail' }),
          h('div', { class: 'tl-body' }, h('div', { class: 'tl-text', html: sanitize(it.text) }), chipsOf(it.tags), placeLinks(it, d, pidx)),
          editIc());
      })));
    } else if (!ui.edit) {
      out.push(h('div', { class: 'empty', style: 'margin-top:12px' }, '이 날 일정이 비어 있습니다. 위의 편집을 눌러 추가하세요.'));
    }
    if (ui.edit) out.push(h('button', { class: 'add-btn solid', onclick: function () { editItem(di, null); } }, icon('plus', 18), '일정 추가'));
    d.notes.forEach(function (nt, ni) {
      out.push(h('div', { class: 'callout ' + (nt.kind === 'warn' ? 'warn' : '') + (ui.edit ? ' editable' : ''), onclick: ui.edit ? function () { editNote(di, ni); } : null },
        h('span', { class: 'ic' }, icon(nt.kind === 'warn' ? 'warn' : 'info', 18)),
        h('div', { html: sanitize(nt.html) }), editIc()));
    });
    if (ui.edit) out.push(h('button', { class: 'add-btn', onclick: function () { editNote(di, null); } }, icon('plus', 18), '메모 추가'));
    var prev = data.days[di - 1], next = data.days[di + 1];
    out.push(h('div', { class: 'daynav' },
      h('button', { disabled: !prev, onclick: function () { selectDay(di - 1); } },
        h('span', { class: 'lbl' }, icon('chevL', 14), prev ? fmtShort(prev.date) : ''), h('span', { class: 't' }, prev ? prev.title : '')),
      h('button', { class: 'next', disabled: !next, onclick: function () { selectDay(di + 1); } },
        h('span', { class: 'lbl' }, next ? fmtShort(next.date) : '', icon('chevR', 14)), h('span', { class: 't' }, next ? next.title : ''))));
    out.push(h('p', { class: 'swipe-hint' }, '좌우로 밀어서 날짜를 넘길 수 있습니다'));
    return out;
  }
  function attachSwipe(el) {
    var x0 = null, y0 = 0, t0 = 0;
    el.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1 || document.querySelector('.sheet-back')) { x0 = null; return; }
      var t = e.touches[0];
      if (t.clientX < 24 || t.clientX > window.innerWidth - 24 || e.target.closest('.tbl,[contenteditable="true"],input,textarea')) { x0 = null; return; }
      x0 = t.clientX; y0 = t.clientY; t0 = Date.now();
    }, { passive: true });
    el.addEventListener('touchend', function (e) {
      if (x0 == null) return;
      var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
      x0 = null;
      if (Date.now() - t0 > 700) return;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.8) {
        var ni = ui.day + (dx < 0 ? 1 : -1);
        if (ni >= 0 && ni < data.days.length) selectDay(ni);
      }
    }, { passive: true });
  }

  /* ---------------- checklist ---------------- */
  function viewCheck() {
    var total = 0, done = 0;
    data.checklist.forEach(function (g) { g.items.forEach(function (i) { total++; if (i.done) done++; }); });
    var pct = total ? Math.round(done / total * 100) : 0;
    var out = [];
    out.push(h('section', { class: 'card progress-card' },
      h('div', { class: 'pg-row' },
        h('div', null, h('div', { class: 'pg-num' }, done, h('small', null, ' / ' + total + ' 완료')), h('div', { class: 'pg-cap' }, total - done ? '남은 예약·준비 ' + (total - done) + '개' : '모두 끝났습니다')),
        h('label', { class: 'switch' }, '남은 것만',
          h('input', { type: 'checkbox', role: 'switch', checked: ui.onlyTodo, onchange: function (e) { ui.onlyTodo = e.target.checked; prefs.onlyTodo = ui.onlyTodo; savePrefs(); render(true); } }))),
      h('div', { class: 'bar-track', role: 'progressbar', 'aria-valuenow': pct, 'aria-valuemin': 0, 'aria-valuemax': 100 }, h('i', { style: 'width:' + pct + '%' }))));
    data.checklist.forEach(function (g, gi) {
      var gdone = g.items.filter(function (i) { return i.done; }).length;
      var items = g.items.map(function (it, ii) { return [it, ii]; }).filter(function (p) { return !ui.onlyTodo || !p[0].done || ui.edit; });
      if (ui.onlyTodo && !items.length && !ui.edit) return;
      out.push(h('div', { class: 'sec-title' }, h('h3', null, g.title),
        ui.edit ? h('button', { onclick: function () { editGroup(gi); } }, '이름 바꾸기') : h('span', { class: 'cnt' }, gdone + '/' + g.items.length)));
      var list = h('div', { class: 'list' }, items.map(function (p) {
        var it = p[0], ii = p[1];
        return h('div', { class: 'ck' + (it.done ? ' done' : '') },
          h('button', { class: 'ckbox', role: 'checkbox', 'aria-checked': String(!!it.done), 'aria-label': it.label, onclick: function () { toggleCheck(gi, ii); } }, icon('check', 16)),
          h('div', { class: 'ck-body' + (ui.edit ? ' editable' : ''), onclick: ui.edit ? function () { editCheck(gi, ii); } : function () { toggleCheck(gi, ii); } },
            h('div', { class: 'ck-label' }, it.label),
            it.meta ? h('div', { class: 'ck-meta', html: sanitize(it.meta), onclick: function (e) { if (e.target.closest('a')) e.stopPropagation(); } }) : null),
          editIc());
      }));
      if (!items.length) list.appendChild(h('div', { class: 'all-done' }, '항목이 없습니다.'));
      out.push(list);
      if (ui.edit) out.push(h('button', { class: 'add-btn', onclick: function () { editCheck(gi, null); } }, icon('plus', 18), '항목 추가'));
    });
    if (ui.edit) out.push(h('button', { class: 'add-btn solid', style: 'margin-top:22px', onclick: function () { editGroup(null); } }, icon('plus', 18), '그룹 추가'));
    out.push(h('p', { class: 'foot' }, '가격은 1인 기준입니다. 결제 화면에서 한 번 더 확인하세요.'));
    return out;
  }
  function toggleCheck(gi, ii) {
    var it = data.checklist[gi].items[ii];
    it.done = !it.done;
    if (navigator.vibrate) try { navigator.vibrate(8); } catch (e) { /* ignore */ }
    save(); render(true);
  }

  /* ---------------- places ---------------- */
  function citySeg() {
    return h('div', { class: 'seg', role: 'tablist', 'aria-label': '도시' }, Object.keys(data.cities).map(function (c) {
      return h('button', { class: ui.city === c ? 'on' : '', 'data-city': c, role: 'tab', 'aria-selected': String(ui.city === c), onclick: function () { ui.city = c; prefs.city = c; savePrefs(); render(); window.scrollTo(0, 0); } }, cityName(c));
    }));
  }
  function viewPlaces() {
    var c = ui.city, P = data.places[c];
    var out = [];
    out.push(h('div', { class: 'catbar', role: 'tablist', 'aria-label': '분류' }, CATS.map(function (k) {
      return h('button', { class: 'cat' + (ui.cat === k ? ' on' : ''), role: 'tab', 'aria-selected': String(ui.cat === k), onclick: function () { ui.cat = k; prefs.cat = k; savePrefs(); render(true); } },
        CAT_LABEL[k], h('span', { class: 'n' }, P[k].length));
    })));
    if (P.notes.length || ui.edit) {
      var det = h('details', { class: 'tips', 'data-city': c, open: prefs.tipsOpen === true ? true : null, ontoggle: function (e) { prefs.tipsOpen = e.target.open; savePrefs(); } },
        h('summary', null, icon('bulb', 18), cityName(c) + ' 팁 ' + P.notes.length, h('span', { class: 'chev' }, icon('chevR', 16))),
        P.notes.map(function (n, i) {
          return h('div', { class: 'tip' + (ui.edit ? ' editable' : ''), html: sanitize(n), onclick: ui.edit ? function () { editCityNote(c, i); } : null });
        }));
      if (ui.edit) {
        det.querySelectorAll('.tip').forEach(function (t) { t.appendChild(editIc()); });
        det.appendChild(h('button', { class: 'add-btn', onclick: function () { editCityNote(c, null); } }, icon('plus', 18), '팁 추가'));
      }
      out.push(det);
    }
    var list = P[ui.cat];
    if (!list.length) out.push(h('div', { class: 'empty', style: 'margin-top:12px' }, ui.edit ? '아래 버튼으로 장소를 추가하세요.' : '아직 등록된 곳이 없습니다.'));
    out.push(h('div', { class: 'cards' }, list.map(function (p, i) { return placeCard(c, ui.cat, p, i); })));
    if (ui.edit) out.push(h('button', { class: 'add-btn solid', onclick: function () { editPlace(c, ui.cat, null); } }, icon('plus', 18), CAT_LABEL[ui.cat] + ' 추가'));
    return out;
  }
  function placeCard(c, cat, p, i) {
    var isSight = cat === 'sight';
    var review = p.review ? h('div', { class: 'pl-review', onclick: function (e) { e.stopPropagation(); e.currentTarget.firstChild.classList.toggle('open'); } },
      h('div', { class: 'clamp' }, h('b', null, '후기 '), p.review)) : null;
    return h('article', { class: 'card place' + (ui.edit ? ' editable' : ''), 'data-city': c, onclick: ui.edit ? function () { editPlace(c, cat, i); } : null },
      h('div', { class: 'pl-top' }, h('h3', null, p.name), p.when ? h('span', { class: 'when' }, p.when) : null),
      !isSight && p.area ? h('div', { class: 'pl-area' }, icon('pin', 14), p.area) : null,
      !isSight && p.rating ? h('div', { class: 'pl-rate' }, h('span', { class: 'star' }, '★ '), p.rating, p.reviews ? h('span', { class: 'muted' }, ' · 리뷰 ' + p.reviews) : null) : null,
      !isSight && p.what ? h('p', { class: 'pl-what' }, p.what) : null,
      isSight && (p.book || p.price) ? h('dl', { class: 'kv' },
        p.book ? [h('dt', null, '예약'), h('dd', null, p.book)] : null,
        p.price ? [h('dt', null, '가격'), h('dd', null, p.price)] : null) : null,
      isSight && p.info ? h('div', { class: 'pl-info', html: sanitize(p.info) }) : null,
      chipsOf(p.tags),
      review,
      p.memo ? h('div', { class: 'pl-memo' }, h('b', null, '내 메모 '), p.memo) : null,
      h('div', { class: 'pl-actions' },
        h('a', { class: 'pill-btn', href: mapUrl(p, c), target: '_blank', rel: 'noopener', onclick: stop }, icon('map', 17), '지도'),
        h('a', { class: 'pill-btn', href: blogUrl(p, c), target: '_blank', rel: 'noopener', onclick: stop }, icon('blog', 17), '블로그 후기')),
      editIc());
  }

  /* ---------------- info ---------------- */
  function findGuide(id) { return data.guides.find(function (g) { return g.id === id; }); }
  function openGuide(id) { ui.scroll.info = window.scrollY; ui.guide = id; render(); window.scrollTo(0, 0); }
  function closeGuide() { runPending(); ui.guide = null; render(); window.scrollTo(0, ui.scroll.info || 0); }
  function viewInfo() {
    var out = [];
    var first = data.days[0], last = data.days[data.days.length - 1];
    out.push(h('section', { class: 'card overview' },
      h('div', { class: 'ov-head' }, h('h2', null, data.trip.title || '여행'), first ? h('span', null, fmtDot(first.date) + ' – ' + fmtShort(last.date).split(' ')[0]) : null),
      h('ol', { class: 'route' }, data.route.map(function (r, i) {
        return h('li', { 'data-city': r.city, class: ui.edit ? 'editable' : null, style: 'position:relative', onclick: ui.edit ? function () { editRoute(i); } : null },
          h('div', { class: 'r-top' }, h('span', { class: 'r-city' }, r.name), h('span', { class: 'r-n' }, r.nights)),
          r.leg ? h('div', { class: 'r-leg' }, r.leg) : null, editIc());
      })),
      data.trip.summary ? h('div', { class: 'ov-text', html: sanitize(data.trip.summary) }) : null,
      data.trip.assume ? h('div', { class: 'ov-assume', html: sanitize(data.trip.assume) }) : null,
      h('div', { class: 'legend' }, TAG_TYPES.map(function (t) { return h('span', null, tagChip([t[0], t[1]])); })),
      ui.edit ? h('div', { class: 'ov-edit' },
        h('button', { class: 'add-btn', onclick: editTrip }, icon('pencil', 16), '개요 수정'),
        h('button', { class: 'add-btn', onclick: function () { editRoute(null); } }, icon('plus', 16), '경로 추가')) : null));

    out.push(h('div', { class: 'sec-title' }, h('h3', null, '여행 안내')));
    out.push(h('div', { class: 'rows' }, data.guides.map(function (g) {
      return h('button', { class: 'row', onclick: function () { openGuide(g.id); } },
        h('span', { class: 'row-ic' }, icon(g.icon || 'note', 19)),
        h('span', { class: 'row-t' }, h('b', null, g.title), g.sub ? h('small', null, g.sub) : null),
        h('span', { class: 'chev' }, icon('chevR', 18)));
    }), ui.edit ? h('button', { class: 'row', onclick: function () { editGuideMeta(null); } },
      h('span', { class: 'row-ic' }, icon('plus', 19)), h('span', { class: 'row-t' }, h('b', null, '안내 페이지 추가'))) : null));

    out.push(h('div', { class: 'sec-title' }, h('h3', null, '앱 설정')));
    var theme = prefs.theme || 'auto';
    out.push(h('div', { class: 'rows' },
      h('div', { class: 'row' }, h('span', { class: 'row-ic' }, icon('sun', 19)), h('span', { class: 'row-t' }, h('b', null, '화면')),
        h('div', { class: 'seg', role: 'radiogroup', 'aria-label': '화면 테마' }, [['auto', '자동'], ['light', '밝게'], ['dark', '어둡게']].map(function (o) {
          return h('button', { class: theme === o[0] ? 'on' : '', role: 'radio', 'aria-checked': String(theme === o[0]), onclick: function () { prefs.theme = o[0]; savePrefs(); applyTheme(); render(true); } }, o[1]);
        }))),
      h('button', { class: 'row', onclick: installSheet }, h('span', { class: 'row-ic' }, icon('phone', 19)),
        h('span', { class: 'row-t' }, h('b', null, isStandalone() ? '앱으로 실행 중' : '홈 화면에 설치'), h('small', null, isStandalone() ? '인터넷 없이도 열립니다' : '아이폰·안드로이드에서 앱처럼 쓰기')), h('span', { class: 'chev' }, icon('chevR', 18))),
      h('button', { class: 'row', onclick: exportBackup }, h('span', { class: 'row-ic' }, icon('download', 19)),
        h('span', { class: 'row-t' }, h('b', null, '백업 내보내기'), h('small', null, '파일로 저장하거나 카톡으로 동행에게 보내기')), h('span', { class: 'chev' }, icon('chevR', 18))),
      h('button', { class: 'row', onclick: importBackup }, h('span', { class: 'row-ic' }, icon('upload', 19)),
        h('span', { class: 'row-t' }, h('b', null, '백업 불러오기'), h('small', null, '다른 기기에서 내보낸 파일로 바꾸기')), h('span', { class: 'chev' }, icon('chevR', 18))),
      h('button', { class: 'row danger', onclick: resetData }, h('span', { class: 'row-ic' }, icon('reset', 19)),
        h('span', { class: 'row-t' }, h('b', null, '처음 일정으로 되돌리기'), h('small', null, '고친 내용과 체크 표시가 모두 지워집니다')))));
    out.push(h('p', { class: 'foot' },
      '고친 내용은 이 기기 안에만 저장됩니다. 기기를 바꾸거나 동행과 맞추려면 백업 파일을 보내세요.',
      data.updatedAt ? h('br') : null, data.updatedAt ? '마지막 저장 ' + new Date(data.updatedAt).toLocaleString('ko-KR') : null));
    return out;
  }
  function viewGuide() {
    var g = findGuide(ui.guide);
    if (!g) { ui.guide = null; return viewInfo(); }
    var out = [h('div', { class: 'guide-head' }, h('span', { class: 'row-ic' }, icon(g.icon || 'note', 22)), h('div', null, h('h2', null, g.title), g.sub ? h('p', null, g.sub) : null))];
    if (!ui.edit) {
      out.push(h('div', { class: 'rich guide-body', html: sanitize(g.html) }));
      return out;
    }
    var ed = h('div', { class: 'rich guide-body editing', contenteditable: 'true', html: sanitize(g.html) });
    var commit = function () { if (ed.isConnected || ed.innerHTML) { g.html = sanitize(ed.innerHTML); save(); } };
    var tmr;
    ed.addEventListener('input', function () { clearTimeout(tmr); tmr = setTimeout(commit, 500); });
    ed.addEventListener('blur', commit);
    ed.addEventListener('paste', pastePlain);
    pending.push(function () { clearTimeout(tmr); commit(); });
    out.push(h('div', { class: 'guide-tools' },
      fmtBtn('굵게', 'bold'), linkBtn(), fmtBtn('서식 지우기', 'removeFormat'),
      h('span', { class: 'sp' }),
      h('button', { class: 'tb', onclick: function () { editGuideMeta(g.id); } }, '이름·삭제')));
    out.push(ed);
    return out;
  }

  /* ---------------- sheets & forms ---------------- */
  function openSheet(o) {
    var back = h('div', { class: 'sheet-back' });
    var foot = h('div', { class: 'sheet-f' });
    var sheet = h('div', { class: 'sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': o.title },
      h('div', { class: 'grabber' }),
      h('div', { class: 'sheet-h' }, h('h3', null, o.title), h('button', { class: 'icon-btn', 'aria-label': '닫기', onclick: close }, icon('x', 22))),
      h('div', { class: 'sheet-b' }, o.body),
      foot);
    (o.actions || []).forEach(function (a) {
      foot.appendChild(h('button', { class: 'btn ' + (a.kind || ''), onclick: function () { if (a.run && a.run() === false) return; close(); } }, a.label));
    });
    back.appendChild(sheet);
    back.addEventListener('click', function (e) { if (e.target === back) close(); });
    var onKey = function (e) { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.appendChild(back);
    document.body.classList.add('modal-open');
    requestAnimationFrame(function () { back.classList.add('in'); });
    if (window.matchMedia('(hover: hover)').matches) {
      var f = sheet.querySelector('input[type="text"],textarea,[contenteditable]');
      if (f) setTimeout(function () { f.focus(); }, 260);
    }
    var closed = false;
    function close() {
      if (closed) return; closed = true;
      document.removeEventListener('keydown', onKey);
      back.classList.remove('in');
      document.body.classList.remove('modal-open');
      setTimeout(function () { back.remove(); }, 230);
      if (o.onClose) o.onClose();
    }
    return { close: close, el: sheet };
  }
  function confirmSheet(title, msg, okLabel, onOk, danger) {
    openSheet({
      title: title, body: h('p', { class: 'sheet-msg' }, msg),
      actions: [{ label: '취소' }, { label: okLabel, kind: danger ? 'danger wide' : 'primary', run: onOk }]
    });
  }
  function field(label, control) { return h('div', { class: 'field' }, h('span', { class: 'field-l' }, label), control); }
  function fText(label, value, opt) {
    opt = opt || {};
    var el = opt.multiline
      ? h('textarea', { rows: opt.rows || 3, placeholder: opt.ph || null })
      : h('input', { type: 'text', placeholder: opt.ph || null, inputmode: opt.inputmode || null, enterkeyhint: 'done', autocomplete: 'off' });
    el.value = value || '';
    return { el: field(label, el), input: el, get: function () { return el.value.trim(); } };
  }
  function fDate(label, value) {
    var el = h('input', { type: 'date' }); el.value = value || '';
    return { el: field(label, el), input: el, get: function () { return el.value; } };
  }
  function fSelect(label, options, value) {
    var el = h('select', null, options.map(function (o) { return h('option', { value: String(o[0]) }, o[1]); }));
    el.value = String(value);
    return { el: field(label, el), input: el, get: function () { return el.value; } };
  }
  function fSeg(label, options, value) {
    var cur = value;
    var seg = h('div', { class: 'seg in-form', role: 'radiogroup', 'aria-label': label });
    options.forEach(function (o) {
      seg.appendChild(h('button', { type: 'button', role: 'radio', class: o[0] === cur ? 'on' : '', 'aria-checked': String(o[0] === cur), onclick: function (e) {
        cur = o[0];
        Array.prototype.forEach.call(seg.children, function (b) { var on = b === e.currentTarget; b.classList.toggle('on', on); b.setAttribute('aria-checked', String(on)); });
      } }, o[1]));
    });
    return { el: field(label, seg), get: function () { return cur; } };
  }
  function pastePlain(e) {
    var t = (e.clipboardData || window.clipboardData);
    if (!t) return;
    e.preventDefault();
    document.execCommand('insertText', false, t.getData('text/plain'));
  }
  function keepSel(e) { e.preventDefault(); }
  function fmtBtn(label, cmd) {
    return h('button', { type: 'button', class: 'tb', onpointerdown: keepSel, onmousedown: keepSel, onclick: function () { document.execCommand(cmd); if (cmd === 'removeFormat') document.execCommand('unlink'); } }, label === '굵게' ? h('b', null, '굵게') : label);
  }
  function linkBtn() {
    return h('button', { type: 'button', class: 'tb', onpointerdown: keepSel, onmousedown: keepSel, onclick: function () {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed) { toast('링크로 만들 글자를 먼저 선택하세요'); return; }
      var range = sel.getRangeAt(0);
      var url = window.prompt('링크 주소', 'https://');
      if (!url || !/^https?:\/\/\S+$/i.test(url.trim())) return;
      sel.removeAllRanges(); sel.addRange(range);
      document.execCommand('createLink', false, url.trim());
    } }, '링크');
  }
  function fRich(label, html, ph) {
    var ed = h('div', { class: 'rich-ed', contenteditable: 'true', 'data-ph': ph || '', html: sanitize(html) });
    ed.addEventListener('paste', pastePlain);
    var wrap = h('div', { class: 'rich-wrap' }, h('div', { class: 'rich-tb' }, fmtBtn('굵게', 'bold'), linkBtn(), fmtBtn('서식 지우기', 'removeFormat')), ed);
    return { el: field(label, wrap), get: function () { return sanitize(ed.innerHTML); } };
  }
  function fTags(label, tags) {
    var list = clone(tags || []);
    var type = 'book';
    var chips = h('div', { class: 'chips' });
    var inp = h('input', { type: 'text', placeholder: '예: 예약, 일 휴무, 현금만', enterkeyhint: 'done', autocomplete: 'off' });
    function draw() {
      chips.innerHTML = '';
      if (!list.length) chips.appendChild(h('span', { class: 'muted small' }, '태그 없음'));
      list.forEach(function (t, i) {
        var c = tagChip(t);
        c.appendChild(h('button', { type: 'button', class: 'chip-x', 'aria-label': t[1] + ' 태그 삭제', onclick: function () { list.splice(i, 1); draw(); } }, '×'));
        chips.appendChild(c);
      });
    }
    var types = h('div', { class: 'type-row' }, TAG_TYPES.map(function (t) {
      return h('button', { type: 'button', class: 'chip t-' + t[0] + (t[0] === type ? ' on' : ''), onclick: function (e) {
        type = t[0];
        Array.prototype.forEach.call(types.children, function (b) { b.classList.toggle('on', b === e.currentTarget); });
      } }, t[1]);
    }));
    function add() {
      var v = inp.value.trim() || (TAG_TYPES.find(function (t) { return t[0] === type; }) || [0, '정보'])[1];
      list.push([type, v]); inp.value = ''; draw();
    }
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); add(); } });
    draw();
    var box = h('div', { class: 'tags-ed' }, chips, types, h('div', { class: 'in-row' }, inp, h('button', { type: 'button', class: 'btn small', onclick: add }, '추가')));
    return { el: field(label, box), get: function () { if (inp.value.trim()) add(); return list; } };
  }
  function orderRow(onUp, onDown) {
    return field('순서', h('div', { class: 'order-row' },
      h('button', { type: 'button', class: 'btn', onclick: onUp }, icon('up', 18), '위로'),
      h('button', { type: 'button', class: 'btn', onclick: onDown }, icon('down', 18), '아래로')));
  }
  function move(arr, i, dir) {
    var j = i + dir;
    if (j < 0 || j >= arr.length) return i;
    var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    return j;
  }
  function timeMin(t) { var m = /^(\d{1,2}):(\d{2})$/.exec(String(t).trim()); return m ? (+m[1]) * 60 + (+m[2]) : null; }
  function insertByTime(items, it) {
    var t = timeMin(it.time);
    if (t == null) { items.push(it); return; }
    var idx = items.findIndex(function (x) { var m = timeMin(x.time); return m != null && m > t; });
    if (idx < 0) items.push(it); else items.splice(idx, 0, it);
  }
  function withUndo(msg, fn) {
    var snap = JSON.stringify(data);
    fn(); save(); render(true);
    toast(msg, '되돌리기', function () { data = normalize(JSON.parse(snap)); save(); render(true); });
  }

  /* --- day editors --- */
  function editItem(di, ii) {
    var day = data.days[di], isNew = ii == null;
    var it = isNew ? { id: uid('i'), time: '', text: '', tags: [] } : day.items[ii];
    var f = {
      time: fText('시간', it.time, { ph: '09:00, 오전, 저녁 등' }),
      text: fRich('내용', it.text, '무엇을 하나요?'),
      tags: fTags('태그', it.tags),
      day: fSelect('날짜', data.days.map(function (d, i) { return [i, fmtShort(d.date) + ' · ' + (d.title || cityName(d.city))]; }), di)
    };
    var pos = ii;
    var body = [f.time.el, f.text.el,
      h('p', { class: 'field-hint' }, '장소 탭에 있는 가게는 이름만 적어도 지도·블로그 버튼이 붙습니다. 처음 보는 가게는 이름을 굵게(B) 하세요.'),
      f.tags.el, f.day.el];
    if (!isNew) body.push(orderRow(
      function () { pos = move(day.items, pos, -1); save(); render(true); toast('위로 옮겼습니다'); },
      function () { pos = move(day.items, pos, 1); save(); render(true); toast('아래로 옮겼습니다'); }));
    openSheet({
      title: isNew ? '일정 추가' : '일정 수정', body: body,
      actions: (isNew ? [{ label: '취소' }] : [{ label: '삭제', kind: 'danger', run: function () {
        withUndo('일정을 삭제했습니다', function () { day.items.splice(day.items.indexOf(it), 1); });
      } }]).concat([{ label: isNew ? '추가' : '저장', kind: 'primary', run: function () {
        var text = f.text.get(), time = f.time.get();
        if (!plain(text) && !time) { toast('내용을 입력하세요'); return false; }
        var oldTime = it.time;
        it.time = time; it.text = text; it.tags = f.tags.get();
        var target = data.days[+f.day.get()] || day;
        var idx = day.items.indexOf(it);
        if (isNew || target !== day || (time !== oldTime && timeMin(time) != null)) {
          if (idx >= 0) day.items.splice(idx, 1);
          insertByTime(target.items, it);
        }
        save();
        if (target !== day) { ui.day = data.days.indexOf(target); toast(fmtShort(target.date) + '로 옮겼습니다'); }
        render(true);
      } }])
    });
  }
  function editDay(di) {
    var d = data.days[di];
    var f = {
      title: fText('제목', d.title, { ph: '예: 바티칸과 나보나 광장' }),
      date: fDate('날짜', d.date),
      city: fSelect('도시', Object.keys(data.cities).map(function (c) { return [c, cityName(c)]; }), d.city),
      label: fText('도시 대신 표시할 이름 (선택)', d.label, { ph: '예: 출국' })
    };
    openSheet({
      title: '날짜 수정', body: [f.title.el, h('div', { class: 'two' }, f.date.el, f.city.el), f.label.el],
      actions: [
        data.days.length > 1 ? { label: '삭제', kind: 'danger', run: function () {
          confirmSheet('이 날을 삭제할까요?', fmtLong(d.date) + ' 일정 ' + d.items.length + '개와 메모가 함께 지워집니다.', '삭제', function () {
            withUndo('날짜를 삭제했습니다', function () { data.days.splice(data.days.indexOf(d), 1); ui.day = Math.max(0, Math.min(ui.day, data.days.length - 1)); });
          }, true);
        } } : null,
        { label: '저장', kind: 'primary', run: function () {
          d.title = f.title.get(); d.city = f.city.get(); d.label = f.label.get();
          if (f.date.get()) d.date = f.date.get();
          data.days.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
          ui.day = data.days.indexOf(d);
          save(); render(true);
        } }
      ].filter(Boolean)
    });
  }
  function addDay() {
    var last = data.days[data.days.length - 1];
    var dt = last ? pd(last.date) : new Date();
    if (last) dt.setDate(dt.getDate() + 1);
    var d = { id: uid('d'), date: ymd(dt), city: last ? last.city : 'roma', label: '', title: '새 일정', items: [], notes: [] };
    data.days.push(d); ui.day = data.days.length - 1; save(); render();
    editDay(ui.day);
  }
  function editNote(di, ni) {
    var day = data.days[di], isNew = ni == null;
    var n = isNew ? { id: uid('n'), kind: 'info', html: '' } : day.notes[ni];
    var f = { kind: fSeg('종류', [['info', '일반 메모'], ['warn', '주의']], n.kind === 'warn' ? 'warn' : 'info'), html: fRich('내용', n.html, '메모를 적으세요') };
    openSheet({
      title: isNew ? '메모 추가' : '메모 수정', body: [f.kind.el, f.html.el],
      actions: (isNew ? [{ label: '취소' }] : [{ label: '삭제', kind: 'danger', run: function () {
        withUndo('메모를 삭제했습니다', function () { day.notes.splice(day.notes.indexOf(n), 1); });
      } }]).concat([{ label: isNew ? '추가' : '저장', kind: 'primary', run: function () {
        var html = f.html.get();
        if (!plain(html)) { toast('내용을 입력하세요'); return false; }
        n.kind = f.kind.get(); n.html = html;
        if (isNew) day.notes.push(n);
        save(); render(true);
      } }])
    });
  }

  /* --- checklist editors --- */
  function editCheck(gi, ii) {
    var g = data.checklist[gi], isNew = ii == null;
    var it = isNew ? { id: uid('c'), label: '', meta: '', done: false } : g.items[ii];
    var f = {
      label: fText('할 일', it.label, { ph: '예: 바티칸 박물관 12/22 08:00' }),
      meta: fRich('자세히', it.meta, '가격, 예약 사이트, 메모'),
      group: fSelect('그룹', data.checklist.map(function (x, i) { return [i, x.title]; }), gi),
      done: fSeg('상태', [[false, '할 일'], [true, '완료']], !!it.done)
    };
    var pos = ii;
    var body = [f.label.el, f.meta.el, h('div', { class: 'two' }, f.group.el, f.done.el)];
    if (!isNew) body.push(orderRow(
      function () { pos = move(g.items, pos, -1); save(); render(true); toast('위로 옮겼습니다'); },
      function () { pos = move(g.items, pos, 1); save(); render(true); toast('아래로 옮겼습니다'); }));
    openSheet({
      title: isNew ? '항목 추가' : '항목 수정', body: body,
      actions: (isNew ? [{ label: '취소' }] : [{ label: '삭제', kind: 'danger', run: function () {
        withUndo('항목을 삭제했습니다', function () { g.items.splice(g.items.indexOf(it), 1); });
      } }]).concat([{ label: isNew ? '추가' : '저장', kind: 'primary', run: function () {
        if (!f.label.get()) { toast('할 일을 입력하세요'); return false; }
        it.label = f.label.get(); it.meta = f.meta.get(); it.done = f.done.get() === true;
        var target = data.checklist[+f.group.get()] || g;
        var idx = g.items.indexOf(it);
        if (target !== g && idx >= 0) g.items.splice(idx, 1);
        if (isNew || target !== g) target.items.push(it);
        save(); render(true);
      } }])
    });
  }
  function editGroup(gi) {
    var isNew = gi == null;
    var g = isNew ? { id: uid('g'), title: '', items: [] } : data.checklist[gi];
    var f = fText('그룹 이름', g.title, { ph: '예: 출발 1주 전' });
    var pos = gi;
    var body = [f.el];
    if (!isNew) body.push(orderRow(
      function () { pos = move(data.checklist, pos, -1); save(); render(true); },
      function () { pos = move(data.checklist, pos, 1); save(); render(true); }));
    openSheet({
      title: isNew ? '그룹 추가' : '그룹 수정', body: body,
      actions: (isNew ? [{ label: '취소' }] : [{ label: '삭제', kind: 'danger', run: function () {
        withUndo('그룹을 삭제했습니다', function () { data.checklist.splice(data.checklist.indexOf(g), 1); });
      } }]).concat([{ label: isNew ? '추가' : '저장', kind: 'primary', run: function () {
        if (!f.get()) { toast('이름을 입력하세요'); return false; }
        g.title = f.get();
        if (isNew) data.checklist.push(g);
        save(); render(true);
      } }])
    });
  }

  /* --- place editors --- */
  function editPlace(c, cat, i) {
    var isNew = i == null;
    var list = data.places[c][cat];
    var p = isNew ? { id: uid('p'), name: '', area: '', when: '', rating: '', reviews: '', what: '', review: '', tags: [], memo: '', mapQ: '', naverQ: '', book: '', price: '', info: '' } : list[i];
    var orig = { name: p.name, mapQ: (p.mapQ || '').trim(), naverQ: (p.naverQ || '').trim() };
    var f = {
      name: fText('이름', p.name, { ph: '예: Trattoria Mario' }),
      cat: fSelect('분류', CATS.map(function (k) { return [k, CAT_LABEL[k]]; }), cat),
      city: fSelect('도시', Object.keys(data.cities).map(function (k) { return [k, cityName(k)]; }), c),
      when: fText('일정에서 언제', p.when, { ph: '예: 12/24 점심' }),
      book: fText('예약 방법', p.book, { ph: '예: 공식 사이트 · 30일 전 오픈' }),
      price: fText('가격', p.price, { ph: '예: €24' }),
      info: fRich('정보', p.info, '운영시간, 휴관일, 주의할 점'),
      area: fText('위치', p.area, { ph: '예: 판테온 근처' }),
      rating: fText('구글 평점', p.rating, { ph: '4.5', inputmode: 'decimal' }),
      reviews: fText('리뷰 수', p.reviews, { ph: '1,234' }),
      what: fText('메뉴·특징', p.what, { multiline: true, rows: 2 }),
      review: fText('후기 요약', p.review, { multiline: true }),
      tags: fTags('태그', p.tags),
      memo: fText('내 메모', p.memo, { multiline: true, ph: '예약 번호, 주문할 메뉴 등' }),
      mapQ: fText('지도 검색어', p.mapQ, { ph: '비우면 이름으로 검색' }),
      naverQ: fText('블로그 검색어', p.naverQ, { ph: '비우면 이름으로 검색' })
    };
    var sightBox = h('div', null, h('div', { class: 'two' }, f.book.el, f.price.el), f.info.el);
    var placeBox = h('div', null, f.area.el, h('div', { class: 'two' }, f.rating.el, f.reviews.el), f.what.el, f.review.el);
    var sync = function () { var s = f.cat.get() === 'sight'; sightBox.hidden = !s; placeBox.hidden = s; };
    f.cat.input.addEventListener('change', sync); sync();
    openSheet({
      title: isNew ? CAT_LABEL[cat] + ' 추가' : '장소 수정',
      body: [f.name.el, h('div', { class: 'two' }, f.cat.el, f.city.el), f.when.el, sightBox, placeBox, f.tags.el, f.memo.el,
        h('details', { class: 'more' }, h('summary', null, '지도·블로그 검색어 바꾸기'), f.mapQ.el, f.naverQ.el)],
      actions: (isNew ? [{ label: '취소' }] : [{ label: '삭제', kind: 'danger', run: function () {
        withUndo('장소를 삭제했습니다', function () { list.splice(list.indexOf(p), 1); });
      } }]).concat([{ label: isNew ? '추가' : '저장', kind: 'primary', run: function () {
        if (!f.name.get()) { toast('이름을 입력하세요'); return false; }
        ['name', 'when', 'book', 'price', 'area', 'rating', 'reviews', 'what', 'review', 'memo', 'mapQ', 'naverQ'].forEach(function (k) { p[k] = f[k].get(); });
        p.info = f.info.get(); p.tags = f.tags.get();
        var nc = f.city.get(), ncat = f.cat.get();
        // 이름이나 도시를 바꿨는데 검색어는 그대로면, 예전 가게를 가리키지 않도록 검색어를 비워 새 이름으로 찾게 한다.
        if (!isNew && (p.name !== orig.name || nc !== c)) {
          if (p.mapQ === orig.mapQ) p.mapQ = '';
          if (p.naverQ === orig.naverQ) p.naverQ = '';
        }
        var target = data.places[nc][ncat];
        var idx = list.indexOf(p);
        if (target !== list && idx >= 0) list.splice(idx, 1);
        if (isNew || target !== list) target.push(p);
        ui.city = nc; ui.cat = ncat; prefs.city = nc; prefs.cat = ncat; savePrefs();
        save(); render(true);
      } }])
    });
  }
  function editCityNote(c, i) {
    var notes = data.places[c].notes, isNew = i == null;
    var f = fRich('내용', isNew ? '' : notes[i], '이 도시에서 알아 둘 것');
    openSheet({
      title: isNew ? '팁 추가' : '팁 수정', body: [f.el],
      actions: (isNew ? [{ label: '취소' }] : [{ label: '삭제', kind: 'danger', run: function () {
        withUndo('팁을 삭제했습니다', function () { notes.splice(i, 1); });
      } }]).concat([{ label: isNew ? '추가' : '저장', kind: 'primary', run: function () {
        var v = f.get();
        if (!plain(v)) { toast('내용을 입력하세요'); return false; }
        if (isNew) notes.push(v); else notes[i] = v;
        save(); render(true);
      } }])
    });
  }

  /* --- info editors --- */
  function editTrip() {
    var t = data.trip;
    var f = { title: fText('여행 이름', t.title), summary: fRich('소개', t.summary), assume: fRich('가정한 조건', t.assume) };
    openSheet({
      title: '개요 수정', body: [f.title.el, f.summary.el, f.assume.el],
      actions: [{ label: '취소' }, { label: '저장', kind: 'primary', run: function () {
        t.title = f.title.get() || '여행'; t.summary = f.summary.get(); t.assume = f.assume.get();
        save(); render(true);
      } }]
    });
  }
  function editRoute(i) {
    var isNew = i == null;
    var r = isNew ? { id: uid('r'), city: 'roma', name: '', nights: '', leg: '' } : data.route[i];
    var f = {
      city: fSelect('도시 색', Object.keys(data.cities).map(function (k) { return [k, cityName(k)]; }), r.city),
      name: fText('이름', r.name, { ph: '예: 로마' }),
      nights: fText('기간', r.nights, { ph: '예: 5박 · 12/21–26' }),
      leg: fText('다음 이동', r.leg, { ph: '예: → 기차 약 3시간 40분' })
    };
    var pos = i;
    var body = [h('div', { class: 'two' }, f.name.el, f.city.el), f.nights.el, f.leg.el];
    if (!isNew) body.push(orderRow(function () { pos = move(data.route, pos, -1); save(); render(true); }, function () { pos = move(data.route, pos, 1); save(); render(true); }));
    openSheet({
      title: isNew ? '경로 추가' : '경로 수정', body: body,
      actions: (isNew ? [{ label: '취소' }] : [{ label: '삭제', kind: 'danger', run: function () {
        withUndo('경로를 삭제했습니다', function () { data.route.splice(data.route.indexOf(r), 1); });
      } }]).concat([{ label: isNew ? '추가' : '저장', kind: 'primary', run: function () {
        if (!f.name.get()) { toast('이름을 입력하세요'); return false; }
        r.city = f.city.get(); r.name = f.name.get(); r.nights = f.nights.get(); r.leg = f.leg.get();
        if (isNew) data.route.push(r);
        save(); render(true);
      } }])
    });
  }
  function editGuideMeta(id) {
    var isNew = id == null;
    var g = isNew ? { id: uid('gd'), title: '', sub: '', icon: 'note', html: '' } : findGuide(id);
    var f = {
      title: fText('제목', g.title, { ph: '예: 쇼핑 목록' }),
      sub: fText('설명', g.sub, { ph: '목록에 보일 한 줄 설명' }),
      icon: fSelect('아이콘', [['note', '메모'], ['train', '교통'], ['bed', '숙소'], ['shield', '안전'], ['book', '책'], ['pin', '장소'], ['calendar', '달력'], ['route', '경로']], g.icon || 'note')
    };
    openSheet({
      title: isNew ? '안내 페이지 추가' : '안내 페이지 설정', body: [f.title.el, f.sub.el, f.icon.el],
      actions: (isNew ? [{ label: '취소' }] : [{ label: '삭제', kind: 'danger', run: function () {
        confirmSheet('이 페이지를 삭제할까요?', '"' + g.title + '" 페이지 내용이 모두 지워집니다.', '삭제', function () {
          pending = [];
          withUndo('페이지를 삭제했습니다', function () { data.guides.splice(data.guides.indexOf(g), 1); ui.guide = null; });
        }, true);
      } }]).concat([{ label: isNew ? '추가' : '저장', kind: 'primary', run: function () {
        if (!f.title.get()) { toast('제목을 입력하세요'); return false; }
        runPending();
        g.title = f.title.get(); g.sub = f.sub.get(); g.icon = f.icon.get();
        if (isNew) { data.guides.push(g); ui.guide = g.id; }
        save(); render(true);
      } }])
    });
  }

  /* ---------------- backup / reset / install ---------------- */
  function stamp() { var d = new Date(); return ymd(d).replace(/-/g, '') + '-' + String(d.getHours()).padStart(2, '0') + String(d.getMinutes()).padStart(2, '0'); }
  function exportBackup() {
    runPending(); flush();
    var name = 'italy-trip-backup-' + stamp() + '.json';
    var json = JSON.stringify(data, null, 1);
    var file;
    try { file = new File([json], name, { type: 'application/json' }); } catch (e) { file = null; }
    var touch = window.matchMedia('(pointer: coarse)').matches;
    if (file && touch && navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: '이탈리아 여행 백업' }).catch(function (e) { if (e && e.name !== 'AbortError') download(); });
      return;
    }
    download();
    function download() {
      var url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
      var a = h('a', { href: url, download: name });
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 3000);
      toast('백업 파일을 저장했습니다');
    }
  }
  function importBackup() {
    var inp = h('input', { type: 'file', accept: '.json,application/json,text/plain', style: 'display:none' });
    inp.addEventListener('change', function () {
      var f = inp.files && inp.files[0];
      inp.remove();
      if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        var d;
        try { d = JSON.parse(r.result); } catch (e) { d = null; }
        if (!valid(d)) { toast('이 앱의 백업 파일이 아닙니다'); return; }
        confirmSheet('백업으로 바꿀까요?', '지금 이 기기의 일정, 체크 표시, 메모가 백업 파일 내용으로 바뀝니다.', '바꾸기', function () {
          withUndo('백업을 불러왔습니다', function () { data = normalize(d); ui.day = 0; ui.guide = null; });
        });
      };
      r.onerror = function () { toast('파일을 읽지 못했습니다'); };
      r.readAsText(f);
    });
    document.body.appendChild(inp);
    inp.click();
  }
  function resetData() {
    confirmSheet('처음 일정으로 되돌릴까요?', '고친 내용, 추가한 장소, 체크 표시가 모두 처음 상태로 돌아갑니다. 필요하면 먼저 백업을 내보내세요.', '되돌리기', function () {
      pending = [];
      withUndo('처음 일정으로 되돌렸습니다', function () { data = normalize(clone(DEFAULT)); ui.day = 0; ui.guide = null; });
    }, true);
  }
  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredPrompt = e; });
  function isStandalone() { return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true; }
  var isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  function installSheet() {
    var body = [];
    if (isStandalone()) {
      body.push(h('p', { class: 'sheet-msg' }, '이미 홈 화면 앱으로 실행 중입니다. 인터넷이 없어도 열리지만, 지도와 블로그 후기 버튼은 인터넷이 필요합니다.'));
    } else {
      if (deferredPrompt) {
        body.push(h('button', { class: 'btn primary', style: 'width:100%;margin-top:12px', onclick: function () {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.finally(function () { deferredPrompt = null; });
        } }, icon('download', 18), '지금 설치하기'));
      }
      body.push(h('div', { class: 'field-l', style: 'margin-top:18px' }, '아이폰 (Safari)'));
      body.push(h('ol', { class: 'steps' },
        h('li', null, 'Safari로 이 주소를 엽니다.'),
        h('li', null, '아래쪽 공유 버튼(네모에 위쪽 화살표)을 누릅니다.'),
        h('li', null, '"홈 화면에 추가"를 고르고 추가를 누릅니다.')));
      body.push(h('div', { class: 'field-l', style: 'margin-top:14px' }, '안드로이드 (Chrome)'));
      body.push(h('ol', { class: 'steps' },
        h('li', null, '오른쪽 위 점 세 개 메뉴를 누릅니다.'),
        h('li', null, '"홈 화면에 추가" 또는 "앱 설치"를 누릅니다.')));
      body.push(h('div', { class: 'hint-box' }, h('b', null, '아이폰 주의. '), 'Safari에서 고친 내용과 홈 화면 앱의 내용은 따로 저장됩니다. 설치한 뒤에는 앱에서 고치세요. 이미 Safari에서 고쳤다면 백업 내보내기 후 앱에서 불러오면 됩니다.'));
    }
    openSheet({ title: isStandalone() ? '앱 정보' : '홈 화면에 설치', body: body, actions: [{ label: '닫기', kind: 'primary' }] });
  }

  /* ---------------- toast ---------------- */
  var toastEl = null, toastTimer = null;
  function toast(msg, actionLabel, onAction) {
    if (toastEl) toastEl.remove();
    clearTimeout(toastTimer);
    var el = h('div', { class: 'toast', role: 'status' }, h('span', null, msg),
      actionLabel ? h('button', { onclick: function () { el.remove(); toastEl = null; onAction(); } }, actionLabel) : null);
    document.body.appendChild(el);
    toastEl = el;
    requestAnimationFrame(function () { el.classList.add('in'); });
    toastTimer = setTimeout(function () { el.classList.remove('in'); setTimeout(function () { el.remove(); if (toastEl === el) toastEl = null; }, 250); }, actionLabel ? 5000 : 2200);
  }

  /* ---------------- theme ---------------- */
  var mql = window.matchMedia('(prefers-color-scheme: dark)');
  function applyTheme() {
    var t = prefs.theme || 'auto', root = document.documentElement;
    if (t === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', t);
    var dark = t === 'dark' || (t === 'auto' && mql.matches);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', dark ? '#0D0F12' : '#F3F4F6');
  }
  if (mql.addEventListener) mql.addEventListener('change', applyTheme); else if (mql.addListener) mql.addListener(applyTheme);

  /* ---------------- internal links ---------------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    if (a.closest('[contenteditable="true"]')) { e.preventDefault(); return; }
    var href = a.getAttribute('href') || '';
    if (href.charAt(0) !== '#') return;
    e.preventDefault();
    var k = href.slice(1);
    var map = { book: ['check'], now: ['check'], plan: ['plan'], move: ['info', 'move'], stay: ['info', 'stay'], care: ['info', 'care'], src: ['info', 'src'], roma: ['places', null, 'roma'], venezia: ['places', null, 'venezia'], firenze: ['places', null, 'firenze'] };
    var m = map[k];
    if (!m) return;
    ui.tab = m[0]; ui.guide = m[1] || null; if (m[2]) ui.city = m[2];
    render(); window.scrollTo(0, 0);
  });

  /* ---------------- boot ---------------- */
  applyTheme();
  render();
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();

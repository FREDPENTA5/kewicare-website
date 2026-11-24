/* ===== KEWICARE SAFARIS — SHARED JS ===== */

// Scroll reveal observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("active"); });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal-up, .section-head, .t-card, .faq details").forEach(el => {
  if(!el.classList.contains("reveal-up")) el.classList.add("reveal-up");
  observer.observe(el);
});

// Mobile nav toggle
const navToggleBtn = document.getElementById("nav-toggle-btn");
const navMenu = document.getElementById("nav-menu");
if (navToggleBtn && navMenu) {
  const iconMenu = navToggleBtn.querySelector(".icon-menu");
  const iconClose = navToggleBtn.querySelector(".icon-close");
  navToggleBtn.addEventListener("click", () => {
    const isExpanded = navToggleBtn.getAttribute("aria-expanded") === "true";
    navToggleBtn.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("open");
    iconMenu.style.display = isExpanded ? "block" : "none";
    iconClose.style.display = isExpanded ? "none" : "block";
  });
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggleBtn.setAttribute("aria-expanded", "false");
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
    });
  });
}

// Sticky header shadow on scroll
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
}

// Destination carousel marquee
const destCarousel = document.querySelector('.dest-carousel');
if (destCarousel && destCarousel.children.length > 0) {
  const cards = Array.from(destCarousel.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    destCarousel.appendChild(clone);
  });
  destCarousel.classList.add('marquee-active');
}

// Active nav link highlighting
(function(){
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === '/' && (path === '/' || path === '/index.html')) {
      link.classList.add('active');
    } else if (href !== '/' && path.startsWith(href)) {
      link.classList.add('active');
    }
  });
})();

// ── WhatsApp Floating Button ──────────────────────────────────────────────────
(function () {
  const style = document.createElement('style');
  style.textContent = `
    .wa-fab {
      position: fixed;
      bottom: 28px;
      right: 24px;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 10px;
      background: #25D366;
      color: #fff;
      border-radius: 999px;
      padding: 13px 20px 13px 16px;
      box-shadow: 0 6px 24px rgba(37,211,102,0.42);
      text-decoration: none;
      font-family: inherit;
      font-size: 14.5px;
      font-weight: 600;
      letter-spacing: -0.01em;
      transition: transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s;
      cursor: pointer;
    }
    .wa-fab:hover {
      transform: translateY(-3px) scale(1.03);
      box-shadow: 0 10px 32px rgba(37,211,102,0.55);
      color: #fff;
    }
    .wa-fab svg { flex-shrink: 0; }
    .wa-fab-pulse {
      position: absolute;
      inset: 0;
      border-radius: 999px;
      background: #25D366;
      opacity: 0.35;
      animation: wa-pulse 2s ease-out infinite;
      pointer-events: none;
    }
    @keyframes wa-pulse {
      0%   { transform: scale(1);    opacity: 0.35; }
      70%  { transform: scale(1.18); opacity: 0; }
      100% { transform: scale(1.18); opacity: 0; }
    }
    @media (max-width: 480px) {
      .wa-fab .wa-label { display: none; }
      .wa-fab { padding: 14px; bottom: 20px; right: 16px; }
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('a');
  btn.href = 'https://wa.me/256771188630?text=Hello%20Kewicare%20Safaris%2C%20I%27d%20like%20to%20enquire%20about%20a%20Uganda%20safari.';
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.className = 'wa-fab';
  btn.setAttribute('aria-label', 'Chat with Kewicare Safaris on WhatsApp');
  btn.innerHTML = `
    <span class="wa-fab-pulse"></span>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
    <span class="wa-label">Chat on WhatsApp</span>
  `;
  document.body.appendChild(btn);
})();

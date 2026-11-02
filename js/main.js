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

/* ===========================
   Gen-IT — script.js
   =========================== */

// ---- Language Toggle ----
let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  applyLang();
}

function applyLang() {
  const isAr = currentLang === 'ar';

  // html dir + lang
  document.documentElement.lang = currentLang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.body.classList.toggle('ar', isAr);

  // update all lang-toggle buttons text
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = isAr ? 'English' : 'عربي';
  });

  // update all data-en / data-ar elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isAr ? el.dataset.ar : el.dataset.en;
  });

  // page title
  document.title = isAr
    ? 'جن-آي تي — جيل تقنية المعلومات'
    : 'Gen-IT — Generation Information Technology';
}

// ---- Navbar Scroll Effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ---- Mobile Menu ----
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
    btn.classList.remove('open');
  }
});

// ---- Smooth Anchor Scrolling (offset for fixed nav) ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ---- Scroll Reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function initReveal() {
  // Add reveal class to target elements
  const selectors = [
    '.svc-card', '.goal-card', '.vendor-cat',
    '.pillar', '.stat-card', '.about-card-main',
    '.contact-form-wrap', '.section-header'
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.07) + 's';
      revealObserver.observe(el);
    });
  });
}

// ---- Contact Form ----
function handleSubmit(e) {
  e.preventDefault();
  const msgEl = document.getElementById('formMsg');
  const name    = document.getElementById('nameInput').value.trim();
  const email   = document.getElementById('emailInput').value.trim();
  const message = document.getElementById('messageInput').value.trim();

  if (!name || !email || !message) {
    msgEl.textContent = currentLang === 'ar'
      ? 'يرجى ملء جميع الحقول المطلوبة.'
      : 'Please fill in all required fields.';
    msgEl.className = 'form-msg error';
    return;
  }

  // Simulate send (replace with your backend/formspree endpoint)
  const btn = e.target.querySelector('.btn-submit');
  btn.disabled = true;
  btn.style.opacity = '0.6';

  setTimeout(() => {
    msgEl.textContent = currentLang === 'ar'
      ? 'شكراً لك! سنتواصل معك قريباً.'
      : 'Thank you! We will get back to you shortly.';
    msgEl.className = 'form-msg success';
    e.target.reset();
    btn.disabled = false;
    btn.style.opacity = '1';
  }, 1000);
}

// ---- Active Nav Link on Scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbar.offsetHeight - 60;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? '#1a3a6b'
      : '';
    link.style.fontWeight = link.getAttribute('href') === '#' + current
      ? '700'
      : '';
  });
}, { passive: true });

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
});

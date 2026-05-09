/* =========================================================
   Dr. Susheel Tyagi — Shared interactive behaviour
   - Nav scroll state + hide on scroll-down
   - Mobile menu open/close
   - IntersectionObserver scroll reveals
   - Counter animation
   - Testimonial carousel
   - Form validation + toast
   ========================================================= */

(() => {
  'use strict';

  /* ---------- Nav: scroll shadow + auto-hide ---------- */
  const nav = document.querySelector('.site-nav');
  if (nav) {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 8) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
      // Hide on scroll-down past 200px, show on scroll-up
      if (y > 200 && y > lastY + 8) nav.classList.add('hidden');
      else if (y < lastY - 8) nav.classList.remove('hidden');
      lastY = y;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuClose = document.querySelector('[data-menu-close]');
  const openMenu = () => {
    mobileMenu?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  };
  menuToggle?.addEventListener('click', openMenu);
  menuClose?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Counter animation ---------- */
  const counters = document.querySelectorAll('.counter[data-target]');
  if ('IntersectionObserver' in window && counters.length) {
    const animateCounter = (el) => {
      const target = parseFloat(el.dataset.target);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1500;
      const start = performance.now();
      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimals) + suffix;
      };
      requestAnimationFrame(tick);
    };
    const cIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cIo.observe(c));
  }

  /* ---------- Testimonial carousel ---------- */
  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const track = carousel.querySelector('.testi-track');
    const cards = track ? Array.from(track.children) : [];
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    let index = 0;
    const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;
    const visibleCount = () => isDesktop() ? 3 : 1;
    const maxIndex = () => Math.max(0, cards.length - visibleCount());
    const apply = () => {
      const card = cards[0];
      if (!card) return;
      const cardWidth = card.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 24;
      const offset = -(cardWidth + gap) * index;
      track.style.transform = `translateX(${offset}px)`;
      if (prev) prev.disabled = index <= 0;
      if (next) next.disabled = index >= maxIndex();
    };
    prev?.addEventListener('click', () => { index = Math.max(0, index - 1); apply(); });
    next?.addEventListener('click', () => { index = Math.min(maxIndex(), index + 1); apply(); });
    window.addEventListener('resize', () => { index = Math.min(index, maxIndex()); apply(); });
    apply();

    // Auto-advance every 6 seconds, pause on hover
    let auto = setInterval(() => {
      if (index >= maxIndex()) index = 0;
      else index += 1;
      apply();
    }, 6000);
    carousel.addEventListener('mouseenter', () => clearInterval(auto));
    carousel.addEventListener('mouseleave', () => {
      auto = setInterval(() => {
        if (index >= maxIndex()) index = 0;
        else index += 1;
        apply();
      }, 6000);
    });
  }

  /* ---------- Form validation + toast ---------- */
  const showToast = (msg) => {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      t.innerHTML = '<span class="material-symbols-outlined icon-fill">check_circle</span><span class="toast-msg"></span>';
      document.body.appendChild(t);
    }
    t.querySelector('.toast-msg').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4200);
  };

  const validateField = (field) => {
    const input = field.querySelector('input, textarea, select');
    if (!input) return true;
    const required = input.hasAttribute('required');
    const value = (input.value || '').trim();
    let valid = true;
    let msg = '';
    if (required && !value) { valid = false; msg = 'This field is required.'; }
    else if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      valid = false; msg = 'Enter a valid email address.';
    } else if (input.type === 'tel' && value && !/^[\d\s+()-]{7,}$/.test(value)) {
      valid = false; msg = 'Enter a valid phone number.';
    }
    let err = field.querySelector('.err-msg');
    if (!err) {
      err = document.createElement('div');
      err.className = 'err-msg';
      field.appendChild(err);
    }
    err.textContent = msg;
    field.classList.toggle('invalid', !valid);
    return valid;
  };

  document.querySelectorAll('form[data-validate]').forEach(form => {
    const fields = form.querySelectorAll('.form-field');
    fields.forEach(f => {
      const input = f.querySelector('input, textarea, select');
      input?.addEventListener('blur', () => validateField(f));
      input?.addEventListener('input', () => {
        if (f.classList.contains('invalid')) validateField(f);
      });
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      let allValid = true;
      fields.forEach(f => { if (!validateField(f)) allValid = false; });
      if (!allValid) {
        const firstInvalid = form.querySelector('.form-field.invalid input, .form-field.invalid textarea, .form-field.invalid select');
        firstInvalid?.focus();
        return;
      }
      const successMsg = form.dataset.successMsg || 'Thank you — we will be in touch shortly.';
      showToast(successMsg);
      form.reset();
      fields.forEach(f => f.classList.remove('invalid'));
    });
  });

  /* ---------- Active timeline dot pulse on view ---------- */
  const dots = document.querySelectorAll('.timeline-dot');
  if ('IntersectionObserver' in window && dots.length) {
    const dIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.6 });
    dots.forEach(d => dIo.observe(d));
  }

  /* ---------- Set min date for date pickers to today ---------- */
  document.querySelectorAll('input[type="date"]').forEach(input => {
    const today = new Date().toISOString().split('T')[0];
    input.min = today;
  });

})();

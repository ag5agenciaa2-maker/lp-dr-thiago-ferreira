/* Dr. Thiago Ferreira Faria — Advocacia | JS Vanilla ES6 */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- nav: transparente -> navy ao passar de 80px ---------- */
  const nav = document.getElementById('nav');
  if (nav) {
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:80px;left:0;width:1px;height:1px;pointer-events:none';
    document.body.appendChild(sentinel);
    new IntersectionObserver(
      ([entry]) => nav.classList.toggle('is-solid', !entry.isIntersecting),
      { threshold: 0 }
    ).observe(sentinel);
  }

  /* ---------- nav: link ativo conforme a seção em foco ---------- */
  const navLinks = [...document.querySelectorAll('.nav__menu a[href^="#"]')];
  if (navLinks.length) {
    const sections = navLinks
      .map((a) => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);
    const setActive = (id) => {
      navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
    };
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  /* ---------- menu mobile (drawer) ---------- */
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('drawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');
  const drawerMenu = document.getElementById('drawerMenu');

  if (toggle && drawer && drawerOverlay) {
    const openDrawer = () => {
      drawer.classList.add('is-open');
      drawerOverlay.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('drawer-lock');
    };
    const closeDrawer = () => {
      drawer.classList.remove('is-open');
      drawerOverlay.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('drawer-lock');
    };

    toggle.addEventListener('click', () => {
      drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
    });
    drawerClose?.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
    drawerMenu?.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') closeDrawer();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
    });
  }

  /* ---------- FAQ (acordeão) ---------- */
  document.querySelectorAll('.faq__item').forEach((item) => {
    const btn = item.querySelector('.faq__q');
    btn.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      document.querySelectorAll('.faq__item.is-open').forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      });
      item.classList.toggle('is-open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });

  /* ---------- counters (dispara uma única vez) ---------- */
  const counters = document.getElementById('counters');
  if (counters && !reduceMotion) {
    const nums = [...counters.querySelectorAll('[data-count-to]')].map((el) => ({
      el,
      to: Number(el.dataset.countTo)
    }));
    const run = () => {
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1400);
        nums.forEach(({ el, to }) => { el.textContent = String(Math.round(to * p)); });
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      run();
    }, { threshold: 0.4 });
    io.observe(counters);
  }

  /* ---------- formulário: validação real ---------- */
  const form = document.getElementById('form');
  const errorBox = document.getElementById('formError');
  const okBox = document.getElementById('formOk');

  const fail = (msg, field) => {
    errorBox.textContent = msg;
    errorBox.hidden = false;
    okBox.hidden = true;
    if (field) {
      field.classList.add('is-invalid');
      field.focus();
    }
    return false;
  };

  if (form) {
    form.addEventListener('input', (e) => e.target.classList.remove('is-invalid'));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { nome, telefone, email, mensagem, area } = form.elements;
      const digits = telefone.value.replace(/\D/g, '');
      const emailOk = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email.value.trim());

      if (nome.value.trim().length < 3) return fail('Informe seu nome completo.', nome);
      if (digits.length < 10 && !emailOk) return fail('Informe um WhatsApp com DDD ou um e-mail válido.', telefone);
      if (email.value.trim() && !emailOk) return fail('Confira o e-mail digitado.', email);
      if (mensagem.value.trim().length < 15) return fail('Descreva o caso com um pouco mais de detalhe.', mensagem);

      errorBox.hidden = true;
      okBox.hidden = false;

      // ▼ MENSAGEM OBRIGATÓRIA — padrão AG5 (skill-alinhar-links-whatsapp) ▼
      const nomeVal = nome.value.trim();
      const telVal = telefone.value.trim();
      const emailVal = email.value.trim();
      const areaVal = area.value;
      const msgVal = mensagem.value.trim();

      let texto = `Olá, me chamo ${nomeVal}, vim através do site e gostaria de uma informação.\n`;
      texto += `\n- E-mail: ${emailVal || 'não informado'}`;
      texto += `\n- Telefone: ${telVal || 'não informado'}`;
      texto += `\n- Área do caso: ${areaVal}`;
      if (msgVal) texto += `\n- Descrição do caso: ${msgVal}`;
      // ▲ ────────────────────────────────────────────────────────────── ▲

      const urlWhatsApp = `https://wa.me/5521966938793?text=${encodeURIComponent(texto)}`;
      window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');

      form.reset();
    });
  }

  /* ──────────────────────────────────────────────
     WHATSAPP PREMIUM — Balão flutuante (AG5 V4)
     Nicho: Advocacia (OAB Provimento 205/2021) → Compliance Mode
  ─────────────────────────────────────────────── */
  (function initWaPremium() {
    const MODO_COMPLIANCE = true; // advocacia = nicho rigoroso → sem badge de notificação

    const bubble        = document.getElementById('wa-message-bubble');
    const typing        = document.getElementById('wa-typing');
    const realMessage   = document.getElementById('wa-real-message');
    const badge         = document.getElementById('wa-notification');
    const closeBtn      = document.getElementById('wa-close-btn');
    const mainBtn       = document.getElementById('wa-main-btn');
    const targetSection = document.getElementById('areas'); // 3ª seção da página (Hero → Problema → Áreas)

    if (!bubble || !typing || !realMessage || !closeBtn || !mainBtn || !targetSection) return;

    const DELAY_BALAO            = 25000;
    const DURATION_TYPING        = 2500;
    const DURATION_BALAO_VISIVEL = 15000;
    const DELAY_BADGE_APOS_SUMIR = 5000;

    let triggered = false;
    let autoHideTimer = null;
    let badgeTimer = null;
    let userClosed = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          mainBtn.classList.add('visible');

          setTimeout(() => {
            if (userClosed) return;
            bubble.classList.add('show');

            setTimeout(() => {
              if (userClosed) return;
              typing.classList.add('is-hidden');
              realMessage.classList.add('is-visible');
              requestAnimationFrame(() => realMessage.classList.add('is-in'));
            }, DURATION_TYPING);

            autoHideTimer = setTimeout(() => {
              if (userClosed) return;
              bubble.classList.remove('show');

              if (!MODO_COMPLIANCE && badge) {
                badgeTimer = setTimeout(() => {
                  if (userClosed) return;
                  badge.classList.add('show');
                }, DELAY_BADGE_APOS_SUMIR);
              }
            }, DURATION_BALAO_VISIVEL);
          }, DELAY_BALAO);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(targetSection);

    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      userClosed = true;
      bubble.classList.remove('show');
      if (autoHideTimer) clearTimeout(autoHideTimer);
      if (badgeTimer) clearTimeout(badgeTimer);
      if (!MODO_COMPLIANCE && badge) {
        setTimeout(() => { badge.classList.add('show'); }, DELAY_BADGE_APOS_SUMIR);
      }
    });

    mainBtn.addEventListener('click', () => {
      bubble.classList.remove('show');
      if (badge) badge.classList.remove('show');
      if (autoHideTimer) clearTimeout(autoHideTimer);
      if (badgeTimer) clearTimeout(badgeTimer);
    });
  })();
})();

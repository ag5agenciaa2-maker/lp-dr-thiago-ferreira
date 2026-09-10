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

  /* ---------- menu mobile ---------- */
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
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

      // Protótipo: sem back-end. Para produção, troque por fetch() para o endpoint
      // de e-mail/CRM, ou monte o envio via WhatsApp usando os dados abaixo.
      console.log('Lead:', {
        nome: nome.value.trim(),
        telefone: telefone.value.trim(),
        email: email.value.trim(),
        area: area.value,
        mensagem: mensagem.value.trim()
      });

      form.reset();
    });
  }
})();

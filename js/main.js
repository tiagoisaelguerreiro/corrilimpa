(function () {
  var header = document.getElementById('header');
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');

  // Menu móvel
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // Cabeçalho sólido depois do hero
  var onScroll = function () {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Aparecer ao fazer scroll (com pequeno atraso entre irmãos)
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) {
      var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
        return c.classList.contains('reveal');
      });
      var i = siblings.indexOf(el);
      if (i > 0) el.style.setProperty('--rd', Math.min(i * 0.08, 0.4) + 's');
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Ano no rodapé
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Formulário -> abre o e-mail com a mensagem preenchida
  var form = document.getElementById('contactForm');
  var error = document.getElementById('formError');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var email = form.email.value.trim();
      var tel = form.telefone.value.trim();
      var servico = form.servico.value;
      var msg = form.mensagem.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      [form.nome, form.email, form.mensagem].forEach(function (el) { el.classList.remove('is-invalid'); });
      if (!nome) form.nome.classList.add('is-invalid');
      if (!emailOk) form.email.classList.add('is-invalid');
      if (!msg) form.mensagem.classList.add('is-invalid');

      if (!nome || !emailOk || !msg) {
        error.hidden = false;
        return;
      }
      error.hidden = true;

      var subject = 'Pedido de orçamento — ' + servico;
      var body =
        'Nome: ' + nome + '\n' +
        'E-mail: ' + email + '\n' +
        (tel ? 'Telefone: ' + tel + '\n' : '') +
        'Serviço: ' + servico + '\n\n' +
        msg;

      window.location.href = 'mailto:corrilimpa@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();

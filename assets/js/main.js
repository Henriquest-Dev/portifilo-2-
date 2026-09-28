(function () {
  "use strict";

  var root = document.documentElement;

  /* ------------------------------------------------------------------ */
  /* Translations                                                       */
  /* ------------------------------------------------------------------ */
  var translations = {
    pt: {
      brandName: "Portfólio",
      navAbout: "Sobre",
      navProjects: "Projetos",
      navContact: "Contato",
      chipAvailable: "Disponível para novos projetos",
      heroEyebrow: "Da engenharia à <strong>execução.</strong>",
      heroHeadline: "Energia com visão<br><strong>de futuro.</strong>",
      heroSub: "Engenharia com raciocínio de execução: planejo, construo e entrego sistemas e processos que funcionam no mundo real — não só no papel.",
      heroCtaProjects: "Ver projetos",
      heroCtaContact: "Fale comigo",
      scrollDown: "role para explorar",
      aboutKicker: "Sobre mim",
      aboutTitle: "Engenharia é decisão. Execução é disciplina.",
      aboutLede: "Sou engenheira e atuo na ponte entre o projeto no papel e a obra entregue — do planejamento técnico à coordenação de equipes em campo.",
      aboutBody: "Gosto de problemas que exigem os dois lados do cérebro: rigor técnico para desenhar a solução certa, e pragmatismo de execução para tirá-la do papel dentro do prazo, do orçamento e do padrão de qualidade esperado. Ao longo da carreira venho construindo essa ponte em projetos de diferentes portes — sempre com foco em resultado mensurável.",
      statYears: "anos de experiência",
      skill1: "Planejamento & Cronograma",
      skill2: "Gestão de Obras",
      skill3: "Gestão de Equipes",
      skill4: "Otimização de Processos",
      skill5: "Controle de Qualidade",
      skill6: "Orçamento & Custos",
      metric1: "projetos entregues",
      metric2: "no prazo e no orçamento",
      metric3: "equipes coordenadas",
      projectsKicker: "Our Projects",
      projectsTitle: "Ideias que viraram obra.",
      projectsIntro: "Uma seleção de projetos onde engenharia e execução andaram lado a lado, do conceito à entrega final.",
      project1Title: "Expansão de Planta Industrial",
      project1Desc: "Planejamento e coordenação da ampliação de uma linha produtiva, com redesenho de fluxo e redução de retrabalho.",
      project1Tag1: "Planejamento",
      project1Tag2: "Processos",
      project1Tag3: "Infraestrutura",
      project2Title: "Gestão de Obra Corporativa",
      project2Desc: "Coordenação de equipes multidisciplinares em obra comercial, com entrega antecipada e dentro do orçamento.",
      project2Tag1: "Gestão de Obras",
      project2Tag2: "Equipes",
      project2Tag3: "Cronograma",
      project3Title: "Otimização de Processos",
      project3Desc: "Mapeamento de gargalos operacionais e implementação de controle de qualidade que elevou a eficiência da equipe.",
      project3Tag1: "Otimização",
      project3Tag2: "Qualidade",
      project3Tag3: "Dados",
      contactKicker: "Contato",
      contactTitle: "Vamos construir o próximo projeto?",
      contactIntro: "Aberta a conversas sobre novos projetos, consultoria ou oportunidades de longo prazo.",
      contactCta: "Enviar um e-mail",
      contactEmailLabel: "E-mail",
      contactPhoneLabel: "Telefone",
      contactLocationLabel: "Localização",
      contactLocationValue: "Sua Cidade, Brasil",
      footerNote: "Feito com atenção ao detalhe."
    },
    en: {
      brandName: "Portfolio",
      navAbout: "About",
      navProjects: "Projects",
      navContact: "Contact",
      chipAvailable: "Available for new projects",
      heroEyebrow: "From engineering to <strong>execution.</strong>",
      heroHeadline: "Energy with a vision<br><strong>for the future.</strong>",
      heroSub: "Engineering with an execution mindset: I plan, build and deliver systems and processes that work in the real world — not just on paper.",
      heroCtaProjects: "View projects",
      heroCtaContact: "Get in touch",
      scrollDown: "scroll to explore",
      aboutKicker: "About me",
      aboutTitle: "Engineering is decision. Execution is discipline.",
      aboutLede: "I'm an engineer working the bridge between the blueprint and the finished build — from technical planning to coordinating teams on site.",
      aboutBody: "I like problems that need both sides of the brain: technical rigor to design the right solution, and execution pragmatism to get it off the page, on time, on budget and at the expected quality standard. Throughout my career I've been building that bridge across projects of different sizes — always focused on measurable results.",
      statYears: "years of experience",
      skill1: "Planning & Scheduling",
      skill2: "Construction Management",
      skill3: "Team Management",
      skill4: "Process Optimization",
      skill5: "Quality Control",
      skill6: "Budget & Costs",
      metric1: "projects delivered",
      metric2: "on time & on budget",
      metric3: "teams coordinated",
      projectsKicker: "Our Projects",
      projectsTitle: "Ideas that became builds.",
      projectsIntro: "A selection of projects where engineering and execution moved side by side, from concept to final delivery.",
      project1Title: "Industrial Plant Expansion",
      project1Desc: "Planning and coordination of a production line expansion, with flow redesign and reduced rework.",
      project1Tag1: "Planning",
      project1Tag2: "Processes",
      project1Tag3: "Infrastructure",
      project2Title: "Corporate Site Management",
      project2Desc: "Coordination of multidisciplinary teams on a commercial build, delivered early and under budget.",
      project2Tag1: "Site Management",
      project2Tag2: "Teams",
      project2Tag3: "Scheduling",
      project3Title: "Process Optimization",
      project3Desc: "Mapping operational bottlenecks and implementing quality control that raised team efficiency.",
      project3Tag1: "Optimization",
      project3Tag2: "Quality",
      project3Tag3: "Data",
      contactKicker: "Contact",
      contactTitle: "Shall we build the next project?",
      contactIntro: "Open to conversations about new projects, consulting or long-term opportunities.",
      contactCta: "Send an email",
      contactEmailLabel: "Email",
      contactPhoneLabel: "Phone",
      contactLocationLabel: "Location",
      contactLocationValue: "Your City, Country",
      footerNote: "Made with attention to detail."
    }
  };

  /* ------------------------------------------------------------------ */
  /* Theme toggle                                                       */
  /* ------------------------------------------------------------------ */
  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem("theme"); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", theme);

    var btn = document.getElementById("themeToggle");
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ------------------------------------------------------------------ */
  /* Language toggle                                                    */
  /* ------------------------------------------------------------------ */
  function applyLang(lang) {
    var dict = translations[lang] || translations.pt;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    root.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
  }

  function initLang() {
    var stored = null;
    try { stored = localStorage.getItem("lang"); } catch (e) {}
    var lang = stored || "pt";
    root.setAttribute("data-lang", lang);
    applyLang(lang);

    var btn = document.getElementById("langToggle");
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-lang") === "pt" ? "en" : "pt";
      root.setAttribute("data-lang", next);
      applyLang(next);
      try { localStorage.setItem("lang", next); } catch (e) {}
    });
  }

  /* ------------------------------------------------------------------ */
  /* Mobile nav                                                         */
  /* ------------------------------------------------------------------ */
  function initMobileNav() {
    var burger = document.getElementById("navBurger");
    var nav = document.getElementById("mainNav");
    burger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      burger.classList.toggle("is-active", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.classList.remove("is-active");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Scroll reveal                                                      */
  /* ------------------------------------------------------------------ */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    items.forEach(function (el) {
      var delay = el.getAttribute("data-delay");
      if (delay) el.style.setProperty("--d", delay);
    });

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------------ */
  /* Header show/hide + scroll progress                                 */
  /* ------------------------------------------------------------------ */
  function initHeaderScroll() {
    var header = document.getElementById("siteHeader");
    var bar = document.getElementById("scrollProgressBar");
    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      var y = window.scrollY;
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var progress = max > 0 ? (y / max) * 100 : 0;
      bar.style.width = progress + "%";

      header.classList.toggle("is-scrolled", y > 12);
      if (y > lastY && y > 140) {
        header.classList.add("is-hidden");
      } else {
        header.classList.remove("is-hidden");
      }
      lastY = y;
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  /* ------------------------------------------------------------------ */
  /* Subtle hero parallax                                                */
  /* ------------------------------------------------------------------ */
  function initParallax() {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    var frame = document.querySelector(".hero .portrait-frame");
    var bracket = document.querySelector(".hero-bracket");
    if (!frame) return;

    var ticking = false;
    function update() {
      var y = window.scrollY;
      var factor = Math.min(y / 800, 1);
      frame.style.transform = "translateY(" + (factor * 26) + "px) scale(" + (1 - factor * 0.02) + ")";
      if (bracket) bracket.style.transform = "translateY(" + (factor * -14) + "px)";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* Animated stat counters                                              */
  /* ------------------------------------------------------------------ */
  function initCounters() {
    var counters = document.querySelectorAll(".stat-num[data-count]");
    if (!counters.length) return;

    function animate(el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var duration = 1400;
      var start = null;

      function step(ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animate);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------------ */
  /* Project card cursor spotlight                                       */
  /* ------------------------------------------------------------------ */
  function initCardSpotlight() {
    var cards = document.querySelectorAll(".project-card");
    cards.forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - rect.left) + "px");
        card.style.setProperty("--my", (e.clientY - rect.top) + "px");
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Back to top                                                         */
  /* ------------------------------------------------------------------ */
  function initBackToTop() {
    var btn = document.getElementById("backToTop");
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initLang();
    initMobileNav();
    initReveal();
    initHeaderScroll();
    initParallax();
    initCounters();
    initCardSpotlight();
    initBackToTop();
  });
})();

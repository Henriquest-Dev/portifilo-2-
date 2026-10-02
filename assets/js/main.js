(function () {
  "use strict";

  var root = document.documentElement;

  /* ------------------------------------------------------------------ */
  /* Translations                                                       */
  /* ------------------------------------------------------------------ */
  var translations = {
    pt: {
      brandName: "Sheyd Luísa.",
      navAbout: "Sobre",
      navServices: "Serviços",
      navProjects: "Projetos",
      navContact: "Contato",
      modeToggle: "mudar o modo",
      heroIntro1: "Olá, eu sou a",
      heroName: "Sheyd Luísa",
      heroRole: "ENGENHEIRA",
      heroSpec: "Especialista em<br>planejamento, obras<br>e gestão de processos.",
      heroCta: "Vamos conversar",
      heroDesc: "Construo pontes entre o projeto técnico e a obra entregue — com energia, bom humor e atenção a cada detalhe.",
      servicesTitle1: "SOLUÇÕES PARA",
      servicesTitle2: "qualquer obra.",
      servicesIntro: "Planejamento, execução e gestão — tudo com o mesmo padrão de qualidade e muita disposição.",
      servicesCta: "Agendar conversa",
      aboutKicker: "Sobre mim",
      aboutTitle: "Engenharia é decisão.<br>Execução é disciplina.",
      aboutLede: "Sou engenheira e atuo na ponte entre o projeto no papel e a obra entregue — do planejamento técnico à coordenação de equipes em campo.",
      aboutBody: "Gosto de problemas que exigem os dois lados do raciocínio: rigor técnico para desenhar a solução certa, e pragmatismo de execução para tirá-la do papel dentro do prazo, do orçamento e do padrão de qualidade esperado.",
      statYears: "anos de experiência",
      skill1: "Planejamento & Cronograma",
      skill2: "Gestão de Obras",
      skill3: "Gestão de Equipes",
      skill4: "Otimização de Processos",
      skill5: "Controle de Qualidade",
      skill6: "Orçamento & Custos",
      skillInfra: "Infraestrutura",
      skillQuality: "Qualidade",
      metric1: "projetos entregues",
      metric2: "no prazo e no orçamento",
      metric3: "equipes coordenadas",
      projectsKicker: "Projetos",
      projectsTitle1: "PROJETOS",
      projectsTitle2: "em destaque.",
      projectsIntro: "Uma seleção de projetos onde engenharia e execução andaram lado a lado, do conceito à entrega final.",
      project1Title: "Expansão de Planta Industrial",
      project1Desc: "Planejamento e coordenação da ampliação de uma linha produtiva, com redesenho de fluxo e redução de retrabalho.",
      project1Tag1: "Planejamento",
      project1Tag3: "Infraestrutura",
      project2Title: "Gestão de Obra Corporativa",
      project2Desc: "Coordenação de equipes multidisciplinares em obra comercial, com entrega antecipada e dentro do orçamento.",
      project2Tag1: "Gestão de Obras",
      project2Tag3: "Cronograma",
      project3Title: "Otimização de Processos",
      project3Desc: "Mapeamento de gargalos operacionais e implementação de controle de qualidade que elevou a eficiência da equipe.",
      project3Tag1: "Otimização",
      project3Tag2: "Qualidade",
      contactKicker: "Contato",
      contactTitle1: "VAMOS",
      contactTitle2: "construir juntas?",
      contactIntro: "Aberta a conversas sobre novos projetos, consultoria ou oportunidades de longo prazo.",
      contactCta: "Enviar um e-mail",
      contactEmailLabel: "E-mail",
      contactPhoneLabel: "Telefone",
      footerNote: "Feito com atenção ao detalhe (e um sorriso)."
    },
    en: {
      brandName: "Sheyd Luísa.",
      navAbout: "About",
      navServices: "Services",
      navProjects: "Projects",
      navContact: "Contact",
      modeToggle: "change the mode",
      heroIntro1: "Hey, I'm",
      heroName: "Sheyd Luísa",
      heroRole: "ENGINEER",
      heroSpec: "Specialized in<br>planning, construction<br>and process management.",
      heroCta: "Let's chat",
      heroDesc: "I build the bridge between the technical plan and the finished build — with energy, good humor and attention to every detail.",
      servicesTitle1: "SOLUTIONS FOR",
      servicesTitle2: "any build.",
      servicesIntro: "Planning, execution and management — all with the same quality standard and a lot of energy.",
      servicesCta: "Book a call",
      aboutKicker: "About me",
      aboutTitle: "Engineering is decision.<br>Execution is discipline.",
      aboutLede: "I'm an engineer working the bridge between the blueprint and the finished build — from technical planning to coordinating teams on site.",
      aboutBody: "I like problems that need both sides of the reasoning: technical rigor to design the right solution, and execution pragmatism to get it off the page, on time, on budget and at the expected quality standard.",
      statYears: "years of experience",
      skill1: "Planning & Scheduling",
      skill2: "Construction Management",
      skill3: "Team Management",
      skill4: "Process Optimization",
      skill5: "Quality Control",
      skill6: "Budget & Costs",
      skillInfra: "Infrastructure",
      skillQuality: "Quality",
      metric1: "projects delivered",
      metric2: "on time & on budget",
      metric3: "teams coordinated",
      projectsKicker: "Projects",
      projectsTitle1: "FEATURED",
      projectsTitle2: "projects.",
      projectsIntro: "A selection of projects where engineering and execution moved side by side, from concept to final delivery.",
      project1Title: "Industrial Plant Expansion",
      project1Desc: "Planning and coordination of a production line expansion, with flow redesign and reduced rework.",
      project1Tag1: "Planning",
      project1Tag3: "Infrastructure",
      project2Title: "Corporate Site Management",
      project2Desc: "Coordination of multidisciplinary teams on a commercial build, delivered early and under budget.",
      project2Tag1: "Site Management",
      project2Tag3: "Scheduling",
      project3Title: "Process Optimization",
      project3Desc: "Mapping operational bottlenecks and implementing quality control that raised team efficiency.",
      project3Tag1: "Optimization",
      project3Tag2: "Quality",
      contactKicker: "Contact",
      contactTitle1: "LET'S",
      contactTitle2: "build together?",
      contactIntro: "Open to conversations about new projects, consulting or long-term opportunities.",
      contactCta: "Send an email",
      contactEmailLabel: "Email",
      contactPhoneLabel: "Phone",
      footerNote: "Made with attention to detail (and a smile)."
    }
  };

  /* ------------------------------------------------------------------ */
  /* Theme                                                               */
  /* ------------------------------------------------------------------ */
  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem("theme"); } catch (e) {}
    root.setAttribute("data-theme", stored || "light");

    document.getElementById("themeToggle").addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ------------------------------------------------------------------ */
  /* Language                                                            */
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

    document.getElementById("langToggle").addEventListener("click", function () {
      var next = root.getAttribute("data-lang") === "pt" ? "en" : "pt";
      root.setAttribute("data-lang", next);
      applyLang(next);
      try { localStorage.setItem("lang", next); } catch (e) {}
    });
  }

  /* ------------------------------------------------------------------ */
  /* Mobile nav                                                          */
  /* ------------------------------------------------------------------ */
  function initMobileNav() {
    var burger = document.getElementById("navBurger");
    var nav = document.getElementById("mainNavMobile");
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
  /* Header hide-on-scroll                                               */
  /* ------------------------------------------------------------------ */
  function initHeaderScroll() {
    var header = document.getElementById("siteHeader");
    var lastY = window.scrollY;
    var ticking = false;
    function update() {
      var y = window.scrollY;
      if (y > lastY && y > 140) header.classList.add("is-hidden");
      else header.classList.remove("is-hidden");
      lastY = y;
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* Animated stat counters (run immediately — never gated on scroll)   */
  /* ------------------------------------------------------------------ */
  function initCounters() {
    var counters = document.querySelectorAll(".stat-num[data-count]");
    if (!counters.length) return;

    function animate(el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var duration = 1200;
      var start = null;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
        if (p < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }

    counters.forEach(animate);
  }

  /* ------------------------------------------------------------------ */
  /* Back to top                                                         */
  /* ------------------------------------------------------------------ */
  function initBackToTop() {
    document.getElementById("backToTop").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initLang();
    initMobileNav();
    initHeaderScroll();
    initCounters();
    initBackToTop();
  });
})();

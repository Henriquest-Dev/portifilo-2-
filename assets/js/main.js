(function () {
  "use strict";

  var root = document.documentElement;

  /* ------------------------------------------------------------------ */
  /* Translations                                                       */
  /* ------------------------------------------------------------------ */
  var translations = {
    pt: {
      navAbout: "Sobre",
      navProjects: "Projetos",
      navContact: "Contato",
      heroLine1: "Da engenharia à execução.",
      heroLine2: "Energia com visão de futuro.",
      heroSub: "Planejo, construo e entrego sistemas e processos que funcionam em campo — não só no papel.",
      heroCtaProjects: "Ver projetos",
      heroCtaContact: "Fale comigo",
      plateStatus: "disponível para novos projetos",
      aboutTitle: "Engenharia é decisão.<br>Execução é disciplina.",
      aboutLede: "Sou engenheira e atuo na ponte entre o projeto no papel e a obra entregue — do planejamento técnico à coordenação de equipes em campo.",
      aboutBody: "Gosto de problemas que exigem os dois lados do raciocínio: rigor técnico para desenhar a solução certa, e pragmatismo de execução para tirá-la do papel dentro do prazo, do orçamento e do padrão de qualidade esperado.",
      skill1: "Planejamento & Cronograma",
      skill2: "Gestão de Obras",
      skill3: "Gestão de Equipes",
      skill4: "Otimização de Processos",
      skill5: "Controle de Qualidade",
      skill6: "Orçamento & Custos",
      metric0: "de experiência",
      metric1: "projetos entregues",
      metric2: "no prazo e no orçamento",
      metric3: "equipes coordenadas",
      projectsTitle: "Registro de projetos.",
      projectsIntro: "Uma seleção de projetos onde engenharia e execução andaram lado a lado, do conceito à entrega final.",
      colNum: "Nº", colProject: "Projeto", colScope: "Escopo", colYear: "Ano",
      project1Title: "Expansão de Planta Industrial",
      project1Desc: "Planejamento e coordenação da ampliação de uma linha produtiva, com redesenho de fluxo e redução de retrabalho.",
      project1Tag1: "Planejamento & Infraestrutura",
      project2Title: "Gestão de Obra Corporativa",
      project2Desc: "Coordenação de equipes multidisciplinares em obra comercial, com entrega antecipada e dentro do orçamento.",
      project2Tag1: "Gestão de Obras & Equipes",
      project3Title: "Otimização de Processos",
      project3Desc: "Mapeamento de gargalos operacionais e implementação de controle de qualidade que elevou a eficiência da equipe.",
      project3Tag1: "Processos & Qualidade",
      contactTitle: "Vamos construir o próximo projeto?",
      contactIntro: "Aberta a conversas sobre novos projetos, consultoria ou oportunidades de longo prazo.",
      contactEmailLabel: "E-mail",
      contactPhoneLabel: "Telefone",
      contactLocationLabel: "Localização",
      contactLocationValue: "Sua Cidade, Brasil",
      contactDateLabel: "Atualizado em",
      footerNote: "FL.01 — feito com atenção ao detalhe."
    },
    en: {
      navAbout: "About",
      navProjects: "Projects",
      navContact: "Contact",
      heroLine1: "From engineering to execution.",
      heroLine2: "Energy with a vision for the future.",
      heroSub: "I plan, build and deliver systems and processes that work on site — not just on paper.",
      heroCtaProjects: "View projects",
      heroCtaContact: "Get in touch",
      plateStatus: "available for new projects",
      aboutTitle: "Engineering is decision.<br>Execution is discipline.",
      aboutLede: "I'm an engineer working the bridge between the blueprint and the finished build — from technical planning to coordinating teams on site.",
      aboutBody: "I like problems that need both sides of the reasoning: technical rigor to design the right solution, and execution pragmatism to get it off the page, on time, on budget and at the expected quality standard.",
      skill1: "Planning & Scheduling",
      skill2: "Construction Management",
      skill3: "Team Management",
      skill4: "Process Optimization",
      skill5: "Quality Control",
      skill6: "Budget & Costs",
      metric0: "of experience",
      metric1: "projects delivered",
      metric2: "on time & on budget",
      metric3: "teams coordinated",
      projectsTitle: "Project record.",
      projectsIntro: "A selection of projects where engineering and execution moved side by side, from concept to final delivery.",
      colNum: "No.", colProject: "Project", colScope: "Scope", colYear: "Year",
      project1Title: "Industrial Plant Expansion",
      project1Desc: "Planning and coordination of a production line expansion, with flow redesign and reduced rework.",
      project1Tag1: "Planning & Infrastructure",
      project2Title: "Corporate Site Management",
      project2Desc: "Coordination of multidisciplinary teams on a commercial build, delivered early and under budget.",
      project2Tag1: "Site Management & Teams",
      project3Title: "Process Optimization",
      project3Desc: "Mapping operational bottlenecks and implementing quality control that raised team efficiency.",
      project3Tag1: "Processes & Quality",
      contactTitle: "Shall we build the next project?",
      contactIntro: "Open to conversations about new projects, consulting or long-term opportunities.",
      contactEmailLabel: "Email",
      contactPhoneLabel: "Phone",
      contactLocationLabel: "Location",
      contactLocationValue: "Your City, Country",
      contactDateLabel: "Updated",
      footerNote: "FL.01 — made with attention to detail."
    }
  };

  /* ------------------------------------------------------------------ */
  /* Theme                                                               */
  /* ------------------------------------------------------------------ */
  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem("theme"); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", stored || (prefersDark ? "dark" : "light"));

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
  /* Header hide + ruler progress                                        */
  /* ------------------------------------------------------------------ */
  function initHeaderScroll() {
    var header = document.getElementById("siteHeader");
    var fill = document.getElementById("rulerFill");
    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      var y = window.scrollY;
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      fill.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      if (y > lastY && y > 140) header.classList.add("is-hidden");
      else header.classList.remove("is-hidden");
      lastY = y;
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------ */
  /* One orchestrated hero intro (registration marks + dimension line)   */
  /* ------------------------------------------------------------------ */
  function initHeroIntro() {
    var plate = document.getElementById("heroPlate");
    if (!plate) return;
    window.requestAnimationFrame(function () {
      setTimeout(function () { plate.classList.add("is-set"); }, 120);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Animated spec counters (triggered once, on first view)              */
  /* ------------------------------------------------------------------ */
  function initCounters() {
    var counters = document.querySelectorAll(".spec-num[data-count]");
    if (!counters.length) return;

    function animate(el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var duration = 1100;
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

    if (!("IntersectionObserver" in window)) { counters.forEach(animate); return; }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animate(entry.target); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------------ */
  /* Schedule rows — tap to hold open on touch devices                   */
  /* ------------------------------------------------------------------ */
  function initSchedule() {
    document.querySelectorAll(".schedule-row").forEach(function (row) {
      row.addEventListener("click", function () {
        var wasOpen = row.classList.contains("is-open");
        document.querySelectorAll(".schedule-row.is-open").forEach(function (r) { r.classList.remove("is-open"); });
        if (!wasOpen) row.classList.add("is-open");
      });
      row.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); row.click(); }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Title block date + back to top                                      */
  /* ------------------------------------------------------------------ */
  function initMisc() {
    var dateEl = document.getElementById("tbDate");
    if (dateEl) dateEl.textContent = String(new Date().getFullYear());

    document.getElementById("backToTop").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initLang();
    initMobileNav();
    initHeaderScroll();
    initHeroIntro();
    initCounters();
    initSchedule();
    initMisc();
  });
})();

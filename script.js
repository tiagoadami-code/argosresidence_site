(function () {
  var WHATSAPP = "5511921991337";
  var labels = { morar: "para morar", investir: "para investir", ambos: "para morar e investir" };

  var year = document.getElementById("ano");
  if (year) year.textContent = new Date().getFullYear();

  /* Topo: fica sólido ao rolar e abre o menu no celular */
  var topbar = document.getElementById("topbar");
  var toggle = topbar.querySelector(".menu-toggle");
  var menu = document.getElementById("menu");

  function onScroll() {
    topbar.classList.toggle("is-solid", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setMenu(open) {
    topbar.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.querySelector(".visually-hidden").textContent = open ? "Fechar menu" : "Abrir menu";
  }
  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && topbar.classList.contains("menu-open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  /* Abas das plantas */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () {
      selectTab(tab, false);
    });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === "Home") next = tabs[0];
      if (e.key === "End") next = tabs[tabs.length - 1];
      if (next) {
        e.preventDefault();
        selectTab(next, true);
      }
    });
  });

  /* Galeria ampliada */
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var lbCap = document.getElementById("lightbox-cap");
  var items = Array.prototype.slice.call(document.querySelectorAll(".gallery button"));
  var current = 0;
  var opener = null;

  function show(i) {
    current = (i + items.length) % items.length;
    var btn = items[current];
    var thumb = btn.querySelector("img");
    lbImg.src = btn.getAttribute("data-full");
    lbImg.alt = thumb.alt;
    lbCap.textContent = btn.querySelector(".caption").textContent;
  }

  if (lightbox && typeof lightbox.showModal === "function") {
    items.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        opener = btn;
        show(i);
        lightbox.showModal();
      });
    });
    lightbox.addEventListener("click", function (e) {
      var step = e.target.closest("[data-step]");
      if (step) return show(current + Number(step.getAttribute("data-step")));
      if (e.target.closest(".lb-close") || e.target === lightbox || e.target.tagName === "FIGURE") lightbox.close();
    });
    lightbox.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") show(current + 1);
      if (e.key === "ArrowLeft") show(current - 1);
    });
    lightbox.addEventListener("close", function () {
      if (opener) opener.focus();
    });
  } else {
    items.forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.open(btn.getAttribute("data-full"), "_blank", "noopener");
      });
    });
  }

  /* Tour 360°: o player do Kuula só carrega quando a pessoa pede */
  var tourFrame = document.getElementById("tour-frame");
  var tourPlay = document.getElementById("tour-play");
  if (tourFrame && tourPlay) {
    tourPlay.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = tourFrame.getAttribute("data-src");
      iframe.title = "Tour virtual 360° do Argos Residence";
      iframe.className = "ku-embed";
      iframe.setAttribute("allow", "xr-spatial-tracking; gyroscope; accelerometer; fullscreen");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("scrolling", "no");
      tourFrame.innerHTML = "";
      tourFrame.appendChild(iframe);
      iframe.focus();
    });
  }

  /* Lista de interesse via WhatsApp */
  var form = document.getElementById("interest-form");
  if (!form) return;
  var nome = form.elements.nome;
  var erro = document.getElementById("nome-erro");

  function showError(on) {
    erro.hidden = !on;
    nome.setAttribute("aria-invalid", on ? "true" : "false");
    if (on) nome.setAttribute("aria-describedby", "nome-erro");
    else nome.removeAttribute("aria-describedby");
  }

  nome.addEventListener("input", function () {
    if (nome.value.trim()) showError(false);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = nome.value.trim();
    if (!name) {
      showError(true);
      nome.focus();
      return;
    }

    var objetivo = form.querySelector('input[name="objetivo"]:checked');
    var planta = form.elements.planta.value;
    var pergunta = form.elements.mensagem.value.trim();

    var text =
      "Olá! Meu nome é " + name + ". Visitei o site e tenho interesse no Argos Residence" +
      (objetivo ? " " + labels[objetivo.value] : "") + "." +
      (planta ? "\nPlanta de interesse: " + planta + "." : "") +
      (pergunta ? "\n\n" + pergunta : "");

    window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text), "_blank", "noopener");
  });
})();

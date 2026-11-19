(function () {
  var WHATSAPP = "5511921991337";
  var labels = { morar: "para morar", investir: "para investir", ambos: "para morar e investir" };

  var year = document.getElementById("ano");
  if (year) year.textContent = new Date().getFullYear();

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
    var pergunta = form.elements.mensagem.value.trim();

    var text =
      "Olá! Meu nome é " + name + ". Visitei o site e quero entrar na lista de interesse do Argos Residence" +
      (objetivo ? " (" + labels[objetivo.value] + ")" : "") + "." +
      (pergunta ? "\n\n" + pergunta : "");

    window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text), "_blank", "noopener");
  });
})();

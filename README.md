# Argos Residence — site do lançamento

Site estático de uma página (HTML + CSS + JS puro, sem build) do Argos Residence,
Av. Dr. Cavalcanti, 516 — Centro, Jundiaí/SP. Publicado em https://argosresidence.com.br.

A linguagem visual segue o folheto impresso: verde-oliva com textura de folhas, fundo greige,
títulos em serifa maiúscula (Gilda Display, no lugar da Lovelace do impresso) e texto em Montserrat.

## Estrutura

```text
/
  index.html     capa, diferenciais, localização, plantas, lazer, tour 360°, autores, decorado
  styles.css     estilos
  script.js      menu, abas das plantas, galeria ampliada, tour 360° e formulário do WhatsApp
  assets/
    og-argos.jpg     imagem de prévia para WhatsApp e redes sociais (1200x630)
    favicon.svg
    img/             perspectivas, plantas, mapa, logos e textura extraídos do folheto (WebP)
```

## Como funciona
- **Lista de interesse:** o formulário abre o WhatsApp `+55 11 92199-1337` com nome, objetivo,
  planta e pergunta. Para trocar o número, edite `WHATSAPP` em `script.js` e os links `wa.me` em `index.html`.
- **Tour 360°:** o player do Kuula (coleção `7HyZb`) só carrega quando a pessoa clica em "Iniciar tour 360°".
  O endereço fica no atributo `data-src` de `#tour-frame` em `index.html`.
- **Plantas:** cada aba é um painel `role="tabpanel"`; para mudar textos, edite o painel correspondente.

## Publicação
Deploy automático pelo Git da Hostinger: cada push na `main` publica o site (webhook configurado no GitHub).

Se as alterações não aparecerem, aumente o `?v=` de `styles.css` e `script.js` no `index.html`
e limpe o cache da hospedagem.

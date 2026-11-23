# Argos Residence — site de pré-lançamento

Site estático de uma página (HTML + CSS + JS puro, sem build) para o empreendimento Argos Residence.

## Estrutura

```text
/
  index.html        página única: capa, projeto, lista de interesse, rodapé
  styles.css        estilos (paleta tirada da fachada, fonte Archivo via Google Fonts)
  script.js         monta a mensagem do formulário e abre o WhatsApp
  assets/
    inicial.jpg / inicial.webp / inicial-1080.webp   imagem da capa (JPG de reserva + WebP)
    fachada-detalhe.jpg / .webp                      recorte usado na seção "O projeto"
    favicon.svg
```

## Lista de interesse
Não há servidor: o formulário monta uma mensagem com nome, objetivo (morar/investir) e pergunta,
e abre o WhatsApp `+55 11 92199-1337` com o texto pronto. Para trocar o número, edite
`WHATSAPP` em `script.js` e o link do botão flutuante em `index.html`.

## Publicação na Hostinger
O site está em https://argosresidence.com.br, com deploy automático pelo Git da Hostinger:
cada push na `main` publica o site (webhook configurado no GitHub).

Se as alterações não aparecerem, aumente o `?v=` de `styles.css` e `script.js` no `index.html`
e limpe o cache da hospedagem.

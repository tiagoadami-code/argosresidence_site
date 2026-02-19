# Argos Residence — Landing Page Temporária

Landing page estática e minimalista (1 página) para o empreendimento Argos Residence.

## Arquivos deste projeto

```text
/
  index.html
  styles.css
  README.md
```

## Importante
- A capa/hero busca `./inicial.jpg` e também `/inicial.jpg` para evitar erro de caminho no deploy.
- Este PR **não inclui arquivos binários/imagens**.
- Ao publicar, faça upload manual de `inicial.jpg` junto com os arquivos acima.

## Publicação na Hostinger

### Opção A — Git (se disponível)
1. Conecte o repositório GitHub na Hostinger.
2. Defina a raiz do projeto como diretório de publicação.
3. Faça o deploy e garanta que `inicial.jpg` também esteja presente no servidor.

### Opção B — File Manager / FTP
1. Envie `index.html`, `styles.css` e `README.md` para `public_html`.
2. Envie também o arquivo `inicial.jpg` para a raiz do site.
3. Acesse o domínio e valide a página.


## Dica se as alterações não aparecerem
- Faça *hard refresh* (`Ctrl+F5`) após o deploy.
- Se usar CDN/cache na hospedagem, limpe o cache.
- Confirme que `inicial.jpg` está no mesmo nível do `index.html` (raiz publicada).

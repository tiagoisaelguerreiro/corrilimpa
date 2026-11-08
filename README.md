# Corrilimpa — site

Site estático (HTML + CSS + JS, sem dependências). Para publicar, basta enviar a pasta para qualquer alojamento (Netlify, Vercel, GitHub Pages, cPanel…).

```
index.html
css/style.css
js/main.js
assets/favicon.svg
assets/img/*.jpg
```

Ver localmente: `python -m http.server 5173` nesta pasta e abrir http://localhost:5173.

## Conteúdo
Todos os textos e contactos vêm de https://corrilimpa.webnode.pt/ (reescritos para PT-PT atual).

**A confirmar com o cliente:**
- **"+20 anos de experiência"** — o site antigo (2012) dizia "10 anos"; o número foi atualizado por dedução.
- Contactos e morada (telefone 263 299 211, telemóvel 967 876 448, corrilimpa@gmail.com) — iguais ao site antigo.

## Fotografias
Fotos de stock gratuitas da Unsplash (licença Unsplash, uso comercial livre, sem atribuição obrigatória). Idealmente substituir por fotos reais da equipa/trabalhos — é o que mais diferencia o site.

| Ficheiro | Origem |
|---|---|
| hero.jpg | photo-1686178827149-6d55c72d81df |
| habitacoes.jpg | photo-1758273238415-01ec03d9ef27 |
| comercial.jpg | photo-1781637590564-01c65dbf2039 |
| cristais.jpg | photo-1581578731548-c64695cc6952 |
| espaco.jpg | photo-1583847268964-b28dc8f51f92 |

## Design
- Tipografia: Newsreader (títulos, serifada) + Hanken Grotesk (texto) — Google Fonts.
- Paleta: verde floresta `#0f2a1e`, marfim `#f7f4ee`, dourado `#c9a24a`.
- Mapa do Google sempre a cores.
- Animações discretas ao fazer scroll; desligam-se automaticamente para quem tem "reduzir movimento" ativo.

## Formulário
O formulário não precisa de servidor: ao enviar, abre o programa de e-mail do visitante com a mensagem preenchida para corrilimpa@gmail.com. Se quiserem receber os pedidos diretamente, pode ligar-se a um serviço como Formspree/Netlify Forms.

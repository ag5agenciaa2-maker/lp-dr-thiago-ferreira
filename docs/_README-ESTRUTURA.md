# README de Estrutura — Dr. Thiago Ferreira Faria Advocacia

> **Leia este arquivo ANTES de criar ou editar qualquer página HTML deste projeto.**
> Ele existe para evitar os erros recorrentes de nav/footer/cookie desincronizados entre páginas.

---

## 1. Mapa de páginas

| Arquivo | Pasta | Profundidade (`{{BASE}}`) | robots |
|---|---|---|---|
| `index.html` | raiz | `` (vazio) | `index, follow` |
| `termos-e-condicoes.html` | raiz | `` (vazio) | `noindex, follow` |
| `politica-de-privacidade.html` | raiz | `` (vazio) | `noindex, follow` |

Não há páginas em subpasta neste projeto no momento. Se uma nova página for criada em subpasta
(ex.: `blog/post.html`), `{{BASE}}` passa a ser `../`.

---

## 2. Template canônico

Ponto de partida obrigatório para nav/footer/drawer/cookie de qualquer página nova:
**`docs/_nav-footer-template.html`**

O template usa o placeholder `{{BASE}}` em todo caminho relativo:
- Página na **raiz**: `{{BASE}}` = `` (vazio) → `href="{{BASE}}/"` vira `href="/"`, `src="{{BASE}}assets/..."` vira `src="assets/..."`.
- Página em **subpasta**: `{{BASE}}` = `../` → `href="../{{BASE}}/"` ajustar conforme profundidade real.

**Nunca copie nav/footer de uma página aleatória** — sempre a partir do template, que é regenerado
a partir do `index.html` (fonte da verdade) sempre que o padrão muda.

---

## 3. Regra de profundidade — tabela raiz vs subpasta

| Recurso | Raiz (`{{BASE}}`="") | Subpasta (`{{BASE}}`="../") |
|---|---|---|
| CSS principal | `style.css` | `../style.css` |
| CSS cookie | `cookie-banner.css` | `../cookie-banner.css` |
| `script.js` | `script.js` | `../script.js` |
| `cookie-banner.js` | `cookie-banner.js` | `../cookie-banner.js` |
| Imagens | `assets/arquivo.webp` | `../assets/arquivo.webp` |
| Home | `/` | `/` (âncoras de home são sempre absolutas, nunca relativas) |
| Termos | `/termos-e-condicoes` | `/termos-e-condicoes` |
| Política | `/politica-de-privacidade` | `/politica-de-privacidade` |

**Regra AG5 inviolável — URL limpa**: nenhum link interno pode conter `.html`. O host (Cloudflare
Pages) serve cada página sem extensão (`/termos-e-condicoes`, não `/termos-e-condicoes.html`). O
arquivo no disco continua com `.html`; só a URL pública é limpa. Ver `Skill-SEO` para detalhes.

---

## 4. Itens obrigatórios em TODA página HTML deste projeto

- [ ] `<meta charset="UTF-8">` e `<meta name="viewport">`
- [ ] `<link rel="canonical">` apontando pra URL limpa da própria página
- [ ] `<link rel="icon" href="{{BASE}}assets/favicon-thiago-ferreira-faria.ico">`
- [ ] Nav idêntico ao `index.html` (logo, links, hamburger, `aria-label="Navegação principal"`)
  - Em páginas secundárias (fundo claro, sem hero), a nav usa `class="nav is-solid"` fixo — não
    depende do scroll listener do `script.js`, que só ativa `is-solid` na home.
- [ ] Footer idêntico ao `index.html` (4 colunas, redes sociais, créditos AG5, linha de cookie/termos/política)
- [ ] Drawer mobile completo (`#drawerOverlay`, `#drawer`, `aria-label="Navegação mobile"`)
- [ ] Banner de cookie LGPD + modal de preferências + `#ck-prefs-btn` (padrão `skill-cookie-banner-universal`)
- [ ] Botão flutuante de WhatsApp Premium (`.wa-premium-container`) — **modo compliance ativo**
  (`MODO_COMPLIANCE = true` no `script.js`: sem badge de notificação, nicho advocacia = OAB
  Provimento 205/2021)
- [ ] Scripts no fim do `<body>`, nesta ordem: `script.js` → `cookie-banner.js` → robô de analytics
  AG5 (`control-blog.ag5agencia.site/r.js` com `data-c="thiago-ferreira-faria"`)
- [ ] `rel="noopener noreferrer"` (não só `noopener`) em todo `target="_blank"`

---

## 5. Armadilhas conhecidas deste projeto

- **Depoimento de cliente na seção `#depoimentos`**: o card com o depoimento de "Bernardo Soares"
  é uma inclusão real e intencional do usuário (adicionada após o dossiê original ter sido
  escrito) — **não remover** achando que é conteúdo inventado. O `docs/Dossiê do Site.md` está
  desatualizado nesse ponto; o card é legítimo. Ver decisão registrada na conversa de 2026-09-24/25.
- **H1 da hero**: o slogan "Seu direito não é detalhe." é uma decisão de design deliberada — a
  keyword de SEO ("Advogado em Campo Grande, RJ") foi movida para o parágrafo de apoio (`.hero__lede`)
  em vez de alterar o H1. Não reescrever o H1 sem aprovação explícita.
- **`.hero__figure` no mobile**: fica `position:absolute;inset:0` dentro de `.hero__inner`. Se
  `.hero__inner` tiver `position:relative` ativo no breakpoint mobile, a imagem de fundo só cobre
  a altura do texto (bug real, corrigido em 2026-09-25 com `.hero__inner{position:static}` no
  media query `max-width:999px`). Cuidado ao mexer nesse bloco.
- **Depoimento com superlativo ("Melhor Advogado")**: mantido a pedido do usuário mesmo sendo fala
  literal de terceiro que tecnicamente esbarra no Código de Ética da OAB (vedação a sugestão de
  superioridade). Decisão documentada, não é erro a corrigir sozinho.
- **`aggregateRating` no Schema.org**: omitido de propósito — o Google Business Profile do
  escritório não tinha avaliações reais no momento da criação do schema. Só adicionar quando houver
  avaliações verídicas (mínimo 30 para destaque visual, conforme régua AG5 — ver `Skill-SEO`).
- **Domínio do site**: usa o padrão AG5 `https://thiagoferreiraadvocacia.ag5agencia.site/` (slug
  `thiagoferreiraadvocacia`) em todas as URLs absolutas (canonical, schema, sitemap, robots.txt,
  llms.txt). Se o cliente migrar para domínio próprio, atualizar em todos esses arquivos de uma vez.
- **`<select>` do formulário de contato**: `font-size` reduzido para `15px` (abaixo do padrão
  `16px` dos outros campos) para equilibrar o visual do dropdown mobile — pode reativar o zoom
  automático do iOS Safari nesse campo especificamente. Trade-off aceito pelo usuário.
- **Cor do `.contact-bg__overlay`**: gradiente diagonal `105deg` no desktop (pressupõe formulário à
  direita); no mobile (`max-width:768px`) foi trocado por cor sólida `rgba(14,18,24,.85)`, já que o
  layout empilha em coluna única e o gradiente diagonal perde o sentido.

---

## 6. Como verificar após qualquer edição de nav/footer

1. Abrir a página no navegador (desktop e viewport mobile).
2. Footer aparece com as 4 colunas, legível (texto claro sobre fundo navy).
3. Clicar no hambúrguer → drawer abre com animação, overlay escurece o fundo.
4. Clicar em um link do drawer → menu fecha.
5. Cookie banner aparece na primeira visita; o link "Cookie" no rodapé reabre o modal de preferências.
6. Botão flutuante de WhatsApp aparece ao rolar até a seção de Áreas (ou seção equivalente na página).
7. Abrir o DevTools → aba Network/Console: nenhum 404 em CSS, JS ou imagens.
8. Rodar o checklist completo do PASSO 4 da `Skill-Rodapé-Padrão-nas-Páginas`.

---

> Este README descreve a ESTRUTURA da sincronização, não substitui o template.
> Template = o código pra colar. README = as regras pra não errar.
> Ambos moram em `docs/` e nunca vão pro ar (robots.txt bloqueia `/docs/`, nomes com `_` = não publicável).

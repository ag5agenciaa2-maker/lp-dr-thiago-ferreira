# 📋 Falta Adicionar no Schema
**Empresa:** Advogado Campo Grande RJ - Dr. Thiago Ferreira Faria Advocacia | Direito Previdenciário | Direito Trabalhista
**Data de geração:** 24/09/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [ ] `email` — Não encontrado em nenhuma fonte (site nem docs de raiz). Confirmar com o cliente.

## 🟡 IMPORTANTES

- [ ] `sameAs` Facebook — Link da página da empresa não encontrado (não informado na raiz).
- [ ] `sameAs` LinkedIn — Não encontrado / não informado se aplicável.
- [ ] `aggregateRating` — Omitido intencionalmente: dossiê indica "No momento, não tem avaliações" no Google. Reavaliar quando o perfil acumular avaliações reais (mínimo 30, conforme régua AG5 de destaque — ver Skill SEO).
- [ ] `openingHoursSpecification` (Saturday/Sunday) — Site indica "fechado" nos fins de semana; nenhum bloco `OpeningHoursSpecification` de fechamento foi adicionado (schema.org não tem um padrão direto para "fechado"; considerado implícito pela ausência).

## 🔵 COMPLEMENTARES

- [ ] `legalName` — Razão social (CNPJ/nome empresarial) não exibida no site nem na raiz.
- [ ] `paymentAccepted` — Formas de pagamento não listadas no site.
- [ ] `founder.sameAs` — Instagram pessoal do Dr. Thiago (distinto do Instagram do escritório) não encontrado; usado apenas o Instagram institucional em `sameAs` do negócio.
- [ ] `datePublished` / `dateModified` da WebPage — não incluídos (não há timestamp "atualizado em" na LP; considerar adicionar conforme checklist GEO da Skill SEO).

## 🟢 FAQ

- [x] Seção FAQ presente na LP (`#faq`) — 5 perguntas mapeadas para `FAQPage`.

---

## ✅ Domínio — resolvido

- [x] **Domínio padrão AG5 aplicado**: `https://thiagoferreiraadvocacia.ag5agencia.site/` (slug: `thiagoferreiraadvocacia`), substituindo o placeholder anterior em todas as URLs absolutas (canonical, og:url, schema `url`/`@id`, sitemap.xml, llms.txt, robots.txt) nas 3 páginas HTML. Se o cliente vier a usar um domínio próprio (ex.: `.com.br`) no futuro, repetir a substituição.

---

## ✅ Resolvidos Automaticamente

- [x] `identifier.Google CID` — 17056621542627576264
- [x] `identifier.Google Place ID` — ChIJ8RoZ8xrjmwARyImXVOxKtew
- [x] `hasMap` + `sameAs[0]` — URL canônica `https://maps.google.com/?cid=17056621542627576264` aplicada (substituindo o link opaco `share.google/...`)
- [x] `geo.latitude` / `geo.longitude` — Coordenadas do Pleper (raiz): -22.9043377 / -43.5657957
- [x] `name` — Oficial (Pleper/GBP): "Dr. Thiago Ferreira Faria Advocacia"
- [x] `alternateName` — Fórmula AG5 aplicada: "Advogado Campo Grande RJ - Dr. Thiago Ferreira Faria Advocacia | Direito Previdenciário | Direito Trabalhista" (2 categorias-pai, mesmo valor em `WebSite.name`)
- [x] `areaServed` — Campo Grande + 5 bairros adjacentes (Senador Vasconcelos, Santíssimo, Cosmos, Inhoaíba, Paciência) gerados automaticamente
- [x] `telephone` + `contactPoint` — Array com WhatsApp (+5521966938793) e fixo (+552122545115), formato E.164
- [x] `foundingDate` — 2013-01 (raiz: "Janeiro de 2013")
- [x] `founder` — Thiago Ferreira Faria, Advogado, bio extraída da raiz
- [x] `hasOfferCatalog` — 5 serviços mapeados das seções de áreas de atuação
- [x] `FAQPage` — 5 perguntas da seção FAQ do site

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição

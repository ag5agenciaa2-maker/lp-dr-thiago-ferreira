# Catálogo de Imagens — Dr. Thiago Ferreira Faria Advocacia

> Documento gerado automaticamente. Descreve todas as imagens da pasta `assets/` para referência, acessibilidade e SEO.
> Atualizado em: 10/09/2026

---

## Resumo

| Arquivo atual | Novo nome SEO | Uso atual (HTML) | Uso recomendado |
|---|---|---|---|
| `favicon-thiago-ferreira-faria.ico` | `favicon-thiago-ferreira-faria.ico` | Referenciado como `assets/favicon.ico` (quebrado — nome não bate) | Favicon (`<link rel="icon">`) |
| `logo-desktop-thiago-ferreira-faria.webp` | `logo-thiago-ferreira-faria-advocacia.webp` | Referenciado como `assets/logo-desktop.webp` (quebrado) | Header (nav) e rodapé |
| `logo-mobile-thiago-ferreira-faria.webp` | `logo-thiago-ferreira-faria-advocacia-mobile.webp` | Não referenciado no HTML | Header em telas pequenas (alternativa compacta ao logo desktop) |
| `thiago-ferreira-faria-advogado-...-campo-grande (1).webp` | `thiago-ferreira-faria-advogado-escritorio-campo-grande.webp` | Não referenciado (HTML espera `thiago-escritorio.webp`) | Hero (foto floating) / Sobre |
| `thiago-ferreira-faria-advogado-...-campo-grande (2).webp` | `thiago-ferreira-faria-advogado-fachada-forum-trt.webp` | Não referenciado | Seção de encantamento / Sobre (contexto forense) |
| `thiago-ferreira-faria-advogado-...-campo-grande (3).webp` | `thiago-ferreira-faria-advogado-atendimento-telefone.webp` | Não referenciado (HTML espera `thiago-telefone.webp`) | Seção de dor/solução (atendimento ao cliente) |
| `thiago-ferreira-faria-advogado-...-campo-grande (4).webp` | `thiago-ferreira-faria-advogado-toga-plenario-dia.webp` | Não referenciado | Sobre/Credenciais, Depoimentos (autoridade) |
| `thiago-ferreira-faria-advogado-...-campo-grande (5).webp` | `thiago-ferreira-faria-advogado-toga-plenario-noite-1.webp` | Não referenciado (HTML espera `thiago-tribunal.webp`) | Hero (foto floating) / Sobre |
| `thiago-ferreira-faria-advogado-...-campo-grande (6).webp` | `thiago-ferreira-faria-advogado-mesa-cartao-digital-escritorio.webp` | Não referenciado | Sobre / Contato (mostra dados de contato reais) |
| `thiago-ferreira-faria-advogado-...-campo-grande (7).webp` | `thiago-ferreira-faria-advogado-toga-plenario-noite-2.webp` | Não referenciado | Depoimentos / Sobre (alternativa à imagem 5) |

⚠️ **Atenção:** o `index.html` atual referencia os arquivos com nomes que **não existem fisicamente** em `assets/` (`favicon.ico`, `logo-desktop.webp`, `thiago-escritorio.webp`, `thiago-tribunal.webp`, `thiago-telefone.webp`). Isso quebra as imagens no site publicado. A Etapa 5/6 desta skill corrige isso, renomeando os arquivos para os nomes SEO definitivos abaixo e atualizando as referências no HTML.

---

## Descrições Detalhadas

### favicon-thiago-ferreira-faria.ico

**Descrição:** Arquivo binário `.ico` (ícone), não foi possível visualizar diretamente com a ferramenta de leitura de imagem. Pelo nome e contexto, é o ícone de aba do navegador derivado do logo "TT" da marca (monograma com balança da justiça).

**Contexto de uso atual:** Referenciado no `<head>` como `assets/favicon.ico` — nome não corresponde ao arquivo físico (quebrado).

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Favicon (`<link rel="icon">`) no `<head>` — único uso possível para este formato.
- ⚠️ **Evitar usar em:** Qualquer outro lugar do site (imagem de conteúdo, OG image, etc.) — `.ico` não é adequado para isso.

**Novo nome sugerido (SEO):** `favicon-thiago-ferreira-faria.ico` (mantido — já está correto e reconhecível; apenas corrigir a referência no HTML)

**Alt text sugerido:** Não aplicável (favicon não usa atributo `alt`).

---

### logo-desktop-thiago-ferreira-faria.webp

**Descrição:** Logo em fundo transparente, tons de cinza/branco translúcido. Monograma duplo "TT" sobreposto por uma balança da justiça estilizada (formato de arco), com dois pequenos triângulos (pratos da balança) abaixo das letras. Abaixo do monograma, o nome "THIAGO FERREIRA" em tipografia serifada maiúscula, e a linha "ADVOCACIA & ASSESSORIA JURÍDICA" em fonte menor, ladeada por travessões decorativos. Versão de maior largura/resolução, adequada para desktop.

**Contexto de uso atual:** Referenciado no header (nav) e no rodapé como `assets/logo-desktop.webp` — nome não corresponde ao arquivo físico (quebrado).

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Logo do header (nav) em telas desktop/tablet — resolução e proporção adequadas.
- 🥈 **Uso alternativo 1:** Logo do rodapé, ao lado dos créditos.
- 🥉 **Uso alternativo 2:** OG Image / marca d'água em materiais impressos ou PDFs institucionais.
- ⚠️ **Evitar usar em:** Favicon (formato/proporção não otimizados para ícone pequeno) — usar o `.ico` dedicado.

**Novo nome sugerido (SEO):** `logo-thiago-ferreira-faria-advocacia.webp`

**Alt text sugerido:** "Thiago Ferreira Faria — Advocacia e Assessoria Jurídica, logotipo"

---

### logo-mobile-thiago-ferreira-faria.webp

**Descrição:** Mesmo design do logo desktop (monograma "TT" com balança da justiça estilizada, nome "THIAGO FERREIRA" e subtítulo "ADVOCACIA & ASSESSORIA JURÍDICA"), em versão de menor resolução/escala, otimizada para exibição compacta em telas pequenas.

**Contexto de uso atual:** Não identificada no HTML (arquivo existe mas não está sendo referenciado).

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Logo do header (nav) em viewport mobile via `<picture>`/`srcset`, reduzindo peso de carregamento em telas pequenas.
- 🥈 **Uso alternativo 1:** Ícone de compartilhamento em apps de mensagem (thumbnail leve).
- ⚠️ **Evitar usar em:** Header desktop (resolução insuficiente para telas grandes) — usar a versão desktop.

**Novo nome sugerido (SEO):** `logo-thiago-ferreira-faria-advocacia-mobile.webp`

**Alt text sugerido:** "Thiago Ferreira Faria — Advocacia e Assessoria Jurídica, logotipo"

---

### thiago-ferreira-faria-advogado-...-campo-grande (1).webp

**Descrição:** Retrato do Dr. Thiago Ferreira Faria sentado à mesa de seu escritório, vestindo camisa social azul-marinho estampada com detalhes em micro-poá e gravata bordô. Relógio de pulso visível no braço apoiado na mesa. Ao fundo, estante de madeira escura com diversos livros jurídicos organizados, cortina clara à esquerda. Iluminação interna suave, enquadramento de retrato vertical, olhar direto para a câmera, expressão receptiva e profissional.

**Contexto de uso atual:** Não identificada no HTML (o código espera um arquivo chamado `thiago-escritorio.webp`, que não existe).

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Hero (imagem "floating" pequena, recorte ancorado no canto inferior direito) — retrato claro, profissional, rosto bem visível, transmite proximidade e autoridade conforme o dossiê pede.
- 🥈 **Uso alternativo 1:** Seção Sobre/Credenciais — reforça a identidade pessoal junto ao texto institucional e counters.
- 🥉 **Uso alternativo 2:** OG Image para compartilhamento em redes sociais (rosto centralizado, boa iluminação).
- ⚠️ **Evitar usar em:** Cards de serviço numerados (a seção foi desenhada para não depender de fotos).

**Novo nome sugerido (SEO):** `thiago-ferreira-faria-advogado-escritorio-campo-grande.webp`

**Alt text sugerido:** "Dr. Thiago Ferreira Faria, advogado, em seu escritório de advocacia em Campo Grande, Rio de Janeiro"

---

### thiago-ferreira-faria-advogado-...-campo-grande (2).webp

**Descrição:** Selfie do Dr. Thiago em pé, ao ar livre, em frente a um fórum/tribunal (placa ao fundo com os dizeres "PODER JUDICIÁRIO" e um totem identificando "TRT — 1ª REGIÃO" à esquerda). Veste blazer/terno azul-marinho sobre camisa azul clara e gravata listrada em tons escuros. Vegetação (palmeiras, arbustos com flores vermelhas) e piso de pedras portuguesas ao fundo. Luz natural diurna, expressão séria e concentrada.

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Seção de encantamento (autoridade/segurança) — mostra o profissional atuando fisicamente em ambiente forense real, reforçando credibilidade sem depender de fotos genéricas do Unsplash.
- 🥈 **Uso alternativo 1:** Seção Sobre/Credenciais, como imagem de apoio ao texto de trajetória.
- 🥉 **Uso alternativo 2:** Galeria ou banner de "atuação em todo o RJ".
- ⚠️ **Evitar usar em:** Hero (enquadramento e ângulo de selfie destoam do recorte "floating" limpo pedido no dossiê).

**Novo nome sugerido (SEO):** `thiago-ferreira-faria-advogado-fachada-forum-trt.webp`

**Alt text sugerido:** "Dr. Thiago Ferreira Faria, advogado trabalhista, em frente ao fórum do TRT"

---

### thiago-ferreira-faria-advogado-...-campo-grande (3).webp

**Descrição:** Dr. Thiago em pé, ambiente externo, ao telefone celular (aparelho encostado no ouvido direito). Veste blazer azul-marinho, camisa listrada clara e gravata em tom terracota/vinho. Vasos de planta e vegetação verde ao fundo, fachada clara de prédio. Luz natural diurna, semblante atento, típico de atendimento a cliente.

**Contexto de uso atual:** Referenciado no HTML como `assets/thiago-telefone.webp` — nome não corresponde ao arquivo físico (quebrado).

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Seção de alto impacto (dor e solução) — a imagem ilustra bem o atendimento direto e acessível ao cliente, reforçando a mensagem de proximidade.
- 🥈 **Uso alternativo 1:** Seção CTA/formulário de contato, ao lado do formulário.
- 🥉 **Uso alternativo 2:** Seção de encantamento, como segunda imagem de apoio.
- ⚠️ **Evitar usar em:** Hero tipográfico (o dossiê pede apenas uma foto pequena floating — esta não é a indicada para isso, ver imagem 1).

**Novo nome sugerido (SEO):** `thiago-ferreira-faria-advogado-atendimento-telefone.webp`

**Alt text sugerido:** "Dr. Thiago Ferreira Faria atendendo cliente por telefone"

---

### thiago-ferreira-faria-advogado-...-campo-grande (4).webp

**Descrição:** Selfie do Dr. Thiago já paramentado com toga de advogado (preta, com cordão trançado) sobre camisa branca listrada e gravata bordô. Óculos de grau. Ao fundo, ampla janela de vidro com vista para prédios da cidade (área comercial, dia claro), teto com luminárias e detalhes de madeira — ambiente de plenário/auditório de tribunal vazio. Relógio dourado visível no pulso.

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Seção Sobre/Credenciais (counters) — a toga reforça visualmente a autoridade jurídica ao lado dos números de experiência.
- 🥈 **Uso alternativo 1:** Seção de Depoimentos (frase poderosa fullscreen) como imagem de fundo com overlay escuro, já que o ambiente amplo permite recorte.
- 🥉 **Uso alternativo 2:** OG Image alternativa (formal, com toga, transmite seriedade).
- ⚠️ **Evitar usar em:** Cards de serviço (formato retrato não se adapta ao recorte proposto para os cards numerados).

**Novo nome sugerido (SEO):** `thiago-ferreira-faria-advogado-toga-plenario-dia.webp`

**Alt text sugerido:** "Dr. Thiago Ferreira Faria, advogado, trajado com toga em plenário de tribunal"

---

### thiago-ferreira-faria-advogado-...-campo-grande (5).webp

**Descrição:** Selfie do Dr. Thiago paramentado com toga preta e cordão trançado, sobre camisa branca listrada e gravata bordô, óculos de grau. Ambiente de auditório/plenário de tribunal com cadeiras cinzas dispostas em fileiras ao fundo, iluminação artificial noturna (pontos de luz visíveis no teto refletidos no vidro), bancada de madeira com cadeiras pretas próxima. Atmosfera mais formal e escura que a imagem 4.

**Contexto de uso atual:** Referenciado no HTML como `assets/thiago-tribunal.webp` — nome não corresponde ao arquivo físico (quebrado).

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Hero (imagem "floating" pequena) — enquadramento vertical claro do rosto com a toga transmite autoridade imediata, alinhado ao pedido do dossiê ("recorte da foto real do Dr. Thiago").
- 🥈 **Uso alternativo 1:** Seção Depoimentos (frase poderosa fullscreen) como fundo com overlay navy.
- 🥉 **Uso alternativo 2:** Seção Sobre/Credenciais.
- ⚠️ **Evitar usar em:** Seção de encantamento em grade com outras fotos claras (contraste de iluminação noturna destoa de fotos diurnas).

**Novo nome sugerido (SEO):** `thiago-ferreira-faria-advogado-toga-plenario-noite-1.webp`

**Alt text sugerido:** "Dr. Thiago Ferreira Faria, advogado, com toga em plenário de tribunal à noite"

---

### thiago-ferreira-faria-advogado-...-campo-grande (6).webp

**Descrição:** Dr. Thiago sentado à mesa do escritório, vestindo camisa social clara (cinza/gelo) com gravata acinzentada estampada, óculos de grau, relógio de pulso metálico. Ao fundo, estante iluminada com livros jurídicos ("DIREITO CIVIL" visível na lombada vermelha), vaso de planta, e destaque para uma balança da justiça dourada decorativa e uma pequena estátua também dourada. À direita, monitor de computador (marca Dell) exibindo um cartão digital de visita com o logo "TF", nome "THIAGO FERREIRA FARIA — ADVOCACIA E CONSULTORIA JURÍDICA" e dados de contato (telefone fixo, WhatsApp e e-mail) em texto legível na tela.

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Seção Sobre/Credenciais — mostra ambiente de trabalho real com elementos simbólicos (balança, estátua, livros), reforçando autoridade e autenticidade.
- 🥈 **Uso alternativo 1:** Seção de Localização/Contato — o cartão digital no monitor reforça visualmente os dados de contato exibidos na seção.
- 🥉 **Uso alternativo 2:** Seção de encantamento, como imagem de "resultado/segurança".
- ⚠️ **Evitar usar em:** Hero (o texto do cartão digital na tela fica ilegível em miniatura "floating" pequena — perde-se a informação central da imagem).

**Novo nome sugerido (SEO):** `thiago-ferreira-faria-advogado-mesa-cartao-digital-escritorio.webp`

**Alt text sugerido:** "Dr. Thiago Ferreira Faria em sua mesa de trabalho no escritório de advocacia, com balança da justiça decorativa e cartão de contato digital"

---

### thiago-ferreira-faria-advogado-...-campo-grande (7).webp

**Descrição:** Selfie do Dr. Thiago paramentado com toga preta e cordão trançado, sobre camisa branca listrada e gravata bordô, óculos de grau. Ambiente de auditório/plenário de tribunal em ângulo diferente da imagem 5 — cadeiras cinzas visíveis em primeiro plano e ao fundo, bancadas de madeira com tampo escuro, iluminação artificial noturna com pontos de luz refletidos no vidro superior.

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Seção Depoimentos (frase poderosa fullscreen) como imagem de fundo alternativa com overlay navy sólido, já que a composição permite recorte amplo.
- 🥈 **Uso alternativo 1:** Seção Sobre/Credenciais, como variação da imagem 5 (evitar repetir a mesma foto duas vezes na mesma página).
- 🥉 **Uso alternativo 2:** Galeria de bastidores/atuação em tribunal, se a seção existir.
- ⚠️ **Evitar usar em:** Hero junto com a imagem 5 (redundante — usar apenas uma das duas fotos de toga no plenário noturno para evitar repetição visual).

**Novo nome sugerido (SEO):** `thiago-ferreira-faria-advogado-toga-plenario-noite-2.webp`

**Alt text sugerido:** "Dr. Thiago Ferreira Faria, advogado, paramentado com toga em plenário de tribunal"

---

## Instruções de Renomeação

```bash
# Renomear imagens (executar dentro da pasta assets/)
mv "logo-desktop-thiago-ferreira-faria.webp" "logo-thiago-ferreira-faria-advocacia.webp"
mv "logo-mobile-thiago-ferreira-faria.webp" "logo-thiago-ferreira-faria-advocacia-mobile.webp"
mv "thiago-ferreira-faria-advogado-direito-previdenciario-trabalhista-divorcio-em-campo-grande (1).webp" "thiago-ferreira-faria-advogado-escritorio-campo-grande.webp"
mv "thiago-ferreira-faria-advogado-direito-previdenciario-trabalhista-divorcio-em-campo-grande (2).webp" "thiago-ferreira-faria-advogado-fachada-forum-trt.webp"
mv "thiago-ferreira-faria-advogado-direito-previdenciario-trabalhista-divorcio-em-campo-grande (3).webp" "thiago-ferreira-faria-advogado-atendimento-telefone.webp"
mv "thiago-ferreira-faria-advogado-direito-previdenciario-trabalhista-divorcio-em-campo-grande (4).webp" "thiago-ferreira-faria-advogado-toga-plenario-dia.webp"
mv "thiago-ferreira-faria-advogado-direito-previdenciario-trabalhista-divorcio-em-campo-grande (5).webp" "thiago-ferreira-faria-advogado-toga-plenario-noite-1.webp"
mv "thiago-ferreira-faria-advogado-direito-previdenciario-trabalhista-divorcio-em-campo-grande (6).webp" "thiago-ferreira-faria-advogado-mesa-cartao-digital-escritorio.webp"
mv "thiago-ferreira-faria-advogado-direito-previdenciario-trabalhista-divorcio-em-campo-grande (7).webp" "thiago-ferreira-faria-advogado-toga-plenario-noite-2.webp"
# favicon-thiago-ferreira-faria.ico mantém o nome — sem renomeação necessária
```

Quero que você crie o Site institucional Autoridade Editorial em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.
REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho jurídico caso não haja imagens reais suficientes. Inclua URLs diretas das imagens.

IDENTIDADE VISUAL BASE:
Paleta (extraída de ativos reais do cliente — cartão digital exibido no monitor, foto do escritório):

--color-navy: #16212D (fundo escuro / primária)
--color-copper: #E8935E (destaque cobre/salmão, cor real do logo "TF" no cartão digital)
--color-offwhite: #F7F4EF (fundo claro)
--color-ink: #14161A (texto principal)

Tipografia: Manrope ou Space Grotesk (display/títulos, sans-serif geométrica) + Inter (corpo). Divergindo deliberadamente de Playfair Display/Cormorant.

Estilo: Editorial jurídico contemporâneo — tipografia grande como elemento visual central, paleta navy+cobre autêntica da marca, cartões numerados em vez de grids de ícone genéricos.

Sensação: Autoridade sólida (13 anos de atuação), clareza técnica e proximidade humana — sem o clichê "escritório tradicional dourado".

LAYOUT ESCOLHIDO:

Hero: C) Editorial — tipografia 8–10vw dominando ~70% da tela com a proposta de valor do cliente (previdenciário, trabalhista, família, criminal); imagem pequena "floating" (recorte da foto real do Dr. Thiago no escritório) ancorada no canto inferior direito sobre cartão com leve profundidade (box-shadow).
Serviços: F) Numeração grande (01–05) — um bloco por área de atuação (Previdenciário, Trabalhista, Família, Criminal, Direito do Consumidor), números grandes em cobre translúcido no fundo do card, sem depender de fotos adicionais.
Depoimentos: B) Frase poderosa fullscreen — como não há avaliações publicadas, a seção substitui depoimentos fictícios por uma citação de autoridade extraída da fala real do cliente ("Buscando sempre o melhor para cada cliente"), fundo navy sólido, tipografia grande centralizada. Nenhum depoimento deve ser inventado.
Sobre/Credenciais: A) Counters animados — "13 anos de atuação", "2013 — fundação", "5 áreas de atuação" (somente métricas confirmadas) + texto curto da história real do cliente.

ANIMAÇÕES DO PROJETO:

Hero headline → opacity 0→1 + translateY 24px→0 em 700ms, easing cubic-bezier(0.16,1,0.3,1), trigger: load, stagger: sim (linha a linha)
Imagem floating do hero → scale 0.94→1 + opacity 0→1 em 900ms, easing ease-out, trigger: load com delay 200ms
Cards de serviço (numeração) → translateY 32px→0 + opacity 0→1 em 500ms, easing ease-out, trigger: scroll (IntersectionObserver), stagger: sim (120ms entre cards)
Counters (seção Sobre) → contagem numérica de 0 até valor final em 1400ms, easing linear, trigger: scroll (dispara uma única vez ao entrar em viewport)
Frase de depoimento fullscreen → opacity 0→1 em 900ms, easing ease-in-out, trigger: scroll, sem stagger
Nav → background transparente→navy sólido com blur em transição de 300ms ao ultrapassar 80px de scroll

SEÇÕES OBRIGATÓRIAS (usar exatamente a lista abaixo, preenchendo os modelos indicados):

Navbar
Hero (modelo Editorial C)
Seção de alto impacto: dor e solução do público-alvo (foco: insegurança sobre direitos previdenciários/trabalhistas/família)
Serviços (modelo Numeração F)
Seção de encantamento com imagens de resultado/segurança/pessoas (usar imagens genéricas premium Unsplash de ambiente jurídico/tribunal, dado o volume limitado de fotos reais)
Sobre/Credenciais (modelo Counters A)
Depoimentos (modelo Frase poderosa B)
FAQ
Localização: endereço + mapa (iframe fornecido pelo cliente) + botão "Como Chegar" + contatos e redes sociais
CTA com formulário ao lado
Rodapé + Créditos

RODAPÉ — coluna de contato (ícones clicáveis):

Nome → link Google Business: https://share.google/JUh9bQpia10CRbpCJ
Endereço → link rota Google Maps (fornecido na seção 2)
Telefone/WhatsApp → 21 96693-8793

CRÉDITOS:

Esquerda: © Thiago Ferreira Advocacia 2026 (nome provisório — ver pendência de confirmação do nome oficial, seção 5)
Direita: Desenvolvido por AG5 Agência (AG5 em destaque na cor 
#E8935E), link para www.ag5agencia.com.br

QUALIDADE DE CÓDIGO: HTML semântico com IDs de ancoragem; variáveis CSS no :root; mobile-first; IntersectionObserver (nunca scroll event direto); will-change: transform; @media (prefers-reduced-motion); lazy loading; formulário com validação real.

DIRETRIZES ANTI-GENÉRICO: sem hero centralizado escuro genérico; sem fade-up idêntico em todas as seções; sem paleta azul+branco+cinza; sem 3 colunas ícone+título+texto padrão.

OBSERVAÇÃO DE MÍDIA: o cliente declarou 8 fotos (contando logo) e 1 vídeo, mas apenas 4 arquivos de imagem reais e o link do vídeo foram recebidos. O layout acima foi desenhado para funcionar bem com poucas fotos reais (hero tipográfico, serviços numerados, depoimento textual, about com counters), reservando o uso de imagens Unsplash apenas para a seção de "encantamento" e como fundo de apoio.

1 — MÍDIAS PRINCIPAIS
Item	Status
Logo	✅ Recebido (Logo.jpeg) — fundo preto, monograma "TT/TF" com balança da justiça, tipografia serifada branca
Foto da fachada do escritório	❌ Não recebida
Fotos internas do escritório	⚠️ Parcial — 1 foto mostra parte do ambiente (mesa, estante com livros jurídicos, balança dourada decorativa, escultura), dentro da selfie do advogado (THIAGO_3)
Fotos da equipe	❌ Não recebidas (não há indicação de sócios/equipe além do próprio Dr. Thiago)
Fotos do proprietário/advogado	✅ 3 recebidas: THIAGO_3 (na mesa, com monitor exibindo cartão digital), THIAGO_1 (ao telefone, ambiente externo, blazer azul), THIAGO_2 (em toga, ambiente de tribunal/plenário)
Print do Instagram (Print-Instagram.png)	✅ Recebido — screenshot do perfil @thiago.adv.ferreira, útil como referência de conteúdo e prova social (154 posts, 3.263 seguidores), mas não é uma foto individual de alta qualidade utilizável diretamente nas seções
Vídeo	✅ 1 vídeo do Instagram — "Proteção da trabalhadora gestante": https://www.instagram.com/p/CVopYtZtXF1/

Quantidade declarada: 8 fotos (contando logo) + 1 vídeo.
Quantidade recebida: 4 arquivos de imagem (logo + 3 fotos do advogado) + 1 link de vídeo.
Faltam ~4 fotos das declaradas (provavelmente fachada e ângulos adicionais do escritório) — vão para o checklist de pendências.

2 — INFORMAÇÕES DA EMPRESA

Nome do negócio: Dr. Thiago Ferreira Faria Advocacia (ver variações de nome entre fontes na seção 5)
Nicho de atuação: Advocacia — Direito de Família, Trabalhista, Criminal e Previdenciário
Descrição institucional: "Um escritório no qual possui uma equipe especializada em direito previdenciário, para obter LOAS e aposentadoria, e no direito do trabalho, atuando também no direito de família sobre divórcio e partilha de bens."
Proposta de valor: Atuação técnica e resultados concretos em causas previdenciárias, trabalhistas e de família, com 13 anos de experiência.
Público-alvo: Não informado explicitamente pelo cliente.
Principais serviços/produtos:

Direito Previdenciário (LOAS, aposentadorias)
Direito do Trabalho
Direito de Família (divórcio, partilha de bens)
Direito Criminal
Direito do Consumidor (mencionado na bio do Instagram)
Categorias no Google Business: Escritório de advocacia, Advogado criminal, Advogado de Direito de Família, Advogado trabalhista, Advogado previdenciário
Diferenciais: 13 anos de atuação (desde janeiro de 2013); pós-graduação em Direito e Processo Civil; foco em "buscar o melhor para cada cliente".
História: "Atuo como advogado há 13 anos! Com muito esforço terminei a faculdade e passei no exame da Ordem dos Advogados do Brasil. Sou pós-graduado em direito e processo civil, atuando em defesa e direitos do cidadão, buscando o melhor para cada cliente! Com anos de atuação e com muitos direitos concedidos!"
Data de abertura: Janeiro de 2013

Contato:

Telefone: (21) 96693-8793
WhatsApp: (21) 96693-8793
Telefone adicional encontrado no cartão digital (imagem do monitor): (21) 2254-5115 (não constava no formulário — ver pendência)
Email: thiago.adv.ferreira@gmail.com (encontrado no cartão digital, não informado no formulário — ver pendência)
Endereço: Av. Maria Teresa, 75 - Sl 630 - Campo Grande, Rio de Janeiro - RJ, 23050-160
Cidade/Estado: Campo Grande, Rio de Janeiro - RJ
Abrangência de atendimento: todo o estado do Rio de Janeiro
Horário: Seg. a Sex. 9h às 18h; Sáb. e Dom. fechado

Links:

Site próprio: não possui
Instagram: @thiago.adv.ferreira — https://www.instagram.com/thiago.adv.ferreira (154 posts, 3.263 seguidores, 1.902 seguindo)
Facebook: não informado
LinkedIn: não informado
Google Business (perfil): https://share.google/JUh9bQpia10CRbpCJ
Place ID: ChIJ8RoZ8xrjmwARyImXVOxKtew | CID: 17056621542627576264
Link avaliação Google: https://search.google.com/local/writereview?placeid=ChIJ8RoZ8xrjmwARyImXVOxKtew
Link rota Google Maps: fornecido no material enviado
Iframe do mapa: fornecido no material enviado (coordenadas -22.90433770, -43.56579570)

Documentação:

Registro profissional (OAB): possui, segundo o cliente ("Sim"), mas número não informado
CNPJ: não informado

Quantidade de fotos e vídeos: 8 fotos declaradas (contando logo) / 1 vídeo. Como apenas 4 imagens reais e 1 vídeo (externo, do Instagram) foram recebidos, as seções do site foram direcionadas (ver COMANDO acima) para depender pouco de galeria fotográfica: hero tipográfico com uma única foto pequena, serviços em formato numerado (sem foto), depoimentos em formato textual, e "sobre" com contadores numéricos. O vídeo pode ser incorporado como conteúdo de destaque/autoridade (embed do post do Instagram) em vez de vídeo institucional de fundo, já que não há vídeo de apresentação da marca.

3 — AVALIAÇÕES

Plataforma: Google
Total de avaliações: 0
Nota média: Não disponível

"No momento, não tem avaliações." — não há avaliações reais para listar. Nenhum depoimento deve ser inventado. A seção de depoimentos do site foi redirecionada para o modelo "Frase poderosa fullscreen" (ver COMANDO e seção 7), usando uma citação de autoridade do próprio cliente em vez de depoimentos de clientes.

4 — ANÁLISE DE BRANDING

Nicho: Advocacia (Família, Trabalhista, Criminal, Previdenciário) — Campo Grande, RJ
Posicionamento: Médio, com sinalização de autoridade profissional (traje formal, escritório com estante jurídica e elementos simbólicos como balança dourada e estátua da justiça)

Estilo visual predominante: O material de marca existente (logo + cartão digital exibido no monitor) já usa uma base "advocacia clássica navy + cobre", com tipografia serifada no nome e sans-serif no subtítulo. Esse padrão (preto/navy + dourado/champagne + serifada) está fortemente saturado no portfólio AG5 para advocacia em Campo Grande (~10 sites já construídos com essa combinação, conforme base de conhecimento).

Paleta recomendada (hex extraídos de ativos reais do cliente):

#16212D — navy profundo (extraído do fundo do cartão digital no monitor)
#E8935E — cobre/salmão (extraído do logo "TF" e textos de contato do cartão digital)
#F7F4EF — off-white de apoio
#14161A — preto suave para texto

Direção estética: Como o próprio cliente já possui essa paleta em uso real (não é uma cor inventada pela agência), a recomendação — seguindo a regra de exceção da base de conhecimento — é manter as cores reais da marca e divergir no layout e na tipografia: abandonar a dupla Playfair/Cormorant (usada em praticamente todos os concorrentes do nicho na região) em favor de uma tipografia de display não serifada (Manrope/Space Grotesk) e de um sistema de layout editorial/numerado, evitando o hero escuro centralizado e o grid de ícone+título+texto que dominam o segmento.

Sensação de marca: Autoridade e experiência (13 anos), seriedade técnica, mas com leitura mais contemporânea e editorial — não o "clássico dourado tradicional" já repetido na praça.

5 — CHECKLIST DE PENDÊNCIAS
Fotos: faltam cerca de 4 das 8 declaradas (fachada do escritório, imagens internas adicionais); apenas 3 fotos do advogado + logo foram recebidas
Vídeo institucional: não existe; há apenas 1 vídeo de conteúdo do Instagram, sem vídeo de apresentação da marca
Avaliações Google: zero avaliações — pendente coleta de depoimentos reais antes de publicar qualquer seção de prova social baseada em clientes
Registro profissional (OAB): confirmado que possui, mas número não informado
CNPJ: não informado — confirmar se a atuação é como pessoa física/autônomo ou há CNPJ
Redes sociais adicionais: Facebook e LinkedIn não informados — confirmar se existem
Público-alvo: não informado explicitamente pelo cliente
Conflito de dados de contato a confirmar com o cliente:
Telefone fixo "(21) 2254-5115" aparece apenas no cartão digital (imagem do monitor), não no formulário
Email "thiago.adv.ferreira@gmail.com" aparece apenas no cartão digital, não no formulário
Variação de nome comercial entre fontes: formulário → "Dr. Thiago Ferreira Faria advocacia"; logo → "Thiago Ferreira — Advocacia & Assessoria Jurídica"; cartão digital → "Thiago Ferreira Faria — Advocacia e Consultoria Jurídica". É necessário confirmar com o cliente qual nome oficial usar no site e nos créditos do rodapé.
6 — ANÁLISE DE REFERÊNCIAS WEBFLOW
TEMPLATE 1 — "Lawyers" (lawfirmtemplate.webflow.io) — BRIX Templates

HERO: Proporção aproximada 60/40 (texto esquerda, imagem de suporte à direita/fundo), título curto de forte peso tipográfico ("The #1 Law Firm in Los Angeles, CA"), CTA duplo (Consulta gratuita + Áreas de Atuação) logo abaixo do título, imagem de escritório ocupando a faixa inferior da seção.
NAV: Menu horizontal fixo, com CTA destacado ("Free Consultation") isolado à direita da barra.
TIPOGRAFIA: Títulos em sans-serif de peso bold/display (~3–4rem no hero, reduzindo para ~1.5–2rem em subtítulos de seção); corpo em sans-serif regular ~1rem; uso funcional, sem ousadia tipográfica.
CORES: compatível com paleta neutra clara + acento único — aqui recomenda-se usar apenas 
#16212D e 
#E8935E do branding do cliente, sem introduzir azul corporativo genérico.
SERVIÇOS/CARDS: Grid de 4 colunas, cada card com ícone linear no topo, título curto e parágrafo descritivo — layout de "ícone+título+texto" clássico (por isso o projeto do cliente evita repetir esse modelo, optando pela numeração grande).
ANIMAÇÕES (padrão típico da família de templates BRIX): cards de prática → fade + translateY de 20px→0, stagger entre colunas, trigger scroll; hero → fade-in simples ao carregar.
MICRO-INTERAÇÕES: hover em botões com leve escurecimento de fundo; hover em cards eleva sombra sutilmente.
ELEMENTOS DECORATIVOS: praticamente nenhum — layout limpo, sem formas ou texturas.
RESUMO CONSTRUTIVO: Este template representa o padrão "corporativo seguro" do nicho — útil como referência do que evitar: grid de ícones, hero fotográfico convencional, sem tipografia de destaque. A recriação do estilo do cliente deve ir na direção oposta: tipografia como protagonista e cards numerados no lugar de ícones.

TEMPLATE 2 — "Lawyer" (lawyerstemplate.webflow.io/home) — BRIX Templates

HERO: Proporção ~50/50, nome do advogado como "kicker" acima do título grande ("The #1 Lawyer in Los Angeles, CA"), foto de retrato profissional ocupando a segunda metade da seção, faixa de "Awards & Recognitions" (logos) logo abaixo do hero — reforça autoridade pessoal.
NAV: Menu horizontal fixo, CTA "Contact Me" destacado.
TIPOGRAFIA: Título hero grande (~3.5rem), uso de assinatura manuscrita (SVG) na seção "About", reforçando o caráter pessoal da marca — recurso interessante para um advogado autônomo como o cliente.
CORES: neutro claro + acento único, mesma lógica do Template 1.
SERVIÇOS/CARDS: Grid de 6 colunas com ícone, título e texto curto — mesmo padrão "ícone+título+texto" do Template 1, também a ser evitado.
ANIMAÇÕES (padrão típico): faixa de "Awards" com fade-in sequencial dos logos; cards de prática com fade+translate em scroll, stagger por card.
MICRO-INTERAÇÕES: hover simples em cards e botões (mudança de cor de fundo).
ELEMENTOS DECORATIVOS: uso de assinatura manuscrita como elemento humano/pessoal — vale adaptar (assinatura do Dr. Thiago, se disponível) na seção Sobre.
RESUMO CONSTRUTIVO: Este template acerta ao construir uma marca pessoal em torno do próprio advogado (retrato grande, assinatura, "About [Nome]") — algo pertinente ao caso do cliente, que atua individualmente. A recriação deve aproveitar esse racional de "marca pessoal", mas substituir o grid de ícones pela numeração grande e o hero fotográfico pelo hero tipográfico definido no Layout Escolhido, preservando o toque humano por meio da foto pequena "floating" e de uma citação pessoal na seção de destaque.

Observação: ambos os templates seguem o padrão internacional "corporativo neutro" (grid de ícones, hero fotográfico, paleta neutra), reforçando a decisão de diferenciação já indicada pela base de conhecimento AG5: escapar do grid de ícones, do hero fotográfico convencional e das combinações navy+dourado+serifada repetidas nos demais escritórios de advocacia da região.

7 — SISTEMA DE VARIAÇÃO DE LAYOUT

Código de combinação registrado: HERO-C · SERV-F · DEPO-B · SOBRE-A

HERO: ☑ C) Editorial — tipografia 8–12vw dominando 70% da tela, imagem pequena floating (recorte de foto real do escritório)
SERVIÇOS: ☑ F) Numeração grande (01, 02, 03...) como elemento visual
DEPOIMENTOS: ☑ B) Frase poderosa fullscreen (estilo editorial) — substituindo depoimentos inexistentes por citação de autoridade real do cliente
SOBRE/CREDENCIAIS: ☑ A) Counters animados + texto curto

Essas escolhas já estão refletidas no COMANDO PARA CRIAÇÃO DO SITE no início desta resposta.
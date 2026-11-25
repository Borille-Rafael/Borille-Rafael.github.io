# SPEC.md — Site pessoal de portfólio (GitHub Pages)

**Versão:** 1.0 · **Status:** aprovado para implementação · **Dono:** estudante de Administração
**Última atualização:** 2026-10-29

---

## 1. Visão geral

### 1.1 Objetivo
Publicar um site pessoal estático que funcione como **portfólio de projetos acadêmicos e extracurriculares** de um estudante de Administração, com o objetivo de conseguir estágio ou primeira oportunidade na área.

### 1.2 Público
| Persona | O que ela quer em 90 segundos | O que precisa encontrar |
|---|---|---|
| Recrutador de estágio | Confirmar curso, semestre e se o candidato "sabe fazer" | Nome, curso, projetos com resultado, CV em PDF |
| Gestor da área (dono do processo) | Ver raciocínio analítico e domínio de ferramentas | Case com problema → método → resultado, artefatos reais |
| Professor / colega | Reaproveitar material e referenciar | Links de PDF, planilha, repositório |

### 1.3 Proposta de valor
> "Estudante de Administração que transforma problema de negócio em análise documentada — não em slide bonito."

O site prova isso mostrando **artefatos**, não adjetivos.

### 1.4 Métricas de sucesso
- Visita → abertura de projeto: **≥ 40%**
- Visita → download de CV: **≥ 8%**
- Tempo até entender o perfil: **< 30 s** (hero + 3 cards acima da dobra em desktop)
- Lighthouse mobile: **≥ 95** nas quatro categorias

### 1.5 Fora de escopo (v1)
Blog, login, área restrita, formulário com backend, CMS, i18n, comentários, analytics com cookie, e-commerce, dark mode automático (fase 3).

---

## 2. Conceito de design

**Direção:** *caderno de gestão* — editorial, sóbrio, com calor humano. Papel off-white, tipografia serifada nos títulos, muito espaço em branco e hierarquia clara. A referência mental não é "site de dev", é **relatório bem diagramado**: credibilidade acadêmica com acabamento de revista.

**Personalidade:** confiável, organizado, direto. Nada de gradiente neon, glassmorphism, ilustração 3D ou avatar cartoon.

**Princípios**
1. Conteúdo antes de ornamento — cada elemento visual justifica sua existência.
2. Uma cor de destaque, usada com parcimônia (links, foco, métricas).
3. Ritmo vertical generoso: seções respiram, nada compete com o texto.
4. Prova > promessa: números, datas, artefatos clicáveis.

### 2.1 Paleta

| Token | Hex | Uso |
|---|---|---|
| `--paper` | `#FAF7F2` | Fundo da página |
| `--surface` | `#FFFFFF` | Cards, dialog |
| `--surface-alt` | `#F1ECE2` | Chips, faixas alternadas |
| `--ink` | `#11161C` | Texto principal (16.1:1 sobre paper) |
| `--ink-muted` | `#5C6670` | Texto secundário (5.3:1 sobre paper) |
| `--primary` | `#16324A` | Títulos, header, botão primário |
| `--primary-soft` | `#DCE6EC` | Fundos de destaque suaves |
| `--accent-600` | `#9C4E22` | **Texto pequeno** de destaque, links (5.3:1) |
| `--accent-500` | `#C2703D` | Preenchimentos, sublinhados, ícones (não usar em texto < 18.66px) |
| `--line` | `#E4DED4` | Bordas e divisores |
| `--focus` | `#0B5FFF` | Anel de foco (3:1 sobre paper e surface) |

Regra: `--accent-500` é decorativo; qualquer texto em destaque usa `--accent-600`.

### 2.2 Tipografia

| Papel | Fonte | Peso | Fallback |
|---|---|---|---|
| Display (h1–h3, números de métrica) | **Fraunces** (self-hosted, subset latin, `.woff2`) | 600 | `Georgia, "Times New Roman", serif` |
| Corpo e UI | Stack do sistema | 400 / 600 | `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| Rótulos, tags, datas | Stack monoespaçada | 500 | `ui-monospace, "Cascadia Code", Consolas, monospace` |

Escala fluida (mobile → desktop), com `clamp()`:

| Token | Valor |
|---|---|
| `--fs-xs` | `12px` |
| `--fs-sm` | `14px` |
| `--fs-base` | `16px` |
| `--fs-md` | `clamp(17px, 1.6vw, 18px)` |
| `--fs-lg` | `clamp(20px, 2.4vw, 24px)` |
| `--fs-xl` | `clamp(26px, 3.6vw, 34px)` |
| `--fs-2xl` | `clamp(32px, 5vw, 48px)` |
| `--fs-hero` | `clamp(38px, 7vw, 68px)` |

Entrelinha: 1.6 no corpo, 1.1–1.2 nos títulos. Largura de leitura máxima: **68ch**.

### 2.3 Grid e espaçamento
- Container: `max-width: 1120px`, padding lateral `clamp(20px, 5vw, 40px)`.
- Grid de 12 colunas com `gap: 24px`; cards de projeto: 1 col (<640px), 2 col (640–1023px), 3 col (≥1024px).
- Escala de espaço (base 4): `4 8 12 16 24 32 48 64 96 128`.
- Raio: `--radius-sm: 6px`, `--radius-md: 12px`, `--radius-lg: 20px`, `--radius-pill: 999px`.
- Sombra única: `0 1px 2px rgba(17,22,28,.06), 0 8px 24px rgba(17,22,28,.06)` (só em hover/dialog).
- Breakpoints: `480 / 640 / 768 / 1024 / 1280`.

### 2.4 Movimento
- Duração `160ms` (micro) e `240ms` (entrada de dialog), easing `cubic-bezier(.2,.7,.3,1)`.
- Reveal on scroll **opcional** e sutil (opacidade + 8px), uma vez por elemento.
- `prefers-reduced-motion: reduce` → sem transform, sem reveal, apenas mudança de estado instantânea.

### 2.5 Imagens
- Capas de projeto: 16:9, WebP, 1200×675 (máx. 150 KB), `alt` descritivo.
- Foto de perfil: 1:1, WebP, 640×640, tratamento duotone sutil (`--primary` sobre paper) para unificar.
- Open Graph: `assets/img/og-image.png`, 1200×630, fundo preto, nome + áreas de atuação.

---

## 3. Arquitetura de informação

```
/                      Home (single page)
├── #inicio            Hero
├── #sobre             Sobre + formação + trajetória
├── #projetos          Grade filtrável de projetos
│   └── #projeto/<slug>  Dialog de detalhe (deep link por hash)
├── #competencias      Ferramentas, métodos, idiomas
├── #contato           Canais diretos
└── /404.html          Erro
```

Navegação: header sticky com retrato à esquerda, âncoras ao centro (desktop) e botão de menu (mobile). CTA para contato no header a partir de 768px. O CV será incluído quando Rafael fornecer a versão final.

Fluxo principal: **Hero → 3 projetos em destaque → abrir um case → contato**. Tudo alcançável em até 3 cliques.

---

## 4. Especificação das seções

### 4.1 Header
```
┌──────────────────────────────────────────────────────────┐
│  [RFS]        Sobre  Projetos  Competências  Contato  [CV]│
└──────────────────────────────────────────────────────────┘
```
- Altura 64px (mobile) / 72px (desktop); fundo `paper` com `backdrop-filter: blur(8px)` e borda inferior `--line` ao rolar.
- Monograma: iniciais em Fraunces 600, 20px, `--primary`.
- Item ativo da âncora marcado com sublinhado `--accent-500` de 2px (não só por cor: incluir `aria-current="true"`).
- Mobile: menu vira painel `dialog`/`details` em tela cheia, com fechamento por `Esc` e foco preso.
- Skip link "Pular para o conteúdo" visível ao receber foco.

### 4.2 Hero
```
┌──────────────────────────────────────────────────────────┐
│  [etiqueta] Estudante de Administração · 6º semestre      │
│                                                           │
│  Nome                     ┌───────────────────────────┐   │
│  Sobrenome                │   foto 1:1 duotone        │   │
│  (Fraunces, 68px)         │                           │   │
│                           └───────────────────────────┘   │
│  Uma frase de posicionamento, até 120 caracteres.         │
│                                                           │
│  [ Ver projetos ]  [ Entrar em contato ]                  │
│                                                           │
│  06 projetos · 03 áreas · 02 certificações                │
└──────────────────────────────────────────────────────────┘
```
- H1 = nome completo. Máximo 2 linhas em desktop.
- Etiqueta superior: curso + semestre + cidade (sem endereço).
- Frase de posicionamento: o que faz + para quem, sem clichê.
- Estatísticas: números reais e verificáveis; se não houver, ocultar o bloco (não inventar).
- Layout: 2 colunas ≥ 900px (texto 7/12, foto 5/12); empilhado abaixo.

### 4.3 Sobre + trajetória
- Bio de 400–700 caracteres em 1–2 parágrafos, largura 68ch.
- Linha do tempo vertical com 3–6 entradas: `ano/semestre` · `título` · `instituição/empresa` · 1 linha de descrição. Marcos: ingresso no curso, monitoria/estágio, intercâmbio, projeto de extensão, certificação.
- Renderizada como `<ol>` com `<time datetime="...">`.

### 4.4 Projetos
```
 Áreas: [Todos] [Estratégia] [Finanças] [Processos] [Marketing] [Dados]

 ┌───────────────┐ ┌───────────────┐ ┌───────────────┐
 │ [capa 16:9]   │ │ [capa 16:9]   │ │ [capa 16:9]   │
 │ PROCESSOS     │ │ FINANÇAS      │ │ ESTRATÉGIA    │
 │ Título        │ │ Título        │ │ Título        │
 │ resumo 2      │ │ resumo 2      │ │ resumo 2      │
 │ linhas…       │ │ linhas…       │ │ linhas…       │
 │ BPMN · 2026.1 │ │ Excel · 2025.2│ │ Canvas·2025.1 │
 └───────────────┘ └───────────────┘ └───────────────┘
```
- **Filtro por área**: chips com `aria-pressed`; estado vazio com mensagem. "Todos" é o padrão.
- Card inteiro clicável (`<a>` com `href="#projeto/<slug>"`), mas o link de artefato dentro do card não dispara o dialog.
- Card mostra: capa, área (rótulo mono uppercase), título (h3), resumo (máx. 2 linhas, `-webkit-line-clamp: 2`), tags (máx. 3), ano/semestre.
- Hover: elevação + capa com `scale(1.02)`; foco: anel `--focus`.
- Projetos em destaque (`destaque: true`) aparecem primeiro.
- **Ordem**: destaque → ano desc → título.

**Dialog de detalhe** (`#projeto/<slug>`):
```
┌──────────────────────────────────────────────┐
│ PROCESSOS · 2026.1                       [X] │
│ Título do projeto                            │
│ ┌──────────────────────────────────────────┐ │
│ │ capa 16:9                                │ │
│ └──────────────────────────────────────────┘ │
│ Contexto      (1 parágrafo)                  │
│ Desafio       (1 parágrafo)                  │
│ Abordagem     (lista numerada 3–5 passos)    │
│ Resultado     (1 parágrafo)                  │
│ [ -30% ] tempo de ciclo   [ 12 ] entrevistas │
│ Ferramentas: Bizagi, Excel, Notion           │
│ → Relatório (PDF)  → Planilha  → Repositório │
└──────────────────────────────────────────────┘
```
- `<dialog>` nativo, largura máx. 720px, scroll interno, fecha com `Esc` / botão / clique no backdrop.
- Abrir/fechar atualiza o hash (`history.pushState`) e o `document.title`.
- Foco vai para o `<h2>` do dialog ao abrir e retorna ao card de origem ao fechar.

### 4.5 Competências
Três colunas (empilhadas no mobile):
- **Ferramentas:** Excel avançado, Power BI, Google Sheets, Notion, Bizagi, Canva.
- **Métodos:** BPMN, Canvas, SWOT, 5W2H, análise de viabilidade, pesquisa de mercado, gestão de processos.
- **Idiomas e soft skills:** Português (nativo), Inglês (nível real, sem exagero), comunicação escrita, organização.

Cada item com nível apenas se for honesto; caso contrário, listar sem barra de progresso (barras genéricas de "95%" são proibidas).

### 4.6 Contato
- Chamada curta + e-mail em `mailto:` ofuscado contra scrapers simples (`data-user`/`data-domain` montados em JS, com fallback textual).
- Links: LinkedIn, GitHub, Lattes (se houver), WhatsApp **somente** se for número comercial.
- Botão secundário para redes/canais de contato; adicionar "Baixar CV" quando a versão final estiver disponível.
- Sem formulário na v1 (sem backend; Formspree é fase 3 se houver demanda).

### 4.7 Footer
- Nome, ano corrente via JS (`<span data-ano>`), "Feito com HTML e CSS", link para o repositório, âncora "Voltar ao topo".
- `404.html` reaproveita header/footer e oferece retorno à home.

---

## 5. Requisitos funcionais

| ID | Requisito | Prioridade |
|---|---|---|
| FR-01 | Site publicado no GitHub Pages, acessível por HTTPS | Must |
| FR-02 | Home com âncoras navegáveis e header sticky | Must |
| FR-03 | Grade de projetos renderizada a partir de `assets/js/projetos.js` | Must |
| FR-04 | Filtro por área com estado acessível (`aria-pressed`) | Must |
| FR-05 | Dialog de detalhe com deep link `#projeto/<slug>` | Must |
| FR-06 | Link para contato a partir do hero | Must |
| FR-06a | Download do CV em PDF após fornecimento da versão final | Could (pendente) |
| FR-07 | Links de artefatos abrindo em nova aba | Must |
| FR-08 | E-mail montado em JS com fallback legível | Should |
| FR-09 | Menu mobile em tela cheia com foco preso | Must |
| FR-10 | `<noscript>` listando projetos e contatos | Must |
| FR-11 | `404.html` com retorno à home | Should |
| FR-12 | Alternância claro/escuro persistida em `localStorage` | Could (fase 3) |
| FR-13 | Páginas de case dedicadas para 3 projetos principais | Could (fase 3) |
| FR-14 | `sitemap.xml`, `robots.txt`, Open Graph e JSON-LD `Person` | Should |

---

## 6. Modelo de conteúdo

Fonte única: `assets/js/projetos.js` exporta `projetos` (array) e `perfil` (objeto).

```js
export const perfil = {
  nome: "Nome Sobrenome",
  curso: "Administração",
  semestre: "6º semestre",
  cidade: "Cidade, UF",
  posicionamento: "Transformo problema de negócio em análise documentada.",
  email: { usuario: "contato", dominio: "exemplo.com" },
  links: {
    linkedin: "https://www.linkedin.com/in/usuario",
    github: "https://github.com/usuario",
    curriculo: "docs/curriculo.pdf" // incluir somente após receber a versão final
  }
};

export const projetos = [
  {
    slug: "mapeamento-processos-bpmn",     // kebab-case, único, usado no hash e nos arquivos
    titulo: "Redesenho do processo de compras",
    area: "Processos",                      // Estratégia | Finanças | Processos | Marketing | Dados
    ano: 2026,
    semestre: "2026.1",
    resumo: "Até 140 caracteres, sem ponto final duplicado.",
    destaque: true,
    capa: "assets/img/projetos/mapeamento-processos-bpmn.webp",
    capaAlt: "Diagrama BPMN do processo de compras antes e depois",
    tags: ["BPMN", "Bizagi", "Melhoria contínua"],   // máx. 3
    contexto: "240–480 caracteres.",
    desafio: "240–480 caracteres.",
    abordagem: ["Passo 1…", "Passo 2…", "Passo 3…"], // 3–5 itens
    resultado: "240–480 caracteres.",
    metricas: [{ valor: "-30%", rotulo: "tempo de ciclo" }], // 0–3 itens
    ferramentas: ["Bizagi", "Excel"],
    links: [
      { rotulo: "Relatório completo", url: "docs/projetos/mapeamento-processos-bpmn/relatorio.pdf", tipo: "pdf" }
    ]
  }
];
```

**Validações obrigatórias na revisão**
- `slug` único, `[a-z0-9-]+`, igual ao nome dos arquivos de capa e pasta de artefatos.
- `resumo` ≤ 140 caracteres; `tags` 1–3; `abordagem` 3–5; `metricas` 0–3; `links` ≥ 1.
- `area` pertence ao enum; `ano` entre 2020 e o ano corrente.
- Toda `capa` existe no repositório e é `.webp` ≤ 150 KB.
- Nenhum campo com texto placeholder em produção.

---

## 7. Requisitos não funcionais

| Categoria | Requisito |
|---|---|
| Acessibilidade | WCAG 2.2 nível AA; contraste 4.5:1; foco visível; alvos de toque ≥ 44×44px; `lang="pt-BR"`; landmarks; leitor de tela testado em NVDA ou VoiceOver |
| Performance | LCP < 2,0 s em 4G; CLS < 0,05; peso total da home ≤ 250 KB; JS ≤ 20 KB não comprimido; sem dependências de terceiros |
| SEO | `<title>` e `meta description` únicos; Open Graph; JSON-LD `Person` + `sameAs`; `sitemap.xml`; URLs com hash não indexáveis (canônico na home) |
| Responsivo | 320px a 2560px, sem scroll horizontal; imagens com `srcset` quando necessário |
| Compatibilidade | Chrome/Edge 110+, Firefox 110+, Safari iOS 16+ (últimas 2 versões) |
| Privacidade | Zero cookies de terceiros, zero trackers; analytics somente se privacy-first e opt-in (fase 3) |
| Manutenção | Adicionar projeto = 1 objeto + 2 arquivos, sem tocar em HTML/CSS |

---

## 8. Publicação (GitHub Pages)

**Pré-requisitos:** Git instalado (`winget install Git.Git`) e conta no GitHub.

1. `git init` na raiz, primeiro commit com `AGENTS.md`, `SPEC.md` e `.gitignore`.
2. Criar repositório **`Borille-Rafael.github.io`** (site na raiz) — ou repositório de projeto com Pages em `main / (root)`.
3. `git remote add origin https://github.com/Borille-Rafael/Borille-Rafael.github.io.git` e `git push -u origin main`.
4. Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)` → Save.
5. Aguardar o build e validar `https://borille-rafael.github.io` (HTTPS forçado).
6. Adicionar `.nojekyll` na raiz (evita processamento Jekyll).
7. Conferir: 404, fontes, imagens, links de PDF e Open Graph (via validador do LinkedIn/Facebook).
8. Domínio próprio é opcional: criar `CNAME` com o domínio e configurar DNS (`A` para 185.199.108–111.153, `CNAME www → borille-rafael.github.io`).

**Cache:** como não há build, o GitHub Pages aplica cache curto. Para forçar atualização de CSS/JS após mudança visual, versionar a query string (`style.css?v=2`).

---

## 9. Estrutura de arquivos

Ver mapa completo em [`AGENTS.md`](./AGENTS.md#3-mapa-de-arquivos). Resumo:

```
index.html · 404.html · robots.txt · sitemap.xml · .nojekyll
assets/{css,js,fonts,img}/ · docs/{curriculo.pdf,projetos/}
```

---

## 10. Roadmap

| Fase | Entrega | Critério de saída |
|---|---|---|
| 0 — Base | Repositório, `.nojekyll`, tokens, fontes, favicon, monograma | Preview local abre sem erro |
| 1 — Fundação | Header, hero, sobre/trajetória, competências, contato, footer, responsivo | Home navegável com conteúdo real do dono |
| 2 — Projetos | `projetos.js`, grade, filtros, dialog, deep link, `<noscript>` | 6 projetos com artefato e métrica revisada |
| 3 — Polimento | SEO/OG/JSON-LD, sitemap, 404, dark mode, 3 case pages, otimização de imagens | Lighthouse ≥ 95 e AA verificado |
| 4 — Publicação | Pages ativo, HTTPS, CV atualizado, divulgação no LinkedIn | URL pública validada em 3 dispositivos |

---

## 11. Critérios de aceite do lançamento

- [ ] Hero responde "quem é", "o que faz", "como contatar" sem rolar a página no desktop
- [ ] 6 projetos publicados, cada um com contexto, desafio, abordagem, resultado e ≥ 1 artefato
- [ ] Nenhum `[PREENCHER]` no conteúdo publicado
- [ ] Filtros funcionam por teclado e o estado vazio é claro
- [ ] Dialog abre por hash direto (colar `#projeto/<slug>` no navegador funciona)
- [ ] Se houver CV publicado, conferir que abre e baixa corretamente no mobile
- [ ] Lighthouse mobile ≥ 95 / AA validado / sem scroll horizontal em 320px
- [ ] `robots.txt`, `sitemap.xml`, OG image e JSON-LD válidos
- [ ] 404 personalizado e funcional
- [ ] Revisão ortográfica pt-BR concluída por outra pessoa

---

## 12. Decisões abertas e placeholders

| # | Pendência | Impacto | Dono |
|---|---|---|---|
| 1 | Nome, cidade, semestre e e-mail reais | Bloqueia hero e contato | Dono do site |
| 2 | Foto de perfil em alta resolução | Bloqueia hero | Dono do site |
| 3 | Lista final de 6 projetos + artefatos (PDF/planilha) | Bloqueia fase 2 | Dono do site |
| 4 | CV em PDF atualizado | CTA será incluído quando o arquivo final estiver disponível | Dono do site |
| 5 | Nível real de inglês | Conteúdo de competências | Dono do site |
| 6 | Domínio próprio (`nome.com.br`)? | CNAME + DNS | Fase 4 |
| 7 | Dark mode e case pages entram na v1? | Escopo fase 3 | A definir |

**Marcador padrão:** qualquer informação ausente é escrita como `[PREENCHER: o que falta]` e não pode ir para produção.

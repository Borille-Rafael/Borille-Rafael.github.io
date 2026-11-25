# AGENTS.md

Instruções para agentes de IA (e para humanos) que trabalham neste repositório.

> **Fonte da verdade do produto:** [`SPEC.md`](./SPEC.md). Se este arquivo e o `SPEC.md` divergirem, o `SPEC.md` vence — e a divergência deve ser corrigida aqui na mesma tarefa.

---

## 1. O que é este repositório

Site pessoal estático publicado no **GitHub Pages**, usado como portfólio de projetos de um estudante de **Administração**. Não é um produto SaaS, não tem backend e não tem build step.

Consequências diretas:

- O site é **HTML + CSS + JavaScript puro**, servido como está no repositório.
- Qualquer coisa que exija `npm install`, bundler, framework ou servidor é **fora de escopo**.
- Conteúdo é o ativo principal. Design existe para o recrutador/avaliador ler o projeto em menos de 2 minutos.

## 2. Stack permitida e proibida

| Permitido | Proibido |
|---|---|
| HTML5 semântico | React, Vue, Svelte, Angular, Astro, Next, qualquer framework |
| CSS moderno com custom properties | Tailwind, Bootstrap, Sass/Less com build, CSS-in-JS |
| JavaScript ES2020+ em módulos (`type="module"`) | jQuery, bibliotecas de animação, bundlers, TypeScript com compilação |
| `<dialog>`, `fetch`, `IntersectionObserver` nativos | Dependências via CDN para lógica de UI |
| Fontes self-hosted em `assets/fonts/` | Google Fonts via `<link>` em produção |
| `python -m http.server` para preview local | Qualquer gerador de site estático |

**Regra de ouro:** se a tarefa parece exigir uma dependência nova, ela provavelmente deve ser resolvida com HTML/CSS/JS nativo ou virou uma mudança de escopo que precisa de aprovação.

## 3. Mapa de arquivos

```
/
├── AGENTS.md               # este arquivo
├── SPEC.md                 # especificação do produto
├── CONTEUDO.md             # formulário de conteúdo (rascunho, não publicar)
├── index.html              # página única: hero, sobre, projetos, skills, contato
├── 404.html                # página de erro do GitHub Pages
├── robots.txt
├── sitemap.xml
├── .nojekyll               # impede o Jekyll de processar o site
├── assets/
│   ├── css/
│   │   ├── tokens.css      # variáveis de design (cores, tipos, espaçamento)
│   │   └── style.css       # layout e componentes
│   ├── js/
│   │   ├── projetos.js     # dados dos projetos (fonte única de conteúdo)
│   │   ├── app.js          # render, filtros, dialog, navegação
│   │   └── tema.js         # alternância claro/escuro (fase 3)
│   ├── fonts/              # .woff2 self-hosted
│   └── img/
│       ├── perfil.webp
│       ├── og-image.png    # 1200x630
│       └── projetos/       # capas 16:9, .webp
└── docs/
    ├── curriculo.pdf       # adicionar quando a versão final for fornecida
    └── projetos/           # PDFs, planilhas e artefatos linkados nos cards
```

Não crie diretórios novos sem registrar a mudança no `SPEC.md` (seção 9).

## 4. Convenções de código

### CSS
- Mobile-first: estilos base para 320px, `@media (min-width: ...)` para crescer.
- Tokens em `tokens.css`; **nenhum valor de cor, fonte ou espaçamento hardcoded** em `style.css`.
- Classes semânticas em `kebab-case` com prefixo por bloco: `.card-projeto`, `.card-projeto__titulo`, `.card-projeto--destaque` (BEM simplificado).
- Zero `!important`. Zero estilos inline, exceto custom properties calculadas em JS (`element.style.setProperty`).
- Ordem das declarações: layout → box model → tipografia → cor → efeitos.
- Respeite `prefers-reduced-motion` em toda animação.

### JavaScript
- ES modules, sem variáveis globais; exponha apenas o necessário.
- Progressive enhancement: **hero, sobre e contato devem funcionar com JS desligado**. A grade de projetos pode depender de JS, desde que exista `<noscript>` com a lista de projetos em links.
- Nada de `innerHTML` com dados que venham de fora do repositório. Para conteúdo próprio, use template literals; para input do usuário, `textContent`.
- Toda string visível ao usuário fica em pt-BR e passa por `escapeHtml` quando interpolada.
- Sem `console.log` no código final.

### HTML
- Um `<h1>` por página; hierarquia de headings sem pular níveis.
- `<section>` com `aria-labelledby` apontando para o heading da seção.
- Imagens sempre com `alt` (descritivo ou `alt=""` se decorativa), `width`, `height` e `loading="lazy"` fora da dobra.
- Links externos: `target="_blank" rel="noopener noreferrer"`.
- Idioma do documento: `lang="pt-BR"`.

## 5. Conteúdo: regras inegociáveis

1. **Nunca invente dados.** Métricas, resultados, nomes de empresas, notas e certificações só entram se o dono do site fornecer. Onde faltar informação, escreva o marcador literal `[PREENCHER: descrição do que falta]`.
2. **Nunca publique informação sensível:** CPF, matrícula, endereço residencial, telefone pessoal, e-mail institucional privado, dados de colegas ou de empresas sem autorização.
3. Tom: primeira pessoa, sóbrio, específico, sem adjetivos inflados ("apaixonado", "gênio", "disruptivo" são proibidos). Prefira verbo + resultado.
4. Limites de tamanho (validados na revisão):
   - `resumo` do projeto: até 140 caracteres
   - `desafio` / `resultado`: 240–480 caracteres cada
   - bio do "Sobre": 400–700 caracteres
   - título de seção: até 40 caracteres
5. Todo projeto precisa de pelo menos **um artefato verificável** (PDF, planilha, repositório, apresentação). Projeto sem artefato não entra na grade.
6. Ortografia pt-BR revisada antes de publicar (acentuação e crase incluídas).

## 6. Acessibilidade e performance (bloqueantes)

Uma tarefa só é considerada concluída se:

- Contraste mínimo **4.5:1** para texto normal e **3:1** para texto grande/ícones. A cor de destaque `--accent-600` é a única aprovada para texto pequeno; `--accent-500` só para preenchimentos e elementos decorativos.
- Navegação completa por teclado, com foco visível (`:focus-visible`) em todos os interativos.
- `dialog` fecha com `Esc` e devolve o foco ao elemento que o abriu.
- Página total (HTML + CSS + JS + fontes + imagens da dobra) **≤ 250 KB**; nenhuma imagem individual acima de 150 KB.
- Lighthouse mobile ≥ 95 em Performance, Acessibilidade, Boas Práticas e SEO.
- Sem dependências de terceiros que carreguem scripts (privacidade: nada de analytics com cookie, pixel ou chat).

## 7. Fluxo de trabalho

1. Leia `SPEC.md` na seção relevante antes de editar.
2. Crie branch: `feat/<slug>`, `fix/<slug>`, `content/<slug>` ou `docs/<slug>`.
3. Commits em **Conventional Commits**, em português, imperativo e curto:
   - `feat: adiciona filtro por área na grade de projetos`
   - `content: publica case de mapeamento de processos`
   - `fix: corrige foco do dialog no Safari`
   - `docs: atualiza SPEC com modelo de conteúdo`
4. Mudanças de escopo, de design token ou de estrutura de arquivos exigem atualização do `SPEC.md` no mesmo commit/PR.
5. Antes de abrir PR: preview local em `python -m http.server 8000`, teste em 320px / 768px / 1440px, teclado apenas, e Lighthouse.
6. PR descreve: o que mudou, por que, como validar, e o que ficou de fora.

### Definition of Done
- [ ] Funciona em 320px, 768px e 1440px
- [ ] Teclado e leitor de tela sem bloqueios
- [ ] Sem erros no console
- [ ] Orçamento de peso e Lighthouse dentro do alvo
- [ ] Conteúdo sem `[PREENCHER]` esquecido (quando for release)
- [ ] `SPEC.md` atualizado, se o escopo mudou

## 8. Como adicionar um projeto ao portfólio

1. Colete: título, área, ano/semestre, resumo (≤140), contexto, desafio, abordagem em 3–5 passos, resultado, ferramentas, 1–3 links de artefato, 1 métrica (opcional).
2. Salve o artefato em `docs/projetos/<slug>/` e a capa em `assets/img/projetos/<slug>.webp` (16:9, ≤150 KB).
3. Adicione o objeto no array de `assets/js/projetos.js` seguindo o schema do `SPEC.md` (seção 6).
4. Rode o preview, confira o card, o dialog, o link do artefato e o compartilhamento por hash (`#projeto/<slug>`).
5. Atualize a contagem de projetos no hero, se ela for exibida.
6. Commit `content: adiciona projeto <título>`.

## 9. Autonomia do agente

**Pode fazer sem perguntar:** refatorar CSS/JS dentro das convenções, corrigir acessibilidade, otimizar imagens, ajustar textos dentro dos limites, adicionar projeto com dados já fornecidos, atualizar documentação.

**Precisa perguntar antes:** adicionar qualquer dependência, mudar a paleta ou tipografia, alterar a arquitetura de informação, criar página nova, publicar conteúdo com dados não fornecidos, mexer em `CNAME`/domínio, apagar arquivos de `docs/`.

**Nunca:** commitar segredos ou tokens, reescrever histórico, forçar push em `main`, instalar plugins de terceiros no site, alterar o `AGENTS.md` para afrouxar as próprias regras.

## 10. Ambiente

- Preview local: `python -m http.server 8000` na raiz do repositório.
- Git ainda não está instalado nesta máquina Windows — instalar antes do primeiro commit (`winget install Git.Git`).
- Fim de linha: preservar o do existente no arquivo; não reformatar arquivos inteiros em um PR de conteúdo.

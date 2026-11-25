// app.js — comportamento da página única
// Sem dependências. Tudo é progressivo: o conteúdo principal existe no HTML.
import { projetos } from './projetos.js';

const $ = (seletor, contexto = document) => contexto.querySelector(seletor);
const $$ = (seletor, contexto = document) => [...contexto.querySelectorAll(seletor)];

// 1. Ano corrente no rodapé -------------------------------------------------
$$('[data-ano]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

// 2. Borda do header ao rolar ----------------------------------------------
const header = $('[data-header]');

if (header) {
  const aoRolar = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  aoRolar();
  window.addEventListener('scroll', aoRolar, { passive: true });
}

// 3. Menu mobile ------------------------------------------------------------
const menu = $('#menu-mobile');
const abrirMenu = $('[data-menu-open]');

if (menu && abrirMenu && typeof menu.showModal === 'function') {
  abrirMenu.addEventListener('click', () => {
    menu.showModal();
    abrirMenu.setAttribute('aria-expanded', 'true');
  });

  const fecharMenu = () => {
    if (menu.open) menu.close();
  };

  $$('[data-menu-close]', menu).forEach((botao) => {
    botao.addEventListener('click', fecharMenu);
  });

  $$('a[href^="#"]', menu).forEach((link) => {
    link.addEventListener('click', fecharMenu);
  });

  menu.addEventListener('close', () => {
    abrirMenu.setAttribute('aria-expanded', 'false');
  });
}

// 4. E-mail montado em tempo de execução ------------------------------------
$$('[data-email]').forEach((el) => {
  const { user, domain } = el.dataset;
  if (!user || !domain) return;

  const endereco = `${user}@${domain}`;
  el.textContent = endereco;
  el.href = `mailto:${endereco}?subject=Contato%20pelo%20site`;
});

// 5. Seção ativa no menu ----------------------------------------------------
const linksNav = $$('.nav__list a[href^="#"]');
const secoes = linksNav
  .map((link) => $(link.getAttribute('href')))
  .filter(Boolean);

if (secoes.length && 'IntersectionObserver' in window) {
  const observadorSecao = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;

        linksNav.forEach((link) => {
          if (link.getAttribute('href') === `#${entrada.target.id}`) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  secoes.forEach((secao) => observadorSecao.observe(secao));
}

// 6. Renderização dos projetos ----------------------------------------------
const grade = $('[data-cards]');

const criarElemento = (tag, classe, texto) => {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
};

if (grade) {
  const ordenados = [...projetos].sort(
    (a, b) => Number(b.destaque) - Number(a.destaque) || b.ano - a.ano
  );

  ordenados.forEach((projeto) => {
    const item = document.createElement('li');
    const artigo = criarElemento('article', 'card-projeto');
    artigo.dataset.area = projeto.area;

    artigo.append(criarElemento('div', 'card-projeto__capa', `${projeto.area} · projeto acadêmico`));

    const corpo = criarElemento('div', 'card-projeto__corpo');
    corpo.append(
      criarElemento('p', 'card-projeto__area', projeto.area),
      criarElemento('h3', '', projeto.titulo),
      criarElemento('p', 'card-projeto__resumo', projeto.resumo),
      criarElemento('p', 'card-projeto__contexto', projeto.contexto)
    );

    if (projeto.metricas?.length) {
      const metricas = criarElemento('ul', 'card-projeto__metricas');
      metricas.setAttribute('aria-label', 'Indicadores da análise');
      projeto.metricas.forEach(({ valor, rotulo }) => {
        const itemMetrica = document.createElement('li');
        itemMetrica.append(
          criarElemento('strong', '', valor),
          document.createTextNode(` ${rotulo}`)
        );
        metricas.append(itemMetrica);
      });
      corpo.append(metricas);
    }

    const tags = criarElemento('div', 'card-projeto__meta');
    projeto.tags.slice(0, 3).forEach((tag) => tags.append(criarElemento('span', 'tag', tag)));
    corpo.append(tags);
    corpo.append(criarElemento('p', 'card-projeto__ano', String(projeto.ano)));

    const detalhes = document.createElement('details');
    detalhes.className = 'card-projeto__detalhes';
    detalhes.append(criarElemento('summary', '', 'Ver síntese completa'));
    detalhes.append(criarElemento('h4', '', 'Desafio'));
    detalhes.append(criarElemento('p', '', projeto.desafio));
    detalhes.append(criarElemento('h4', '', 'Abordagem'));
    const passos = document.createElement('ol');
    projeto.abordagem.forEach((passo) => passos.append(criarElemento('li', '', passo)));
    detalhes.append(passos);
    detalhes.append(criarElemento('h4', '', 'Resultado da análise'));
    detalhes.append(criarElemento('p', '', projeto.resultado));
    corpo.append(detalhes);

    const links = criarElemento('div', 'card-projeto__links');
    links.setAttribute('aria-label', 'Materiais do projeto');
    projeto.links.forEach((material) => {
      const link = criarElemento('a', '', material.rotulo);
      link.href = material.url;
      if (material.tipo === 'pdf') {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      } else {
        link.download = '';
      }
      links.append(link);
    });

    corpo.append(links);
    artigo.append(corpo);
    item.append(artigo);
    grade.append(item);
  });
}

// 7. Filtro por área --------------------------------------------------------
const botoesFiltro = $$('[data-filtro]');
const cards = $$('[data-cards] > li');
const estadoVazio = $('[data-filtro-vazio]');

if (botoesFiltro.length && cards.length) {
  botoesFiltro.forEach((botao) => {
    botao.addEventListener('click', () => {
      const filtro = botao.dataset.filtro;

      botoesFiltro.forEach((outro) => {
        outro.setAttribute('aria-pressed', String(outro === botao));
      });

      cards.forEach((card) => {
        const area = $('[data-area]', card)?.dataset.area;
        card.hidden = filtro !== 'todos' && area !== filtro;
      });

      if (estadoVazio) {
        estadoVazio.hidden = cards.some((card) => !card.hidden);
      }
    });
  });
}

// 8. Reveal suave ao entrar na viewport -------------------------------------
const alvosReveal = $$('.reveal');
const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (alvosReveal.length) {
  if (!reduzirMovimento && 'IntersectionObserver' in window) {
    const observadorReveal = new IntersectionObserver(
      (entradas, observador) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add('is-visible');
          observador.unobserve(entrada.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    alvosReveal.forEach((alvo) => observadorReveal.observe(alvo));
  } else {
    alvosReveal.forEach((alvo) => alvo.classList.add('is-visible'));
  }
}

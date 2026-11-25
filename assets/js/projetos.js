// Dados editoriais do portfólio. Não incluir resultados que não foram medidos.
export const projetos = [
  {
    slug: "analise-operacional-pizzaria",
    titulo: "Análise operacional e oportunidades de melhoria",
    area: "Processos",
    ano: 2026,
    resumo:
      "Análise de 21.350 pedidos e 49.574 pizzas para identificar padrões de demanda e orientar oportunidades de melhoria operacional.",
    contexto:
      "Projeto acadêmico da disciplina Aplicação Prática de Programação em Gestão. A partir da base consolidada de vendas da Pizzaria do Vitto, foram analisados a demanda por horário, a composição dos pedidos e indicadores descritivos, respeitando os limites dos registros disponíveis.",
    desafio:
      "Interpretar os registros sem confundir volume comercial com desempenho operacional. A análise precisava distinguir pedidos, pizzas e linhas de venda, identificar horários relevantes e descrever a composição das transações, deixando explícito que a base não continha medições de tempo, capacidade, erros ou desperdício.",
    abordagem: [
      "Consolidar indicadores de pedidos, pizzas vendidas e linhas de venda.",
      "Comparar médias de demanda e composição das transações por horário.",
      "Identificar padrões descritivos e períodos que merecem investigação.",
      "Propor checklist, organização pré-pico e ciclo PDCA como sugestões a testar — não como mudanças já implementadas.",
    ],
    resultado:
      "A base analisada reuniu 21.350 pedidos e 49.574 pizzas, com média de 2,32 pizzas por pedido. Os registros destacaram demanda às 12h–13h e 17h–19h; 61,59% dos pedidos tinham duas ou mais linhas. O trabalho organizou esses achados em prioridades de investigação e propostas de melhoria. Não foram medidos ganhos, erros ou mudanças após implementação.",
    destaque: true,
    tags: ["Análise de dados", "PDCA", "Gestão de processos"],
    ferramentas: ["Base consolidada de vendas"],
    metricas: [
      { valor: "21.350", rotulo: "pedidos analisados" },
      { valor: "49.574", rotulo: "pizzas registradas" },
      { valor: "61,59%", rotulo: "pedidos com 2+ linhas" },
    ],
    links: [
      {
        rotulo: "Ver apresentação (PDF)",
        url: "docs/projetos/analise-operacional-pizzaria/apresentacao-processos.pdf",
        tipo: "pdf",
      },
      {
        rotulo: "Baixar análise (DOCX)",
        url: "docs/projetos/analise-operacional-pizzaria/analise-processos.docx",
        tipo: "docx",
      },
    ],
  },
  {
    slug: "analise-financeira-pizzaria",
    titulo: "Análise financeira: receita, composição e evolução",
    area: "Finanças",
    ano: 2026,
    resumo:
      "Análise de R$ 4,09 milhões em vendas, com evolução da receita, tickets, composição de produtos e comparação de períodos equivalentes.",
    contexto:
      "Projeto acadêmico da disciplina Aplicação Prática de Programação em Gestão. A análise descreve a base de vendas da Pizzaria do Vitto entre 01/01/2025 e 03/08/2026, incluindo receita, pedidos, tickets, evolução mensal e composição por produtos.",
    desafio:
      "Descrever os indicadores financeiros disponíveis sem tratá-los como lucro ou rentabilidade. A base contém registros de vendas, mas não custos, despesas, tributos, investimentos ou perdas; além disso, agosto de 2026 tem cobertura parcial, exigindo comparação de períodos equivalentes e cautela na leitura da série mensal.",
    abordagem: [
      "Consolidar receita, pedidos, unidades vendidas e medidas de ticket.",
      "Descrever a evolução mensal e sinalizar que 2026 tem cobertura parcial até 03/08.",
      "Comparar os mesmos períodos de 2025 e 2026.",
      "Examinar composição por tamanho, categoria e sabor, além de uma classificação ABC aproximada por receita.",
    ],
    resultado:
      "No período analisado, foram registrados R$ 4.089.300,25 em receita, 21.350 pedidos e 49.574 pizzas; o ticket médio foi R$ 191,54 e o mediano, R$ 162,50. Na comparação de 01/01 a 03/08, a receita variou −6,99%, os pedidos −7,97%, as unidades −6,92% e o ticket +1,06%. A análise é descritiva: não calcula lucro, margem ou rentabilidade nem atribui causas às variações.",
    destaque: false,
    tags: ["Receita", "Análise de vendas", "Curva ABC"],
    ferramentas: ["Base consolidada de vendas"],
    metricas: [
      { valor: "R$ 4,09 mi", rotulo: "receita registrada" },
      { valor: "−6,99%", rotulo: "receita no período equivalente" },
      { valor: "+1,06%", rotulo: "ticket no período equivalente" },
    ],
    links: [
      {
        rotulo: "Ver apresentação (PDF)",
        url: "docs/projetos/analise-financeira-pizzaria/apresentacao-financeira.pdf",
        tipo: "pdf",
      },
      {
        rotulo: "Baixar análise (DOCX)",
        url: "docs/projetos/analise-financeira-pizzaria/analise-financeira.docx",
        tipo: "docx",
      },
    ],
  },
  {
    slug: "integracao-estrategica-pizzaria",
    titulo: "Estratégia: integração de processos, finanças e marketing",
    area: "Estratégia",
    ano: 2026,
    resumo:
      "Integra análises de vendas e operação em prioridades, plano de ação e indicadores propostos para acompanhamento gerencial.",
    contexto:
      "Etapa estratégica do projeto acadêmico Aplicação Prática de Programação em Gestão. Reúne evidências e limitações das etapas de Processos, Finanças e Marketing para propor prioridades de gestão para a Pizzaria do Vitto.",
    desafio:
      "Transformar análises anteriores em prioridades e ações acompanháveis sem atribuir causas não demonstradas às variações de vendas nem apresentar propostas como resultados já alcançados. A base não contém custos, dados de campanhas ou indicadores operacionais suficientes para avaliar lucro, rentabilidade ou execução das ações.",
    abordagem: [
      "Integrar os indicadores de vendas, demanda, composição dos pedidos e mix de produtos.",
      "Sintetizar forças, pontos a desenvolver, oportunidades e ameaças a validar em uma matriz SWOT/FOFA.",
      "Definir objetivos, prioridades e ações propostas para vendas, operação, combinações, comunicação e qualidade dos dados.",
      "Sugerir indicadores e um ciclo de registrar, analisar, testar, avaliar e ajustar.",
    ],
    resultado:
      "A síntese propôs prioridades de acompanhamento e um plano de ação com indicadores comerciais, operacionais, financeiros, de mix, marketing e qualidade dos dados. Na comparação de janeiro a julho apresentada nesta etapa, a receita variou −6,66%, os pedidos −7,50%, as unidades −6,57% e o ticket médio aumentou aproximadamente 0,91%. As ações ainda não foram implementadas; os dados não identificam causas nem comprovam resultados.",
    destaque: false,
    tags: ["Planejamento estratégico", "SWOT / FOFA", "Indicadores"],
    ferramentas: ["Análises de Processos, Finanças e Marketing"],
    metricas: [
      { valor: "−6,66%", rotulo: "receita · comparação jan–jul" },
      { valor: "−7,50%", rotulo: "pedidos · comparação jan–jul" },
      { valor: "+0,91%", rotulo: "ticket médio · comparação jan–jul" },
    ],
    links: [
      {
        rotulo: "Ver apresentação (PDF)",
        url: "docs/projetos/integracao-estrategica-pizzaria/apresentacao-estrategica.pdf",
        tipo: "pdf",
      },
      {
        rotulo: "Baixar análise (DOCX)",
        url: "docs/projetos/integracao-estrategica-pizzaria/analise-estrategica.docx",
        tipo: "docx",
      },
    ],
  },
  {
    slug: "analise-marketing-pizzaria",
    titulo: "Marketing: mix, pedidos e oportunidades",
    area: "Marketing",
    ano: 2026,
    resumo:
      "Analisa mix de vendas, composição dos pedidos e horários para formular hipóteses de comunicação e testes de marketing.",
    contexto:
      "Projeto acadêmico da disciplina Aplicação Prática de Programação em Gestão. A análise descritiva da base da Pizzaria do Vitto observa vendas, mix por categoria, tamanho e sabor, composição dos pedidos e janelas de demanda para orientar testes de comunicação e oferta.",
    desafio:
      "Identificar oportunidades de marketing sem atribuir preferências a clientes ou eficácia a campanhas. Os registros descrevem vendas e pedidos, mas não incluem perfil demográfico, canais, campanhas, custos ou margens; por isso, associações observadas devem orientar hipóteses, não conclusões causais.",
    abordagem: [
      "Descrever o mix de receita por categoria, tamanho e sabor.",
      "Comparar pedidos por número de linhas e os tickets médios observados em cada grupo.",
      "Identificar horários e dias como possíveis janelas para testes de comunicação.",
      "Propor testes de conteúdo, combinações e calendário, com indicadores para medir resultados atribuíveis.",
    ],
    resultado:
      "A análise identificou 32 sabores e quatro categorias; o tamanho G representou 45,89% da receita registrada. 61,59% dos pedidos tinham duas ou mais linhas, grupo associado a ticket médio maior na base, sem comprovar causalidade. Almoço e jantar foram apontados como janelas para testar comunicação. Não havia dados para confirmar canais, preferências individuais ou impacto promocional; as ações sugeridas ainda não foram executadas.",
    destaque: false,
    tags: ["Mix de produtos", "Dados de vendas", "Testes de comunicação"],
    ferramentas: ["Base consolidada de vendas"],
    metricas: [
      { valor: "32", rotulo: "sabores analisados" },
      { valor: "61,59%", rotulo: "pedidos com 2+ linhas" },
      { valor: "45,89%", rotulo: "receita do tamanho G" },
    ],
    links: [
      {
        rotulo: "Ver apresentação (PDF)",
        url: "docs/projetos/analise-marketing-pizzaria/apresentacao-marketing.pdf",
        tipo: "pdf",
      },
      {
        rotulo: "Baixar análise (DOCX)",
        url: "docs/projetos/analise-marketing-pizzaria/analise-marketing.docx",
        tipo: "docx",
      },
    ],
  },
  {
    slug: "painel-analise-vendas",
    titulo: "Painel de análise de vendas: indicadores, mix e pedidos",
    area: "Dados",
    ano: 2026,
    resumo:
      "Consolida vendas, evolução mensal, mix de produtos e composição dos pedidos em indicadores para apoiar a análise gerencial.",
    contexto:
      "Projeto acadêmico da disciplina Aplicação Prática de Programação em Gestão. Analisa a base de vendas da Pizzaria do Vitto entre 01/01/2025 e 03/08/2026, reunindo indicadores comerciais, evolução temporal, mix de produtos e estrutura dos pedidos.",
    desafio:
      "Organizar 48.620 linhas de venda em indicadores claros, distinguindo receita, pedidos, unidades e linhas por transação. A leitura também precisava sinalizar a cobertura parcial de agosto de 2026 e evitar conclusões que os dados não sustentam, como lucro, margem, desperdício, capacidade, tempo de preparo ou impacto de campanhas.",
    abordagem: [
      "Consolidar faturamento, pedidos, pizzas vendidas, ticket médio e portfólio.",
      "Descrever a evolução mensal de receita e pedidos, marcando agosto de 2026 como parcial.",
      "Analisar composição da receita por categoria, sabor e tamanho, incluindo classificação ABC por faturamento.",
      "Examinar pedidos por horário, dia da semana e número de linhas de venda.",
    ],
    resultado:
      "O painel consolidou R$ 4.089.300,25 em vendas, 21.350 pedidos, 49.574 pizzas e ticket médio de R$ 191,54. A base reúne 32 sabores em quatro categorias; 61,6% dos pedidos têm duas ou mais linhas. A análise organiza a evolução mensal, o mix e os padrões de pedidos para apoiar decisões. Agosto de 2026 é parcial; receita não representa lucro, e não foram calculados margem, desperdício ou capacidade produtiva.",
    destaque: false,
    tags: ["Indicadores comerciais", "Mix de produtos", "Análise de dados"],
    ferramentas: ["Base consolidada de vendas"],
    metricas: [
      { valor: "48.620", rotulo: "linhas de venda" },
      { valor: "32", rotulo: "sabores em 4 categorias" },
      { valor: "61,6%", rotulo: "pedidos com 2+ linhas" },
    ],
    links: [
      {
        rotulo: "Baixar análise de dados (DOCX)",
        url: "docs/projetos/painel-analise-vendas/analise-dados-vendas.docx",
        tipo: "docx",
      },
    ],
  },
];

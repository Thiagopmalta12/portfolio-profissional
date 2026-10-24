# Thiago Malta — Portfólio

Site pessoal responsivo em português, com HTML, CSS e JavaScript puros. Identidade editorial em verde sálvia, creme e verde profundo; demonstração interativa de indicadores; navegação por teclado; suporte a movimento reduzido; modal com tabela acessível; layout de impressão.

## Abrir
Abra `index.html` no navegador. Não é necessário instalar dependências ou executar um build. As fontes Google são opcionais: há fontes locais de fallback. O site funciona sem elas.

## Estrutura
- `index.html`: textos, seções, metadados e tabela de dados fictícios.
- `assets/style.css`: estilos e responsividade.
- `assets/app.js`: alternância de indicadores e modal.
- `assets/favicon.svg`: marca vetorial.
- `.github/workflows/pages.yml`: publicação no GitHub Pages.

## Publicar no GitHub
Repositório recomendado: `portfolio-profissional`, na conta `Thiagopmalta12`.
1. Crie o repositório (se já existir, revise seu conteúdo antes de alterar).
2. Envie os arquivos, preservando a pasta `.github`, para a branch `main`.
3. Em Settings → Pages → Build and deployment, selecione **GitHub Actions**.
4. Execute o workflow de publicação ou faça um novo push.

Após publicação bem-sucedida nesse repositório, a URL esperada é https://Thiagopmalta12.github.io/portfolio-profissional/ . Esta indicação não confirma que o site já esteja publicado.
O mesmo projeto funciona em um repositório com outro nome, pois os caminhos dos assets são relativos.

## Conteúdo
O perfil foi elaborado a partir do histórico profissional informado. A demonstração de BI contém dados fictícios, explicitamente identificados. Não há métricas internas, resultados empresariais confidenciais, depoimentos inventados ou links para projetos não verificados. Formação e vínculo profissional refletem informações disponíveis em outubro de 2026; atualize-os quando necessário.

O contato direciona ao perfil GitHub informado. Para acrescentar e-mail ou LinkedIn, substitua o link na seção `#contato` por um endereço validado.

## Personalização
Edite as variáveis de cor no início de `assets/style.css`. Atualize os textos em `index.html`. Ao alterar a demo, mantenha os dados de `assets/app.js` e a tabela do modal coerentes.

## Privacidade
Não utiliza cookies, analytics, formulários de coleta nem armazenamento local. As fontes são solicitadas ao Google Fonts; remova a primeira linha do CSS para evitar essa requisição externa.

# Desenvolvimento de Interfaces Dinâmicas e Reativas — Atividades Acadêmicas

Este repositório contém as soluções dos desafios e projetos desenvolvidos para a disciplina de Desenvolvimento de Interfaces Dinâmicas e Reativas, cobrindo desde os fundamentos de React, sintaxe JSX e componentização até a criação de Design Systems reutilizáveis com Tailwind CSS.

## Sobre o Projeto

O objetivo deste repositório é consolidar o aprendizado prático em desenvolvimento front-end reativo, aplicando boas práticas de organização de componentes, passagem de propriedades (`props`), renderização dinâmica e estilização utilitária exigidas nas atividades da disciplina.

## Etapas do Projeto

### Semana 08 — Fundamentos de React e Componentes
Primeira aplicação React criada com Vite (`semana_08/`), estruturada com componentes funcionais organizados em `src/components/`:
- **Estrutura Base e Limpeza:** Remoção do *boilerplate* inicial do Vite e organização modular dos componentes.
- **Componentes Base (`Header`, `Footer` e `Card`):** Criação de cabeçalho com título, rodapé e cartões reutilizáveis recebendo dados via `props`.
- **Renderização Dinâmica (`Lista`):** Componente que recebe um array de strings via `props` e renderiza uma lista (`<ul>`) com `.map()` e prop `key` única para cada item.
- **Composição (`App`):** Integração dos componentes utilizando React Fragments (`<> </>`) como elemento raiz único.

### Semana 09 — Design System com Tailwind CSS
Biblioteca de componentes de interface reutilizáveis (`semana_09/`), configurada com Tailwind CSS apontando para a pasta `src`:
- **Componentes de UI (`Button`, `Badge` e `Input`):** Criação de elementos estilizados com classes utilitárias e variações visuais controladas por `props` (como `variant="primary"` e `variant="danger"`).
- **Refatoração (`Card`):** Adaptação do componente da Semana 08 para utilizar exclusivamente classes do Tailwind CSS.
- **Feedback Visual (`Alert`):** Componente dinâmico com suporte às variantes `success`, `error` e `warning`, alternando cores de fundo e texto conforme as propriedades recebidas.

## Reflexões Técnicas (Para Pensar)

### Semana 08 — Abordagem Imperativa vs. Declarativa e o Virtual DOM
- **Imperativa vs. Declarativa:** Na abordagem imperativa (JavaScript puro com manipulação direta do DOM), é necessário programar cada passo de *como* alterar a tela (selecionar nós, criar elementos e atualizar atributos manualmente). Na abordagem declarativa do React, descreve-se apenas *o que* deve ser renderizado para cada estado da aplicação, e o React gerencia as atualizações automaticamente.
- **Performance do Virtual DOM:** Alterar o DOM real diretamente exige recálculos custosos de layout no navegador. O React mantém uma cópia leve em memória (Virtual DOM), compara a nova árvore com a anterior (*diffing*) e aplica no DOM real apenas as alterações mínimas necessárias em lote.

### Semana 09 — Vantagens e Desvantagens do Tailwind CSS no React
- **Vantagens:** Agilidade na estilização direta no JSX sem alternar entre arquivos; ausência de conflitos de nomes de classes; facilidade para criar variantes dinâmicas via `props`; e geração de bundle final otimizado apenas com as classes utilizadas.
- **Desvantagens:** O código JSX pode ficar visualmente extenso quando há muitas classes acumuladas em um mesmo elemento, além de exigir familiaridade inicial com a nomenclatura das classes utilitárias.

## Arquivos do Repositório

- `semana_08/`: Projeto React (Vite) contendo `src/App.jsx` e os componentes `Header`, `Footer`, `Card` e `Lista` em `src/components/`.
- `semana_09/`: Projeto React (Vite + Tailwind CSS) contendo `tailwind.config.js` e os componentes `Button`, `Badge`, `Input`, `Card` e `Alert`.
- `.gitignore`: Configuração para ignorar dependências locais (`node_modules/`) e arquivos de build.
- `README.md`: Documentação e estrutura explicativa completa do repositório.

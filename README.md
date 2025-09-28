# 🎯 Quiz de Estudo - React + TypeScript

Um aplicativo de quiz interativo para estudo, construído com React e TypeScript, focado em questões de banco de dados.

## ✨ Funcionalidades

- **Interface Moderna**: Design responsivo e intuitivo
- **50 Perguntas Aleatórias**: Sistema de múltipla escolha com feedback imediato
- **Progresso Visual**: Barra de progresso e contador de perguntas
- **Feedback Detalhado**: Explicações para cada resposta
- **Sistema de Pontuação**: Acompanhamento de acertos e porcentagem
- **Histórico Persistente**: Salva estatísticas no localStorage
- **Contadores em Tempo Real**: Mostra acertos, erros e precisão durante o quiz
- **Revisão Completa**: Tela de resultados com revisão de todas as perguntas
- **Perguntas Aleatórias**: Cada quiz é único, sem perguntas repetidas
- **Animações Suaves**: Transições e efeitos visuais

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone ou baixe o projeto
2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📚 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Quiz.tsx        # Componente principal do quiz
│   ├── Question.tsx    # Componente de pergunta
│   ├── Results.tsx     # Tela de resultados
│   ├── Loading.tsx     # Tela de carregamento
│   └── StatsCounter.tsx # Contador de estatísticas
├── data/               # Dados do quiz
│   └── quizData.ts    # 50 perguntas e respostas
├── hooks/              # Hooks personalizados
│   └── useQuizStats.ts # Gerenciamento de localStorage
├── types/              # Definições TypeScript
│   └── Quiz.ts        # Interfaces e tipos
├── utils/              # Utilitários
│   └── quizUtils.ts   # Funções para embaralhar perguntas
├── App.tsx            # Componente raiz
└── index.tsx          # Ponto de entrada
```

## 🎨 Tecnologias Utilizadas

- **React 18**: Biblioteca para interfaces de usuário
- **TypeScript**: Tipagem estática para JavaScript
- **CSS3**: Estilização com animações e gradientes
- **HTML5**: Estrutura semântica
- **localStorage**: Persistência de dados local

## 📋 Características do Quiz

- **50 perguntas** sobre banco de dados
- **Nível iniciante** com conceitos fundamentais
- **Perguntas aleatórias** a cada execução
- **Temas abordados**:
  - Conceitos básicos de banco de dados
  - Comandos SQL fundamentais (SELECT, INSERT, UPDATE, DELETE)
  - Estruturas de dados (tabelas, chaves, índices)
  - Relacionamentos entre tabelas
  - Normalização básica
  - Transações e propriedades ACID
  - Views e stored procedures
  - Joins e consultas básicas
  - Funções de agregação (COUNT, SUM, AVG, MAX, MIN)
  - Triggers e procedimentos automáticos
  - Backup e recuperação de dados
  - Bancos de dados NoSQL
  - Integridade referencial e consistência
  - Locks e controle de concorrência
  - Logs de transação e checkpoints
  - Clusters e alta disponibilidade
  - Funções de manipulação de strings
  - Cursors e navegação de dados
  - Transações distribuídas
  - Schema e estrutura lógica

## 🏆 Sistema de Pontuação

- **1 ponto** por resposta correta
- **72%** é considerado aprovado (36 acertos de 50)
- **Feedback visual** para cada resposta
- **Revisão completa** ao final
- **Histórico persistente** com estatísticas detalhadas

## 📊 Estatísticas Salvas

O aplicativo salva automaticamente no localStorage:
- **Total de acertos e erros**
- **Número de tentativas**
- **Melhor pontuação**
- **Média de acertos**
- **Data do último quiz**

## 📱 Responsividade

O aplicativo é totalmente responsivo e funciona perfeitamente em:
- Desktop
- Tablet
- Mobile

## 🎯 Como Usar

1. **Inicie o Quiz**: As perguntas são carregadas aleatoriamente
2. **Responda as Perguntas**: Selecione uma das opções (A, B, C, D)
3. **Veja o Feedback**: Confira se acertou e leia a explicação
4. **Acompanhe o Progresso**: Veja contadores de acertos/erros em tempo real
5. **Continue**: Clique em "Próxima Pergunta"
6. **Veja os Resultados**: Confira sua pontuação final e estatísticas
7. **Reinicie**: Faça o quiz novamente com novas perguntas aleatórias
8. **Limpe o Histórico**: Use o botão para zerar todas as estatísticas

## 🔧 Scripts Disponíveis

- `npm start`: Executa o app em modo de desenvolvimento
- `npm build`: Cria a build de produção
- `npm test`: Executa os testes
- `npm eject`: Ejecta do Create React App (não recomendado)

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 🎮 Funcionalidades Avançadas

- **Embaralhamento**: Algoritmo Fisher-Yates para perguntas aleatórias
- **Persistência**: Dados salvos automaticamente no navegador
- **Animações**: Feedback visual com animações suaves
- **Acessibilidade**: Interface intuitiva e fácil de usar
- **Performance**: Carregamento rápido e responsivo
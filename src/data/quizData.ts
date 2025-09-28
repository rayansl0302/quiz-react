import { QuizData } from '../types/Quiz';

export const quizData: QuizData = {
  "titulo": "Quiz de Banco de Dados - Todos os Níveis",
  "nivel": "completo",
  "total_perguntas": 50,
  "perguntas": [
    {
      "id": 1,
      "pergunta": "O que significa a sigla SGBD?",
      "opcoes": [
        "Sistema de Gerenciamento de Banco de Dados",
        "Sistema Geral de Base de Dados",
        "Software de Gestão de Banco Digital",
        "Sistema de Gravação de Banco de Dados"
      ],
      "resposta_correta": 0,
      "explicacao": "SGBD significa Sistema de Gerenciamento de Banco de Dados, que é um software responsável por gerenciar o armazenamento, recuperação e organização de dados.",
      "dificuldade": "facil",
      "tema": "Conceitos Básicos"
    },
    {
      "id": 2,
      "pergunta": "Qual comando SQL é usado para criar uma nova tabela?",
      "opcoes": [
        "MAKE TABLE",
        "CREATE TABLE",
        "NEW TABLE", 
        "BUILD TABLE"
      ],
      "resposta_correta": 1,
      "explicacao": "O comando CREATE TABLE é usado para criar uma nova tabela em SQL, definindo suas colunas e tipos de dados.",
      "dificuldade": "facil",
      "tema": "Comandos SQL"
    },
    {
      "id": 3,
      "pergunta": "O que é uma chave primária (Primary Key)?",
      "opcoes": [
        "Uma coluna que pode ter valores duplicados",
        "Uma coluna que identifica unicamente cada registro na tabela",
        "Uma coluna que sempre contém números",
        "Uma coluna opcional em qualquer tabela"
      ],
      "resposta_correta": 1,
      "explicacao": "A chave primária é um campo (ou combinação de campos) que identifica unicamente cada registro em uma tabela, não podendo ter valores duplicados ou nulos.",
      "dificuldade": "facil",
      "tema": "Estruturas de Dados"
    },
    {
      "id": 4,
      "pergunta": "Qual comando SQL é usado para selecionar dados de uma tabela?",
      "opcoes": [
        "GET",
        "FETCH",
        "SELECT",
        "RETRIEVE"
      ],
      "resposta_correta": 2,
      "explicacao": "O comando SELECT é usado para consultar e recuperar dados de uma ou mais tabelas em um banco de dados.",
      "dificuldade": "facil",
      "tema": "Comandos SQL"
    },
    {
      "id": 5,
      "pergunta": "O que significa normalização em banco de dados?",
      "opcoes": [
        "Processo de backup dos dados",
        "Processo de organizar dados para reduzir redundância",
        "Processo de criptografar informações",
        "Processo de deletar dados antigos"
      ],
      "resposta_correta": 1,
      "explicacao": "Normalização é o processo de organizar os dados em um banco de dados para reduzir a redundância e melhorar a integridade dos dados.",
      "dificuldade": "medio",
      "tema": "Normalização"
    },
    {
      "id": 6,
      "pergunta": "Qual comando SQL é usado para inserir novos dados em uma tabela?",
      "opcoes": [
        "ADD",
        "INSERT",
        "PUT",
        "CREATE"
      ],
      "resposta_correta": 1,
      "explicacao": "O comando INSERT é usado para adicionar novos registros (linhas) em uma tabela existente.",
      "dificuldade": "facil",
      "tema": "Comandos SQL"
    },
    {
      "id": 7,
      "pergunta": "O que é uma chave estrangeira (Foreign Key)?",
      "opcoes": [
        "Uma chave de outro país",
        "Uma chave que referencia a chave primária de outra tabela",
        "Uma chave temporária",
        "Uma chave criptografada"
      ],
      "resposta_correta": 1,
      "explicacao": "Uma chave estrangeira é um campo que cria um link entre duas tabelas, referenciando a chave primária de outra tabela para manter a integridade referencial.",
      "dificuldade": "medio",
      "tema": "Relacionamentos"
    },
    {
      "id": 8,
      "pergunta": "Qual comando SQL é usado para atualizar dados existentes?",
      "opcoes": [
        "MODIFY",
        "CHANGE",
        "UPDATE",
        "ALTER"
      ],
      "resposta_correta": 2,
      "explicacao": "O comando UPDATE é usado para modificar registros existentes em uma tabela, geralmente usado com a cláusula WHERE para especificar quais registros atualizar.",
      "dificuldade": "facil",
      "tema": "Comandos SQL"
    },
    {
      "id": 9,
      "pergunta": "O que significa SQL?",
      "opcoes": [
        "Structured Query Language",
        "Simple Query Language",
        "Standard Query Language",
        "Secure Query Language"
      ],
      "resposta_correta": 0,
      "explicacao": "SQL significa Structured Query Language (Linguagem de Consulta Estruturada), uma linguagem padrão para gerenciar e manipular bancos de dados relacionais.",
      "dificuldade": "facil",
      "tema": "Conceitos Básicos"
    },
    {
      "id": 10,
      "pergunta": "Qual comando SQL é usado para remover dados de uma tabela?",
      "opcoes": [
        "REMOVE",
        "DELETE",
        "DROP",
        "CLEAR"
      ],
      "resposta_correta": 1,
      "explicacao": "O comando DELETE é usado para remover registros específicos de uma tabela, geralmente usado com WHERE para especificar quais registros deletar.",
      "dificuldade": "facil",
      "tema": "Comandos SQL"
    },
    {
      "id": 11,
      "pergunta": "O que é um índice em banco de dados?",
      "opcoes": [
        "Uma lista de todas as tabelas",
        "Uma estrutura que melhora a velocidade de consultas",
        "Um backup automático",
        "Uma forma de criptografia"
      ],
      "resposta_correta": 1,
      "explicacao": "Um índice é uma estrutura de dados que melhora a velocidade de operações de consulta em uma tabela, funcionando como um 'atalho' para encontrar dados rapidamente.",
      "dificuldade": "medio",
      "tema": "Performance"
    },
    {
      "id": 12,
      "pergunta": "Qual cláusula SQL é usada para filtrar resultados?",
      "opcoes": [
        "FILTER",
        "WHERE",
        "HAVING",
        "LIMIT"
      ],
      "resposta_correta": 1,
      "explicacao": "A cláusula WHERE é usada para filtrar registros que atendem a uma condição específica em consultas SQL.",
      "dificuldade": "facil",
      "tema": "Comandos SQL"
    },
    {
      "id": 13,
      "pergunta": "O que é um banco de dados relacional?",
      "opcoes": [
        "Um banco que só armazena números",
        "Um banco que organiza dados em tabelas relacionadas",
        "Um banco temporário",
        "Um banco apenas para textos"
      ],
      "resposta_correta": 1,
      "explicacao": "Um banco de dados relacional organiza dados em tabelas (relações) que podem estar relacionadas entre si através de chaves, seguindo o modelo relacional.",
      "dificuldade": "facil",
      "tema": "Conceitos Básicos"
    },
    {
      "id": 14,
      "pergunta": "Qual comando é usado para ordenar resultados de uma consulta?",
      "opcoes": [
        "SORT BY",
        "ORDER BY",
        "ARRANGE BY",
        "ORGANIZE BY"
      ],
      "resposta_correta": 1,
      "explicacao": "ORDER BY é usado para classificar os resultados de uma consulta em ordem crescente (ASC) ou decrescente (DESC) baseado em uma ou mais colunas.",
      "dificuldade": "facil",
      "tema": "Comandos SQL"
    },
    {
      "id": 15,
      "pergunta": "O que significa ACID em banco de dados?",
      "opcoes": [
        "Advanced Computer Integration Database",
        "Atomicity, Consistency, Isolation, Durability",
        "Automatic Control Information Database",
        "Access Control Integration Data"
      ],
      "resposta_correta": 1,
      "explicacao": "ACID representa as propriedades fundamentais de transações em banco de dados: Atomicity (Atomicidade), Consistency (Consistência), Isolation (Isolamento) e Durability (Durabilidade).",
      "dificuldade": "medio",
      "tema": "Transações"
    },
    {
      "id": 16,
      "pergunta": "Qual comando SQL é usado para remover uma tabela completamente?",
      "opcoes": [
        "DELETE TABLE",
        "REMOVE TABLE",
        "DROP TABLE",
        "DESTROY TABLE"
      ],
      "resposta_correta": 2,
      "explicacao": "DROP TABLE remove completamente uma tabela e todos os seus dados do banco de dados, diferente de DELETE que apenas remove registros.",
      "dificuldade": "medio",
      "tema": "Comandos SQL"
    },
    {
      "id": 17,
      "pergunta": "O que é uma transação em banco de dados?",
      "opcoes": [
        "Uma compra online",
        "Um conjunto de operações que são executadas como uma unidade",
        "Um tipo de tabela especial",
        "Um backup automático"
      ],
      "resposta_correta": 1,
      "explicacao": "Uma transação é um conjunto de operações de banco de dados que são executadas como uma única unidade lógica, seguindo as propriedades ACID.",
      "dificuldade": "medio",
      "tema": "Transações"
    },
    {
      "id": 18,
      "pergunta": "Qual função SQL é usada para contar registros?",
      "opcoes": [
        "TOTAL()",
        "COUNT()",
        "NUMBER()",
        "SUM()"
      ],
      "resposta_correta": 1,
      "explicacao": "COUNT() é uma função de agregação que retorna o número de registros que atendem a um critério específico ou o total de registros em uma tabela.",
      "dificuldade": "facil",
      "tema": "Funções de Agregação"
    },
    {
      "id": 19,
      "pergunta": "O que é um JOIN em SQL?",
      "opcoes": [
        "Uma forma de deletar dados",
        "Uma operação para combinar dados de duas ou mais tabelas",
        "Um tipo de índice",
        "Uma forma de backup"
      ],
      "resposta_correta": 1,
      "explicacao": "JOIN é uma operação que permite combinar registros de duas ou mais tabelas baseado em uma relação entre elas, geralmente através de chaves.",
      "dificuldade": "medio",
      "tema": "Joins"
    },
    {
      "id": 20,
      "pergunta": "Qual é a diferença entre DELETE e TRUNCATE?",
      "opcoes": [
        "Não há diferença",
        "DELETE remove registros específicos, TRUNCATE remove todos os registros",
        "TRUNCATE é mais lento que DELETE",
        "DELETE é mais seguro que TRUNCATE"
      ],
      "resposta_correta": 1,
      "explicacao": "DELETE pode remover registros específicos usando WHERE e pode ser revertido, enquanto TRUNCATE remove todos os registros da tabela mais rapidamente mas não pode ser revertido facilmente.",
      "dificuldade": "dificil",
      "tema": "Comandos SQL"
    },
    {
      "id": 21,
      "pergunta": "O que é uma view em banco de dados?",
      "opcoes": [
        "Uma tabela física no banco",
        "Uma consulta armazenada que aparece como uma tabela virtual",
        "Um tipo de índice especial",
        "Uma forma de backup"
      ],
      "resposta_correta": 1,
      "explicacao": "Uma view é uma consulta SQL armazenada que aparece como uma tabela virtual, permitindo simplificar consultas complexas e controlar o acesso aos dados.",
      "dificuldade": "medio",
      "tema": "Views"
    },
    {
      "id": 22,
      "pergunta": "Qual comando é usado para modificar a estrutura de uma tabela?",
      "opcoes": [
        "MODIFY TABLE",
        "CHANGE TABLE",
        "ALTER TABLE",
        "UPDATE TABLE"
      ],
      "resposta_correta": 2,
      "explicacao": "ALTER TABLE é usado para modificar a estrutura de uma tabela existente, como adicionar, remover ou modificar colunas.",
      "dificuldade": "medio",
      "tema": "Comandos SQL"
    },
    {
      "id": 23,
      "pergunta": "O que é um stored procedure?",
      "opcoes": [
        "Um procedimento de backup",
        "Um conjunto de comandos SQL armazenados no banco de dados",
        "Um tipo de tabela especial",
        "Uma forma de indexação"
      ],
      "resposta_correta": 1,
      "explicacao": "Um stored procedure é um conjunto de comandos SQL pré-compilados e armazenados no banco de dados que podem ser executados como uma unidade.",
      "dificuldade": "medio",
      "tema": "Stored Procedures"
    },
    {
      "id": 24,
      "pergunta": "Qual cláusula é usada para agrupar resultados em SQL?",
      "opcoes": [
        "GROUP BY",
        "CLUSTER BY",
        "AGGREGATE BY",
        "COLLECT BY"
      ],
      "resposta_correta": 0,
      "explicacao": "GROUP BY é usado para agrupar registros que têm os mesmos valores em colunas específicas, frequentemente usado com funções de agregação.",
      "dificuldade": "medio",
      "tema": "Funções de Agregação"
    },
    {
      "id": 25,
      "pergunta": "O que significa NULL em banco de dados?",
      "opcoes": [
        "Valor zero",
        "Texto vazio",
        "Ausência de valor ou valor desconhecido",
        "Valor inválido"
      ],
      "resposta_correta": 2,
      "explicacao": "NULL representa a ausência de valor ou um valor desconhecido, diferente de zero ou string vazia. É um estado especial que indica que não há dados naquele campo.",
      "dificuldade": "facil",
      "tema": "Conceitos Básicos"
    },
    {
      "id": 26,
      "pergunta": "Qual função SQL é usada para calcular a média de valores?",
      "opcoes": [
        "MEDIA()",
        "AVERAGE()",
        "AVG()",
        "MEAN()"
      ],
      "resposta_correta": 2,
      "explicacao": "AVG() é uma função de agregação que calcula a média aritmética dos valores em uma coluna numérica.",
      "dificuldade": "facil",
      "tema": "Funções de Agregação"
    },
    {
      "id": 27,
      "pergunta": "O que é um trigger em banco de dados?",
      "opcoes": [
        "Um tipo de tabela especial",
        "Um procedimento que é executado automaticamente em resposta a eventos",
        "Um comando de backup",
        "Um tipo de índice"
      ],
      "resposta_correta": 1,
      "explicacao": "Um trigger é um procedimento armazenado que é executado automaticamente quando ocorrem eventos específicos (INSERT, UPDATE, DELETE) em uma tabela.",
      "dificuldade": "dificil",
      "tema": "Triggers"
    },
    {
      "id": 28,
      "pergunta": "Qual comando SQL é usado para adicionar uma nova coluna a uma tabela existente?",
      "opcoes": [
        "ADD COLUMN",
        "INSERT COLUMN",
        "CREATE COLUMN",
        "NEW COLUMN"
      ],
      "resposta_correta": 0,
      "explicacao": "ADD COLUMN é usado com ALTER TABLE para adicionar uma nova coluna a uma tabela existente.",
      "dificuldade": "medio",
      "tema": "Comandos SQL"
    },
    {
      "id": 29,
      "pergunta": "O que é um backup de banco de dados?",
      "opcoes": [
        "Uma cópia de segurança dos dados",
        "Um tipo de tabela especial",
        "Um comando de exclusão",
        "Uma forma de criptografia"
      ],
      "resposta_correta": 0,
      "explicacao": "Backup é uma cópia de segurança dos dados do banco que pode ser usada para restaurar informações em caso de perda ou corrupção.",
      "dificuldade": "facil",
      "tema": "Backup"
    },
    {
      "id": 30,
      "pergunta": "Qual função SQL retorna o maior valor de uma coluna?",
      "opcoes": [
        "BIGGEST()",
        "MAX()",
        "HIGHEST()",
        "TOP()"
      ],
      "resposta_correta": 1,
      "explicacao": "MAX() é uma função de agregação que retorna o maior valor de uma coluna numérica ou o último valor alfabeticamente em colunas de texto.",
      "dificuldade": "facil",
      "tema": "Funções de Agregação"
    },
    {
      "id": 31,
      "pergunta": "O que é um banco de dados NoSQL?",
      "opcoes": [
        "Um banco que não usa SQL",
        "Um banco que não armazena dados",
        "Um banco apenas para números",
        "Um banco temporário"
      ],
      "resposta_correta": 0,
      "explicacao": "NoSQL (Not Only SQL) refere-se a bancos de dados que não seguem o modelo relacional tradicional e podem usar diferentes estruturas de armazenamento.",
      "dificuldade": "medio",
      "tema": "NoSQL"
    },
    {
      "id": 32,
      "pergunta": "Qual cláusula SQL é usada para limitar o número de resultados retornados?",
      "opcoes": [
        "STOP",
        "LIMIT",
        "MAX",
        "TOP"
      ],
      "resposta_correta": 1,
      "explicacao": "LIMIT é usado para restringir o número de registros retornados por uma consulta, útil para paginação e performance.",
      "dificuldade": "facil",
      "tema": "Comandos SQL"
    },
    {
      "id": 33,
      "pergunta": "O que é integridade referencial?",
      "opcoes": [
        "A velocidade do banco de dados",
        "A consistência dos relacionamentos entre tabelas",
        "O tamanho do banco de dados",
        "A segurança dos dados"
      ],
      "resposta_correta": 1,
      "explicacao": "Integridade referencial garante que as relações entre tabelas sejam consistentes, impedindo referências órfãs e mantendo a consistência dos dados.",
      "dificuldade": "dificil",
      "tema": "Integridade"
    },
    {
      "id": 34,
      "pergunta": "Qual função SQL é usada para concatenar strings?",
      "opcoes": [
        "JOIN()",
        "CONCAT()",
        "MERGE()",
        "COMBINE()"
      ],
      "resposta_correta": 1,
      "explicacao": "CONCAT() é usada para unir duas ou mais strings em uma única string.",
      "dificuldade": "medio",
      "tema": "Funções de String"
    },
    {
      "id": 35,
      "pergunta": "O que é um deadlock em banco de dados?",
      "opcoes": [
        "Um tipo de erro de sintaxe",
        "Uma situação onde duas transações ficam esperando uma pela outra",
        "Um banco de dados corrompido",
        "Uma tabela vazia"
      ],
      "resposta_correta": 1,
      "explicacao": "Deadlock ocorre quando duas ou mais transações ficam bloqueadas esperando uma pela outra, criando um ciclo de dependência que impede o progresso.",
      "dificuldade": "dificil",
      "tema": "Concorrência"
    },
    {
      "id": 36,
      "pergunta": "Qual comando SQL é usado para renomear uma tabela?",
      "opcoes": [
        "RENAME TABLE",
        "ALTER TABLE RENAME",
        "CHANGE TABLE",
        "MODIFY TABLE"
      ],
      "resposta_correta": 0,
      "explicacao": "RENAME TABLE é usado para alterar o nome de uma tabela existente no banco de dados.",
      "dificuldade": "medio",
      "tema": "Comandos SQL"
    },
    {
      "id": 37,
      "pergunta": "O que é um cursor em banco de dados?",
      "opcoes": [
        "Um ponteiro para navegar pelos registros",
        "Um tipo de tabela",
        "Um comando de busca",
        "Um índice especial"
      ],
      "resposta_correta": 0,
      "explicacao": "Um cursor é um mecanismo que permite navegar pelos registros de um resultado de consulta um por vez, útil em stored procedures.",
      "dificuldade": "dificil",
      "tema": "Cursors"
    },
    {
      "id": 38,
      "pergunta": "Qual função SQL é usada para arredondar números?",
      "opcoes": [
        "ROUND()",
        "CIRCLE()",
        "FLOOR()",
        "CEIL()"
      ],
      "resposta_correta": 0,
      "explicacao": "ROUND() é usada para arredondar um número para um número específico de casas decimais.",
      "dificuldade": "medio",
      "tema": "Funções Matemáticas"
    },
    {
      "id": 39,
      "pergunta": "O que é um schema em banco de dados?",
      "opcoes": [
        "Um tipo de tabela",
        "A estrutura lógica que define como os dados são organizados",
        "Um comando SQL",
        "Um backup"
      ],
      "resposta_correta": 1,
      "explicacao": "Schema é a estrutura lógica que define como os dados são organizados, incluindo tabelas, colunas, tipos de dados e relacionamentos.",
      "dificuldade": "medio",
      "tema": "Schema"
    },
    {
      "id": 40,
      "pergunta": "Qual comando SQL é usado para criar um índice?",
      "opcoes": [
        "MAKE INDEX",
        "CREATE INDEX",
        "ADD INDEX",
        "BUILD INDEX"
      ],
      "resposta_correta": 1,
      "explicacao": "CREATE INDEX é usado para criar um índice em uma ou mais colunas de uma tabela para melhorar a performance das consultas.",
      "dificuldade": "medio",
      "tema": "Performance"
    },
    {
      "id": 41,
      "pergunta": "O que é uma transação distribuída?",
      "opcoes": [
        "Uma transação em múltiplos bancos de dados",
        "Uma transação muito grande",
        "Uma transação temporária",
        "Uma transação de backup"
      ],
      "resposta_correta": 0,
      "explicacao": "Uma transação distribuída envolve operações em múltiplos bancos de dados ou sistemas, mantendo a consistência ACID entre eles.",
      "dificuldade": "dificil",
      "tema": "Transações"
    },
    {
      "id": 42,
      "pergunta": "Qual função SQL é usada para extrair parte de uma string?",
      "opcoes": [
        "CUT()",
        "SUBSTRING()",
        "EXTRACT()",
        "SLICE()"
      ],
      "resposta_correta": 1,
      "explicacao": "SUBSTRING() é usada para extrair uma parte específica de uma string, especificando a posição inicial e o comprimento.",
      "dificuldade": "medio",
      "tema": "Funções de String"
    },
    {
      "id": 43,
      "pergunta": "O que é um checkpoint em banco de dados?",
      "opcoes": [
        "Um ponto de verificação para transações",
        "Um tipo de tabela",
        "Um comando de busca",
        "Um backup automático"
      ],
      "resposta_correta": 0,
      "explicacao": "Checkpoint é um ponto no tempo onde o SGBD garante que todas as transações confirmadas foram escritas permanentemente no disco.",
      "dificuldade": "dificil",
      "tema": "Transações"
    },
    {
      "id": 44,
      "pergunta": "Qual comando SQL é usado para remover um índice?",
      "opcoes": [
        "DELETE INDEX",
        "DROP INDEX",
        "REMOVE INDEX",
        "CLEAR INDEX"
      ],
      "resposta_correta": 1,
      "explicacao": "DROP INDEX é usado para remover um índice existente de uma tabela.",
      "dificuldade": "medio",
      "tema": "Performance"
    },
    {
      "id": 45,
      "pergunta": "O que é um lock (bloqueio) em banco de dados?",
      "opcoes": [
        "Um tipo de erro",
        "Um mecanismo para controlar acesso concorrente aos dados",
        "Um backup",
        "Um tipo de tabela"
      ],
      "resposta_correta": 1,
      "explicacao": "Lock é um mecanismo que previne acesso simultâneo a dados por múltiplas transações, garantindo consistência e evitando conflitos.",
      "dificuldade": "dificil",
      "tema": "Concorrência"
    },
    {
      "id": 46,
      "pergunta": "Qual função SQL é usada para converter texto para maiúsculas?",
      "opcoes": [
        "UPPER()",
        "CAPITALIZE()",
        "TOUPPER()",
        "BIG()"
      ],
      "resposta_correta": 0,
      "explicacao": "UPPER() converte todos os caracteres de uma string para maiúsculas.",
      "dificuldade": "facil",
      "tema": "Funções de String"
    },
    {
      "id": 47,
      "pergunta": "O que é um log de transações?",
      "opcoes": [
        "Uma lista de usuários",
        "Um registro de todas as operações realizadas no banco",
        "Um tipo de tabela",
        "Um backup completo"
      ],
      "resposta_correta": 1,
      "explicacao": "Log de transações é um arquivo que registra todas as operações de modificação de dados, usado para recuperação e auditoria.",
      "dificuldade": "medio",
      "tema": "Logs"
    },
    {
      "id": 48,
      "pergunta": "Qual comando SQL é usado para criar uma view?",
      "opcoes": [
        "MAKE VIEW",
        "CREATE VIEW",
        "ADD VIEW",
        "BUILD VIEW"
      ],
      "resposta_correta": 1,
      "explicacao": "CREATE VIEW é usado para criar uma view, que é uma consulta armazenada que aparece como uma tabela virtual.",
      "dificuldade": "medio",
      "tema": "Views"
    },
    {
      "id": 49,
      "pergunta": "O que é um cluster em banco de dados?",
      "opcoes": [
        "Um grupo de servidores trabalhando juntos",
        "Um tipo de tabela especial",
        "Um comando SQL",
        "Um backup"
      ],
      "resposta_correta": 0,
      "explicacao": "Cluster é um conjunto de servidores de banco de dados que trabalham juntos para fornecer alta disponibilidade e performance.",
      "dificuldade": "dificil",
      "tema": "Alta Disponibilidade"
    },
    {
      "id": 50,
      "pergunta": "Qual função SQL é usada para calcular a soma de valores?",
      "opcoes": [
        "TOTAL()",
        "SUM()",
        "ADD()",
        "PLUS()"
      ],
      "resposta_correta": 1,
      "explicacao": "SUM() é uma função de agregação que calcula a soma total dos valores em uma coluna numérica.",
      "dificuldade": "facil",
      "tema": "Funções de Agregação"
    }
  ],
  "instrucoes": {
    "como_usar": "Selecione a resposta correta para cada pergunta. Cada pergunta tem apenas uma resposta correta.",
    "pontuacao": "Cada resposta correta vale 1 ponto. Total máximo: 50 pontos.",
    "nivel_aprovacao": "Para ser considerado aprovado no nível iniciante, você deve acertar pelo menos 36 questões (72%)."
  },
  "temas_abordados": [
    "Conceitos básicos de banco de dados",
    "Comandos SQL fundamentais (SELECT, INSERT, UPDATE, DELETE)",
    "Estruturas de dados (tabelas, chaves, índices)",
    "Relacionamentos entre tabelas",
    "Normalização básica",
    "Transações e propriedades ACID",
    "Views e stored procedures",
    "Joins e consultas básicas",
    "Funções de agregação (COUNT, SUM, AVG, MAX, MIN)",
    "Triggers e procedimentos automáticos",
    "Backup e recuperação de dados",
    "Bancos de dados NoSQL",
    "Integridade referencial e consistência",
    "Locks e controle de concorrência",
    "Logs de transação e checkpoints",
    "Clusters e alta disponibilidade",
    "Funções de manipulação de strings",
    "Cursors e navegação de dados",
    "Transações distribuídas",
    "Schema e estrutura lógica"
  ]
};
import { QuizData } from '../types/Quiz';

export const quizData: QuizData = {
  "titulo": "Quiz de Banco de Dados - Todos os Níveis",
  "nivel": "completo",
  "total_perguntas": 85,
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
    },
    {
      "id": 51,
      "pergunta": "Em um sistema de banco de dados distribuído, qual protocolo é usado para garantir a consistência entre múltiplos nós?",
      "opcoes": [
        "Two-Phase Commit (2PC)",
        "Single-Phase Commit",
        "Three-Phase Commit",
        "No-Phase Commit"
      ],
      "resposta_correta": 0,
      "explicacao": "Two-Phase Commit (2PC) é um protocolo de consenso distribuído que garante que todas as transações sejam commitadas ou abortadas de forma consistente em todos os nós participantes.",
      "dificuldade": "dificil",
      "tema": "Sistemas Distribuídos"
    },
    {
      "id": 52,
      "pergunta": "Qual é a principal diferença entre um índice B-tree e um índice B+ tree?",
      "opcoes": [
        "B+ tree armazena dados apenas nas folhas, B-tree armazena em todos os nós",
        "B-tree é mais rápido que B+ tree",
        "B+ tree não suporta chaves duplicadas",
        "B-tree usa menos memória que B+ tree"
      ],
      "resposta_correta": 0,
      "explicacao": "B+ tree armazena os dados apenas nos nós folha, enquanto B-tree pode armazenar dados em qualquer nó. Isso torna B+ tree mais eficiente para consultas sequenciais e operações de range scan.",
      "dificuldade": "dificil",
      "tema": "Estruturas de Dados Avançadas"
    },
    {
      "id": 53,
      "pergunta": "O que é o problema de 'Phantom Read' em controle de concorrência?",
      "opcoes": [
        "Leitura de dados fantasma inexistentes",
        "Uma transação lê dados que foram inseridos por outra transação após sua leitura inicial",
        "Leitura de dados corrompidos",
        "Leitura de dados em cache inválido"
      ],
      "resposta_correta": 1,
      "explicacao": "Phantom Read ocorre quando uma transação executa uma consulta duas vezes e obtém conjuntos de resultados diferentes devido a inserções feitas por outras transações.",
      "dificuldade": "dificil",
      "tema": "Controle de Concorrência"
    },
    {
      "id": 54,
      "pergunta": "Qual técnica de otimização de consulta é usada para transformar uma consulta SQL em uma árvore de operações executáveis?",
      "opcoes": [
        "Query Parsing",
        "Query Optimization",
        "Query Execution",
        "Query Compilation"
      ],
      "resposta_correta": 1,
      "explicacao": "Query Optimization é o processo de analisar uma consulta SQL e transformá-la em um plano de execução otimizado, incluindo a escolha de índices, algoritmos de join e ordem de operações.",
      "dificuldade": "dificil",
      "tema": "Otimização de Consultas"
    },
    {
      "id": 55,
      "pergunta": "Em um sistema de banco de dados, o que é 'Write-Ahead Logging' (WAL)?",
      "opcoes": [
        "Técnica de backup automático",
        "Protocolo onde mudanças são registradas no log antes de serem escritas no disco",
        "Método de criptografia de logs",
        "Sistema de limpeza automática de logs"
      ],
      "resposta_correta": 1,
      "explicacao": "Write-Ahead Logging garante que todas as modificações sejam registradas no log de transações antes de serem aplicadas aos dados reais, garantindo durabilidade e recuperação em caso de falha.",
      "dificuldade": "dificil",
      "tema": "Recuperação e Durabilidade"
    },
    {
      "id": 56,
      "pergunta": "Qual é o nível de isolamento mais restritivo que previne todos os tipos de leitura inconsistente?",
      "opcoes": [
        "READ UNCOMMITTED",
        "READ COMMITTED",
        "REPEATABLE READ",
        "SERIALIZABLE"
      ],
      "resposta_correta": 3,
      "explicacao": "SERIALIZABLE é o nível mais alto de isolamento, garantindo que as transações sejam executadas como se fossem sequenciais, prevenindo dirty reads, non-repeatable reads e phantom reads.",
      "dificuldade": "dificil",
      "tema": "Níveis de Isolamento"
    },
    {
      "id": 57,
      "pergunta": "O que é 'Sharding' em bancos de dados distribuídos?",
      "opcoes": [
        "Técnica de backup distribuído",
        "Divisão horizontal de dados em múltiplos servidores",
        "Método de criptografia de dados",
        "Sistema de replicação automática"
      ],
      "resposta_correta": 1,
      "explicacao": "Sharding é a prática de dividir um banco de dados em múltiplos fragmentos (shards) distribuídos em diferentes servidores, melhorando performance e escalabilidade.",
      "dificuldade": "dificil",
      "tema": "Escalabilidade"
    },
    {
      "id": 58,
      "pergunta": "Qual algoritmo é comumente usado para detecção de deadlock em sistemas de banco de dados?",
      "opcoes": [
        "Dijkstra's Algorithm",
        "Wait-for Graph Algorithm",
        "Breadth-First Search",
        "Depth-First Search"
      ],
      "resposta_correta": 1,
      "explicacao": "O algoritmo Wait-for Graph constrói um grafo das dependências entre transações e detecta ciclos que indicam deadlocks, permitindo que o sistema tome ações corretivas.",
      "dificuldade": "dificil",
      "tema": "Detecção de Deadlock"
    },
    {
      "id": 59,
      "pergunta": "Em normalização de banco de dados, qual é a forma normal que elimina dependências transitivas?",
      "opcoes": [
        "1NF (Primeira Forma Normal)",
        "2NF (Segunda Forma Normal)",
        "3NF (Terceira Forma Normal)",
        "BCNF (Boyce-Codd Normal Form)"
      ],
      "resposta_correta": 2,
      "explicacao": "A Terceira Forma Normal (3NF) elimina dependências transitivas, garantindo que campos não-chave não dependam de outros campos não-chave, apenas da chave primária.",
      "dificuldade": "dificil",
      "tema": "Normalização Avançada"
    },
    {
      "id": 60,
      "pergunta": "O que é 'Materialized View' e como difere de uma view tradicional?",
      "opcoes": [
        "View que armazena dados fisicamente e é atualizada automaticamente",
        "View que só funciona em horário comercial",
        "View que não pode ser modificada",
        "View que usa apenas dados em memória"
      ],
      "resposta_correta": 0,
      "explicacao": "Materialized View armazena fisicamente os resultados da consulta e pode ser atualizada automaticamente ou sob demanda, oferecendo melhor performance para consultas complexas frequentemente executadas.",
      "dificuldade": "dificil",
      "tema": "Views Materializadas"
    },
    {
      "id": 61,
      "pergunta": "Qual técnica de indexação é mais eficiente para consultas de range em dados temporais?",
      "opcoes": [
        "B-tree Index",
        "Hash Index",
        "Bitmap Index",
        "R-tree Index"
      ],
      "resposta_correta": 0,
      "explicacao": "B-tree Index é ideal para consultas de range em dados temporais porque mantém os dados ordenados, permitindo busca eficiente por intervalos de tempo.",
      "dificuldade": "dificil",
      "tema": "Indexação Temporal"
    },
    {
      "id": 62,
      "pergunta": "O que é 'CAP Theorem' e como se aplica a bancos de dados distribuídos?",
      "opcoes": [
        "Teorema que garante que sistemas distribuídos podem ter Consistência, Disponibilidade e Tolerância a Partições simultaneamente",
        "Teorema que limita sistemas distribuídos a apenas duas das três propriedades: Consistência, Disponibilidade ou Tolerância a Partições",
        "Teorema sobre criptografia em bancos de dados",
        "Teorema sobre otimização de consultas"
      ],
      "resposta_correta": 1,
      "explicacao": "O CAP Theorem estabelece que em um sistema distribuído, é impossível garantir simultaneamente Consistência, Disponibilidade e Tolerância a Partições - apenas duas podem ser garantidas ao mesmo tempo.",
      "dificuldade": "dificil",
      "tema": "Teoria de Sistemas Distribuídos"
    },
    {
      "id": 63,
      "pergunta": "Qual é a diferença entre 'Lazy Evaluation' e 'Eager Evaluation' em processamento de consultas?",
      "opcoes": [
        "Lazy Evaluation executa operações imediatamente, Eager Evaluation adia a execução",
        "Lazy Evaluation adia a execução até que o resultado seja necessário, Eager Evaluation executa imediatamente",
        "Não há diferença entre os dois métodos",
        "Lazy Evaluation é mais rápido que Eager Evaluation"
      ],
      "resposta_correta": 1,
      "explicacao": "Lazy Evaluation adia a execução de operações até que o resultado seja realmente necessário, permitindo otimizações. Eager Evaluation executa operações imediatamente conforme são encontradas.",
      "dificuldade": "dificil",
      "tema": "Estratégias de Execução"
    },
    {
      "id": 64,
      "pergunta": "O que é 'MVCC' (Multi-Version Concurrency Control) e como funciona?",
      "opcoes": [
        "Sistema que mantém múltiplas versões de cada registro para permitir leituras consistentes sem bloqueios",
        "Método de backup que cria múltiplas cópias dos dados",
        "Técnica de criptografia que usa múltiplas chaves",
        "Sistema de replicação que mantém múltiplas cópias"
      ],
      "resposta_correta": 0,
      "explicacao": "MVCC mantém múltiplas versões de cada registro, permitindo que leituras vejam versões consistentes dos dados sem precisar bloquear escritas, melhorando a concorrência.",
      "dificuldade": "dificil",
      "tema": "Controle de Concorrência Avançado"
    },
    {
      "id": 65,
      "pergunta": "Em um sistema de banco de dados, o que é 'Write Skew' e como pode ser prevenido?",
      "opcoes": [
        "Erro de escrita que pode ser prevenido com validação de dados",
        "Anomalia onde duas transações leem dados consistentes mas produzem resultado inconsistente, prevenida com locks de leitura",
        "Problema de performance que pode ser resolvido com índices",
        "Erro de sintaxe SQL que pode ser prevenido com validação de consultas"
      ],
      "resposta_correta": 1,
      "explicacao": "Write Skew ocorre quando duas transações leem dados consistentes mas suas escritas combinadas resultam em estado inconsistente. Pode ser prevenido com locks de leitura ou serialização.",
      "dificuldade": "dificil",
      "tema": "Anomalias de Concorrência"
    },
    {
      "id": 66,
      "pergunta": "Qual é a diferença entre 'OLTP' e 'OLAP' em sistemas de banco de dados?",
      "opcoes": [
        "OLTP é para transações online, OLAP é para análise de dados",
        "OLTP é mais rápido que OLAP",
        "OLAP não suporta SQL",
        "Não há diferença significativa"
      ],
      "resposta_correta": 0,
      "explicacao": "OLTP (Online Transaction Processing) otimiza para transações rápidas e concorrentes, enquanto OLAP (Online Analytical Processing) otimiza para consultas analíticas complexas em grandes volumes de dados.",
      "dificuldade": "dificil",
      "tema": "Arquiteturas de Banco de Dados"
    },
    {
      "id": 67,
      "pergunta": "O que é 'Query Plan Caching' e como impacta a performance?",
      "opcoes": [
        "Técnica que armazena planos de execução em cache para reutilização, melhorando performance",
        "Método de backup de consultas frequentes",
        "Sistema de limpeza automática de consultas antigas",
        "Técnica de criptografia de consultas"
      ],
      "resposta_correta": 0,
      "explicacao": "Query Plan Caching armazena planos de execução otimizados em memória, evitando o custo de re-otimização para consultas similares, significativamente melhorando a performance.",
      "dificuldade": "dificil",
      "tema": "Otimização de Performance"
    },
    {
      "id": 68,
      "pergunta": "Em bancos de dados NoSQL, qual é a principal característica do modelo 'Document Store'?",
      "opcoes": [
        "Armazena dados em documentos JSON/XML com esquema flexível",
        "Usa apenas chaves numéricas",
        "Não suporta consultas complexas",
        "Armazena dados apenas em memória"
      ],
      "resposta_correta": 0,
      "explicacao": "Document Store (como MongoDB) armazena dados em documentos semi-estruturados (JSON/XML) com esquema flexível, permitindo evolução da estrutura de dados sem migrações complexas.",
      "dificuldade": "dificil",
      "tema": "NoSQL Document Stores"
    },
    {
      "id": 69,
      "pergunta": "O que é 'Consistent Hashing' e por que é importante em sistemas distribuídos?",
      "opcoes": [
        "Algoritmo que distribui dados uniformemente em nós, minimizando reorganização quando nós são adicionados/removidos",
        "Método de criptografia de dados distribuídos",
        "Técnica de backup distribuído",
        "Sistema de validação de integridade"
      ],
      "resposta_correta": 0,
      "explicacao": "Consistent Hashing distribui dados em um anel hash, minimizando a reorganização necessária quando nós são adicionados ou removidos do cluster, essencial para escalabilidade.",
      "dificuldade": "dificil",
      "tema": "Algoritmos Distribuídos"
    },
    {
      "id": 70,
      "pergunta": "Qual técnica é usada para implementar 'Read Replicas' em sistemas de banco de dados?",
      "opcoes": [
        "Master-Slave Replication com propagação assíncrona de mudanças",
        "Sincronização manual de dados",
        "Backup automático em múltiplos servidores",
        "Criptografia de dados replicados"
      ],
      "resposta_correta": 0,
      "explicacao": "Read Replicas usam Master-Slave Replication onde o master recebe escritas e as propaga assincronamente para slaves que servem leituras, melhorando performance e disponibilidade.",
      "dificuldade": "dificil",
      "tema": "Replicação e Alta Disponibilidade"
    },
    {
      "id": 71,
      "pergunta": "Analise as afirmações sobre o Modelo Entidade-Relacionamento (MER):\n\nI. Uma entidade fraca depende de uma entidade forte para existir e sua chave primária inclui a chave da entidade forte.\nII. Relacionamentos do tipo 1:N devem ser representados com chave estrangeira no lado \"N\".\nIII. Atributos multivalorados devem sempre ser transformados em entidades no esquema relacional.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II", 
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 3,
      "explicacao": "Apenas II e III estão corretas. II: Relacionamentos 1:N são representados com FK no lado N. III: Atributos multivalorados devem ser transformados em entidades. I está incorreta: entidades fracas têm chave parcial, não incluem a chave da entidade forte.",
      "dificuldade": "dificil",
      "tema": "Modelo Entidade-Relacionamento"
    },
    {
      "id": 72,
      "pergunta": "Analise as afirmações sobre normalização de banco de dados:\n\nI. A Primeira Forma Normal (1NF) elimina grupos repetitivos e garante atomicidade dos atributos.\nII. A Segunda Forma Normal (2NF) elimina dependências parciais de chave primária composta.\nIII. A Terceira Forma Normal (3NF) elimina dependências transitivas entre atributos não-chave.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 4,
      "explicacao": "Todas as afirmações estão corretas. I: 1NF garante atomicidade e elimina grupos repetitivos. II: 2NF elimina dependências parciais. III: 3NF elimina dependências transitivas.",
      "dificuldade": "dificil",
      "tema": "Normalização"
    },
    {
      "id": 73,
      "pergunta": "Analise as afirmações sobre transações em banco de dados:\n\nI. Atomicidade garante que todas as operações de uma transação sejam executadas ou nenhuma seja executada.\nII. Consistência garante que a transação leve o banco de um estado válido para outro estado válido.\nIII. Isolamento garante que transações concorrentes não interfiram umas nas outras.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 4,
      "explicacao": "Todas as afirmações estão corretas e definem as propriedades ACID: Atomicidade (tudo ou nada), Consistência (estados válidos), Isolamento (não interferência) e Durabilidade (persistência).",
      "dificuldade": "medio",
      "tema": "Propriedades ACID"
    },
    {
      "id": 74,
      "pergunta": "Analise as afirmações sobre índices em banco de dados:\n\nI. Índices B-tree são eficientes para consultas de igualdade e range.\nII. Índices Hash são ideais para consultas de range e ordenação.\nIII. Índices compostos podem ser usados para consultas que envolvem múltiplas colunas.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas I e III",
        "I, II e III"
      ],
      "resposta_correta": 3,
      "explicacao": "Apenas I e III estão corretas. I: B-tree é eficiente para igualdade e range. III: Índices compostos suportam consultas multi-coluna. II está incorreta: Hash é eficiente apenas para igualdade, não para range.",
      "dificuldade": "dificil",
      "tema": "Estruturas de Indexação"
    },
    {
      "id": 75,
      "pergunta": "Analise as afirmações sobre JOINs em SQL:\n\nI. INNER JOIN retorna apenas registros que têm correspondência em ambas as tabelas.\nII. LEFT JOIN retorna todos os registros da tabela à esquerda, mesmo sem correspondência.\nIII. FULL OUTER JOIN retorna todos os registros de ambas as tabelas, com NULLs onde não há correspondência.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 4,
      "explicacao": "Todas as afirmações estão corretas. INNER JOIN: apenas correspondências. LEFT JOIN: todos da esquerda. FULL OUTER JOIN: todos de ambas as tabelas com NULLs onde necessário.",
      "dificuldade": "medio",
      "tema": "Operações JOIN"
    },
    {
      "id": 76,
      "pergunta": "Analise as afirmações sobre stored procedures:\n\nI. Stored procedures são pré-compilados e armazenados no servidor de banco de dados.\nII. Stored procedures podem retornar múltiplos conjuntos de resultados.\nIII. Stored procedures sempre executam mais rapidamente que consultas SQL equivalentes.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 2,
      "explicacao": "Apenas I e II estão corretas. I: Stored procedures são pré-compilados no servidor. II: Podem retornar múltiplos resultados. III está incorreta: nem sempre são mais rápidos, dependem do contexto.",
      "dificuldade": "medio",
      "tema": "Stored Procedures"
    },
    {
      "id": 77,
      "pergunta": "Analise as afirmações sobre triggers em banco de dados:\n\nI. Triggers são executados automaticamente em resposta a eventos específicos.\nII. Triggers podem ser definidos para executar antes ou depois de operações DML.\nIII. Triggers podem modificar dados em outras tabelas durante sua execução.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 4,
      "explicacao": "Todas as afirmações estão corretas. Triggers executam automaticamente (I), podem ser BEFORE/AFTER (II) e podem modificar outras tabelas (III).",
      "dificuldade": "dificil",
      "tema": "Triggers"
    },
    {
      "id": 78,
      "pergunta": "Analise as afirmações sobre views em banco de dados:\n\nI. Views são consultas armazenadas que aparecem como tabelas virtuais.\nII. Views podem ser atualizáveis se atendem a certos critérios.\nIII. Views sempre melhoram a performance das consultas.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 2,
      "explicacao": "Apenas I e II estão corretas. I: Views são consultas armazenadas. II: Views podem ser atualizáveis. III está incorreta: views nem sempre melhoram performance, podem até degradar.",
      "dificuldade": "medio",
      "tema": "Views"
    },
    {
      "id": 79,
      "pergunta": "Analise as afirmações sobre backup e recuperação:\n\nI. Backup completo copia todos os dados do banco de dados.\nII. Backup incremental copia apenas as mudanças desde o último backup.\nIII. Log shipping é uma técnica de alta disponibilidade que replica logs de transação.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 4,
      "explicacao": "Todas as afirmações estão corretas. Backup completo (I), incremental (II) e log shipping (III) são técnicas válidas de backup e recuperação.",
      "dificuldade": "medio",
      "tema": "Backup e Recuperação"
    },
    {
      "id": 80,
      "pergunta": "Analise as afirmações sobre bancos de dados NoSQL:\n\nI. Document stores armazenam dados em formato semi-estruturado como JSON.\nII. Key-value stores são ideais para consultas complexas e relacionamentos.\nIII. Graph databases são otimizados para dados com relacionamentos complexos.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas I e III",
        "I, II e III"
      ],
      "resposta_correta": 3,
      "explicacao": "Apenas I e III estão corretas. I: Document stores usam JSON/XML. III: Graph databases são para relacionamentos complexos. II está incorreta: key-value stores são para consultas simples, não complexas.",
      "dificuldade": "dificil",
      "tema": "Bancos NoSQL"
    },
    {
      "id": 81,
      "pergunta": "Analise as afirmações sobre integridade referencial:\n\nI. Integridade referencial garante consistência entre tabelas relacionadas.\nII. Chaves estrangeiras são usadas para implementar integridade referencial.\nIII. CASCADE DELETE remove registros dependentes quando o registro pai é deletado.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 4,
      "explicacao": "Todas as afirmações estão corretas. Integridade referencial garante consistência (I), usa FKs (II) e CASCADE DELETE remove dependentes (III).",
      "dificuldade": "medio",
      "tema": "Integridade Referencial"
    },
    {
      "id": 82,
      "pergunta": "Analise as afirmações sobre otimização de consultas:\n\nI. O otimizador de consultas escolhe o plano de execução mais eficiente.\nII. Índices podem melhorar significativamente a performance de consultas.\nIII. Consultas com SELECT * sempre são mais eficientes que especificar colunas.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 2,
      "explicacao": "Apenas I e II estão corretas. I: Otimizador escolhe melhor plano. II: Índices melhoram performance. III está incorreta: SELECT * pode ser menos eficiente que colunas específicas.",
      "dificuldade": "dificil",
      "tema": "Otimização de Consultas"
    },
    {
      "id": 83,
      "pergunta": "Analise as afirmações sobre níveis de isolamento:\n\nI. READ UNCOMMITTED permite leitura de dados não confirmados.\nII. READ COMMITTED previne dirty reads mas permite non-repeatable reads.\nIII. SERIALIZABLE é o nível mais restritivo e previne todas as anomalias.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 4,
      "explicacao": "Todas as afirmações estão corretas. READ UNCOMMITTED permite dirty reads (I), READ COMMITTED previne dirty reads mas permite non-repeatable reads (II), SERIALIZABLE previne todas as anomalias (III).",
      "dificuldade": "dificil",
      "tema": "Níveis de Isolamento"
    },
    {
      "id": 84,
      "pergunta": "Analise as afirmações sobre funções de agregação em SQL:\n\nI. COUNT(*) conta todos os registros, incluindo aqueles com valores NULL.\nII. SUM() ignora valores NULL ao calcular a soma.\nIII. AVG() calcula a média considerando apenas valores não-NULL.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 4,
      "explicacao": "Todas as afirmações estão corretas. COUNT(*) conta todos incluindo NULLs (I), SUM() ignora NULLs (II), AVG() considera apenas não-NULLs (III).",
      "dificuldade": "medio",
      "tema": "Funções de Agregação"
    },
    {
      "id": 85,
      "pergunta": "Analise as afirmações sobre particionamento de tabelas:\n\nI. Particionamento horizontal divide uma tabela em partições baseadas em valores de colunas.\nII. Particionamento vertical divide uma tabela em colunas diferentes.\nIII. Particionamento pode melhorar a performance de consultas e manutenção.\n\nAssinale a alternativa correta:",
      "opcoes": [
        "Apenas I",
        "Apenas II",
        "Apenas I e II",
        "Apenas II e III",
        "I, II e III"
      ],
      "resposta_correta": 4,
      "explicacao": "Todas as afirmações estão corretas. Particionamento horizontal divide por valores (I), vertical por colunas (II), e ambos podem melhorar performance e manutenção (III).",
      "dificuldade": "dificil",
      "tema": "Particionamento"
    }
  ],
  "instrucoes": {
    "como_usar": "Selecione a resposta correta para cada pergunta. Cada pergunta tem apenas uma resposta correta.",
    "pontuacao": "Cada resposta correta vale 1 ponto. Total máximo: 85 pontos.",
    "nivel_aprovacao": "Para ser considerado aprovado no nível iniciante, você deve acertar pelo menos 61 questões (72%). Para nível avançado, acerte pelo menos 73 questões (86%)."
  },
  "temas_abordados": [
    "Conceitos básicos de banco de dados",
    "Comandos SQL fundamentais (SELECT, INSERT, UPDATE, DELETE)",
    "Estruturas de dados (tabelas, chaves, índices)",
    "Relacionamentos entre tabelas",
    "Normalização básica e avançada",
    "Transações e propriedades ACID",
    "Views e stored procedures",
    "Joins e consultas básicas",
    "Funções de agregação (COUNT, SUM, AVG, MAX, MIN)",
    "Triggers e procedimentos automáticos",
    "Backup e recuperação de dados",
    "Bancos de dados NoSQL e Document Stores",
    "Integridade referencial e consistência",
    "Locks e controle de concorrência",
    "Logs de transação e checkpoints",
    "Clusters e alta disponibilidade",
    "Funções de manipulação de strings",
    "Cursors e navegação de dados",
    "Transações distribuídas e Two-Phase Commit",
    "Schema e estrutura lógica",
    "Sistemas distribuídos e CAP Theorem",
    "Estruturas de dados avançadas (B-tree, B+ tree)",
    "Controle de concorrência avançado (MVCC)",
    "Otimização de consultas e Query Planning",
    "Níveis de isolamento e anomalias de concorrência",
    "Sharding e escalabilidade horizontal",
    "Detecção e prevenção de deadlocks",
    "Views materializadas e cache de consultas",
    "Indexação temporal e consultas de range",
    "Algoritmos distribuídos (Consistent Hashing)",
    "Replicação Master-Slave e Read Replicas",
    "Arquiteturas OLTP vs OLAP",
    "Write-Ahead Logging e recuperação",
    "Anomalias de concorrência (Phantom Read, Write Skew)",
    "Estratégias de execução (Lazy vs Eager Evaluation)",
    "Modelo Entidade-Relacionamento (MER) e diagramas",
    "Análise de afirmações e múltipla escolha combinada",
    "Particionamento horizontal e vertical de tabelas",
    "Operações JOIN e relacionamentos entre tabelas",
    "Stored Procedures e programação em banco de dados",
    "Triggers e automação de processos",
    "Views e consultas armazenadas",
    "Backup completo, incremental e log shipping",
    "Bancos NoSQL: Document, Key-Value e Graph stores",
    "Integridade referencial e CASCADE operations",
    "Otimização de consultas e planos de execução",
    "Níveis de isolamento e controle de concorrência",
    "Funções de agregação e tratamento de valores NULL"
  ]
};
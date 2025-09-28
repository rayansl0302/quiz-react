import { Pergunta } from '../types/Quiz';

// Função para embaralhar array usando algoritmo Fisher-Yates
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Função para selecionar perguntas aleatórias
export const getRandomQuestions = (questions: Pergunta[], count?: number): Pergunta[] => {
  if (!count || questions.length <= count) {
    return shuffleArray(questions);
  }
  
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, count);
};

// Função para gerar um novo conjunto de perguntas aleatórias
export const generateNewQuiz = (allQuestions: Pergunta[]): Pergunta[] => {
  return getRandomQuestions(allQuestions);
};

// Função para filtrar perguntas por dificuldade
export const filterQuestionsByDifficulty = (
  questions: Pergunta[], 
  difficulty: 'facil' | 'medio' | 'dificil' | 'todos'
): Pergunta[] => {
  if (difficulty === 'todos') {
    return questions;
  }
  return questions.filter(q => q.dificuldade === difficulty);
};

// Função para obter estatísticas de perguntas por dificuldade
export const getDifficultyStats = (questions: Pergunta[]) => {
  return {
    facil: questions.filter(q => q.dificuldade === 'facil').length,
    medio: questions.filter(q => q.dificuldade === 'medio').length,
    dificil: questions.filter(q => q.dificuldade === 'dificil').length,
    total: questions.length
  };
};

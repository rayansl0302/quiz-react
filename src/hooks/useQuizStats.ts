import { useState, useEffect } from 'react';

export interface QuizStats {
  totalCorrect: number;
  totalIncorrect: number;
  totalAttempts: number;
  lastQuizScore: number;
  lastQuizDate: string;
  bestScore: number;
  averageScore: number;
}

const STORAGE_KEY = 'quiz-stats';

const defaultStats: QuizStats = {
  totalCorrect: 0,
  totalIncorrect: 0,
  totalAttempts: 0,
  lastQuizScore: 0,
  lastQuizDate: '',
  bestScore: 0,
  averageScore: 0,
};

export const useQuizStats = () => {
  const [stats, setStats] = useState<QuizStats>(defaultStats);

  // Carregar estatísticas do localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem(STORAGE_KEY);
    if (savedStats) {
      try {
        const parsedStats = JSON.parse(savedStats);
        setStats({ ...defaultStats, ...parsedStats });
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
        setStats(defaultStats);
      }
    }
  }, []);

  // Salvar estatísticas no localStorage
  const saveStats = (newStats: QuizStats) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
      setStats(newStats);
    } catch (error) {
      console.error('Erro ao salvar estatísticas:', error);
    }
  };

  // Adicionar resultado de uma pergunta
  const addQuestionResult = (isCorrect: boolean) => {
    const newStats = {
      ...stats,
      totalCorrect: stats.totalCorrect + (isCorrect ? 1 : 0),
      totalIncorrect: stats.totalIncorrect + (isCorrect ? 0 : 1),
    };
    saveStats(newStats);
  };

  // Finalizar quiz
  const finishQuiz = (score: number, totalQuestions: number) => {
    const newAttempts = stats.totalAttempts + 1;
    const newBestScore = Math.max(stats.bestScore, score);
    
    // Calcular nova média
    const totalPoints = (stats.averageScore * stats.totalAttempts) + score;
    const newAverageScore = Math.round(totalPoints / newAttempts);

    const newStats: QuizStats = {
      ...stats,
      totalAttempts: newAttempts,
      lastQuizScore: score,
      lastQuizDate: new Date().toLocaleDateString('pt-BR'),
      bestScore: newBestScore,
      averageScore: newAverageScore,
    };

    saveStats(newStats);
  };

  // Limpar histórico
  const clearStats = () => {
    localStorage.removeItem(STORAGE_KEY);
    setStats(defaultStats);
  };

  // Limpar apenas o histórico de perguntas (mantém tentativas)
  const clearQuestionHistory = () => {
    const newStats = {
      ...stats,
      totalCorrect: 0,
      totalIncorrect: 0,
    };
    saveStats(newStats);
  };

  // Obter estatísticas atuais do quiz em andamento
  const getCurrentQuizStats = () => {
    const currentCorrect = stats.totalCorrect;
    const currentIncorrect = stats.totalIncorrect;
    const currentTotal = currentCorrect + currentIncorrect;
    
    return {
      currentCorrect,
      currentIncorrect,
      currentTotal,
      currentPercentage: currentTotal > 0 ? Math.round((currentCorrect / currentTotal) * 100) : 0,
    };
  };

  return {
    stats,
    addQuestionResult,
    finishQuiz,
    clearStats,
    clearQuestionHistory,
    getCurrentQuizStats,
  };
};

export interface Pergunta {
  id: number;
  pergunta: string;
  opcoes: string[];
  resposta_correta: number;
  explicacao: string;
  dificuldade: 'facil' | 'medio' | 'dificil';
  tema: string;
}

export interface QuizData {
  titulo: string;
  nivel: string;
  total_perguntas: number;
  perguntas: Pergunta[];
  instrucoes: {
    como_usar: string;
    pontuacao: string;
    nivel_aprovacao: string;
  };
  temas_abordados: string[];
}

export interface QuizResponse {
  quiz_banco_dados: QuizData;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  userAnswers: (number | null)[];
  isAnswered: boolean;
  showFeedback: boolean;
  isCompleted: boolean;
  selectedDifficulty: 'facil' | 'medio' | 'dificil' | 'todos';
}

export interface DifficultyLevel {
  id: 'facil' | 'medio' | 'dificil' | 'todos';
  name: string;
  description: string;
  color: string;
  icon: string;
  questionCount: number;
}

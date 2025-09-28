import React, { useState, useEffect } from 'react';
import { QuizState } from '../types/Quiz';
import { quizData } from '../data/quizData';
import { useQuizStats } from '../hooks/useQuizStats';
import { generateNewQuiz } from '../utils/quizUtils';
import DifficultySelector from './DifficultySelector';
import Question from './Question';
import Results from './Results';
import Loading from './Loading';
import StatsCounter from './StatsCounter';
import './Quiz.css';

const Quiz: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showDifficultySelector, setShowDifficultySelector] = useState(true);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState(quizData.perguntas);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    userAnswers: [],
    isAnswered: false,
    showFeedback: false,
    isCompleted: false,
    selectedDifficulty: 'todos',
  });

  const { addQuestionResult, finishQuiz, getCurrentQuizStats, clearQuestionHistory } = useQuizStats();

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState.isAnswered) return;

    const currentQuestionData = currentQuizQuestions[quizState.currentQuestion];
    const isCorrect = answerIndex === currentQuestionData.resposta_correta;
    
    const newUserAnswers = [...quizState.userAnswers];
    newUserAnswers[quizState.currentQuestion] = answerIndex;

    // Salvar resultado no localStorage
    addQuestionResult(isCorrect);

    setQuizState(prev => ({
      ...prev,
      isAnswered: true,
      showFeedback: true,
      userAnswers: newUserAnswers,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < currentQuizQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        isAnswered: false,
        showFeedback: false,
      }));
    } else {
      // Finalizar quiz e salvar estatísticas
      finishQuiz(quizState.score, currentQuizQuestions.length);
      setQuizState(prev => ({
        ...prev,
        isCompleted: true,
      }));
    }
  };

  const handleSelectDifficulty = (difficulty: 'facil' | 'medio' | 'dificil' | 'todos') => {
    // Zerar histórico de acertos e erros para o novo nível
    clearQuestionHistory();
    
    let filteredQuestions = quizData.perguntas;
    
    if (difficulty !== 'todos') {
      filteredQuestions = quizData.perguntas.filter(q => q.dificuldade === difficulty);
    }
    
    const newQuestions = generateNewQuiz(filteredQuestions);
    setCurrentQuizQuestions(newQuestions);
    setShowDifficultySelector(false);
    
    setQuizState({
      currentQuestion: 0,
      score: 0,
      userAnswers: new Array(newQuestions.length).fill(null),
      isAnswered: false,
      showFeedback: false,
      isCompleted: false,
      selectedDifficulty: difficulty,
    });
  };

  const handleChangeDifficulty = () => {
    const isQuizInProgress = quizState.currentQuestion > 0 || quizState.score > 0;
    
    if (isQuizInProgress) {
      const confirmChange = window.confirm(
        'Você tem certeza que deseja alterar a dificuldade? Seu progresso atual será perdido e o histórico será zerado.'
      );
      
      if (confirmChange) {
        setShowDifficultySelector(true);
      }
    } else {
      setShowDifficultySelector(true);
    }
  };

  const handleRestartQuiz = () => {
    setShowDifficultySelector(true);
    setQuizState({
      currentQuestion: 0,
      score: 0,
      userAnswers: [],
      isAnswered: false,
      showFeedback: false,
      isCompleted: false,
      selectedDifficulty: 'todos',
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (showDifficultySelector) {
    return <DifficultySelector onSelectDifficulty={handleSelectDifficulty} />;
  }

  if (quizState.isCompleted) {
    return (
      <Results
        score={quizState.score}
        totalQuestions={currentQuizQuestions.length}
        userAnswers={quizState.userAnswers}
        questions={currentQuizQuestions}
        onRestart={handleRestartQuiz}
      />
    );
  }

  const currentQuestionData = currentQuizQuestions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / currentQuizQuestions.length) * 100;
  const currentStats = getCurrentQuizStats();

  const getDifficultyInfo = () => {
    switch (quizState.selectedDifficulty) {
      case 'facil': return { name: 'Fácil', icon: '🌱', color: '#48bb78' };
      case 'medio': return { name: 'Médio', icon: '🌿', color: '#ed8936' };
      case 'dificil': return { name: 'Difícil', icon: '🌳', color: '#f56565' };
      case 'todos': return { name: 'Todos os Níveis', icon: '🎯', color: '#667eea' };
      default: return { name: 'Todos os Níveis', icon: '🎯', color: '#667eea' };
    }
  };

  const difficultyInfo = getDifficultyInfo();

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <div className="quiz-title-section">
          <h1>🎯 Quiz de Banco de Dados</h1>
          <div className="header-controls">
            <div className="difficulty-badge" style={{ backgroundColor: difficultyInfo.color }}>
              <span className="difficulty-icon">{difficultyInfo.icon}</span>
              <span className="difficulty-name">{difficultyInfo.name}</span>
            </div>
            <button 
              className="btn btn-secondary btn-small"
              onClick={handleChangeDifficulty}
            >
              🔄 Alterar Nível
            </button>
          </div>
        </div>
        
        <div className="progress-info">
          <span className="question-counter">
            Pergunta {quizState.currentQuestion + 1} de {currentQuizQuestions.length}
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <StatsCounter 
          correct={currentStats.currentCorrect}
          incorrect={currentStats.currentIncorrect}
          total={currentStats.currentTotal}
        />
      </header>

      <main className="quiz-content">
        <Question
          question={currentQuestionData}
          selectedAnswer={quizState.userAnswers[quizState.currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          showFeedback={quizState.showFeedback}
          isAnswered={quizState.isAnswered}
        />

        {quizState.showFeedback && (
          <div className="controls">
            <button 
              className="btn btn-primary"
              onClick={handleNextQuestion}
            >
              {quizState.currentQuestion < currentQuizQuestions.length - 1 
                ? 'Próxima Pergunta' 
                : 'Ver Resultados'
              }
            </button>
            <button 
              className="btn btn-secondary"
              onClick={handleChangeDifficulty}
            >
              Alterar Dificuldade
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Quiz;

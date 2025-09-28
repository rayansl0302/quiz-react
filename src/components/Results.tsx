import React from 'react';
import { Pergunta } from '../types/Quiz';
import { useQuizStats } from '../hooks/useQuizStats';
import StatsCounter from './StatsCounter';
import './Results.css';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  userAnswers: (number | null)[];
  questions: Pergunta[];
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  userAnswers,
  questions,
  onRestart,
}) => {
  const { stats, clearStats } = useQuizStats();
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassed = percentage >= 72; // Nível de aprovação do quiz

  const getPerformanceMessage = () => {
    if (percentage >= 90) {
      return { message: 'Excelente!', emoji: '🏆' };
    } else if (percentage >= 80) {
      return { message: 'Muito bom!', emoji: '👏' };
    } else if (percentage >= 72) {
      return { message: 'Parabéns!', emoji: '🎉' };
    } else {
      return { message: 'Continue estudando!', emoji: '📚' };
    }
  };

  const performance = getPerformanceMessage();

  return (
    <div className="results-container">
      <div className="results-content">
        <div className="results-header">
          <div className="performance-emoji">{performance.emoji}</div>
          <h2 className="results-title">Quiz Concluído!</h2>
          <p className="performance-message">{performance.message}</p>
        </div>

        <div className="score-container">
          <div className="score-circle">
            <div className="score-number">{score}</div>
            <div className="score-label">acertos</div>
          </div>
          
          <div className="score-details">
            <div className="score-stats">
              <p>Você acertou <strong>{score}</strong> de <strong>{totalQuestions}</strong> perguntas</p>
              <p className="percentage">{percentage}%</p>
            </div>
            
            <div className="pass-status">
              {isPassed ? (
                <div className="status-passed">
                  <span className="status-icon">✅</span>
                  <span>Nível aprovado! (≥72%)</span>
                </div>
              ) : (
                <div className="status-failed">
                  <span className="status-icon">📖</span>
                  <span>Continue estudando para atingir 72%</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Estatísticas Gerais */}
        <div className="general-stats">
          <h3>📊 Suas Estatísticas Gerais</h3>
          <StatsCounter 
            correct={stats.totalCorrect}
            incorrect={stats.totalIncorrect}
            total={stats.totalCorrect + stats.totalIncorrect}
          />
          
          <div className="additional-stats">
            <div className="stat-item">
              <span className="stat-label">Total de Tentativas:</span>
              <span className="stat-value">{stats.totalAttempts}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Melhor Pontuação:</span>
              <span className="stat-value">{stats.bestScore}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Média de Acertos:</span>
              <span className="stat-value">{stats.averageScore}%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Último Quiz:</span>
              <span className="stat-value">{stats.lastQuizDate || 'Nunca'}</span>
            </div>
          </div>
        </div>

        <div className="review-section">
          <h3>Revisão das Perguntas:</h3>
          <div className="questions-review">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.resposta_correta;
              
              return (
                <div key={question.id} className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="review-header">
                    <span className="question-number">Q{index + 1}</span>
                    <span className="result-icon">
                      {isCorrect ? '✅' : '❌'}
                    </span>
                  </div>
                  <p className="review-question">{question.pergunta}</p>
                  <div className="review-answers">
                    <div className="user-answer">
                      <strong>Sua resposta:</strong> {
                        userAnswer !== null 
                          ? `${String.fromCharCode(65 + userAnswer)}) ${question.opcoes[userAnswer]}`
                          : 'Não respondida'
                      }
                    </div>
                    {!isCorrect && (
                      <div className="correct-answer">
                        <strong>Resposta correta:</strong> {String.fromCharCode(65 + question.resposta_correta)}) {question.opcoes[question.resposta_correta]}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="results-actions">
          <button 
            className="btn btn-primary btn-large"
            onClick={onRestart}
          >
            🎯 Escolher Novo Nível
          </button>
          <button 
            className="btn btn-secondary"
            onClick={clearStats}
          >
            Limpar Histórico Completo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;

import React from 'react';
import { Pergunta } from '../types/Quiz';
import './Question.css';

interface QuestionProps {
  question: Pergunta;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  showFeedback: boolean;
  isAnswered: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showFeedback,
  isAnswered,
}) => {
  const isCorrect = selectedAnswer === question.resposta_correta;

  const getOptionClassName = (index: number) => {
    let className = 'option';
    
    if (showFeedback) {
      if (index === question.resposta_correta) {
        className += ' correct';
      } else if (index === selectedAnswer && index !== question.resposta_correta) {
        className += ' incorrect';
      } else {
        className += ' disabled';
      }
    } else if (selectedAnswer === index) {
      className += ' selected';
    }

    return className;
  };

  const getDifficultyInfo = () => {
    switch (question.dificuldade) {
      case 'facil': return { name: 'Fácil', icon: '🌱', color: '#48bb78' };
      case 'medio': return { name: 'Médio', icon: '🌿', color: '#ed8936' };
      case 'dificil': return { name: 'Difícil', icon: '🌳', color: '#f56565' };
      default: return { name: 'Médio', icon: '🌿', color: '#ed8936' };
    }
  };

  const difficultyInfo = getDifficultyInfo();

  return (
    <div className="question-container">
      <div className="question-content">
        <div className="question-header">
          <div className="question-meta">
            <div className="difficulty-indicator" style={{ backgroundColor: difficultyInfo.color }}>
              <span className="difficulty-icon">{difficultyInfo.icon}</span>
              <span className="difficulty-text">{difficultyInfo.name}</span>
            </div>
            <div className="question-theme">{question.tema}</div>
          </div>
        </div>
        <h2 
          className="question-text" 
          dangerouslySetInnerHTML={{ __html: question.pergunta }}
        />
        
        <div className="options-container">
          {question.opcoes.map((opcao, index) => (
            <button
              key={index}
              className={getOptionClassName(index)}
              onClick={() => onAnswerSelect(index)}
              disabled={isAnswered}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{opcao}</span>
            </button>
          ))}
        </div>
      </div>

      {showFeedback && (
        <div className={`feedback-container ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="feedback-content">
            <div className="feedback-icon">
              {isCorrect ? '✅' : '❌'}
            </div>
            <div className="feedback-text">
              <h3 className="feedback-title">
                {isCorrect ? 'Correto!' : 'Incorreto!'}
              </h3>
              <p className="feedback-explanation">
                {question.explicacao}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;

import React from 'react';
import { DifficultyLevel } from '../types/Quiz';
import './DifficultySelector.css';

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: 'facil' | 'medio' | 'dificil' | 'todos') => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ onSelectDifficulty }) => {
  const difficultyLevels: DifficultyLevel[] = [
    {
      id: 'facil',
      name: 'Fácil',
      description: 'Conceitos básicos e fundamentais',
      color: '#48bb78',
      icon: '🌱',
      questionCount: 20
    },
    {
      id: 'medio',
      name: 'Médio',
      description: 'Conceitos intermediários e práticos',
      color: '#ed8936',
      icon: '🌿',
      questionCount: 25
    },
    {
      id: 'dificil',
      name: 'Difícil',
      description: 'Conceitos avançados e complexos',
      color: '#f56565',
      icon: '🌳',
      questionCount: 15
    },
    {
      id: 'todos',
      name: 'Todos os Níveis',
      description: 'Quiz completo com todas as perguntas',
      color: '#667eea',
      icon: '🎯',
      questionCount: 50
    }
  ];

  return (
    <div className="difficulty-selector">
      <div className="selector-header">
        <h1>🎯 Quiz de Banco de Dados</h1>
        <p className="selector-subtitle">
          Escolha o nível de dificuldade para começar seu estudo
        </p>
      </div>

      <div className="difficulty-grid">
        {difficultyLevels.map((level) => (
          <div
            key={level.id}
            className="difficulty-card"
            onClick={() => onSelectDifficulty(level.id)}
            style={{ '--card-color': level.color } as React.CSSProperties}
          >
            <div className="card-icon">{level.icon}</div>
            <h3 className="card-title">{level.name}</h3>
            <p className="card-description">{level.description}</p>
            <div className="card-stats">
              <span className="question-count">{level.questionCount} perguntas</span>
            </div>
            <div className="card-overlay">
              <span className="start-text">Começar Quiz</span>
            </div>
          </div>
        ))}
      </div>

      <div className="selector-info">
        <div className="info-card">
          <h4>📚 Sobre o Quiz</h4>
          <ul>
            <li><strong>Fácil:</strong> Conceitos básicos, comandos SQL simples</li>
            <li><strong>Médio:</strong> Relacionamentos, funções, views</li>
            <li><strong>Difícil:</strong> Transações, concorrência, otimização</li>
            <li><strong>Todos:</strong> Quiz completo com 50 perguntas</li>
          </ul>
        </div>
        
        <div className="info-card">
          <h4>🎯 Sistema de Pontuação</h4>
          <ul>
            <li><strong>72%</strong> ou mais para aprovação</li>
            <li><strong>Feedback imediato</strong> com explicações</li>
            <li><strong>Histórico zerado</strong> a cada novo nível</li>
            <li><strong>Perguntas aleatórias</strong> a cada tentativa</li>
          </ul>
        </div>
        
        <div className="info-card highlight">
          <h4>🔄 Histórico Independente</h4>
          <p>
            Cada nível de dificuldade tem seu próprio contador de acertos e erros. 
            Ao selecionar um novo nível, o histórico é automaticamente zerado para 
            uma experiência limpa e focada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelector;

import React from 'react';
import './StatsCounter.css';

interface StatsCounterProps {
  correct: number;
  incorrect: number;
  total: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ correct, incorrect, total }) => {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="stats-counter">
      <div className="stats-item correct">
        <div className="stats-icon">✅</div>
        <div className="stats-info">
          <span className="stats-number">{correct}</span>
          <span className="stats-label">Acertos</span>
        </div>
      </div>
      
      <div className="stats-item incorrect">
        <div className="stats-icon">❌</div>
        <div className="stats-info">
          <span className="stats-number">{incorrect}</span>
          <span className="stats-label">Erros</span>
        </div>
      </div>
      
      <div className="stats-item percentage">
        <div className="stats-icon">📊</div>
        <div className="stats-info">
          <span className="stats-number">{percentage}%</span>
          <span className="stats-label">Precisão</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;

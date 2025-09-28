import React from 'react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2>Carregando Quiz...</h2>
        <p>Preparando suas perguntas de estudo</p>
      </div>
    </div>
  );
};

export default Loading;

import React, { useState, useEffect } from 'react';
import AlunoForm from './pages/AlunoForm';
import AlunoList from './pages/AlunoList';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      <button onClick={toggleTheme} className="dark-mode-toggle">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <h1>Gerenciamento de Alunos</h1>
      <div className="form-container">
        <AlunoForm />
      </div>
      <div className="list-container">
        <AlunoList />
      </div>
    </div>
  );
}

export default App;

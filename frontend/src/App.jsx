import React from 'react';
import AlunoForm from './pages/AlunoForm';
import AlunoList from './pages/AlunoList';
import './App.css';

function App() {
  return (
    <div className="app-container">
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

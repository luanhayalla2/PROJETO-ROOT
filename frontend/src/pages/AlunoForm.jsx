import React, { useState } from 'react';
import api from '../services/api';

export default function AlunoForm() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');

    try {
      const payload = { nome, idade: idade ? Number(idade) : undefined, turma, nota: 0 };
      const res = await api.post('/alunos', payload);
      setMsg(`Aluno criado: ${res.data.nome}`);
      setNome('');
      setIdade('');
      setTurma('');

      window.dispatchEvent(new Event('alunoCreated'));
    } catch (err) {
      console.error(err);
      setMsg('Erro ao criar aluno. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Criar Novo Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Idade:</label>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Turma:</label>
          <input
            type="text"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Salvando...' : 'Salvar Aluno'}
        </button>
      </form>

      {msg && (
        <div className={`message ${msg.includes('Erro') ? 'error' : 'success'}`}>
          {msg}
        </div>
      )}
    </div>
  );
}

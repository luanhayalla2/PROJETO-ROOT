import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function AlunoList() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchAlunos = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await api.get('/alunos');
      setAlunos(res.data);
    } catch (err) {
      console.error(err);
      setError('Erro ao buscar alunos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja deletar este aluno?')) return;
    try {
      await api.delete(`/alunos/${id}`);
      setAlunos(prev => prev.filter(aluno => aluno._id !== id));
    } catch (err) {
      console.error(err);
      alert('Erro ao deletar aluno!');
    }
  };

  useEffect(() => {
    fetchAlunos();
    const handler = () => fetchAlunos();
    window.addEventListener('alunoCreated', handler);
    return () => {
      window.removeEventListener('alunoCreated', handler);
    };
  }, []);

  if (loading) return <div className="loading">Carregando alunos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <div className="table-container">
        <table className="alunos-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Turma</th>
              <th>Nota</th>
              <th>Presenças</th>
              <th>Faltas</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno._id}>
                <td>{aluno.nome}</td>
                <td>{aluno.idade ?? '-'}</td>
                <td>{aluno.turma ?? '-'}</td>
                <td>{aluno.nota ?? 0}</td>
                <td>{aluno.presencas ?? 0}</td>
                <td>{aluno.faltas ?? 0}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => {
                      const novoNome = prompt('Novo nome:', aluno.nome);
                      if (novoNome) {
                        api.patch(`/alunos/${aluno._id}`, { nome: novoNome })
                          .then(res => {
                            setAlunos(prev => prev.map(p => p._id === aluno._id ? res.data : p));
                          })
                          .catch(err => {
                            console.error(err);
                            alert('Erro ao atualizar.');
                          });
                      }
                    }}
                  >
                    Editar
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(aluno._id)}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

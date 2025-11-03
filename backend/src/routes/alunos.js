const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/alunosController');    

// Rota para obter todos os alunos
router.get('/', ctrl.getAllAlunos);

// Rota para obter um aluno por ID
router.get('/:id', ctrl.getAlunoById);

// Rota para criar um novo aluno
router.post('/', ctrl.createAluno);

// Rota para atualizar um aluno existente
router.put('/:id', ctrl.updateAluno);

// Rota para deletar um aluno
router.delete('/:id', ctrl.deleteAluno);

// Rota para editar um aluno
router.patch('/:id',ctrl.editAluno);

// Rota para aplicar um patch em um aluno
router.patch('/:id', ctrl.patchAluno);

// Rota para buscar alunos por nome
router.get('/busca', ctrl.searchAlunosByName);

// Rota para filtrar alunos por turma
router.get('/filtro', ctrl.filterAlunosByTurma);

// Rota para contar total de alunos
router.get('/contagem', ctrl.countAlunos);

module.exports = router;

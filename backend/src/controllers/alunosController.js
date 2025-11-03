const Aluno = require('../models/Alunos');

// GET /api/alunos
exports.getAllAlunos = async (req, res) => {
    try {
        // Corrige chamada ao Mongoose: aplicar sort antes do await
        const alunos = await Aluno.find().sort({ criadoEm: -1 });
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar alunos', error });
    }
};

// GET/api/alunos/:id
exports.getAlunoById = async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id);  
        if (!aluno) {
            return res.status(404).json({ message: 'Aluno não encontrado' });
        }
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar aluno', error });
    }
};

// POST /api/alunos
exports.createAluno = async (req, res) => {
    try {
        const { nome, idade, turma } = req.body;
        const novoAluno = new Aluno({ nome, idade, turma });
        const alunoSalvo = await novoAluno.save();
        res.status(201).json(alunoSalvo);
    }catch (error) {
        res.status(500).json({ message: 'Erro ao criar aluno', error });
    }
};

// PUT /api/alunos/:id
exports.updateAluno = async (req, res) => {
    try {
        const { nome, idade, turma } = req.body;
        const alunoAtualizado = await Aluno.findByIdAndUpdate(
            req.params.id,
            { nome, idade, turma },
            { new: true }
        );
        if (!alunoAtualizado) {
            return res.status(404).json({ message: 'Aluno não encontrado' });
        }
        res.json(alunoAtualizado);
    }catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar aluno', error });
    }
};

// DELETE /api/alunos/:id
exports.deleteAluno = async (req, res) => {
    try {
        const alunoDeletado = await Aluno.findByIdAndDelete(req.params.id);
        if (!alunoDeletado) {
            return res.status(404).json({ message: 'Aluno não encontrado' });
        }
        res.json({ message: 'Aluno deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar aluno', error });
    }
};  
 
// Edita /api/alunos/:id
exports.editAluno = async (req, res) => {
    try {
        const alunoEditado = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!alunoEditado) {
            return res.status(404).json({ message: 'Aluno não encontrado' });
        }               
        res.json(alunoEditado);
    }catch (error) {
        res.status(500).json({ message: 'Erro ao editar aluno', error });
    }
};

// Patch /api/alunos/:id
exports.patchAluno = async (req, res) => {
    try {
        const alunoPatched = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!alunoPatched) {
            return res.status(404).json({ message: 'Aluno não encontrado' });
        }
        res.json(alunoPatched);
    }catch (error) {
        res.status(500).json({ message: 'Erro ao aplicar patch no aluno', error });
    }
};

// Busca por nome /api/alunos/busca?nome=xxx
exports.searchAlunosByName = async (req, res) => {
    try {   
        const nomeBusca = req.query.nome;
        const alunos = await Aluno.find({ nome: { $regex: nomeBusca, $options: 'i' } });
        res.json(alunos);
    } catch (error) {
        console.error('Erro searchAlunosByName:', error);
        res.status(500).json({ message: 'Erro ao buscar alunos por nome', error });
    }   
};

// Filtra por turma /api/alunos/filtro?turma=xxx
exports.filterAlunosByTurma = async (req, res) => {
    try {
        const turmaFiltro = req.query.turma;
        const alunos = await Aluno.find({ turma: turmaFiltro });
        res.json(alunos);
    } catch (error) {
        console.error('Erro filterAlunosByTurma:', error);
        res.status(500).json({ message: 'Erro ao filtrar alunos por turma', error });
    }
};

// Conta total de alunos /api/alunos/contagem
exports.countAlunos = async (req, res) => {
    try {   
        const totalAlunos = await Aluno.countDocuments();
        res.json({ total: totalAlunos });
    } catch (error) {
        console.error('Erro countAlunos:', error);
        res.status(500).json({ message: 'Erro ao contar alunos', error });
    }   
};

//










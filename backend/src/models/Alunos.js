const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },  
    idade: {
        type: Number,
        required: true,
    },
    turma: {
        type: String,
        required: true,
    },    
    frequencia:[ 
        {
            data: {
                type: Date,
                required: true,
            },
            presente: {
                type: Boolean,  
                required: true,
            },
        }
    ],
    criadoEm: {
        type: Date,
        default: Date.now,
    },  
});

module.exports = mongoose.model('Aluno', AlunoSchema);


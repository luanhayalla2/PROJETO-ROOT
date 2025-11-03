require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const { swaggerUi, specs } = require('./src/config/swagger');

const app = express();
const PORT = process.env.PORT || 5000;

// connect to mongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//Rotas
app.use('/api/alunos', require('./src/routes/alunos'));

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Rota simples
app.get('/', (req, res) => {
    res.send('API do Sistema de gestão de Frequência Escolar rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});





 





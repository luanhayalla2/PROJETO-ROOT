require('dotenv').config();
const cors = require('cors');
const econnectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// connect to mongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// connect to mongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//Rotas
app.use('/api/alunos', require('./routes/alunos'));

// Rota simples
app.get('/', (req, res) => {
    res.send('API do Sistema de gestão de Frequência Escolar rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 





 





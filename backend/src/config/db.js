const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/sistema-frequencia';
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(' MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;



 
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const todoListRoutes = require('./routes/todoListRoutes');
const todoItemRoutes = require('./routes/todoItemRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/users', userRoutes);
app.use('/api/todolists', todoListRoutes);
app.use('/api/todoitems', todoItemRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

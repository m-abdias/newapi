// importação do express (adicionando no App.js)
const express = require('express');
const app = express();

// adicionando dois arquivos de rotas
const index = require('./routes/index');
const studentRoute = require('./routes/studentRoute');

// configurações do express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// na raiz vai apontar para as rotas que foram criadas
app.use('/', index);
app.use('/student', studentRoute);

module.exports = app;
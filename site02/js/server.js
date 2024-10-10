// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha',
    database: 'sua_loja'
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client')); // Para servir arquivos estáticos da pasta client
app.use('/adm', express.static('adm')); // Para servir arquivos estáticos da pasta adm

// Rota para adicionar produtos
app.post('/add-product', (req, res) => {
    const { name, price, description, category_id } = req.body;

    const query = 'INSERT INTO products (name, price, description, category_id) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, price, description, category_id], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao adicionar o produto');
        } else {
            res.redirect('/adm/add-product'); // Redireciona de volta para o formulário
        }
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

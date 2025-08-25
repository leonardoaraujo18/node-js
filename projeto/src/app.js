const express = require('express');
const app = express();
const port = 3000;

// criar rota ou raiz
app.get('/', (req, res) =>{
    res.send('Curso de Node.js');
})

// Escutar a porta
app.listen(port, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})

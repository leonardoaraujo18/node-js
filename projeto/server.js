import app from './src/app.js'

const PORT = 3000;

// Escutar a porta
app.listen(PORT, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})

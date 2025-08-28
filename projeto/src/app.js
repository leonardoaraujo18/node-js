import express from 'express';
import selecaoController from './app/controllers/selecaoController.js'

const app = express();

// indicar para o express ler body com json
app.use(express.json());

// criação de ROTAS
app.post('/selecoes', selecaoController.store)

app.get('/selecoes', selecaoController.index)

app.get('/selecoes/:id', selecaoController.show)

app.put('/selecoes/:id', selecaoController.update)

app.delete('/selecoes/:id', selecaoController.delete)

export default app

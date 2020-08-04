import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar 
// Query params: 

app.listen(3333);
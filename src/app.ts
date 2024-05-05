import express from 'express';
import dotenv from 'dotenv';
import tarefaRouter from './routes/tarefa.route';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/tarefas', tarefaRouter);

export default app;
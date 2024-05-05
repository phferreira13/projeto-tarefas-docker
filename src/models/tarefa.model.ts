import { Schema, model, Document } from 'mongoose';

export interface ITarefa extends Document {
  titulo: string;
  descricao: string;
  status: string;
  dataConclusao: Date;
}

const TarefaSchema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { type: String, enum: ['pendente', 'andamento', 'concluida'], default: 'pendente'},
  dataConclusao: { type: Date }
});

export default model<ITarefa>('Tarefa', TarefaSchema);
import Tarefa, { ITarefa } from "../models/tarefa.model";


export async function criarTarefa(tarefa: ITarefa): Promise<ITarefa> {
  return Tarefa.create(tarefa);
}

export async function listarTarefas(): Promise<ITarefa[]> {
  return Tarefa.find();
}

export async function buscarTarefaPorId(id: string): Promise<ITarefa | null> {
  return Tarefa.findById(id);
}

export async function atualizarTarefa(id: string, tarefa: ITarefa): Promise<ITarefa | null> {
  return Tarefa.findByIdAndUpdate(id, tarefa, { new: true });
}

export async function deletarTarefa(id: string): Promise<ITarefa | null> {
  return Tarefa.findByIdAndDelete(id);
}

export default {
    criarTarefa,
    listarTarefas,
    buscarTarefaPorId,
    atualizarTarefa,
    deletarTarefa
    }
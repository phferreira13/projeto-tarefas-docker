import { Request, Response } from 'express';
import TarefaService  from '../services/tarefa.service';

export async function criarTarefa(req: Request, res: Response): Promise<Response> {
  try {
    const tarefa = await TarefaService.criarTarefa(req.body);
    return res.status(201).json(tarefa);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

export async function listarTarefas(req: Request, res: Response): Promise<Response> {
  try {
    const tarefas = await TarefaService.listarTarefas();
    return res.status(200).json(tarefas);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

export async function buscarTarefaPorId(req: Request, res: Response): Promise<Response> {
  try {
    const tarefa = await TarefaService.buscarTarefaPorId(req.params.id);
    return res.status(200).json(tarefa);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

export async function atualizarTarefa(req: Request, res: Response): Promise<Response> {
  try {
    const tarefa = await TarefaService.atualizarTarefa(req.params.id, req.body);
    return res.status(200).json(tarefa);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

export async function deletarTarefa(req: Request, res: Response): Promise<Response> {
  try {
    const tarefa = await TarefaService.deletarTarefa(req.params.id);
    return res.status(200).json(tarefa);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

export default {
  criarTarefa,
  listarTarefas,
  buscarTarefaPorId,
  atualizarTarefa,
  deletarTarefa
}
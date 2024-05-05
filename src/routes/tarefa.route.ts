import { Router } from 'express';
import TarefaController from '../controllers/tarefa.controller';

const router = Router();

router.post('/', TarefaController.criarTarefa);
router.get('/', TarefaController.listarTarefas);
router.get('/:id', TarefaController.buscarTarefaPorId);
router.put('/:id', TarefaController.atualizarTarefa);
router.delete('/:id', TarefaController.deletarTarefa);

export default router;
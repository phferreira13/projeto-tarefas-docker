"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tarefa_controller_1 = __importDefault(require("../controllers/tarefa.controller"));
var router = (0, express_1.Router)();
router.post('/', tarefa_controller_1.default.criarTarefa);
router.get('/', tarefa_controller_1.default.listarTarefas);
router.get('/:id', tarefa_controller_1.default.buscarTarefaPorId);
router.put('/:id', tarefa_controller_1.default.atualizarTarefa);
router.delete('/:id', tarefa_controller_1.default.deletarTarefa);
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TarefaSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    status: { type: String, enum: ['pendente', 'andamento', 'concluida'], default: 'pendente' },
    dataConclusao: { type: Date }
});
exports.default = (0, mongoose_1.model)('Tarefa', TarefaSchema);

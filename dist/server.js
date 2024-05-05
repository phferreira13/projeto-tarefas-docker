"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var mongoose_1 = __importDefault(require("mongoose"));
var port = process.env.PORT || 3000;
mongoose_1.default.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/nome_do_banco')
    .then(function () {
    app_1.default.listen(port, function () {
        console.log("Server is running on port ".concat(port));
    });
}).catch(function (error) {
    console.log(error);
});

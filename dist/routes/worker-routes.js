"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grupo_caixas_1 = require("./../workers/grupo-caixas");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const alocador_1 = require("./../workers/alocador");
const container_1 = require("./../workers/container");
const GrupoCaixasFromDb = mongoose_1.default.model('GrupoCaixas');
const ContainerFromDb = mongoose_1.default.model('Container');
const router = express_1.default.Router();
router.get('/alocar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("not implemented");
}));
router.post('/alocar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { containerId, gruposCaixasIds } = req.body;
    if (!containerId || !gruposCaixasIds) {
        return res.status(422)
            .send({ erro: 'Você deve escolher um container e os grupos de caixas que deseja alocar.' });
    }
    const grupos = yield GrupoCaixasFromDb.find({ _id: { $in: gruposCaixasIds } });
    const container = yield ContainerFromDb.findOne({ _id: containerId });
    try {
        const gruposMapeados = [];
        grupos.forEach((grupo) => {
            const novoGrupo = new grupo_caixas_1.GrupoCaixas(grupo === null || grupo === void 0 ? void 0 : grupo.id);
            novoGrupo.criarCaixas(grupo === null || grupo === void 0 ? void 0 : grupo.comprimentoX, grupo === null || grupo === void 0 ? void 0 : grupo.alturaY, grupo === null || grupo === void 0 ? void 0 : grupo.larguraZ, grupo === null || grupo === void 0 ? void 0 : grupo.quantidadeCaixas);
            gruposMapeados.push(novoGrupo);
        });
        const containerMapeado = new container_1.Container(container === null || container === void 0 ? void 0 : container.id, container === null || container === void 0 ? void 0 : container.comprimentoX, container === null || container === void 0 ? void 0 : container.alturaY, container === null || container === void 0 ? void 0 : container.larguraZ);
        const alocador = new alocador_1.Alocador(containerMapeado, gruposMapeados);
        yield alocador.alocarTodas(containerMapeado, gruposMapeados);
        // await containerMapeado.save();
        res.send(containerMapeado);
    }
    catch (err) {
        res.status(422).send({ error: err.message });
    }
}));
module.exports = router;
//# sourceMappingURL=worker-routes.js.map
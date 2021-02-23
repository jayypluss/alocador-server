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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Container = mongoose_1.default.model('Container');
const router = express_1.default.Router();
router.get('/containers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const container = yield Container.find();
    res.send(container);
}));
router.post('/containers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comprimento, altura, largura, quantidade } = req.body;
    if (!comprimento || !altura || !largura) {
        return res.status(422)
            .send({ erro: 'Você deve prover um comprimento, altura e largura.' });
    }
    try {
        const container = new Container({ _id: new mongoose_1.default.Types.ObjectId(),
            comprimentoX: comprimento,
            alturaY: altura,
            larguraZ: largura,
            quantidade });
        yield container.save();
        res.send(container);
    }
    catch (err) {
        res.status(422).send({ error: err.message });
    }
}));
module.exports = router;
//# sourceMappingURL=container-routes.js.map
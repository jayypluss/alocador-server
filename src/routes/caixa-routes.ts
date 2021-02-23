import express from "express";
import mongoose from "mongoose";

const GrupoCaixas = mongoose.model('GrupoCaixas');

const router = express.Router();

router.get('/gruposCaixas', async (req, res) => {
    const grupos = await GrupoCaixas.find();

    res.send(grupos);
});

router.post('/gruposCaixas', async (req, res) => {
    const { comprimento, altura, largura, quantidade } = req.body;

    if (!comprimento || !altura || !largura || !quantidade) {
        return res.status(422)
        .send({ erro:'Você deve prover um comprimento, altura, largura e quantidade de caixas.' });
    }

    try {
        const grupoCaixas = new GrupoCaixas({_id: new mongoose.Types.ObjectId(),
                                            comprimentoX: comprimento,
                                            alturaY: altura,
                                            larguraZ: largura,
                                            quantidade});

        await grupoCaixas.save();
        res.send(grupoCaixas);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});

module.exports = router;
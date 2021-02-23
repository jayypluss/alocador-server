import express from "express";
import mongoose from "mongoose";

const Container = mongoose.model('Container');

const router = express.Router();

router.get('/containers', async (req, res) => {
    const container = await Container.find();

    res.send(container);
});

router.post('/containers', async (req, res) => {
    const { comprimento, altura, largura, quantidade } = req.body;

    if (!comprimento || !altura || !largura) {
        return res.status(422)
        .send({ erro:'Você deve prover um comprimento, altura e largura.' });
    }

    try {
        const container = new Container({_id: new mongoose.Types.ObjectId(),
                                            comprimentoX: comprimento,
                                            alturaY: altura,
                                            larguraZ: largura,
                                            quantidade});

        await container.save();
        res.send(container);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});

module.exports = router;
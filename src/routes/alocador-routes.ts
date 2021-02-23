import { GrupoCaixas } from '../workers/grupo-caixas';
import express from "express";
import mongoose, { Model } from "mongoose";
import { Alocador } from '../workers/alocador';
import { Container } from '../workers/container';

const GrupoCaixasFromDb = mongoose.model('GrupoCaixas');
const ContainerFromDb: Model<any>  = mongoose.model('Container');

const router = express.Router();

router.get('/alocar', async (req, res) => {
    res.send("not implemented");
});

router.post('/alocar', async (req, res) => {
    const { containerId, gruposCaixasIds } = req.body;

    if (!containerId || !gruposCaixasIds) {
        return res.status(422)
        .send({ erro:'Você deve escolher um container e os grupos de caixas que deseja alocar.' });
    }

    const grupos = await GrupoCaixasFromDb.find({ _id: { $in: gruposCaixasIds } });
    const container = await ContainerFromDb.findOne({ _id: containerId });

    const gruposMapeados: GrupoCaixas[] = [];
    grupos.forEach((grupo: any) => {
        const novoGrupo = new GrupoCaixas(grupo?.id);
        novoGrupo.criarCaixas(grupo?.comprimentoX, grupo?.alturaY, grupo?.larguraZ, grupo?.quantidadeCaixas);
        gruposMapeados.push(novoGrupo);
    });

    const containerMapeado = new Container(
        container?.id,
        container?.comprimentoX,
        container?.alturaY,
        container?.larguraZ
    );

    const alocador = new Alocador(containerMapeado, gruposMapeados);

    const containerOcupado = await alocador.alocarTodas(containerMapeado, gruposMapeados);

    const containerOcupadoModel = {
            comprimentoX: containerOcupado.comprimentoX,
            alturaY: containerOcupado.alturaY,
            larguraZ: containerOcupado.alturaY,
            quantidadeCaixasAlocadas: containerOcupado.quantidadeCaixasAlocadas,
            volumeAlocado: containerOcupado.volumeAlocado,
        };

    // const containerOcupadoResponse = JSON.stringify(containerOcupadoModel);
    const containerOcupadoResponseStringified = JSON.stringify(containerOcupadoModel);

    try {
        // const containerOcupadoModel = new ContainerFromDb({
        //         comprimentoX: containerOcupado.comprimentoX,
        //         alturaY: containerOcupado.alturaY,
        //         larguraZ: containerOcupado.alturaY,
        //         quantidadeCaixasAlocadas: containerOcupado.quantidadeCaixasAlocadas,
        //         volumeAlocado: containerOcupado.volumeAlocado,
        //     });

        // await containerOcupadoModel.save();
        res.send(containerOcupadoResponseStringified);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});


module.exports = router;
import mongoose from "mongoose";

const containerSchema = new mongoose.Schema({
    comprimentoX: { type: Number },
    alturaY: { type: Number },
    larguraZ: { type: Number },
    quantidade: { type: Number },
    quantidadeCaixasAlocadas: { type: Number },
    volumeAlocado: { type: Number }
    // ultimaCaixaAlocada: { type: Number },
    // paredes: { type: Number },
    // caixasAlocadas: { type: Number },
    // idsCaixasAlocadas: { type: Number },
});

mongoose.model('Container', containerSchema);
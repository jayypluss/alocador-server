import mongoose from "mongoose";

export const caixaSchema = new mongoose.Schema({
    comprimentoX: {
        type: Number
    },
    alturaY: {
        type: Number
    },
    larguraZ: {
        type: Number
    },
    volume: {
        type: Number
    },
    posicao: {
        type: Object
    },
    container: {
        type: mongoose.Types.ObjectId
    }
});

mongoose.model('Caixa', caixaSchema);
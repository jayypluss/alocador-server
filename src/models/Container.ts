import mongoose from "mongoose";

const containerSchema = new mongoose.Schema({
    comprimentoX: {
        type: Number
    },
    alturaY: {
        type: Number
    },
    larguraZ: {
        type: Number
    },
    quantidade: {
        type: Number
    }
});

mongoose.model('Container', containerSchema);
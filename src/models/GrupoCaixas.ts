import mongoose, { Model } from "mongoose";

// declare interface IContainer extends Document {
//     comprimentoX: number;
//     alturaY: number;
//     larguraZ?: number;
//     quantidade?: number;
// }

// export interface ContainerModel extends Model<IContainer> {};

const grupoCaixasSchema = new mongoose.Schema({
    comprimentoX: {
        type: Number
    },
    alturaY: {
        type: Number
    },
    larguraZ: {
        type: Number
    },
    quantidadeCaixas: {
        type: Number
    }
});

mongoose.model('GrupoCaixas', grupoCaixasSchema);
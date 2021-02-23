"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('./models/GrupoCaixas');
require('./models/Caixa');
require('./models/Container');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const caixaRoutes = require('./routes/caixa-routes');
const containerRoutes = require('./routes/container-routes');
const workerRoutes = require('./routes/worker-routes');
const grupo_caixas_1 = require("./workers/grupo-caixas");
const container_1 = require("./workers/container");
const alocador_1 = require("./workers/alocador");
const app = express();
const port = 8080; // default port to listen
app.use(bodyParser.json());
app.use(caixaRoutes);
app.use(containerRoutes);
app.use(workerRoutes);
const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.9zwfc.mongodb.net/ClusterAlocador?retryWrites=true&w=majority&authSource=admin';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.log('Error to mongo instance: ', err);
});
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
function main() {
    const container = new container_1.Container(1, // id
    400, // comprimento
    150, // altura
    200 // largura
    );
    const caixas1 = new grupo_caixas_1.GrupoCaixas(1);
    caixas1.criarCaixas(45, 25, 80, 15);
    const caixas2 = new grupo_caixas_1.GrupoCaixas(2);
    caixas2.criarCaixas(70, 32, 60, 20);
    const caixas3 = new grupo_caixas_1.GrupoCaixas(3);
    caixas3.criarCaixas(60, 41, 20, 15);
    const todasCaixas = [caixas1, caixas2, caixas3];
    const alocador = new alocador_1.Alocador(container, todasCaixas);
    alocador.alocarTodas(container, todasCaixas);
}
// main();
//# sourceMappingURL=index.js.map
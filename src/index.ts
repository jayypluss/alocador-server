require('./models/GrupoCaixas');
require('./models/Caixa');
require('./models/Container');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const caixaRoutes = require('./routes/caixa-routes');
const containerRoutes = require('./routes/container-routes');
const workerRoutes = require('./routes/alocador-routes');
// import { GrupoCaixas } from "./workers/grupo-caixas";
// import { Container } from "./workers/container";
// import { Alocador } from "./workers/alocador";

const cors = require('cors');
const app = express();
// const port = 8080;
const port =  process.env.PORT || 3000

app.use(bodyParser.json());
app.use(cors());
app.use(caixaRoutes);
app.use(containerRoutes);
app.use(workerRoutes);

app.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.9zwfc.mongodb.net/ClusterAlocador?retryWrites=true&w=majority&authSource=admin';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
})

mongoose.connection.on('error', (err: any) => {
    console.log('Error to mongo instance: ', err);
});

// define a route handler for the default home page
app.get( "/", ( req: any, res: any ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at port ${ port }` );
} );




// function main() {

//     const container = new Container(
//         1, // id
//         400, // comprimento
//         150, // altura
//         200 // largura
//     );

//     const caixas1 = new GrupoCaixas(1);
//     caixas1.criarCaixas(45, 25, 80, 15);

//     const caixas2 = new GrupoCaixas(2);
//     caixas2.criarCaixas(70, 32, 60, 20);

//     const caixas3 = new GrupoCaixas(3);
//     caixas3.criarCaixas(60, 41, 20, 15);

//     const todasCaixas = [caixas1, caixas2, caixas3];

//     const alocador = new Alocador(container, todasCaixas);

//     alocador.alocarTodas(container, todasCaixas);

// }

// main();


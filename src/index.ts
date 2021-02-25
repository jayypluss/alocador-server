require('./models/GrupoCaixas');
require('./models/Caixa');
require('./models/Container');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const caixaRoutes = require('./routes/caixa-routes');
const containerRoutes = require('./routes/container-routes');
const workerRoutes = require('./routes/alocador-routes');
const cors = require('cors');
const app = express();

const port =  process.env.PORT || 3001

app.use(bodyParser.json());
app.use(cors());
app.use(caixaRoutes);
app.use(containerRoutes);
app.use(workerRoutes);

app.use((_: any, res: any, next: any) => {
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
app.get( "/", ( _: any, res: any ) => {
    res.status(200).send( "Alocacao API - https://jayypluss.github.io/alocador-front/" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `Server started at port ${ port }` );
} );


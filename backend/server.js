const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');

//settings

app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json()); // para que el servidor entienda formato json
//rutas


//Empezando el servidor
app.listen(app.get('port'), () => {

    console.log(`Servidor online en puerto ${app.get('port')}`);

});
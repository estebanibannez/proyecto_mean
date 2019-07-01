const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-db';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connect'))
    .catch(error => console.log('ha ocurrido un error con la DB'));

module.exports = mongoose;
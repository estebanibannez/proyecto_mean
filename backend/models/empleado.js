const mongoose = require('mongoose');
const { Schema } = mongoose; // desde mongoose necesito sus squemas

const SchemaEmpleado = new Schema({

    nombre: { type: String, required: true},
    apellidos: { type: String, required: true},
    cargo: { type: String, required: true},
    rut: { type:String, required: true}

});

module.exports = mongoose.model('empleado', SchemaEmpleado); // paso el schema a un modelo de datos en mongoose
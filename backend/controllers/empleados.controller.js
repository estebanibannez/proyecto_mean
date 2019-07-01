const empleado = require('../models/empleado');
const empleadosController = {};

empleadosController.getEmpleados = async (req, res) => {
    empleado.find();
    res.json({
        status: 'GET EMPLEADOS works'
    });
}

empleadosController.getEmpleado = (req, res) => {

    res.json({
        status: 'GET EMPLEADO',
        id_empleado: req.params
    });
}

empleadosController.createEmpleado = (req, res) => {

    res.json({
        status: 'POST EMPLEADOS'

    });
}

empleadosController.editEmpleado = (req, res) => {
    res.json({
        status: 'EDIT EMPLEADO'

    });
}
empleadosController.deleteEmpleado = (req, res) => {
    res.json({
        status: 'DELETE EMPLEADO'

    });
}
module.exports = empleadosController;
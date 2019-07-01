const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleados.controller');
//metodos http

//obtener empleados
router.get('/', empleadoController.getEmpleados);
//crear un empleado
router.post('/', empleadoController.createEmpleado);
//obtener 1 empleado
router.get('/:id', empleadoController.getEmpleado);

router.put('/:id', empleadoController.editEmpleado);

router.delete('/:id', empleadoController.deleteEmpleado);

module.exports = router;
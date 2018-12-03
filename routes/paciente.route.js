var express = require('express');
var router = express.Router();

var paciente_controller = require('../controllers/paciente');





router.put('', paciente_controller.paciente_create);

router.get('', paciente_controller.paciente_todos);

router.get('/:id', paciente_controller.paciente_details);

router.post('/:id', paciente_controller.paciente_update);

router.delete('/:id', paciente_controller.paciente_deleted);


module.exports = router;
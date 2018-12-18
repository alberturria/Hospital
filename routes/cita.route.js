var express = require('express');
var router = express.Router();

var cita_controller = require('../controllers/cita');




router.put('', cita_controller.cita_create);

router.get('', cita_controller.cita_todas);

router.get('/:id/doctor', cita_controller.cita_doctor);

router.get('/:id/paciente', cita_controller.cita_paciente);

router.get('/:id', cita_controller.cita_details);

router.post('/:id', cita_controller.cita_update);

router.post('', cita_controller.cita_update_test);


router.delete('/:id', cita_controller.cita_deleted);

router.delete('', cita_controller.cita_test_delete);



module.exports = router;
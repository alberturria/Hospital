var express = require('express');
var router = express.Router();

var cita_controller = require('../controllers/cita');




router.post('', cita_controller.cita_create);

router.get('', cita_controller.cita_todas);

router.get('/:id', cita_controller.cita_details);

router.put('/:id', cita_controller.cita_update);

router.delete('/:id', cita_controller.cita_deleted);


module.exports = router;
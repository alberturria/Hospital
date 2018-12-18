var express = require('express');
var router = express.Router();

var doctor_controller = require('../controllers/doctor');





router.put('', doctor_controller.doctor_create);

router.get('', doctor_controller.doctor_todos);

router.get('/:id', doctor_controller.doctor_details);

router.post('/:id', doctor_controller.doctor_update);

router.post('', doctor_controller.doctor_update_test);

router.delete('/:id', doctor_controller.doctor_deleted);

router.delete('', doctor_controller.doctor_test);


module.exports = router;
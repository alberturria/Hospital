var Doctor = require('../models/doctor');

exports.doctor_todos = function (req, res,next) {

    Doctor.find( function (err, doctor) {
        if (err) return next(err);
        res.send(doctor);
    })
};

exports.doctor_create = function (req, res,next) {
    var doctor = new Doctor(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            DNI: req.body.DNI,
            especialidad: req.body.especialidad
        }
    );

    doctor.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Doctor Created successfully')
    })
};

exports.doctor_details = function (req, res,next) {
    Doctor.findById(req.params.id, function (err, doctor) {
        if (err) return next(err);
        res.send(doctor);
    })
};

exports.doctor_update = function (req, res, next) {
    Doctor.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, doctor) {
        if (err) return next(err);
        res.send('Doctor udpated.');
    });
};

exports.doctor_deleted = function (req, res, next) {
    Doctor.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
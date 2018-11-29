var Cita = require('../models/cita');


exports.cita_todas = function (req, res,next) {

    Cita.find( function (err, cita) {
        if (err) return next(err);
        res.send(cita);
    })
};

exports.cita_create = function (req, res,next) {
    var cita = new Cita(
        {
            paciente: req.body.paciente,
            doctor: req.body.doctor,
            date: req.body.date,
            hora: req.body.hora,
            sala: req.body.sala
        }
    );

    cita.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Cita Created successfully')
    })
};

exports.cita_details = function (req, res,next) {
    Cita.findById(req.params.id, function (err, cita) {
        if (err) return next(err);
        res.send(cita);
    })
};

exports.cita_update = function (req, res, next) {
    Cita.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, cita) {
        if (err) return next(err);
        res.send('Cita udpated.');
    });
};

exports.cita_deleted = function (req, res, next) {
    Cita.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
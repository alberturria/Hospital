var Paciente = require('../models/paciente');


exports.paciente_todos = function (req, res,next) {

    Paciente.find( function (err, paciente) {
        if (err) return next(err);
        res.send(paciente);
    })
};

exports.paciente_create = function (req, res,next) {
    var paciente = new Paciente(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            DNI: req.body.DNI
        }
    );

    paciente.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Paciente Created successfully')
    })
};

exports.paciente_details = function (req, res,next) {
    Paciente.findById(req.params.id, function (err, paciente) {
        if (err) return next(err);
        res.send(paciente);
    })
};

exports.paciente_update = function (req, res, next) {
    Paciente.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, paciente) {
        if (err) return next(err);
        res.send('Paciente udpated.');
    });
};

exports.paciente_update_test = function (req, res, next) {

    Paciente.findOneAndUpdate({nombre:'PRUEBA'},{$set:{apellido:'PRUEBA_UPDATE'}},function(err)
    {
        if (err) return next(err);
        res.send('Updated successfully!');  
    })

};


exports.paciente_deleted = function (req, res, next) {
    Paciente.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.paciente_test = function (req, res, next) {
    Paciente.findOneAndRemove({nombre : 'PRUEBA'}, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
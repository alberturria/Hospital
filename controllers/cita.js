var Cita = require('../models/cita');
var Doctor = require('../models/doctor');
var Paciente = require('../models/paciente');


exports.cita_todas = function (req, res,next) {

    Cita.find( function (err, cita) {
        if (err) return next(err);
        res.send(cita);
    })
};

exports.cita_create = function (req, res,next) {

    Cita.find({date : req.body.date, hora : req.body.hora}, function (err, docs) {
        if (docs.length){
            time_compatibility = false;
            res.send('Date exists already');
        }else{
                Doctor.find({DNI:req.body.doctor}).populate('doctor').exec(function (err, results) {
                    if (err) 
                    {
                        return next(err)
                    }
                    if (!results.length)
                    {
                        doctor_exists = false;
                        res.send('Doctor doesnt exists yet');
                    }else{
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
                }
            })
        }
    });


};

exports.cita_details = function (req, res,next) {
    Cita.findById(req.params.id, function (err, cita) {
        if (err) return next(err);
        res.send(cita);
    })
};

exports.cita_update = function (req, res, next) {


    Cita.find({date : req.body.date, hora : req.body.hora}, function (err, docs) {
        if (docs.length){
            time_compatibility = false;
            res.send('Date exists already');
        }else{
                Doctor.find({DNI:req.body.doctor}).populate('doctor').exec(function (err, results) {
                    if (err) 
                    {
                        return next(err)
                    }
                    if (!results.length)
                    {
                        doctor_exists = false;
                        res.send('Doctor doesnt exists yet');
                    }else{

                        Cita.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, cita) {
                            if (err) return next(err);
                            res.send('Cita udpated.');
                        });
                }
            })
        }
    });

    

};



exports.cita_update_test = function (req, res, next) {

    Cita.findOneAndUpdate({paciente:987654321},{$set:{sala:11}},function(err)
    {
        if (err) return next(err);
        res.send('Updated successfully!');  
    })

};



exports.cita_deleted = function (req, res, next) {
    Cita.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.cita_doctor = function (req, res, next) {
    Cita.findById(req.params.id, function (err, cita) {
        if (err) return next(err);
        

        Doctor.find({DNI : cita.doctor}).populate('doctor').exec(function (err, doctor) {
            if (err) return next(err);
            res.send(doctor);
        })
        
    })
};

exports.cita_paciente = function (req, res, next) {
    Cita.findById(req.params.id, function (err, cita) {
        if (err) return next(err);
        

        Paciente.find({DNI : cita.paciente}).populate('paciente').exec(function (err, doctor) {
            if (err) return next(err);
            res.send(doctor);
        })
        
    })
};

exports.cita_test_delete = function (req, res, next) {
    Cita.findOneAndRemove({paciente : 987654321}, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
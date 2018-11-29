const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CitaSchema = new Schema({
    paciente: {type: Number, required: true, max: 10000000},
    doctor: {type: Number, required: true, max: 10000000},
    date: {type: Date, required: true},
    hora:{type: Number,required: true},
    sala: {type: Number, required: true}
});


module.exports = mongoose.model('Cita', CitaSchema);
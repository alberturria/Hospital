const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DoctorSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    DNI: {type: Number, required: true, max: 10000000},
    especialidad:{type: String,required: true}
});


module.exports = mongoose.model('Doctor', DoctorSchema);
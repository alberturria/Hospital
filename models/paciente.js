const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PacienteSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    DNI: {type: Number, required: true, max: 10000000}
});


module.exports = mongoose.model('Paciente', PacienteSchema);
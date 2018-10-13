const paciente = require('./controllers/models/paciente')

var nuevopaciente= new paciente("alberto","herrera", 123123123);

console.log(nuevopaciente.getApellido());
 
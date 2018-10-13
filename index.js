const paciente = require('./controllers/models/paciente')
const doctor = require('./controllers/models/doctor')
const cita = require('./controllers/models/cita')


var nuevopaciente= new paciente("Alberto","Herrera", 123123123);
var nuevodoctor= new doctor("Jose","Alcantara", 123123123, "Traumatologo");
var nuevacita= new cita(nuevopaciente,nuevodoctor,"12/12/1999", "12:00", 1);

console.log(nuevopaciente.toString());
console.log(nuevodoctor.toString());
console.log(nuevacita.toString());
 
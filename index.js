const paciente = require('./controllers/models/paciente')
const doctor = require('./controllers/models/doctor')
const cita = require('./controllers/models/cita')
const citas = require('./data/citas.json');
const doctores = require('./data/doctores.json');
const pacientes = require('./data/pacientes.json');
var pruebas = require('./data/pruebas.json');
var express = require('express');
const fs = require('fs');
var app = express();


app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"status": "OK"}))})

app.get('/status', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({"status": "OK"});
})

app.get('/citas', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(citas);
})

app.get('/doctores', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(doctores);
})

app.get('/pacientes', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(pacientes);
})

app.put('/pacientes', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var paciente_nuevo = new paciente("Usuario " + Math.floor((Math.random() * 100) + 1) ,"Apellidos",""+Math.floor((Math.random() * 100) + 1));
    //fs.writeFileSync('./data/pruebas.json',JSON.stringify(paciente_nuevo, null, 2));
    paciente_nuevo.aniadirADBLocal();
    res.json(pacientes);
})


app.listen(app.get('port'), function() {
   console.log("Node app is running at localhost:" + app.get('port'));
});


  module.exports = app;

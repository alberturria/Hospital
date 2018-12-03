var cita = require('./routes/cita.route');
var doctor = require('./routes/doctor.route');
var paciente = require('./routes/paciente.route');
const mongoose = require('mongoose');
const dev_db_url_from_file = require('./DBkey');
MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var pruebas = require('./data/pruebas.json');
var express = require('express');
const fs = require('fs');
var app = express();


app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/citas', cita);
app.use('/doctores', doctor);
app.use('/pacientes', paciente);

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"status": "OK"}))})

app.get('/status', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({"status": "OK"});
})

/*
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

*/

app.listen(app.get('port'), function() {
   console.log("Node app is running at localhost:" + app.get('port'));
});

let mongoDB = process.env.MONGODB_URI || dev_db_url_from_file;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



  module.exports = app;

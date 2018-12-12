var cita = require('./routes/cita.route');
var doctor = require('./routes/doctor.route');
var paciente = require('./routes/paciente.route');
const mongoose = require('mongoose');
var CryptoJS = require("crypto-js");
MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var pruebas = require('./data/pruebas.json');
var express = require('express');
const fs = require('fs');
var app = express();


app.set('port', (process.env.PORT || 80));
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


var ciphertext = fs.readFileSync('dataencripted','utf8');


app.listen(app.get('port'), function() {
   console.log("Node app is running at localhost:" + app.get('port'));
});


var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'SHA256');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
 

var mongoDB = process.env.MONGODB_URI || plaintext;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = app;

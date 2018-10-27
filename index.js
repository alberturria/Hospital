const paciente = require('./controllers/models/paciente')
const doctor = require('./controllers/models/doctor')
const cita = require('./controllers/models/cita')
const resultado = require('./result.json')
var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.json({"status": "OK"});
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
  });

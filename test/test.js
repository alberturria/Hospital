const paciente = require('./../controllers/models/paciente')
const doctor = require('./../controllers/models/doctor')
const cita = require('./../controllers/models/cita')
var assert = require('assert');
var supertest = require('supertest');
var app = require('../index.js');
var chai = require('chai');
var expect = require('chai').expect;
var should = require('chai').should();

// Test de los pacientes
describe('Paciente', function(){
        // Testea que se haya cargado bien la librería
        describe('Carga', function(){
        it('should be loaded', function(){
            assert(paciente, "Cargado");
        });
    });

    // Comprueba que el constructor funciona correctamente,
    // para ello hacemos una afirmación con el resultado esperado 
    // a la hora de pasar a String el nuevo paciente creado.
    describe('Constructor', () => {
      it('it should create a new patient',function()
      {
        var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
        assert.equal(nuevopaciente.toString(), "Alberto Herrera 121212","Creado");
        });

    });

    // Comprueba que el método toString
    // para ello hacemos una afirmación con el resultado esperado 
    // a la hora de pasar a String el nuevo paciente creado.
    describe('toString', () => {
        it('it should return the correct string',function()
        {
            var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
            nuevopaciente.toString();
            assert.equal(nuevopaciente.toString(), "Alberto Herrera 121212","Creado");
        });
  
    });

    // Comprueba que el método setNombre
    // para ello hacemos una afirmación esperando el resultado
    // del nuevo nombre (cambiado). 
    describe('setNombre', () => {
        it('it should return the correct modified name string',function()
        {
            var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
            nuevopaciente.setNombre("Francisco")
            nuevopaciente.toString();
            assert.equal(nuevopaciente.toString(), "Francisco Herrera 121212","Creado");
        });
  
    });

    
    // Comprueba que el método getNombre
    // para ello hacemos una afirmación esperando el resultado
    // del nuevo nombre.
    
    describe('getNombre', () => {
        it('it should return the correct original name string',function()
        {
            var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
            nuevopaciente.toString();
            assert.equal(nuevopaciente.getNombre(), "Alberto","Creado");
        });
  
    });

});

// Test de los doctores
describe('Doctor', function(){
    // Testea que se haya cargado bien la librería
    describe('Carga', function(){
    it('should be loaded', function(){
        assert(doctor, "Cargado");
    });
});

// Comprueba que el constructor funciona correctamente,
// para ello hacemos una afirmación con el resultado esperado 
// a la hora de pasar a String el nuevo paciente creado.
describe('Constructor', () => {
  it('it should create a new doctor',function()
  {
    var nuevodoctor= new doctor("Jose", "Alcantara",232323,"Traumatologo");
    assert.equal(nuevodoctor.toString(), "Jose Alcantara 232323 Traumatologo","Creado");
    });

});
// Comprueba que el método toString
// para ello hacemos una afirmación con el resultado esperado 
// a la hora de pasar a String el nuevo doctor creado.
describe('toString', () => {
    it('it should return the correct string',function()
    {
        var nuevodoctor= new doctor("Jose", "Alcantara",232323,"Traumatologo");
        nuevodoctor.toString();
        assert.equal(nuevodoctor.toString(), "Jose Alcantara 232323 Traumatologo","Creado");
    });

  });

});


// Test de las citas
describe('Cita', function(){
    // Testea que se haya cargado bien la librería
    describe('Carga', function(){
    it('should be loaded', function(){
        assert(cita, "Cargado");
    });
});

// Comprueba que el constructor funciona correctamente,
// para ello hacemos una afirmación con el resultado esperado 
// a la hora de pasar a String la nueva cita creada.
describe('Constructor', () => {
  it('it should create a new cita',function()
  {
    var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
    var nuevodoctor= new doctor("Jose", "Alcantara",232323,"Traumatologo");
    var nuevacita= new cita(nuevopaciente,nuevodoctor,"10/10/2010","12:00",1);
    assert.equal(nuevacita.toString(), "Alberto Herrera 121212 Jose Alcantara 232323 Traumatologo 10/10/2010 12:00 1","Creado");
    });

});

// Comprueba que el método toString
// para ello hacemos una afirmación con el resultado esperado 
// a la hora de pasar a String la nueva cita creada.
describe('toString', () => {
    it('it should return the correct string',function()
    {
        var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
        var nuevodoctor= new doctor("Jose", "Alcantara",232323,"Traumatologo");
        var nuevacita= new cita(nuevopaciente,nuevodoctor,"10/10/2010","12:00",1);
        nuevacita.toString();
        assert.equal(nuevacita.toString(), "Alberto Herrera 121212 Jose Alcantara 232323 Traumatologo 10/10/2010 12:00 1","Creado");
    });

  });

});

//  SUPERTEST
//  GET 
describe('GET method tests', () => {

    //Comprueba que efectivamente se devuelven los pacientes en /pacientes
    describe('GET /pacientes', () => {
        it('should get all the patients', (done) => {
        supertest(app)
            .get('/pacientes')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });

    });

    //Comprueba que efectivamente se devuelven los doctores en /doctores
    describe('GET /doctores', () => {
        it('should get all the doctors', (done) => {
        supertest(app)
            .get('/doctores')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });

    });

    //Comprueba que efectivamente se devuelven los citas en /citas
    describe('GET /citas', () => {
        it('should get all the dates', (done) => {
        supertest(app)
            .get('/citas')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });

    });



});


describe('PUT method tests', () => {

    //Comprueba que efectivamente se devuelven los pacientes en /pacientes
    describe('PUT /pacientes', () => {
        it('should put a new predefined user', (done) => {
        supertest(app)
            .put('/pacientes')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });

    });

});





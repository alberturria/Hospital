const paciente = require('./../classes/paciente')
const doctor = require('./../classes/doctor')
const cita = require('./../classes/cita')
var assert = require('assert');
var supertest = require('supertest');
var app = require('../index.js');
var chai = require('chai');
var expect = require('chai').expect;
var should = require('chai').should();
var express = require('express');

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

    //Comprueba que efectivamente se devuelve un paciente específico
    describe('GET /pacientes:id', () => {
        it('should get all the patients', (done) => {
        supertest(app)
            .get('/pacientes/5bffc120c4a6ef17e6a9a5cf')
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

    //Comprueba que efectivamente se devuelve un doctor específico
    describe('GET /doctores:id', () => {
        it('should get all the doctors', (done) => {
        supertest(app)
            .get('/doctores/5bffbd7a32332d153c98217f')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });

    });

    //Comprueba que efectivamente se devuelve una cita específica
    describe('GET /citas', () => {
        it('should get a specific cita', (done) => {
        supertest(app)
            .get('/citas')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });

    });

    //Comprueba que efectivamente se devuelven los citas en /citas
    describe('GET /citas:id', () => {
        it('should get a specific cita', (done) => {
        supertest(app)
            .get('/citas/5bffc5c4c4a6ef17e6a9a5e2')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });

    });



    //Comprueba que efectivamente se devuelven los citas en /citas
    describe('GET /citas:id/doctor', () => {
        it('should get the doctor of a specific cita', (done) => {
        supertest(app)
            .get('/citas/5bffc5c4c4a6ef17e6a9a5e2/doctor')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });

    });

    //Comprueba que efectivamente se devuelven los citas en /citas
    describe('GET /citas:id/paciente', () => {
        it('should get the patient of a specific cita', (done) => {
        supertest(app)
            .get('/citas/5bffc5c4c4a6ef17e6a9a5e2/paciente')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });

    });



});

describe('PUT method tests', () => {

    describe('PUT (Cita)', () => {
        it('should add a new cita', (done) => {
            
                let data = {
                    "paciente": 987654321,
                    "date": "2010-5-5",
                    "doctor": 21534680,
                    "hora": 9,
                    "sala": 2
                }
            supertest(app)
            .put('/citas')
            .send(data)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

    });



    describe('PUT (Paciente)', () => {
        it('should add a new patient', (done) => {
            
                let data = {
                    "nombre": "PRUEBA",
                    "apellido": "TEST",
                    "DNI": 000000000
                }
            supertest(app)
            .put('/pacientes')
            .send(data)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

    });

    describe('PUT (Doctor)', () => {
        it('should add a new doctor', (done) => {
            
                let data = {
                    "nombre": "PRUEBA",
                    "apellido": "TEST",
                    "DNI": 000000000,
                    "especialidad":"PRUEBA"
                }
            supertest(app)
            .put('/doctores')
            .send(data)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

    });


});




describe('POST method tests', () => {

    describe('POST (Cita)', () => {
        it('should modify the new cita', (done) => {
            
            supertest(app)
            .post('/citas')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

    });



    describe('POST (Paciente)', () => {
        it('should motdify the new patient', (done) => {
            

            supertest(app)
            .post('/pacientes')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

    });

    describe('POST (Doctor)', () => {
        it('should modify the new doctor', (done) => {
            
              
            supertest(app)
            .post('/doctores')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

    });


});



describe('DELETE method tests', () => {

    describe('DELETE (Cita)', () => {
        it('should delete the new cita', (done) => {
            
            supertest(app)
            .delete('/citas')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

    });



    describe('DELETE (Paciente)', () => {
        it('should delete the new patient', (done) => {
            supertest(app)
            .delete('/pacientes')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

    });

    describe('DELETE (Doctor)', () => {
        it('should delete the new patient', (done) => {
            
    
            supertest(app)
            .delete('/doctores')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

    });


});







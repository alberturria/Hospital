const paciente = require('./../controllers/models/paciente')
const doctor = require('./../controllers/models/doctor')
const cita = require('./../controllers/models/cita')
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();


describe('Paciente', function(){
        // Testea que se haya cargado bien la librería
        describe('Carga', function(){
        it('should be loaded', function(){
            assert(paciente, "Cargado");
        });
    });


    describe('Constructor', () => {
      it('it should create a new patient',function()
      {
        var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
        assert.equal(nuevopaciente.toString(), "Alberto Herrera 121212","Creado");
        });

    });

    describe('toString', () => {
        it('it should return the correct string',function()
        {
            var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
            nuevopaciente.toString();
            assert.equal(nuevopaciente.toString(), "Alberto Herrera 121212","Creado");
        });
  
      });

});

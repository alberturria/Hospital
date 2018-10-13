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


describe('Doctor', function(){
    // Testea que se haya cargado bien la librería
    describe('Carga', function(){
    it('should be loaded', function(){
        assert(doctor, "Cargado");
    });
});


describe('Constructor', () => {
  it('it should create a new doctor',function()
  {
    var nuevodoctor= new doctor("Jose", "Alcantara",232323,"Traumatologo");
    assert.equal(nuevodoctor.toString(), "Jose Alcantara 232323 Traumatologo","Creado");
    });

});

describe('toString', () => {
    it('it should return the correct string',function()
    {
        var nuevodoctor= new doctor("Jose", "Alcantara",232323,"Traumatologo");
        nuevodoctor.toString();
        assert.equal(nuevodoctor.toString(), "Jose Alcantara 232323 Traumatologo","Creado");
    });

  });

});


describe('Cita', function(){
    // Testea que se haya cargado bien la librería
    describe('Carga', function(){
    it('should be loaded', function(){
        assert(cita, "Cargado");
    });
});


describe('Constructor', () => {
  it('it should create a new cita',function()
  {
    var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
    var nuevodoctor= new doctor("Jose", "Alcantara",232323,"Traumatologo");
    var nuevacita= new cita(nuevopaciente,nuevodoctor,"10/10/2010","12:00",1);
    assert.equal(nuevacita.toString(), "Alberto Herrera 121212 Jose Alcantara 232323 Traumatologo 10/10/2010 12:00 1","Creado");
    });

});

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


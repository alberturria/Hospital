## Enunciado

Descargar y ejecutar las pruebas de alguno de los proyectos anteriores, y si sale todo bien, hacer un pull request a alguno de esos proyectos con tests adicionales, si es que faltan (en el momento que se lea este tema).

### Solución

Se ha escrito la siguiente aserción:
```
    describe('Constructor', () => {
      it('it should create a new patient',function()
      {
        var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
        assert.equal(nuevopaciente.toString(), "Alberto Herrera 121212","Creado");
        });

    });
```

Efectivamente, esta aserción pasa los tests.
Sin embargo la siguiente:

```
    describe('setNombre', () => {
        it('it should return the correct modified name string',function()
        {
            var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
            nuevopaciente.setNombre("Francisco")
            nuevopaciente.toString();
            assert.equal(nuevopaciente.toString(), "Alberto Herrera 121212","Creado");
        });
  
    });
```

No los pasa.

![Ejercicio2.1](https://github.com/alberturria/Hospital/tree/master/docs/assets/img/3ejercicio2.png)

Corregimos por:

```
    describe('setNombre', () => {
        it('it should return the correct modified name string',function()
        {
            var nuevopaciente= new paciente("Alberto", "Herrera", 121212) ;
            nuevopaciente.setNombre("Francisco")
            nuevopaciente.toString();
            assert.equal(nuevopaciente.toString(), "Francisco Herrera 121212","Creado");
        });
  
    });
```

Y sí los pasa.

![Ejercicio2.2](https://github.com/alberturria/Hospital/tree/master/docs/assets/img/3ejercicio2_2.png)


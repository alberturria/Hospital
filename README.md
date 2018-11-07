[![Build Status](https://travis-ci.org/alberturria/Hospital.svg?branch=master)](https://travis-ci.org/alberturria/Hospital)
 [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
 [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Para ver la página del repositorio pulsar [aquí](https://alberturria.github.io/Hospital/).

# SERVICIO WEB PARA UN CENTRO DE SALUD 

## Descripción

En este repositorio desarrollaremos un servicio que permita gestionar citas en un determinado centro de salud.
El propósito de este proyecto nace de la idea de facilitar tanto al personal administrativo de un centro de salud,
como al personal sanitario, como al paciente de la gestión de los diversos procedimientos que se llevan a cabo en el mismo.
La idea inicial de este proyecto es centrarnos en la automatización de la notificación de citas al paciente, proporcionándole información de interés sobre la misma.


## Herramientas (Provisionales)

- El lenguaje utilizado será Node.js, puesto que estoy familiarizado con él.
- El framework a usar será Express.js, ya que nos ofrece diversas funcionalidades como soporte para API restfull, websockets, etc. Además es idóneo debido al lenguaje utilizado.
- El testeo se realizará con Mocha, Chai y Supertest
- La integración continua se realizará gracias a Travis-CI
- El entorno se virtualizará gracias al gestor de módulos para Node.js, NPM.
- El despliegue se ha realizado gracias a Heroku. Para saber más entra [aquí]().
- La base de datos será una NoSQL debido a la integración del framework con la misma.


## Tests

Los tests en este proyecto se llevan a cabo gracias al framework Mocha y a la librería Chai.
El documento de tests se encuentra en la ruta [./test/test.js](https://github.com/alberturria/Hospital/blob/master/test/test.js).
Para ejecutar los tests, una vez clonado el repositorio será necesario ejecutar `npm test`. 
El uso de Travis-CI nos permite mantener una integración continua lanzando los tests cada vez que se realice un push a la rama master de este repositorio.

## Despliegue

Se ha empleado Heroku como PaaS para el despliegue de nuestro servicio web.
Dicho despliegue lo puedes encontrar en [este link](https://hospitaliv.herokuapp.com/)

Al estar conectado el método de despliegue con este repositorio de Github, cada vez que realicemos un push a la rama master del mismo, nos aseguramos que se aplican los cambios realizados en Heroku (Ahorrandonos de esta manera tener que realizar un `git push heroku master` cada vez que se quiera desplegar un cambio nuevo en dicha plataforma).

Además, al haberlo conectado con Travis-CI, los despliegues automáticos generan una nueva versión de la aplicación cada vez que se realiza un `push` a la rama `master`.

El archivo que declara qué comando se debe ejecutar para iniciar la app es el archivo [Procfile](https://github.com/alberturria/Hospital/blob/master/Procfile).

Para comprobar el funcionamiento correcto del PaaS se puede o bien ver el link en el que se despliega la aplicación.
Para comprobar de manera local el funcionamiento del Paas se ha ejecutado el comando `heroku local web`.
El comando `heroku open` le abre el servicio ya desplegado en su navegador web predeterminado.


## Clases

### Paciente:
    Clase que modela los Pacientes que tendrán la cita con los doctores.
    
    Cada Paciente vendrá definida por:
    -Nombre: Nombre del Paciente.
    -Apellido: Apellidos del Paciente.
    -DNI: DNI del Paciente.
    
    Métodos:
    -Constructor: Crea un nuevo Paciente.

    -SetNombre: Asigna un nuevo nombre al Paciente
    -SetApellido: Asigna unos nuevos apellidos al Paciente.
    -SetDNI: Asigna un nuevo DNI al Paciente

    -GetNombre: Devuelve el nombre del Paciente.
    -GetApellido: Devuelve los apellidos del Paciente.
    -GetDNI: Devuelve el DNI del Paciente.
    
    -toString: Devuelve toda la información del Paciente en forma de string.
    -aniadirADBLocal(): Añade un paciente a la base de datos local.




### Doctor:
    Clase que modela los Doctores que tendrán los pacientes asignados en cada Cita.
    
    Cada Doctor vendrá definida por:
    -Nombre: Nombre del Doctor.
    -Apellido: Apellidos del Doctor.
    -DNI: DNI del Doctor.
    -Especialidad: Formación en la que está especializado el Doctor (Ej. Traumatología, pediatría, etc.)
    
    Métodos:
    -Constructor: Crea un nuevo Doctor.

    -SetNombre: Asigna un nuevo nombre al Doctor
    -SetApellido: Asigna unos nuevos apellidos al Doctor.
    -SetDNI: Asigna un nuevo DNI al Doctor
    -SetEspecialidad: Asigna una nueva esoecialidad al Doctor.

    -GetNombre: Devuelve el nombre del Doctor.
    -GetApellido: Devuelve los apellidos del Doctor.
    -GetDNI: Devuelve el DNI del Doctor.
    -GetEspecialidad: Devuelve la especialidad del Doctor.
    
    -toString: Devuelve toda la información del Doctor en forma de string.



### Cita:
    Clase que modela las citas que tendrán los pacientes con los doctores asignados.
    
    Cada Cita vendrá definida por:
    -Paciente: El paciente que asistirá a la Cita.
    -Doctor: El médico con el que se tiene la Cita.
    -Date: Fecha (día, mes y año) en la que tendrá lugar la Cita.
    -Hora: Hora del día (incluído en el parámetro Date) en la que tomará lugar la Cita
    -Sala: Número de Sala del centro donde tomará lugar la Cita
    
    Métodos:
    -Constructor: Crea una nueva Cita.

    -SetPaciente: Asigna un nuevo paciente a la Cita.
    -SetDoctor: Asigna un nuevo doctor a la Cita.
    -SetDate: Asigna una nueva fecha a la Cita.
    -SetHora: Asigna una nueva hora a la Cita.
    -SetSala: Asigna una nueva Sala a la Cita.

    -GetPaciente: Devuelve el paciente de la Cita.
    -GetDoctor: Devuelve el doctor de la Cita.
    -GetDate: Devuelve la fecha de la Cita.
    -GetHora: Devuelve la hora de la Cita.
    -GetSala: Devuelve la sala de la Cita.

    -toString: Devuelve toda la información de la Cita en forma de string.


## Test

### Test de los pacientes

 Testea que se haya cargado bien la librería

- Comprueba que el constructor funciona correctamente, para ello hacemos una afirmación con el resultado esperado a la hora de pasar a String el nuevo paciente creado.

- Comprueba que el método toString para ello hacemos una afirmación con el resultado esperado a la hora de pasar a String el nuevo paciente creado.

- Comprueba que el método setNombre para ello hacemos una afirmación esperando el resultado del nuevo nombre (cambiado). 

- Comprueba que el método getNombre para ello hacemos una afirmación esperando el resultado del nuevo nombre.
    

 Test de los doctores    

- Comprueba que el constructor funciona correctamente, para ello hacemos una afirmación con el resultado esperado a la hora de pasar a String el nuevo paciente creado.

- Comprueba que el método toString para ello hacemos una afirmación con el resultado esperado a la hora de pasar a String el nuevo doctor creado.


 Test de las citas


- Comprueba que el constructor funciona correctamente, para ello hacemos una afirmación con el resultado esperado a la hora de pasar a String la nueva cita creada.

- Comprueba que el método toString para ello hacemos una afirmación con el resultado esperado a la hora de pasar a String la nueva cita creada.





## Licencia

GNU GPLv3

Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

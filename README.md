[![Build Status](https://travis-ci.org/alberturria/Hospital.svg?branch=master)](https://travis-ci.org/alberturria/Hospital)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Para ver la documentación del repositorio pulsar [aquí](https://alberturria.github.io/Hospital/).

# SERVICIO WEB PARA UN CENTRO DE SALUD 

## Descripción

En este repositorio desarrollaremos un servicio que permita gestionar citas en un determinado centro de salud.
El propósito de este proyecto nace de la idea de facilitar tanto al personal administrativo de un centro de salud,
como al personal sanitario, como al paciente de la gestión de los diversos procedimientos que se llevan a cabo en el mismo.
La idea inicial de este proyecto es centrarnos en la automatización de la notificación de citas al paciente, proporcionándole información de interés sobre la misma.


## Herramientas

- El lenguaje utilizado será Node.js, puesto que estoy familiarizado con él.
- El framework a usar será Express.js, ya que nos ofrece diversas funcionalidades como soporte para API restfull, websockets, etc. Además es idóneo debido al lenguaje utilizado.
- El testeo se realizará con Mocha, Chai y Supertest
- El despliegue se ha realizado gracias a Heroku. Para saber más entra [aquí](https://alberturria.github.io/Hospital/despliegue.html).
- Se ha usado Docker para la creación de una imagen del servicio, para más información entra [aquí](https://alberturria.github.io/Hospital/contenedores.html)
- La gestión de la base de datos se ha realizado con mongoose, ya que usamos MongoDB.
- Se ha creado una máquina virtual de Azure gracias a [Vagrant](https://www.vagrantup.com/).
- Dicha máquina virtual ha sido aprovisionada mediante los [Playbooks de Ansible](https://docs.ansible.com/ansible/latest/user_guide/playbooks.html).
- El despliegue sobre la máquina virtual mencionada ha sido realizado gracias a [Flightplan](https://www.npmjs.com/package/flightplan)


## Tests

Los tests en este proyecto se llevan a cabo gracias al framework Mocha y a la librería Chai.
El documento de tests se encuentra en la ruta [./test/test.js](https://github.com/alberturria/Hospital/blob/master/test/test.js).
Para ejecutar los tests, una vez clonado el repositorio será necesario ejecutar `npm test`. (Este a su vez ejecutará `mocha --exit` para ponerle fin a los tests).
El uso de Travis-CI nos permite mantener una integración continua lanzando los tests cada vez que se realice un push a la rama master de este repositorio.

## Despliegue

### Usando Heroku como PaaS

Se ha empleado Heroku como PaaS para el despliegue de nuestro servicio web.
Dicho despliegue lo puedes encontrar en [este link](https://hospitaliv.herokuapp.com/)

Al estar conectado el método de despliegue con este repositorio de Github, cada vez que realicemos un push a la rama master del mismo, nos aseguramos que se aplican los cambios realizados en Heroku (Ahorrandonos de esta manera tener que realizar un `git push heroku master` cada vez que se quiera desplegar un cambio nuevo en dicha plataforma).

Además, al haberlo conectado con Travis-CI, los despliegues automáticos generan una nueva versión de la aplicación cada vez que se realiza un `push` a la rama `master`.

El archivo que declara qué comando se debe ejecutar para iniciar la app es el archivo [Procfile](https://github.com/alberturria/Hospital/blob/master/Procfile).

Para comprobar el funcionamiento correcto del PaaS se puede o bien ver el link en el que se despliega la aplicación.
Para comprobar de manera local el funcionamiento del Paas se ha ejecutado el comando `heroku local web`.
El comando `heroku open` le abre el servicio ya desplegado en su navegador web predeterminado.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


### Usando contenedores (Docker)

Ahora nuestro servicio web también se puede desplegar desde un contenedor, aquí se puede ver el despliegue:
Contenedor: https://docker-hospital.herokuapp.com

La imagen que se ha usado ha sido la siguiente:
DockerHub: https://hub.docker.com/r/alberturria/hospital/

Para más información sobre contenedores vaya a [esta página](https://alberturria.github.io/Hospital/contenedores.html)


### Desde una máquina virtual

Despliegue final: 40.68.63.95

Finalmente hemos realizado un despliegue de una máquina virtual usando los servicios de Azure.
Esta máquina ha sido configurada gracias al [Vagrantfile](https://github.com/alberturria/Hospital/blob/master/Vagrantfile), aprovisionada gracias al [playbook.yml](https://github.com/alberturria/Hospital/blob/master/provision/playbook.yml) y desplegada gracias al [flightplan.js](https://github.com/alberturria/Hospital/blob/master/despliegue/flightplan.js)

- Comandos:
    - `vagrant up`
    - `cd despliegue/ ; fly staging`

Como se puede observar hemos hecho uso de tres herramientas diferentes para tener disponible nuestro servicio web desplegado en la red.
Para obtener más información puede ir a la [documentación de Vagrant](https://alberturria.github.io/Hospital/vagrant.html), la [documentación de Ansible](https://alberturria.github.io/Hospital/ansible.html), o la [documentación de Flightplan](https://alberturria.github.io/Hospital/flightplan.html).

## Licencia

GNU GPLv3

Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

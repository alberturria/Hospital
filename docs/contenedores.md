# Docker

El servicio desplegado desde un contenedor lo podemos ver [aquí](https://docker-hospital.herokuapp.com/status)
![Contenido del servicio desplegado en ](/assets/img/urlcontenedor.png)

En el hito 4 de la asignatura hemos comenzado a usar contenedores Docker para el despliegue de nuestra asignatura.
De esta forma podremos facilitar el despliegue de nuestro servicio web en cualquier Iaas que permita el despliegue de dichos contenedores.

Estos son los pasos que he seguido para dockerizar nuestra aplicación:

1. Logearnos en Heroku desde el terminal.
![Login Heroku](/assets/img/herokulogin.png)
2. Preparar Docker para poder usarlo desde el terminal.
3. Crear nuestros ficheros Dockerfile y .dockerignore.
    
## Dockerfile

Fichero en el que se escriben las instrucciones necesarias por un usuario para crear una imagen.
Contenido de nuestro Dockerfile:

    
```
# Versión 8 de Node.js
FROM node:8
# A quién culpar si nada funciona
MAINTAINER albertoherreravargas@gmail.com
# Crear un directorio de trabajo
RUN mkdir -p /usr/src/app
# Cambiar a directorio de trabajo
WORKDIR /usr/src/app
# Copiar contenido de la carpeta local a 'WORKDIR'
COPY . .
# Instalar nodemon de manera global
RUN npm install -g nodemon
# Instalar dependencias en package.json
RUN npm install
# Exponer el puerto desde el container, así el host puede acceder a la variable $PORT
EXPOSE $PORT
# Lanzar la aplicación
CMD [ "npm", "start" ]
```

## .dockerignore

Fichero que evitará que sus módulos locales y registros de depuración se copien en su imagen de Docker y posiblemente sobrescriba los módulos instalados dentro de su imagen.
Contenido de nuestro .dockerignore:



```
node_modules
npm-debug.log
```

4. Crear una nueva aplicación en heroku
![Crear app Heroku](/assets/img/herokucreate.png)
5. Hacer un push del contenedor
![Push a Heroku](/assets/img/herokupush.png)
6. Hacer correr el contenedor
![Release de la imagen](/assets/img/herokurelease.png)




# DockerHub

Se trata de un servicio de registro basado en la nube que permite crear imágenes, así como enlazar con repositorios de código.
Aprovechando esto, nosotros hemos creado un repositorio en DockerHub que está enlazado a nuestro repositorio de Github. 
De esta manera cada vez que se realice un push a la rama master del repositorio de Github, se creará una nueva imagen en DockerHub.
[Link al repositorio de DockerHub](https://hub.docker.com/r/alberturria/hospital/)

![Repositorio DockerHub](/assets/img/dockerhub.png)

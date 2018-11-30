# Docker

El servicio desplegado desde un contenedor lo podemos ver [aquí](https://docker-hospital.herokuapp.com/status)
![Contenido del servicio desplegado en ](/assets/img/urlcontenedor.png)

Se ha seguido [esta guía](https://thejackalofjavascript.com/deploying-a-node-js-docker-container-to-heroku/)

En el hito 4 de la asignatura hemos comenzado a usar contenedores Docker para el despliegue de nuestra asignatura.
De esta forma podremos facilitar el despliegue de nuestro servicio web en cualquier Iaas que permita el despliegue de dichos contenedores.

Estos son los pasos que he seguido para dockerizar nuestra aplicación:

1. Logearnos en Heroku desde el terminal.
![Login Heroku](/assets/img/herokulogin.png)
2. Preparar Docker para poder usarlo desde el terminal.
3. Crear nuestros ficheros Dockerfile y .dockerignore.
    
## Dockerfile

Fichero en el que se escriben las instrucciones necesarias por un usuario para crear una imagen.

Podemos ver que como imagen base se ha utilizado node:8. Esto es debido a que nuestro servicio web está usando dicha versión durante su desarrollo, y de esta forma evitaremos conflictos. En caso de que se hubiera usado una imagen anterior, es posible que apareciesen problemas durante la instalación.

Además podemos observar cómo finalmente tanto [Procfile](https://github.com/alberturria/Hospital/blob/master/Procfile) como [Dockerfile](https://github.com/alberturria/Hospital/blob/master/Dockerfile) ejecutan al final el mismo comando, `npm start`.

Contenido de nuestro Dockerfile:

    
```
FROM node:8

MAINTAINER albertoherreravargas@gmail.com

RUN mkdir -p /usr/src/app

# Crear directorio de la aplicación
WORKDIR /app
# Instalar dependencias
COPY package.json /app
COPY /classes /app/classes
COPY /controllers /app/controllers
COPY /data /app/data
COPY /models /app/models
COPY /routes /app/routes
COPY /test /app/test
COPY index.js /app

RUN npm install -g nodemon

RUN npm install

EXPOSE $PORT

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
Aprovechando esto, **nosotros hemos creado un repositorio en DockerHub que está enlazado a nuestro repositorio de Github.**

De esta manera cada vez que se realice un push a la rama master del repositorio de Github, se creará una nueva imagen en DockerHub.

Esto se ha podido hacer Clicando en la página web de [Dockerhub](https://hub.docker.com/)  en Create > Create Automated Build > Create Auto-Build Github


[Link al repositorio de DockerHub](https://hub.docker.com/r/alberturria/hospital/)

![Repositorio DockerHub](/assets/img/dockerhub.png)

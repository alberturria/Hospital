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
COPY dataencripted /app


RUN npm install -g nodemon

RUN npm install

EXPOSE $PORT

CMD [ "npm", "start" ]
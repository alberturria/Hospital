FROM node:8

MAINTAINER albertoherreravargas@gmail.com

RUN mkdir -p /usr/src/app

# Crear directorio de la aplicación
WORKDIR /usr/src/app

# Instalar dependencias
COPY . .

RUN npm install -g nodemon

RUN npm install

EXPOSE $PORT

CMD [ "npm", "start" ]
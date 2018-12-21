## Enunciado

Crear un usuario propio e instalar alguna aplicación tal como nginx en el contenedor creado de esta forma, usando las órdenes propias del sistema operativo con el que se haya inicializado el contenedor.

### Solución

Para empezar hemos lanzado `sudo docker run -i -t ubuntu /bin/bash` para abrir la terminal de nuestro contenedor, y hemos ejecutado `useradd alberturria`, así como `apt update` y `apt install nginx`

![Ejercicio5](https://github.com/alberturria/Hospital/tree/master/docs/assets/img/4ejercicio5.png)

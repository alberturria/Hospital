## Enunciado

Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.

### Solución

En mi caso al estar utilizando `node.js` es sencilla la definición de un `package.json` puesto que al lanzar el comando `npm init` se genera solo.

Además para cada librería que se vaya a utilizar, si al instalarla con `npm` se añade el flag `--save-dev` se añadirá automáticamente a las dependencias del mismo.

[Este](https://github.com/alberturria/Hospital/blob/master/package.json) es el `package.json` de mi proyecto.
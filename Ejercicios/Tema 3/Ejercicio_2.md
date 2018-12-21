## Enunciado

Crear una aplicación en OpenShift o en algún otro PaaS en el que se haya dado uno de alta. Realizar un despliegue de prueba usando alguno de los ejemplos incluidos con el PaaS.
### Solución

Debido a que he llegado al límite de aplicaciones desplegadas en mi Paas (Heroku) pondré enlace al despliegue que ya tengo hecho, pero explicaré como se realiza un despliegue con uno de los ejemplos ofrecidos por Heroku.

[Aplicación desplegada](https://hospitaliv.herokuapp.com)

[Ejemplo de otra aplicación desplegada](https://pruebacompleta.herokuapp.com/index.html)

- Para desplegar una aplicación en heroku tan solo debes de registrarte con `heroku login`.
- Clonar este repositorio (en caso de desarrollar en Node.js) `git clone https://github.com/heroku/node-js-getting-started.git`
- Ir al repositorio `cd node-js-getting-started`
- Crear aplicación en Heroku `heroku create`
- Realizar un push a Heroku `git push heroku master`
- `heroku open` Abrirá tu navegador y te mostrará la aplicación desplegada.
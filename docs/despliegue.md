[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


# Despliegue

Se ha empleado Heroku como PaaS para el despliegue de nuestro servicio web.
Dicho despliegue lo puedes encontrar en [este link](https://hospitaliv.herokuapp.com/)
Para ello hemos tenido que seguir una serie de pasos.

1. Crear una aplicación en Heroku escribiendo `heroku create` en nuestro repositorio.
2. Definir un Procfile
3. Conectar con Github para desplegar en Heroku cada vez que se realice un push a la rama master de nuestro repositorio.
![Conectar con Github](/assets/img/github.png)

4. Conectar con nuestro sistema de integración continua (Travis-CI) para que no se despliegue hasta que no pase los tests en Travis.
![Conectar con Travis-CI](/assets/img/integracioncontinua.png)

Al estar conectado el método de despliegue con este repositorio de Github, cada vez que realicemos un push a la rama master del mismo, nos aseguramos que se aplican los cambios realizados en Heroku (Ahorrandonos de esta manera tener que realizar un `git push heroku master` cada vez que se quiera desplegar un cambio nuevo en dicha plataforma).

Además, al haberlo conectado con Travis-CI, los despliegues automáticos generan una nueva versión de la aplicación cada vez que se realiza un `push` a la rama `master`.



## Procfile

El uso de este documento nos permitirá declarar explícitamente qué comando se deberá usar para iniciar la aplicación.
Este comando será ejecutado por el dyno de nuestra aplicación.
![](/assets/img/dyno.png)


El Procfile de nuestra aplicación tendr'el siguiente aspecto:
`web: node index.js`
Aquí se pueden diferenciar dos partes:
- web: Se trata del tipo de proceso que se lanzará. Hace saber a Heroku que la aplicación recibirá tráfico web cuando se implemente.
- node index.js: Se trata del comando que ejecutamos para lanzar nuestra apliación. Al estar utilizando Node.js éste es nuestro comando, pero cambiará dependiendo del entorno que se utilice.

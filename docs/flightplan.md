# Despliegue en máquina virtual

Para el despliegue de nuestra aplicación hemos usado `flightplan`, que es un paquete de `node` que nos permite desplegar nuestra aplicación de una manera sencilla.
Para realizar el despliegue tan solo tendremos que escribir `fly staging` en el directorio [despliegue](https://github.com/alberturria/Hospital/tree/master/despliegue),
o bien `cd despliegue/ ; fly staging` desde el directorio principal de nuestro repositorio.

![Ejecución del flightplan](/assets/img/flightplan.png)

## Explicación del fichero flightplan usado

Inspirándonos en el [Github de flightplan.js](https://github.com/pstadler/flightplan) podemos ver que el fichero debe de comenzar con un `require` de la dependencia `flightplan`.

A continuación se define la configuración. Para `staging` (puesta en escena) definimos:
- `host`: `maquinavagrant.westeurope.cloudapp.azure.com` que lo podemos deducir debido al nombre dado a la máquina virtual en el [Vagrantfile](https://github.com/alberturria/Hospital/blob/master/Vagrantfile) y a la localización dada en el mismo. (De todas formas es posible mirarlo desde la consola de Azure).
    
- `username`: `vagrant` Es el username por defecto, ya que nosotros no hemos especificado ninguno en el [Vagrantfile](https://github.com/alberturria/Hospital/blob/master/Vagrantfile).

- `agent`: `process.env.SSH_AUTH_SOCK` Indica que se enviará dicho socket para permitir la conexión.

A continuación se especifican los comandos que se ejecutarán en la máquina virtual con `plan.remote`.
Gracias a `remote.with('cd /opt/Hospital/, function() {'` decidimos dónde se ejecutarán los siguientes comandos:
- `remote.exec('sudo npm install --production');` Para instalar las dependencias (exceptuando las 'devDenpendencies') de nuestro proyecto a través de nuestro gestor de paquetes de node `npm`.
- `remote.exec('sudo forever start index.js');` Para lanzar la aplicación con `forever` para que no se ejecute de manera indefinida. Es cierto que NO se ejecuta `npm start` como bien se hace en [Procfile](https://github.com/alberturria/Hospital/blob/master/Procfile) y [Dockerfile](https://github.com/alberturria/Hospital/blob/master/Dockerfile), pero creo conveniente la ejecución a través de `forever` para permitir una ejecución ilimitada. (Como también se explica en la documentación del [aprovisionamiento](https://alberturria.github.io/Hospital/ansible.html)).




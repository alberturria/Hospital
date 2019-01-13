# Aprovisionamiento de nuestra máquina virtual

El aprovisionamiento ha sido realizado gracias a Ansible, que ha sido lanzado desde el Vagrantfile, como se puede ver en la documentación.
El fichero que se usa para dicho aprovisionamiento es el [playbook.yml](https://github.com/alberturria/Hospital/blob/master/provision/playbook.yml).

Siempre podremos volver a aprovisionar nuestra máquina virtual escribiendo `vagrant provision` en el directorio principal de nuestro repositorio.

![Aprovisionamiento de nuestra máquina virtual](/assets/img/ansible.png)

## Explicación del fichero de aprovisionamiento

La realización de este Vagrantfile ha sido realizada tras la previa revisión de información de los siguientes enlaces (entre otros):
- [Working with Playbooks](https://docs.ansible.com/ansible/latest/user_guide/playbooks.html)
- [Try the lastest stable version of npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
- [Forever npm](https://www.npmjs.com/package/forever)

Como se puede observar, nuestro fichero está dividido en tareas, `tasks` , cada una de ellas recibe un nombre y lleva a cabo una acción.
La opción `become` indica que el comando se debe de ejecutar como superusuario.
La opción `command` indica los comandos que se deben de ejecutar para cumplir dicha tarea.


Con la primera directiva `hosts: all` hacemos que en caso de que se lanzasen diferentes máquinas virtuales para aprovisionar, se ejecutase el mismo aprovisionamiento para todos los hosts.
A partir de aquí se comienzan con las tareas:

- Actualizar paquetes del sistema.
    Siempre es recomendable al iniciar por primera vez un sistema operativo actualizar los paquetes, para que, en caso de que se utilice alguno, se use la última versión.

- Instalar npm
    Debemos de instalar el gestor de paquetes de node para instalar dependencias

- Actualizar node a la última versión
    A base de prueba y error he visto necesario actualizar node a la última versión puesto que si no se hace es imposible lanzar la aplicación.

- Establecer versión estable
    Esta regla va ligada a la anterior, y como se ha comentado, es de vital importancia para no obtener mensajes de error a la hora de lanzar la aplicación.

- Instalar forever
    Forever es un paquete de npm que nos permite correr la aplicación sin límites.
    Pese a que se puede lanzar la aplicación de manera usual (`npm start`) he optado por lanzarla con forever para que el aprovisionamiento tenga fin (de la otra manera la consola no retorna del aprovisionamiento).


# Cración de máquina virtual

El proceso de creación del entorno donde se va a desplegar nuestra aplicación (VM de Azure) se ha realizado gracias al uso de Vagrant,
herramienta que nos permite automatizar dicho proceso de creación a través de un fichero llamado [Vagrantfile](https://github.com/alberturria/Hospital/blob/master/Vagrantfile).
En este fichero podremos especificar las diversas características que queremos que tenga nuestra VM.

Para crear nuestra máquina virtual tan solo debremos de escribir `vagrant up` estando en el directorio principal del repositorio.

![Ejecución de 'vagrant up'](/assets/img/vagrant.png)

## Explicación del Vagrantfile usado

La realización de este Vagrantfile ha sido realizada tras la previa revisión de información de los siguientes enlaces (entre otros):
- [Using Vagrant with Azure](https://blog.scottlowe.org/2017/12/11/using-vagrant-with-azure/)
- [Easiest way to copy a single file from host to Vagrant guest?](https://stackoverflow.com/questions/16704059/easiest-way-to-copy-a-single-file-from-host-to-vagrant-guest)
- [Vagrantfile by HashiCorp](https://www.vagrantup.com/docs/vagrantfile/)

Se comienza la creación del Vagrantfile escribiendo `vagrant init` en nuestro directorio de la aplicación. Esto generará automáticamente un Vagrantfile sobre el que realizaremos algunos cambios.

### Modificaciones

- `config.vm.box = "azure"`: Debemos de usar esta maquina base para poder ejecutar como provisionador Azure. Hemos probado con otras como [esta](https://app.vagrantup.com/gbarbieru/boxes/xenial) pero ha sido imposible ejecutar `vagrant up`.
- `config.ssh.private_key_path = '~/.ssh/id_rsa'`: Hemos tenido que añadirle una ruta a nuestra clave para poder ejecutar `vagrant up`. Cuando no hemos añadido esta línea obteníamos este error: `Please specify a secure key to use with config.ssh.private_key_path (RuntimeError) (see: https://www.vagrantup.com/docs/vagrantfile/ssh_settings.html).`
- `config.vm.provision "file", source: "...", destination: "..." `: Todas estas lineas se han añadido para copiar los ficheros desde el host a la máquina que creamos. Así evitamos copiar el repositorio entero mediante Ansible. (Información proporcionada por el profesor).
- `config.vm.provider "azure" do |azure|`: Con esta declaración de bloque indicamos que nuestro proveedor del Vagrantfile es "azure", y que se deben de ejecutar todas las reglas que comiencen con azure. ...
    - Dentro de este apartado añadimos los credenciales de nuestro espacio de trabajo en Azure, mediante variables de etorno. (Previamente deben ser exportadas).
    - `azure.vm_name = 'vmazure'`: Regla 'innecesaria' que permite darle un nombre a nuestra máquina. He decidido usarla para que en el [flightplan.js](https://github.com/alberturria/Hospital/blob/master/despliegue/flightplan.js) podamos referenciar a nuestra máquina sin tener que mirar Azure.
    - `azure.tcp_endpoints = 80`: Regla que debe de añadirse para abrir el puerto 80 en nuestra máquina creada.

- `config.vm.provision "ansible" do |ansible|`: Con esta declaración de bloque indicamos que nuestro aprovisionamiento será realizado mediante ansible, y que se deben de ejecutar todas las reglas que comiencen con ansible. ...
    - `ansible.playbook = "provision/playbook.yml"`: Indicamos la ruta que tiene nuestro fichero de aprovisionamiento para que comience a ser ejecutado.
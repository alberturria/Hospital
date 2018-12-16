# Cración de máquina virtual

El proceso de creación del entorno donde se va a desplegar nuestra aplicación (VM de Azure) se ha realizado gracias al uso de Vagrant,
herramienta que nos permite automatizar dicho proceso de creación a través de un fichero llamado [Vagrantfile](https://github.com/alberturria/Hospital/blob/master/Vagrantfile).
En este fichero podremos especificar las diversas características que queremos que tenga nuestra VM.

Para crear nuestra máquina virtual tan solo debremos de escribir `vagrant up` estando en el directorio principal del repositorio.

![Ejecución de 'vagrant up'](/assets/img/vagrant.png)

## Explicación del Vagrantfile usado

En primer lugar se especifica que se requiere el plugin de aprovisionamiento de azure con la linea `require 'vagrant-azure'`
A continuación con la linea `Vagrant.configure('2') do |config|` le indicamos que la configuración de la vm vendrá indicada por todas las lineas que comienzan po `config`.
Comenzamos indicando que la caja que usaremos será la caja de azure.
Le indicaremos la ruta de nuestra clave ssh con `config.ssh.private_key_path = '~/.ssh/id_rsa'`. Esto nos permitirá una conexión por ssh.
Con `config.vm.network 'public_network'` le hacemos saber que la red será pública, y con `config.vm.network 'forwarded_port', guest: 80, host: 8080` redireccionaremos el puerto número 80 de la máquina virtual al puerto 8080 del host.

Con la orden `config.vm.provider :azure do |az, override|` indicamos que aquí comienzan las instrucciones de definición de la máquina virtual de azure. Estas órdenes comenzarán con `az`.

Las siguientes cuatro líneas (`tenant_id`,`client_id`,`client_secret`,`subscription_id`) hacen referencia a los credenciales de Microsoft Azure.
Gracias a `vm_name` establecemos un nombre a nuestra máquina virtual en Azure, el cual nos servirá para acceder al servicio web a través del navegador.
Con `vm_size` establecemos el tamaño de nuestra máquina virtual a `Standard_A0` el cual cuenta con 0.768 GB de memoria, y 20 GB de almacenamiento.(Para nuestro uso es innecesaria una máquina virtual de mayores prestaciones).
Elegiremos la imagen a correr con `vm_image_urn`, en nuestro caso usaremos la última versión disponible de Ubuntu Server 16.04, puesto que estamos acostumbrados a trabajar con dicho SO, y no es excesivamente pesado al no tener interfaz gráfica más alla que la linea de comandos.
Con `resource_group_name` elegimos el nombre del grupo de recursos de Azure que vamos a utilizar. (En caso de que no exista, se creará).
Gracias a `location` elegimos la localización de nuestro servidor .(En nuestro caso hemos escogido `westeurope` para intentar eliminar altas latencias).
Una de las opciones más importantes es la de `tcp_endpoints` puesto que nos permite abrir puertos de entrada al servicio, por tanto, gracias a esta regla podremos acceder al servicio web.

Gracias a `config.vm.provision "ansible" do |ansible|` indicamos que ansible será el aprovisionador de nuestra máquina virtual, y con 
`ansible.playbook = "provision/playbook.yml"` indicamos la ruta al fichero de aprovisionamiento.
Con la orden `ansible.sudo = true` obligaremos a ansible a realizar el aprovisionamiento como superusuario.

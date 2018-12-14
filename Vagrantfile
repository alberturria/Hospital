# Necesitamos el plugin de provisionamiento de azure.
require 'vagrant-azure'
Vagrant.configure('2') do |config|
  config.vm.box = 'azure'

  # Usar ssh para conectar a la vm
  config.ssh.private_key_path = '~/.ssh/id_rsa'
  config.vm.network 'public_network' 
  config.vm.network 'forwarded_port', guest: 80, host: 8080

  config.vm.provider :azure do |az, override|
    # Información general de los servicios de Azure 
    az.tenant_id = '612b34bc-05a2-4fab-a748-25a3dfb14db7'
    az.client_id = '459e8de2-5701-4fb4-a396-aa0ab68b505d'
    az.client_secret = 'c120ea33-e315-487b-a4d3-c0d0eaead7cb'
    az.subscription_id = 'bee7cc74-a15e-47a0-9e21-f5993d87aef4'

    # Parámetros de la vm
    az.vm_name = 'maquinavagrant'
    az.vm_size = 'Standard_A0'
    az.vm_image_urn = 'Canonical:UbuntuServer:16.04-LTS:latest'
    az.resource_group_name = 'NuevosRecursos'
    az.location = 'westeurope'
    az.tcp_endpoints = 80


  end 

 # Ansible como provisionador
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "provision/playbook.yml"
    ansible.sudo = true
  end


end 








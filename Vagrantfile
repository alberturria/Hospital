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
    az.tenant_id = ENV['AZURE_TENANT_ID']
    az.client_id = ENV['AZURE_CLIENT_ID']
    az.client_secret = ENV['AZURE_CLIENT_SECRET']
    az.subscription_id = ENV['AZURE_SUBSCRIPTION_ID']
    # Parámetros de la vm
    az.vm_name = 'maquinavagrant'
    az.vm_size = 'Standard_A0'
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








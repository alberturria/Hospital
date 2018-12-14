var plan = require('flightplan');

plan.target('staging', {
  host: 'maquinavagrant.westeurope.cloudapp.azure.com',
  username: 'vagrant',
  agent: process.env.SSH_AUTH_SOCK
});

plan.remote(function(remote) {
  remote.log('Executing aplication');

  remote.with('cd /opt/Hospital/', function() {
    remote.exec('npm install');
    remote.exec('sudo forever start index.js');
  });

});

plan.local(function(local) {
  local.log('Clean up');
});
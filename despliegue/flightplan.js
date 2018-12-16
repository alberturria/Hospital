var plan = require('flightplan');

plan.target('staging', {
  host: 'maquinavagrant.westeurope.cloudapp.azure.com',
  username: 'vagrant',
  agent: process.env.SSH_AUTH_SOCK
});

plan.remote(function(remote) {

  remote.with('cd /opt/Hospital/', function() {
    remote.exec('sudo npm install --production');
    remote.exec('sudo forever start index.js');
  });

});


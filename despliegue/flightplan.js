var plan = require('flightplan');

plan.target('staging', {
  host: 'vmazure.westus.cloudapp.azure.com',
  username: 'vagrant',
  agent: process.env.SSH_AUTH_SOCK
});

plan.remote(function(remote) {

  
    remote.exec('sudo npm install --production');
    remote.exec('sudo forever start index.js');


});


## Enunciado

Instalar docker.


### Solución

Debido a que ya lo tengo instalado tan sólo mostraré los comandos seguidos para instalarlo.

1. `$ sudo apt-get update`
2. 
    ```
    $ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
    ```
3. `$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
4. `$ sudo apt-get update`
5. `$ sudo apt-get install docker-ce`

## Enunciado
Usando las tablas de precios de servicios de alojamiento en Internet “clásicos”, es decir, que ofrezcan Virtual Private Servers o servidores físicos, y de proveedores de servicios en la nube, comparar el coste durante un año de un ordenador con un procesador estándar (escogerlo de forma que sea el mismo tipo de procesador en los dos vendedores) y con el resto de las características similares (tamaño de disco duro equivalente a transferencia de disco duro) en el caso de que la infraestructura comprada se usa solo el 1% o el 10% del tiempo.

### Solución

Como empresa que ofrezcan servidores físicos hemos escogido [VPSServers](https://www.vpsserver.com/plans/)

![VPSServers](https://github.com/alberturria/Hospital/tree/master/docs/assets/img/vpsservers.png)


Y como empresa que ofrece servicios en la nube nos hemos decantado por [Google Cloud Services](https://cloud.google.com/)

![GoogleCloud](https://github.com/alberturria/Hospital/tree/master/docs/assets/img/googlecloud.png)


Hemos escogido la opción de VPSServers de 1 GB de memoria, procesador de 1 core, 25 GB de almacenamiento y 1000 GB de transferencia. (4'99€ al mes)
En la opción de Google Cloud hemos escogido la opción `n1-standard-1` con 1 procesador y 3'75 GB de memoria, con un precio de 24.2725 $ al mes, que son: 21€ aproximadamente.

En el caso de VPSServer, sea el caso de que la infraestructura se use un 1% o un 10% del tiempo, el coste será el mismo, 4'99€.
Sin embargo, con Google Cloud, si usamos un 1% la infraestructura pagaremos sólo un 1% de la misma, es decir: 0,21€.
Mientras que si se usa un 10% dicha infraestructura, el precio ascenderá a: 2,1€.

En ambos casos sale más rentable contratar un proveedor de servicios en la nube.
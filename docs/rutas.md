# Estas son las diferentes rutas disponibles de nuestro servicio web

##  /

En esta ruta ahora mismo tan solo se devuelve un JSON que indica que el status es OK.

![Ruta /](/assets/img/root.png)



## /pacientes

En esta ruta se podrá ver cuáles son los pacientes de los que se tiene constancia en la base de datos.
De cada paciente se podrá saber su nombre, su apellido y su DNI.

![Ruta /pacientes](/assets/img/pacientes.png)

## /doctores

En esta ruta se podrá ver cuáles son los doctores de los que se tiene constancia en la base de datos.
De cada doctor se podrá saber su nombre, su apellido, su DNI y su especialidad.

![Ruta /doctores](/assets/img/doctores.png)


## /citas

En esta ruta se podrá ver cuáles son las citas de las que se tiene constancia en la base de datos.
De cada cita se podrá saber el DNI del paciente que se atiende, el DNI del doctor que realiza la consulta, la fecha, la hora y la sala donde tendrá lugar la cita.

![Ruta /citas](/assets/img/citas.png)

## /citas/:id

En esta ruta se puede ver una ruta específica, siempre que se le pase el `_id` de la misma.

![Ruta /citas/:id](/assets/img/citaid.png)


## /citas/:id/doctor

En esta ruta se puede ver la información asociada al doctor de una determinada cita.

![Ruta /citas/:id/doctor](/assets/img/citaiddoctor.png)


## /citas/:id/paciente

En esta ruta se puede ver la información asociada al paciente de una determinada cita.


![Ruta /citas/:id/paciente](/assets/img/citaidpaciente.png)

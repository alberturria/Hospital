/*
Clase Paciente:
    Clase que modela los Pacientes que tendrán la cita con los doctores.
    
    Cada Paciente vendrá definida por:
    -Nombre: Nombre del Paciente.
    -Apellido: Apellidos del Paciente.
    -DNI: DNI del Paciente.
    
    Métodos:
    -Constructor: Crea un nuevo Paciente.

    -SetNombre: Asigna un nuevo nombre al Paciente
    -SetApellido: Asigna unos nuevos apellidos al Paciente.
    -SetDNI: Asigna un nuevo DNI al Paciente

    -GetNombre: Devuelve el nombre del Paciente.
    -GetApellido: Devuelve los apellidos del Paciente.
    -GetDNI: Devuelve el DNI del Paciente.
    
    -toString: Devuelve toda la información del Paciente en forma de string.

*/

class Paciente{
    constructor(nombre, apellido, DNI)
    {
        this.nombre = nombre;
        this.apellido =  apellido;
        this.DNI = DNI;        
    }

    setNombre(nombre)
    {
        this.nombre = nombre;        
    }

    setApellido(apellido)
    {
        this.apellido = apellido;
    }

    setDNI(DNI)
    {
        this.DNI = DNI;
    }

    getNombre()
    {
        return this.nombre;
    }

    getApellido()
    {
        return this.apellido;
    }

    getDNI()
    {
        return this.DNI;
    }

    toString()
    {
        return(this.getNombre()+" "+this.getApellido()+" "+this.getDNI());
    }

}

module.exports = Paciente;
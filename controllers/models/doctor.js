/*
Clase Doctor:
    Clase que modela los Doctores que tendrán los pacientes asignados en cada Cita.
    
    Cada Doctor vendrá definida por:
    -Nombre: Nombre del Doctor.
    -Apellido: Apellidos del Doctor.
    -DNI: DNI del Doctor.
    -Especialidad: Formación en la que está especializado el Doctor (Ej. Traumatología, pediatría, etc.)
    
    Métodos:
    -Constructor: Crea un nuevo Doctor.

    -SetNombre: Asigna un nuevo nombre al Doctor
    -SetApellido: Asigna unos nuevos apellidos al Doctor.
    -SetDNI: Asigna un nuevo DNI al Doctor
    -SetEspecialidad: Asigna una nueva esoecialidad al Doctor.

    -GetNombre: Devuelve el nombre del Doctor.
    -GetApellido: Devuelve los apellidos del Doctor.
    -GetDNI: Devuelve el DNI del Doctor.
    -GetEspecialidad: Devuelve la especialidad del Doctor.
    
    -toString: Devuelve toda la información del Doctor en forma de string.

*/
class Doctor{
    constructor(nombre, apellido, DNI, especialidad)
    {
        this.nombre = nombre;
        this.apellido =  apellido;
        this.DNI = DNI;
        this.especialidad = especialidad;        
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

    setEspecialidad(especialidad)
    {
        this.especialidad = especialidad;
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

    getEspecialidad()
    {
        return this.especialidad;
    }

    toString()
    {
        return this.getNombre()+" "+this.getApellido()+" "+this.getDNI()+" "+this.getEspecialidad();
    }

}

module.exports = Doctor;
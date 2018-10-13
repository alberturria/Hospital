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
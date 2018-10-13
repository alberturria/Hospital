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
class Cita{
    constructor(paciente, doctor, date, hora, sala)
    {
        this.paciente = paciente;
        this.doctor =  doctor;
        this.date = date;
        this.hora = hora;
        this.sala = sala
        console.log("Se ha creado una nueva Cita");
        
    }

    setPaciente(paciente)
    {
        this.paciente = paciente;        
    }

    setDoctor(doctor)
    {
        this.doctor = doctor;
    }

    setDate(date)
    {
        this.date = date;
    }

    setHora(hora)
    {
        this.hora = hora;
    }

    setSala(sala)
    {
        this.sala = sala
    }

    getPaciente()
    {
        return this.paciente;
    }

    getDoctor()
    {
        return this.doctor;
    }

    getDate()
    {
        return this.date;
    }

    getHora()
    {
        return this.hora;
    }

    getSala()
    {
        return this.sala;
    }

    toString()
    {
        return this.paciente.toString()+" "+this.doctor.toString()+" "+this.getDate()+" "+this.getHora()+" "+this.getSala();
    }

}

module.exports = Cita;
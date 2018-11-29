/*
Clase Cita:
    Clase que modela las citas que tendrán los pacientes con los doctores asignados.
    
    Cada Cita vendrá definida por:
    -Paciente: El paciente que asistirá a la Cita.
    -Doctor: El médico con el que se tiene la Cita.
    -Date: Fecha (día, mes y año) en la que tendrá lugar la Cita.
    -Hora: Hora del día (incluído en el parámetro Date) en la que tomará lugar la Cita
    -Sala: Número de Sala del centro donde tomará lugar la Cita
    
    Métodos:
    -Constructor: Crea una nueva Cita.

    -SetPaciente: Asigna un nuevo paciente a la Cita.
    -SetDoctor: Asigna un nuevo doctor a la Cita.
    -SetDate: Asigna una nueva fecha a la Cita.
    -SetHora: Asigna una nueva hora a la Cita.
    -SetSala: Asigna una nueva Sala a la Cita.

    -GetPaciente: Devuelve el paciente de la Cita.
    -GetDoctor: Devuelve el doctor de la Cita.
    -GetDate: Devuelve la fecha de la Cita.
    -GetHora: Devuelve la hora de la Cita.
    -GetSala: Devuelve la sala de la Cita.

    -toString: Devuelve toda la información de la Cita en forma de string.

*/

class Cita{
    constructor(paciente, doctor, date, hora, sala)
    {
        this.paciente = paciente;
        this.doctor =  doctor;
        this.date = date;
        this.hora = hora;
        this.sala = sala        
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
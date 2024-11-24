class Reserva {
    constructor(
      id,
      nombre,
      email,
      hotel,
      fechaEntrada,
      fechaSalida,
      habitacion,
      estado,
      numeroHuespedes,
  
    ) {
      this.id = id;
      this.nombre = nombre;
      this.email = email;
      this.hotel = hotel;
      this.fechaEntrada = fechaEntrada;
      this.fechaSalida = fechaSalida;
      this.habitacion = habitacion;
      this.estado = estado;
      this.numeroHuespedes = numeroHuespedes;
  
    }
  
    // getInfo() {
    //   return `Id: ${this.id}, Nombre: ${this.nombre}, E-mail: ${this.email}, Hotel: ${this.hotel}, Fecha de entrada: ${this.fechaEntrada}, Fecha de Salida: ${this.fechaSalida}, Tipo de Habitación: ${this.habitacion} Estado de pago: ${this.estado}, Número de huéspedes: ${this.numeroHuespedes}`;
    // }
  }
  
  export default Reserva;
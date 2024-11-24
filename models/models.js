class Reserva {
    constructor(
      id,
      hotel,
      fechaEntrada,
      fechaSalida,
      habitacion,
      estado,
      numeroHuespedes,
  
    ) {
      this.id = id;
      this.hotel = hotel;
      this.fechaEntrada = fechaEntrada;
      this.fechaSalida = fechaSalida;
      this.habitacion = habitacion;
      this.estado = estado;
      this.numeroHuespedes = numeroHuespedes;
  
    }
  
    getInfo() {
      return `Id: ${this.id} Hotel: ${this.hotel}, Fecha de entrada: ${this.fechaEntrada}, Fecha de Salida: ${this.fechaSalida}, Tipo de Habitación: ${this.habitacion} Estado de pago: ${this.estado}, Número de huéspedes: ${this.numeroHuespedes}`;
    }
  }
  
  export default Reserva;
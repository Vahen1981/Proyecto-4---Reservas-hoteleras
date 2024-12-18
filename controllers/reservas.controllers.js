// Las siguientes líneas no funcionarón en render.com, entiendo que son 
// características nuevas que pueden tener problemas de compatibilidad
// las he dejado comentadas
//
// import data from '../data.json' assert { type: "json" };
// const reservas = data.reservas;

// Para no tener que cambiar el "type" del package.json y, a la vez,
// continuar utilizando un archivo .json con los datos de las reservas
// he utilizado el método de importación utilizando fs y path
import fs from 'fs';
import path from 'path';

// Importar la clase reserva para crear nuevos objetos de reservas
import Reserva from '../models/models.js';

//Lógica para importar el archivo data.json y guardarlos en la variable reservas
const filePath = path.resolve('./data.json');
let reservas;
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }
  reservas = JSON.parse(data).reservas;
});



export const listaReservas = async (req, res) => {
    res.json(reservas);
};



export const crearReserva = async (req, res) => {
  try {
      const { nombre, email, hotel, entrada, salida, habitacion, estado, numeroHuespedes } = req.body;

      if (!nombre || !email || !hotel || !entrada || !salida || !habitacion || !estado || !numeroHuespedes) {
          return res.status(400).json({ mensaje: 'Todos los campos son obligatorios.' });
      }

      const nuevoId = reservas.length > 0 ? reservas[reservas.length - 1].id + 1 : 1;

      const nuevaReserva = new Reserva(
          nuevoId,
          nombre,
          email,
          hotel,
          entrada,
          salida,
          habitacion,
          estado,
          numeroHuespedes
      );

      reservas.push(nuevaReserva);

      res.status(201).json({ mensaje: 'Reserva creada', data: nuevaReserva });
  } 
  catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear la reserva' });
  }
};



export const filtrarPorId = async (req, res) => {
  const id = parseInt(req.params.id);
  const reserva = reservas.find((idReserva) => idReserva.id === id);

  if (reserva !== undefined) {
    res.json(reserva);
  } else {
    res.status(404).json({ mensaje: 'Reserva no encontrada' }); 
  }
};



export const actualizarPorId = async (req, res) => {
  const id = parseInt(req.params.id);

  for (let i = 0 ; i < reservas.length ; i++){
    if (reservas[i].id === id){
      reservas[i] = { ...reservas[i], ...req.body} 
      return res.status(200).json({ mensaje: 'Reserva actualizada', data: reservas[i] });
    }
  }
  res.status(404).json({ mensaje: 'Reserva no encontrada' }); 
}



export const eliminarReserva = async (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0 ; i < reservas.length ; i++){
    if (reservas[i].id === id){
      reservas.splice(i, 1);
      return res.status(200).json({ mensaje: 'Reserva eliminada' });
    }
  }
  res.status(404).json({ mensaje: 'Reserva no encontrada' }); 
}



export const filtrarPorHotel = async (req, res) => {
  const hotel = req.query.hotel.toLowerCase();
  const reserva = reservas.filter((reservaHotel) => reservaHotel.hotel.toLowerCase() === hotel);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas para este hotel' }); 
  }
}



export const filtrarPorRangoFechas = async (req, res) => {
  const{fechaEntrada, fechaSalida} = req.query
  const fechaInicioFormateada = new Date(fechaEntrada);
  const fechaTerminoFormateada = new Date(fechaSalida);

  const reservasFiltradas = reservas.filter(reservas => {
      const inicioReserva = new Date(reservas.fechaEntrada);
      const finReserva = new Date(reservas.fechaSalida);
      return inicioReserva >= fechaInicioFormateada && finReserva <= fechaTerminoFormateada; 
  })
  res.json(reservasFiltradas);
}



export const filtrarPorHabitacion = async (req, res) => {
  const habitacion = req.query.habitacion.toLowerCase();
  const reserva = reservas.filter((habitacionReserva) => habitacionReserva.habitacion.toLowerCase() === habitacion);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas para este tipo de habitación' }); 
  }
}



export const filtrarPorEstado = async (req, res) => {
  const estado = req.query.estado.toLowerCase();
  const reserva = reservas.filter((estadoReserva) => estadoReserva.estado.toLowerCase() === estado);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas en este estado' }); 
  }
}



export const filtrarPorCantidadPasajeros = async (req, res) => {
  const numHuespedes = req.query.num;
  const reserva = reservas.filter((numH) => numH.numeroHuespedes >= numHuespedes);
  if (reserva.length > 0) {
    res.json({mensaje: `Se encontraron las siguientes reservas para ${numHuespedes} o más personas`, data: reserva});
  } else {
    res.status(404).json({ mensaje: `No se encontraron reservas para ${numHuespedes} o más personas` }); 
  }
}
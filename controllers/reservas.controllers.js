// Las siguientes líneas no funcionarón en render.com, entiendo que son 
// características nuevas que pueden tener problemas de compatibilidad
// import data from '../data.json' assert { type: "json" };
// const reservas = data.reservas;


// Para no tener que cambiar el "type" del package.json y, a la vez,
// continuar utilizando un archivo .json con los datos de las reservas
// he utilizado el método de importación utilizando fs y path
import fs from 'fs';
import path from 'path';
const filePath = path.resolve('./data.json');
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }
  
  const reservas = JSON.parse(data).reservas;
  console.log(reservas);
});

export const listaReservas = (req, res) => {
    res.json(reservas);
};



export const crearReserva = (req, res) => {
  const nuevoId = reservas[reservas.length - 1].id + 1;
  const nuevaReserva = {
    "id": nuevoId,
    "hotel": req.body.hotel,
    "fechaEntrada": req.body.entrada,
    "fechaSalida": req.body.salida,
    "habitacion": req.body.habitacion,
    "estado": req.body.estado,
    "numeroHuespedes": req.body.numeroHuespedes,
  };
  reservas.push(nuevaReserva);
  res.status(201).json({ mensaje: 'Reserva creada', data: nuevaReserva });
};



export const filtrarPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const reserva = reservas.find((idReserva) => idReserva.id === id);

  if (reserva !== undefined) {
    res.json(reserva);
  } else {
    res.status(404).json({ mensaje: 'Reserva no encontrada' }); 
  }
};



export const actualizarPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const reservaActualizada = {
    "id": id,
    "hotel": req.body.hotel,
    "fechaEntrada": req.body.entrada,
    "fechaSalida": req.body.salida,
    "habitacion": req.body.habitacion,
    "estado": req.body.estado,
    "numeroHuespedes": req.body.numeroHuespedes,
  };
  for (let i = 0 ; i < reservas.length ; i++){
    if (reservas[i].id === id){
      reservas[i] = reservaActualizada;
      return res.status(200).json({ mensaje: 'Reserva actualizada', data: reservaActualizada });
    }
  }
  res.status(404).json({ mensaje: 'Reserva no encontrada' }); 
}



export const eliminarReserva = (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0 ; i < reservas.length ; i++){
    if (reservas[i].id === id){
      reservas.splice(i, 1);
      return res.status(200).json({ mensaje: 'Reserva eliminada' });
    }
  }
  res.status(404).json({ mensaje: 'Reserva no encontrada' }); 
}



export const filtrarPorHotel = (req, res) => {
  const hotel = req.query.hotel.toLowerCase();
  const reserva = reservas.filter((reservaHotel) => reservaHotel.hotel.toLowerCase() === hotel);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas para este hotel' }); 
  }
}



export const filtrarPorRangoFechas = (req, res) => {
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


export const filtrarPorHabitacion = (req, res) => {
  const habitacion = req.query.habitacion.toLowerCase();
  const reserva = reservas.filter((habitacionReserva) => habitacionReserva.habitacion.toLowerCase() === habitacion);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas para este tipo de habitación' }); 
  }
}

export const filtrarPorEstado = (req, res) => {
  const estado = req.query.estado.toLowerCase();
  const reserva = reservas.filter((estadoReserva) => estadoReserva.estado.toLowerCase() === estado);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas en este estado' }); 
  }
}

export const filtrarPorCantidadPasajeros = (req, res) => {
  const numHuespedes = req.query.num;
  const reserva = reservas.filter((numH) => numH.numeroHuespedes >= numHuespedes);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: `No se encontraron reservas para ${numHuespedes} o más personas` }); 
  }
}
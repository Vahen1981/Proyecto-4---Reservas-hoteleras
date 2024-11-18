import data from '../data.json' assert { type: "json" };
const reservas = data.reservas;

export const listaReservas = (req, res) => {
    res.json(reservas);
};


export const crearReserva = (req, res) => {
  const nuevoId = reservas[reservas.length - 1].Id + 1;
  const nuevaReserva = {
    "Id": nuevoId,
    "Hotel": req.body.hotel,
    "Fecha de entrada": req.body.entrada,
    "Fecha de salida": req.body.salida,
    "Tipo de Habitación": req.body.habitacion,
    "Estado": req.body.estado,
    "Cantidad de Huéspedes": req.body.numeroHuespedes,
  };
  reservas.push(nuevaReserva);
  res.status(201).json({ mensaje: 'Reserva creada', data: nuevaReserva });
};

export const filtrarPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const reserva = reservas.find((idReserva) => idReserva.Id === id);

  if (reserva !== undefined) {
    res.json(reserva);
  } else {
    res.status(404).json({ mensaje: 'Reserva no encontrada' }); 
  }
};

export const actualizarPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const reservaActualizada = {
    "Id": id,
    "Hotel": req.body.hotel,
    "Fecha de entrada": req.body.entrada,
    "Fecha de salida": req.body.salida,
    "Tipo de Habitación": req.body.habitacion,
    "Estado": req.body.estado,
    "Cantidad de Huéspedes": req.body.numeroHuespedes,
  };
  for (let i = 0 ; i < reservas.length ; i++){
    if (reservas[i].Id === id){
      reservas[i] = reservaActualizada;
      return res.status(200).json({ mensaje: 'Reserva actualizada', data: reservaActualizada });
    }
  }
  res.status(404).json({ mensaje: 'Reserva no encontrada' }); 
}

export const eliminarReserva = (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0 ; i < reservas.length ; i++){
    if (reservas[i].Id === id){
      reservas.splice(i, 1);
      return res.status(200).json({ mensaje: 'Reserva eliminada' });
    }
  }
  res.status(404).json({ mensaje: 'Reserva no encontrada' }); 
}

export const filtrarPorHotel = (req, res) => {
  const hotel = req.query.hotel;
  const reserva = reservas.filter((reservaHotel) => reservaHotel.Hotel === hotel);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas para este hotel' }); 
  }
}

export const filtrarPorRangoFechas = (req, res) => {
  const{"Fecha de entrada": fechaEntrada, "Fecha de salida": fechaSalida} = req.query
  const fechaInicioFormateada = new Date(fechaEntrada);
  const fechaTerminoFormateada = new Date(fechaSalida);

  const reservasFiltradas = reservas.filter(reservas => {
      const inicioReserva = new Date(reservas["Fecha de entrada"]);
      const finReserva = new Date(reservas["Fecha de salida"]);
      return inicioReserva >= fechaInicioFormateada && finReserva <= fechaTerminoFormateada; 
  })
  res.json(reservasFiltradas);
}


export const filtrarPorHabitacion = (req, res) => {
  const habitacion = req.query.habitacion;
  const reserva = reservas.filter((habitacionReserva) => habitacionReserva["Tipo de Habitación"] === habitacion);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas para este tipo de habitación' }); 
  }
}

export const filtrarPorEstado = (req, res) => {
  const estado = req.query.estado;
  const reserva = reservas.filter((estadoReserva) => estadoReserva["Estado"] === estado);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas en este estado' }); 
  }
}

export const filtrarPorCantidadPasajeros = (req, res) => {
  const numHuespedes = req.query.num;
  const reserva = reservas.filter((numH) => numH["Cantidad de Huéspedes"] >= numHuespedes);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: `No se encontraron reservas para ${numHuespedes} o más personas` }); 
  }
}
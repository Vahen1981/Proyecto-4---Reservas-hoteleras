const reservas = [
  {
    "Id": 1,
    "Hotel": "Hotel Paradise",
    "Fecha de entrada": "2024-11-01",
    "Fecha de salida": "2024-11-07",
    "Tipo de Habitación": "Suite",
    "Estado": "Pagado",
    "Cantidad de Huéspedes": 2
  },
  {
    "Id": 2,
    "Hotel": "Ocean Breeze",
    "Fecha de entrada": "2024-11-05",
    "Fecha de salida": "2024-11-10",
    "Tipo de Habitación": "Doble",
    "Estado": "No pagado",
    "Cantidad de Huéspedes": 3
  },
  {
    "Id": 3,
    "Hotel": "Mountain Retreat",
    "Fecha de entrada": "2024-11-03",
    "Fecha de salida": "2024-11-06",
    "Tipo de Habitación": "Individual",
    "Estado": "Pagado",
    "Cantidad de Huéspedes": 1
  },
  {
    "Id": 4,
    "Hotel": "Hotel Paradise",
    "Fecha de entrada": "2024-11-10",
    "Fecha de salida": "2024-11-15",
    "Tipo de Habitación": "Suite",
    "Estado": "No pagado",
    "Cantidad de Huéspedes": 2
  },
  {
    "Id": 5,
    "Hotel": "Ocean Breeze",
    "Fecha de entrada": "2024-11-12",
    "Fecha de salida": "2024-11-18",
    "Tipo de Habitación": "Doble",
    "Estado": "Pagado",
    "Cantidad de Huéspedes": 4
  },
  {
    "Id": 6,
    "Hotel": "Mountain Retreat",
    "Fecha de entrada": "2024-11-15",
    "Fecha de salida": "2024-11-20",
    "Tipo de Habitación": "Triple",
    "Estado": "Pagado",
    "Cantidad de Huéspedes": 3
  },
  {
    "Id": 7,
    "Hotel": "Ocean Breeze",
    "Fecha de entrada": "2024-11-01",
    "Fecha de salida": "2024-11-07",
    "Tipo de Habitación": "Individual",
    "Estado": "No pagado",
    "Cantidad de Huéspedes": 1
  },
  {
    "Id": 8,
    "Hotel": "Hotel Paradise",
    "Fecha de entrada": "2024-11-08",
    "Fecha de salida": "2024-11-13",
    "Tipo de Habitación": "Doble",
    "Estado": "Pagado",
    "Cantidad de Huéspedes": 2
  },
  {
    "Id": 9,
    "Hotel": "Mountain Retreat",
    "Fecha de entrada": "2024-11-20",
    "Fecha de salida": "2024-11-25",
    "Tipo de Habitación": "Suite",
    "Estado": "No pagado",
    "Cantidad de Huéspedes": 2
  },
  {
    "Id": 10,
    "Hotel": "Ocean Breeze",
    "Fecha de entrada": "2024-11-15",
    "Fecha de salida": "2024-11-20",
    "Tipo de Habitación": "Triple",
    "Estado": "Pagado",
    "Cantidad de Huéspedes": 3
  }
]

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

export const filtrarPorFecha = (req, res) => {
  const fecha = req.query.fecha;
  const reserva = reservas.filter((fechaReserva) => fechaReserva["Fecha de entrada"] === fecha);
  if (reserva.length > 0) {
    res.json(reserva); 
  } else {
    res.status(404).json({ mensaje: 'No se encontraron reservas para esta fecha' }); 
  }
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
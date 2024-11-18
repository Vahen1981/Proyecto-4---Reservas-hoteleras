import express from 'express';
import * as reservasController from '../controllers/reservas.controllers.js';

const router = express.Router();

router.post('/reservas', reservasController.crearReserva);
router.get('/reservas', reservasController.listaReservas);
router.get('/reservas/id/:id', reservasController.filtrarPorId);
router.put('/reservas/id/:id', reservasController.actualizarPorId);
router.delete('/reservas/id/:id', reservasController.eliminarReserva);
router.get('/reservas/hotel', reservasController.filtrarPorHotel);
router.get('/reservas/fecha', reservasController.filtrarPorRangoFechas);
router.get('/reservas/habitacion', reservasController.filtrarPorHabitacion);
router.get('/reservas/estado', reservasController.filtrarPorEstado);
router.get('/reservas/cantidad', reservasController.filtrarPorCantidadPasajeros);

export default router;

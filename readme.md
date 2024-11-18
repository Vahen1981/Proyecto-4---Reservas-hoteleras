# Proyecto 4 - Reservas Hoteleras

En este proyecto se desarrolla un servidor basado en el patrón de diseño MVC, diseñado para gestionar diversas solicitudes CRUD.
El proyecto implementa la lógica necesaria para aplicar múltiples filtros, según las especificaciones definidas en los requisitos.

A continuación, se detallan las rutas disponibles para acceder a los datos.

## Listar todas las reservas:
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas`  
Este método permite obtener un listado completo de todas las reservas almacenadas en el sistema. Los datos son extraídos del archivo data.json, que contiene la información de todas las reservas registradas.


## Crear una nueva reserva:
**Método**: POST  
**Ruta**: `http://localhost:8000/api/reservas`  
Este método permite crear una nueva reserva en el sistema. Para ello, se debe incluir un "Body" en formato JSON, que contenga la siguiente información:
```json
{
  "hotel": "Hotel Example",
  "entrada": "2024-12-01",
  "salida": "2024-12-07",
  "habitacion": "Suite",
  "estado": "Confirmada",
  "numeroHuespedes": 2
}
```
Cada campo del JSON debe ser completado con los datos correspondientes a la reserva, tales como el nombre del hotel, las fechas de entrada y salida, el tipo de habitación, el estado de la reserva y el número de huéspedes.


## Filtrar una reserva por su ID
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/id/`  
Este método permite obtener los detalles de una reserva específica mediante su ID. Se debe agregar el número de ID al final de la ruta. En el archivo data.json, las reservas están identificadas con IDs del 1 al 10.  
**Ejemplo**:  
`http://localhost:8000/api/reservas/id/5`


## Actualizar los datos de una reserva por su ID
**Método**: PUT  
**Ruta**: `http://localhost:8000/api/reservas/id/`  
Este método permite actualizar la información de una reserva existente utilizando su ID. Se debe agregar el número de ID al final de la ruta. Por ejemplo, para actualizar la reserva con ID 5, la ruta sería:
`http://localhost:8000/api/reservas/id/5`  
En el "Body" de la solicitud, se debe incluir un JSON con los nuevos datos de la reserva. Un ejemplo de solicitud para actualizar una reserva sería:
```json
{
  "hotel": "Nuevo hotel",
  "entrada": "2024-11-12",
  "salida": "2024-11-18",
  "habitacion": "Triple",
  "estado": "Pagado",
  "numeroHuespedes": 3
}
```


## Eliminar una reserva
**Método**: DELETE  
**Ruta**: `http://localhost:8000/api/reservas/id/`  
Este método permite eliminar una reserva existente del sistema mediante su ID. Se debe agregar el número de ID de la reserva a eliminar al final de la ruta. Por ejemplo, para eliminar la reserva con ID 7, la ruta sería:
`http://localhost:8000/api/reservas/id/7`


## Filtrar reservas por Hotel
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/hotel`  
Este método permite filtrar las reservas según el hotel. En los parámetros de consulta (Query Parameters), se debe incluir el parámetro "hotel" con el nombre del hotel que se desea filtrar.

Los hoteles disponibles en el archivo data.json son:

- Hotel Paradise
- Ocean Breeze
- Mountain Retreat

**Ejemplo de filtro por hotel**:  
`http://localhost:8000/api/reservas/hotel?hotel=mountain retreat`


## Filtrar por rangos de fechas
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/fecha`  
Este método permite filtrar las reservas dentro de un rango de fechas. En los parámetros de consulta (Query Parameters), se deben agregar dos parámetros:
- `fechaEntrada` la fecha de entrada, en formato año-mes-día (por ejemplo `2024-11-01`)  
- `fechaSalida` la fecha de salida, también en formato año-mes-día (por ejemplo `2024-11-20`)  

Los rangos de fechas disponibles en el archivo  `data.json` van desde el `2024-11-01` al `2024-11-25`. 

**Ejemplo de filtro por fechas**:  
`http://localhost:8000/api/reservas/fecha?fechaEntrada=2024-11-15&fechaSalida=2024-11-20`


## Filtrar por habitación
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/habitacion`  
Este método permite filtrar las reservas según el tipo de habitación. En los parámetros de consulta (Query Parameters), se debe agregar el parámetro "habitacion" con el valor correspondiente al tipo de habitación.

Los tipos de habitación disponibles en el archivo `data.json` son:
- Suite  
- Doble  
- Individual  
- Triple  
**Ejemplo de filtro por habitación**:  
`http://localhost:8000/api/reservas/habitacion?habitacion=DOBLE`


## Filtrar por estado
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/estado`  
Este método permite filtrar las reservas según su estado. En los parámetros de consulta (Query Parameters), se debe agregar el parámetro "estado" con el valor correspondiente al estado de la reserva.

Los valores posibles para el parámetro "estado" en el archivo `data.json` son:
- Pagado  
- No pagado

**Ejemplo de filtro por estado**:  
`http://localhost:8000/api/reservas/estado?estado=no pagado`


## Filtrar por número de huéspedes que incluye la reserva
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/cantidad`  
Este método permite filtrar las reservas según el número de huéspedes que incluye cada una. En los parámetros de consulta (Query Parameters), se debe agregar el parámetro "num" con el valor correspondiente al número de huéspedes.

Los valores posibles para el parámetro "num" en el archivo `data.json` varían entre 1 y 4.

**Ejemplo de filtro por número de huéspedes**:  
`http://localhost:8000/api/reservas/cantidad?num=4`

# Proyecto 4 - Reservas Hoteleras

En este proyecto se crea un servidor en base a un modelo MVC, capaz de manejar diversas solicitudes de tipo CRUD.  
El proyecto incluye la lógica para varios tipos de filtros distintos según lo solicitado en los requisitos del trabajo.

A continuación se describen las rutas para acceder a los datos.

## Listar todas las reservas:
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas`

## Crear una nueva reserva:
**Método**: POST  
**Ruta**: `http://localhost:8000/api/reservas`  
En el Body se agrega un JSON como el siguiente:
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

## Filtrar una reserva por su ID
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/id/`  
Agregar al final el número de ID que se quiere mostrar, en el `data.json` incluido las ID de las reservas van del 1 al 10.  
**Ejemplo**:  
`http://localhost:8000/api/reservas/id/5`

## Actualizar los datos de una reserva por su ID
**Método**: PUT  
**Ruta**: `http://localhost:8000/api/reservas/id/`  
Se agrega el id al final de la ruta, por ejemplo el ID 5 sería:  
`http://localhost:8000/api/reservas/id/5`  
Luego en el Body se agrega un JSON como el siguiente:  
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
Se agrega el id (de la reserva a eliminar) al final de la ruta, por ejemplo el ID 7 sería:  
`http://localhost:8000/api/reservas/id/7`

## Filtrar reservas por Hotel
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/hotel`  
En los "Query Parameters" se agrega el parámetro "hotel" con el valor que será el "nombre del hotel".  
Los hoteles que aparecen en el `data.json` incluido son:  
- Hotel Paradise  
- Ocean Breeze  
- Mountain Retreat  
**Ejemplo de filtro por hotel**:  
`http://localhost:8000/api/reservas/hotel?hotel=mountain retreat`

## Filtrar por rangos de fechas
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/fecha`  
En los "Query Parameters" se agregan 2 parámetros:  
- `"fechaEntrada"` con el valor en formato año-mes-día `"2024-11-01"`  
- `"fechaSalida"` con el valor en formato año-mes-día `"2024-11-20"`  

Los rangos de fechas de reservas incluidos en el `data.json` van desde el `2024-11-01` al `2024-11-25`.  
**Ejemplo de filtro por fechas**:  
`http://localhost:8000/api/reservas/fecha?fechaEntrada=2024-11-15&fechaSalida=2024-11-20`

## Filtrar por habitación
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/habitacion`  
En los "Query Parameters" se agrega el parámetro "habitacion" con el valor que será el tipo de habitación.  
Los tipos de habitación que aparecen en el `data.json` incluido son:  
- Suite  
- Doble  
- Individual  
- Triple  
**Ejemplo de filtro por habitación**:  
`http://localhost:8000/api/reservas/habitacion?habitacion=DOBLE`

## Filtrar por estado
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/estado`  
En los "Query Parameters" se agrega el parámetro "estado" con su valor.  
Los valores que aparecen en el `data.json` incluido son:  
- Pagado  
- No pagado  
**Ejemplo de filtro por estado**:  
`http://localhost:8000/api/reservas/estado?estado=no pagado`

## Filtrar por número de huéspedes que incluye la reserva
**Método**: GET  
**Ruta**: `http://localhost:8000/api/reservas/cantidad`  
En los "Query Parameters" se agrega el parámetro "num" con su valor.  
Los valores que aparecen en el `data.json` incluido van desde el 1 al 4.  

**Ejemplo de filtro por número de huéspedes**:  
`http://localhost:8000/api/reservas/cantidad?num=4`

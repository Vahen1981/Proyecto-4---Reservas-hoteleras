import express from 'express';
import dotenv from 'dotenv';
import reservasRoutes from './routes/reservas.routes.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", reservasRoutes);


app.listen(port, () => {
  console.log('Servidor en el puerto:', port);
});

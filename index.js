import express from "express";
import cors from "cors";
import RutaUser from "./src/module/vehiculo/vehiculo.routes.js";


const app = express();
const PORT = 4100;

app.use(express.json());
app.use(cors());

app.use("/api", RutaUser);


app.listen(PORT, () => {
  console.log(`SERVIDOR iniciado en el puerto ${PORT}`);
});

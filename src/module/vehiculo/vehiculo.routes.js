//importa el creador de rutas de express
// /api/user
import { Router } from "express";

import * as usuarioCtr from "./vehiculo.controller.js";

const router = Router(); //uso el metodo router de xpress para crear la ruta
//la ruta tiene dos paranmetros la ruta en si misma 
//y el metod que la resuelve

router.get("/vehiculo", usuarioCtr.obtenerUsuarios);
router.get("/vehiculo/:id", usuarioCtr.obtenerUsuarioId);
router.post("/vehiculo", usuarioCtr.crearUsuario);
router.delete("/vehiculo/:id", usuarioCtr.borrarUsuario);
router.put("/vehiculo/:id", usuarioCtr.actualizarUsuario);

export default router;
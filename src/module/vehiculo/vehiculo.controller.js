
import { UserModel } from "./vehiculo.model.js";

export const obtenerUsuarios = async (req, res) => {
  try {
    const results = await UserModel.findALL();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      status: "ok",
      error: `error al listar : ${error}`,
    });
  }
};

export const crearUsuario = async (req, res) => {
const datos = req.body;
try {
const results = await UserModel.create(datos);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error en la insercion:${error}`,
});
}
};
export const borrarUsuario = async (req, res) => {
try {
const results = await UserModel.delete(req.params.id);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error al eliminar:${error}`,
});
}
};
export const actualizarUsuario = async (req, res) => {
try {
const results = await UserModel.update(req.params.id, req.body);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error al actualizar ${error}`,
});
}
};
export const obtenerUsuarioId = async (req, res) => {
// codigo protegido con try..catch
try {
const results = await UserModel.findById(req.params.id);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `error al listar : ${error}`,
});
}
};
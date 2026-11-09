
import db from "../../config/dbconexion.js"

export const UserModel = {
   
  findALL: async (id) => {
    const sql = "SELECT * FROM vehiculos ";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  findById: async (id) => {
    const sql = "SELECT * FROM vehiculos WHERE id_vehiculo= ?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  delete: async (id) => {
const sql = "DELETE FROM vehiculos WHERE id_vehiculo=?";
const [rows] = await db.query(sql, [id]);
return rows;
},



create: async (data) => {

const userNuevo = {

placa: data.placa,
marca: data.marca,
modelo: data.modelo,
anio: data.anio,
color: data.color,
kilometraje : data.kilometraje,
propietario : data.propietario,
telefono_propietario : data.telefono_propietario,
estado: data.estado,
fecha_ingreso: data.fecha_ingreso

};
console.log(userNuevo);
const sql = "INSERT INTO vehiculos SET ?";
const [rows] = await db.query(sql, [userNuevo]);
return rows;
},


update: async (id, data) => {
const sql = "UPDATE vehiculos SET ? WHERE id_vehiculo= ?";
//almacenamos la respuesta en un arreglo
const [rows] = await db.query(sql, [data, id]);
return rows;
},

};

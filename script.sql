CREATE TABLE vehiculos (
    id_vehiculo INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) NOT NULL UNIQUE,
    marca VARCHAR(40) NOT NULL,
    modelo VARCHAR(40) NOT NULL,
    anio INT NOT NULL,
    color VARCHAR(30) NOT NULL,
    kilometraje INT NOT NULL DEFAULT 0,
    propietario VARCHAR(120) NOT NULL,
    telefono_propietario VARCHAR(10) NULL,
    estado ENUM('En taller', 'Entregado') NOT NULL DEFAULT 'En taller',
    fecha_ingreso TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,


);
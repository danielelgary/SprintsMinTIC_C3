CREATE DATABASE BaseDatos

CREATE TABLE usuarios(
id INTEGER not null,
usuario VARCHAR(256) not null,
contrasena VARCHAR(256) not null,
fecha_registro YEAR(4) not null
)

INSERT INTO usuarios (id, usuario, contrasena)
VALUES ('1','username1','contrasenaSegura',2021),
('2','username2','123456',2021),
('3','username3','contrasena123',2021)
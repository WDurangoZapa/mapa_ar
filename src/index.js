const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenidos a nuestra aplicación");
});

app.get("/usuario", (req, res) => {
  let usuario = [
    { Id:1, Nombre1: "Juan", Nombre2: "David", Apellido1:"Martinez", Apellido2:"Suarez", Email:"juan@correo.com", Contraseña: "******", Id_Actividad:11, Id_Asignatura: 111 },
    { Id:2, Nombre1: "Juana", Nombre2: "Maria", Apellido1:"Rodriguez", Apellido2:"Pérez", Email:"juanamaria@correo.com", Contraseña: "******", Id_Actividad:22, Id_Asignatura: 222 },

  ];
  res.send(users);
});

app.get("/Asignaturas", (req, res) => {
  let Asignaturas = [
    { nombre: "Geografia", Jornada: "Mañana", Horas: 2 },
    { nombre: "Sociales", Jornada: "Tarde", Horas: 4 }


  ];
  res.send(Asignaturas);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/users", (req, res) => {
  let users = [
    { nombre: "Juan", Apellido: "Sanchez", Edad: 55 },
    { nombre: "Margarita", Apellido: "Paez", Edad: 18 }

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

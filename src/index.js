const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenidos a nuestra aplicación");
});

app.get("/usuario", (req, res) => {
  let usuario = [
    { Id:1, Nombre1: "Juan", Nombre2: "David", Apellido1:"Martinez", Apellido2:"Suarez", Email:"juan@correo.com", Contraseña: "******", Id_Actividad:11, Id_Asignatura: 111 },
    { Id:2, Nombre1: "Juana", Nombre2: "Maria", Apellido1:"Rodriguez", Apellido2:"Pérez", Email:"juanamaria@correo.com", Contraseña: "******", Id_Actividad:22, Id_Asignatura: 222 }

  ];
  res.send(usuario);
});

app.get("/Asignaturas", (req, res) => {
  let Asignaturas = [
    {Id:3, nombre: "Geografia", Intensidad_Horaria: 4, Unidades: 2 },
    {Id:4, nombre: "Sociales", Intensidad_Horaria: 2, Unidades: 3 }


  ];
  res.send(Asignaturas);
});

app.get("/Temas", (req, res) => {
  let Temas = [
    {Id:5, Nombre: "Rios de Colombia", Contenido:"Aquí va el contenido" , Id_Asignatura: 55 },
    {Id:6, Nombre: "Relieve", Contenido:"Aquí va el contenido" , Id_Asignatura: 66 }


  ];
  res.send(Temas);
});

app.get("/Actividad", (req, res) => {
  let Actividad = [
    {Id:7, Nombre: "Encuesta", Recurso:"Aquí va el Recurso" , Descripcion:"Aquí va la descripción", FechaIni:"Aqui va la fecha inicial", FechaFin: "Aquí va la fecha final",  Id_Temas: 77 },
    {Id:7, Nombre: "Crucigrama", Recurso:"Aquí va el Recurso" , Descripcion:"Aquí va la descripción", FechaIni:"Aqui va la fecha inicial", FechaFin: "Aquí va la fecha final",  Id_Temas: 77 }


  ];
  res.send(Actividad);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

app.get("/api/saludo", (req, res) => {
  res.json({
    mensaje: "Hola desde el backend 👋",
    fecha: new Date()
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});

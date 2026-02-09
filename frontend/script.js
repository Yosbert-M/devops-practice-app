async function obtenerSaludo() {
  try {
    const res = await fetch("http://localhost:3000/api/saludo");
    const data = await res.json();

    document.getElementById("respuesta").innerText =
      data.mensaje + " | " + data.fecha;
  } catch (error) {
    document.getElementById("respuesta").innerText =
      "Error conectando con el backend";
  }
}

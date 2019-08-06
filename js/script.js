document.getElementById("btn0").onclick = botonActivado;
document.getElementById("btn1").onclick = botonActivado;
document.getElementById("btn2").onclick = botonActivado;
document.getElementById("btn3").onclick = botonActivado;
document.getElementById("btn4").onclick = botonActivado;
document.getElementById("btn5").onclick = botonActivado;
document.getElementById("btn6").onclick = enlaceActivadoRaton;
document.getElementById("btn6").onkeypress = enlaceActivadoTecla;

function botonActivado() {
  saludar(this);
}

function saludar(elemento) {
  console.log("Buenos días, " + elemento.textContent);
}

function enlaceActivadoRaton(e) {
  // Impide que el <a> haga aparecer la # en la barra de direcciones
  e.preventDefault();

  saludar(this);
}

function enlaceActivadoTecla(e) {
  // La barra espaciadora debe activar el botón implementado con un <a>
  if (e.key === " " || e.key === "Spacebar") {
    // Impide que se intente navegar a #0
    e.preventDefault();

    saludar(this);
  }
}

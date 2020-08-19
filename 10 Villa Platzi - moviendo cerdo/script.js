/* Ejercicio q carga animales aleatorios y mueve con el teclado el cerdo */
//**No terminado - falta mover cerdo*/
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGTH: 39,
  DOWN: 40
};
var x = aleatorio(0, 420);
var y = aleatorio(0, 420);

document.addEventListener("keydown", moverCerdo);

function trazo(initX, initY, finX, finY, papel) {
  papel.beginPath();
  papel.moveTo(initX, initY);
  papel.lineTo(finX, finY);
  papel.stroke();
  papel.closePath();
}

function moverCerdo(evento)
{
  var mov = 7.8;

  if (cerdo.cargaOK)
  {
    if (evento.keyCode == cerdo.RIGHT)
    {
      xcerdo = xcerdo+mov;
      dibujar();
    }
    if (evento.keyCode == cerdo.LEFT)
    {
      xcerdo = xcerdo-mov;
      dibujar();
    }
    if (evento.keyCode == cerdo.UP)
    {
      ycerdo = ycerdo-mov;
      dibujar();
    }
    if (evento.keyCode == cerdo.DOWN)
    {
      ycerdo = ycerdo+mov;
      dibujar();
    }
    if  (ycerdo>=410 && xcerdo>=420)
    {
      alert("FELICIDADES, LLEGASTE A TIEMPO Y LOS CERDITOS YA NO SERAN LA CENA XDXD");
    }
  }
}
//-----------------------------------------------------------//
var cuadro = document.getElementById("villaplatzi");//accedemos al canvas
var papel = cuadro.getContext("2d");// accedo al contexto 2d

var fondo = {
  url: "images/tile.png",
  cargada: false
};
var vaca = {
  url: "images/vaca.png",
  cargada: false
};
var cerdo = {
  url: "images/cerdo.png",
  cargada: false,
  UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39
};
var pollo = {
  url: "images/pollo.png",
  cargada: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

//---------funciones recursivas----------------//
function cargarFondo() {
  fondo.cargada = true;
  dibujar();
}
function cargarVaca() {
  vaca.cargada = true;
  dibujar();
}
function cargarCerdo() {
  cerdo.cargada = true;
  dibujar();
}
function cargarPollo() {
  pollo.cargada = true;
  dibujar();
}
//---------funciones q muestran el animal si la imagen ya cargó----------------//
function dibujar() {
  if (fondo.cargada) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargada) {
    var numero = aleatorio(1, 10);
    for (let i = 0; i < numero; i++) {
      papel.drawImage(vaca.imagen, aleatorio(0, 420), aleatorio(0, 420));
    }
  }
  if (cerdo.cargada) {
    papel.drawImage(cerdo.imagen, aleatorio(0, 420), aleatorio(0, 420));
    //trazo(initX, initY, finX, finY, papel)
  }
  if (pollo.cargada) {
    for (let i = 0; i < numero; i++) {
      papel.drawImage(pollo.imagen, aleatorio(0, 420), aleatorio(0, 420));
    }
  }
}

//---------funcion numero aleatorio----------------//
function aleatorio(min, max) {

  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

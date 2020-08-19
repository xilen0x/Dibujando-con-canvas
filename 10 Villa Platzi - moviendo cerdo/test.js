/* Ejercicio q carga animales aleatorios y mueve con el teclado el cerdo */

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);

var xcerdo = 0;
var ycerdo = 0;

var xVaca = new Array();
var yVaca = new Array();
var xPollo = new Array();
var yPollo = new Array();

var puntox1 = new Array();
var puntoy1 = new Array();
var puntox2 = new Array();
var puntoy2 = new Array();
var puntox3 = new Array();
var puntoy3 = new Array();

var cantidad = aleatorio(3, 5);
var cantidad_2 = aleatorio(4, 7);
console.log("Hay " + cantidad + " vacas");
console.log("Hay " + cantidad_2 + " pollos");

var fondo = { url: "images/tile.png", cargaOK: false };
var vaca = { url: "images/vaca.png", cargaOK: false };
var pollo = { url: "images/pollo.png", cargaOK: false };
var cerdo = { url: "images/cerdo.png", cargaOK: false, UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
  fondo.cargaOK = true;
  mantenerPosicion();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  mantenerPosicion();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  mantenerPosicion();
}
function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function mantenerPosicion()
{
  if(fondo.cargaOK)
  {
    var punto_x = aleatorio(50, 250);
    var punto_y = aleatorio(100, 200);
    var punto_x2 = aleatorio(280, 420);
    var punto_y2 = aleatorio(80, 250);
    var punto_x3 = aleatorio(100, 220);
    var punto_y3 = aleatorio(250, 450);

    puntox1[i] = punto_x;
    puntoy1[i] = punto_y;
    puntox2[i] = punto_x2;
    puntoy2[i] = punto_y2;
    puntox3[i] = punto_x3;
    puntoy3[i] = punto_y3;
  }
	if(vaca.cargaOK)
	{
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xVaca[i] = x;
			yVaca[i] = y;
		}
	}
	if(pollo.cargaOK)
	{
		for(var i=0; i<cantidad_2; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xPollo[i] = x;
			yPollo[i] = y;
		}
	}
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
		}
	}
	if(pollo.cargaOK)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
		}
	}
  if (cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, xcerdo, ycerdo);
  }
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


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
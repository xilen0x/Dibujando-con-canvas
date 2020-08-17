var area = document.getElementById('area');
var lienzo = area.getContext("2d");
var estado = 0;  // estado del click      
var colorLinea = "#fff";   
var x;           // para guardar coordenada en X
var y;           // para guardar coordenada en Y

document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse


// lineas del borde
dibujarLinea("red", 0, 0, 300, 0, lienzo)
dibujarLinea("red", 300, 0, 300, 300, lienzo)
dibujarLinea("red", 300, 300, 0, 300, lienzo)
dibujarLinea("red", 0, 300, 0, 0, lienzo)


// Funcion mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, lienzo);
  }
  x = evento.layerX;
  y = evento.layerY;
}


// Funcion mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}


// Funcion mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){

  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 2;                // Grosor de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}
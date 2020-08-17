d = document.getElementById("miDibujo");
lienzo = d.getContext("2d");//funcion del objeto canvas para obtener el area a dibujar

var lineas = 30;
var i = 0;
var initX, initY, finX, finY;

while (i < lineas) {
    initY = 10 * i;
    finX = 10 * (i + 1);
    trazo("red", 0, initY, finX, 300);


    initX = 300 - (i * 10);
    finY = 300 - (i * 10);
    trazo("red", initX, 0, 300, finY);
    
    i++;
}

/* trazo("blue", 1, 1, 1, 299);
trazo("green", 1, 150, 299, 150) */

function trazo(color, initX, initY, finX, finY) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(initX, initY);
    lienzo.lineTo(finX, finY);
    lienzo.stroke();
    lienzo.closePath();
}

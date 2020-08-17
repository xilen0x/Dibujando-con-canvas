d = document.getElementById("miDibujo");
lienzo = d.getContext("2d");//funcion del objeto canvas para obtener el area a dibujar

var lineas = 30;
var i = 0;
var initY, finX;

while (i < lineas) {
    initY = 10 * i;
    finX = 10 * (i + 1);
    trazo("red", 0, initY, finX, 150);
    console.log(initY);
    i++;
}

trazo("blue", 1, 1, 1, 299);
trazo("green", 1, 150, 299, 150)

function trazo(color, initX, initY, finX, finY) {
    lienzo.beginPath();
    lienzo.strokeStyle = color || "green";
    lienzo.moveTo(initX, initY);
    lienzo.lineTo(finX, finY);
    lienzo.stroke();
    lienzo.closePath();
}

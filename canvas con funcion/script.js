d = document.getElementById("miDibujo");
lienzo = d.getContext("2d");//funcion del objeto canvas para obtener el area a dibujar
//console.log(lienzo);
/* 
lienzo.beginPath();//comienzo del trazo
lienzo.strokeStyle = "red";//linea será roja
lienzo.moveTo(100, 100);//comenzando en el punto 100x y 100y
lienzo.lineTo(200, 200);//hasta el 200x y 200y
lienzo.stroke();//cerramos la linea
lienzo.closePath();//fin del trazo
 */

function trazo (color, initX, initY, finX, finY) {
    lienzo.beginPath();
    lienzo.strokeStyle = color || "green";
    lienzo.moveTo(initX, initY);
    lienzo.lineTo(finX, finY);
    lienzo.stroke();
    lienzo.closePath();
}

trazo("red", 10, 50, 180, 0);
trazo("", 10, 100, 180, 0);
trazo("blue", 10, 150, 180, 0);
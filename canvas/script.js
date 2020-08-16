d = document.getElementById("miDibujo");
lienzo = d.getContext("2d");//funcion del objeto canvas para obtener el area a dibujar
//console.log(lienzo);

lienzo.beginPath();//comienzo del trazo
lienzo.strokeStyle = "red";//linea será roja
lienzo.moveTo(100, 100);//comenzando en el punto 100x y 100y
lienzo.lineTo(200, 200);//hasta el 200x y 200y
lienzo.stroke();//cerramos la linea
lienzo.closePath();//fin del trazo
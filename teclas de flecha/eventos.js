var teclas = {
    LEFT: 37,
    UP: 38,
    RIGTH: 39,
    DOWN: 40
};

document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("area");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

function trazo(color, initX, initY, finX, finY, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color || "green";
    lienzo.lineWidth = 3;
    lienzo.moveTo(initX, initY);
    lienzo.lineTo(finX, finY);
    lienzo.stroke();
    lienzo.closePath();
}
//dibujo de un punto:
trazo("red", 149, 149, 151, 151, papel)

function dibujarTeclado(evento) {
    var colorcito = "blue";
    var movimiento = 10;
    switch (evento.keyCode) {
        case teclas.LEFT:
            trazo(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.UP:
            trazo(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.RIGTH:
            trazo(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        case teclas.DOWN:
            trazo(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        default:
            break;
    }
}
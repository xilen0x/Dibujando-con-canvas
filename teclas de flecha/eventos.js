var teclas = {
    LEFT: 37,
    UP: 38,
    RIGTH: 39,
    DOWN: 40
};

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {

    switch (evento.keyCode) {
        case teclas.LEFT:
            document.write("IZQUIERDA");
            break;
        case teclas.UP:
            document.write("ARRIBA");
            break;
        case teclas.RIGTH:
            document.write("DERECHA");
            break;
        case teclas.DOWN:
            document.write("ABAJO");
            break;
        default:
            break;
    }
}
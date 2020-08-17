document.addEventListener("keydown", dibujarTeclado);

//función que me indica la tecla presionada y su código.
function dibujarTeclado(evento) {
    document.write("Presionaste la tecla: " + evento.key);
    document.write(" que corresponde al código: " + evento.keyCode)
    console.log(evento);
}

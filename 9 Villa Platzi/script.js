var vp = document.getElementById("villaPlatzi");//accedemos al canvas
var papel = vp.getContext("2d");// accedo al contexto 2d

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
    cargada: false
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
//---------funciones q dibujan si la imagen ya cargó----------------//
function dibujar() {
    if (fondo.cargada) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargada) {
        var numero = aleatorio(1, 10);
        for (let i = 0; i < numero; i++) {
            let x = aleatorio(0, 420);
            let y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargada) {
        for (let i = 0; i < numero; i++) {
            let x = aleatorio(0, 420);
            let y = aleatorio(0, 420);
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if (pollo.cargada) {
        for (let i = 0; i < numero; i++) {
            let x = aleatorio(0, 420);
            let y = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

//---------funcion numero aleatorio----------------//
function aleatorio(min, max) {

    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}
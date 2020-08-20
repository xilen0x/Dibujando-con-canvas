var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pikachu"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman{
    constructor(nom, vid, pod){
        this.nombre = nom;
        this.vidas = vid;
        this.poder = pod;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.nombre];
    }
    hablar(){
        alert(this.nombre);
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<br>", "Nombre: ", this.nombre, "<br>");
        document.write("Vidas: ", this.vidas, "<br>");
        document.write("Poder: ", this.poder, "<hr>");
    }
}

//console.log(imagenes);
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 50));
coleccion.push(new Pakiman("Pikachu", 100, 50));
coleccion.push(new Pakiman("Tocinauro", 100, 50));

for (const pokemones of coleccion) {
    pokemones.mostrar();
}
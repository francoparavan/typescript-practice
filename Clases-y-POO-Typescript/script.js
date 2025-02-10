"use strict";
class Pelicula {
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = "StarWars";
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
}
const pelicula1 = new Pelicula('Interstellar', ['Joseph "Coop" Cooper', 'Dr. Amelia Brand'], ['Matthew McConaughey', 'Anne Hathaway']);
const pelicula2 = new Pelicula('Oppenheimer', ['J. Robert Oppenheimer', 'Lewis Strauss'], ['Cillian Murphy', 'Robert Downey Jr']);
pelicula1.proyectarEnCine();
console.log(pelicula1);
console.log(pelicula2);
// const pelicula = new Pelicula ()
// pelicula.proyectaEnCine()

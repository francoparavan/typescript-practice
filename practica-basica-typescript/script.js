"use strict";
//Booleans
// let estudiasteJavascript : boolean = true
let dev = {
    nombre: 'Sergio',
    tecnologias: ['CSS', 'JAVA', 'Typescript'],
    tomaMate: true,
};
let dev2 = {
    nombre: 'Matias',
    tecnologias: ['HTML', 'COBOL'],
    tomaMate: null,
    apellido: 'Werlen',
    recibido: true
};
function enviarCurriculum(programador) {
    console.log(`este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(dev2);

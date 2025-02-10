//Booleans
// let estudiasteJavascript : boolean = true

// if(estudiasteJavascript){
//     console.log("Puedes seguir con tu estudiode Ts")
// }else{
//     console.log("Primero tenes que ver el curso de JS")
// }


//Numbers
// let interMiami: number = 11
// let fcDallas: number = 11
// let messi: number = 1
// let juegaConUnoMas: boolean = true

// let palabras: string = "Me emocione al verlo a Messi"

// function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {

//     let motivo: string = ''
//     if (juegaMessi) {
//         equipo1 += messi
//         motivo = ' porque juega Messi '
//     }

//     if (equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`)
//     if (equipo1 == equipo2) console.log("Empataron")
//     if (equipo1 < equipo2) console.log("Gana FC Dallas")
// }

// jugar(interMiami, fcDallas, juegaConUnoMas)


//Any
// let disney; //aca infiere que es de tipo any 

// disney = "StarWars y Marvel"

// console.log(disney)


//Arrays

// let arregloNumeros: number[] = [1, 2, 3, 4, 5, 6]
// let arregloTexto: string[] = ['HTML', 'CSS', 'JAVA', 'MYSQL']

// console.log(arregloNumeros[0].valueOf())

// console.log(arregloTexto.indexOf('MYSQL'))//Le pasas el string y te devuelve la posicion


//Clases, types y interfaces empizan siembre en Mayuscula!!!


//Objetos y types

// type Programador = {
//     nombre: string,
//     tecnologias: string[],
//     tomaMate?:boolean | null
// }

// let programador: Programador = {
//     nombre: 'Sergio',
//     tecnologias: ['CSS', 'JAVA', 'Typescript'],
//     tomaMate: true,
// }

// let programador2: Programador = {
//     nombre: 'Matias',
//     tecnologias: ['HTML', 'COBOL'],
//     tomaMate: null,
// }


//Interfaces

interface Programador {
    nombre: string,
    tecnologias: string[],
    tomaMate: boolean | null
}

let dev: Programador = {
    nombre: 'Sergio',
    tecnologias: ['CSS', 'JAVA', 'Typescript'],
    tomaMate: true,
}

let dev2 = {
    nombre: 'Matias',
    tecnologias: ['HTML', 'COBOL'],
    tomaMate: null,
    apellido: 'Werlen',
    recibido: true
}


function enviarCurriculum(programador: Programador) {
    console.log(`este curriculum es de ${programador.nombre}`)
}

enviarCurriculum(dev2)
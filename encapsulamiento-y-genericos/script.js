"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket() {
        this.ticket = Math.floor(Math.random() * 10);
    }
    // setTicket(ticket: T) {
    //     this.ticket = ticket
    // }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `A ${this.nombre} le toco el ticket numero ${this.ticket}`;
    }
}
const sorteo1 = new Sorteo('Marcelo Werlen');
sorteo1.setTicket();
console.log(sorteo1.sortear());

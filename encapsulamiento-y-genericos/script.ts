class Sorteo<T> {

    private ticket?: T

    constructor(private nombre: string) {

    }

    setTicket() {
        this.ticket = Math.floor(Math.random() * 10) as unknown as T
    }

    // setTicket(ticket: T) {
    //     this.ticket = ticket
    // }

    getTicket() {
        return this.ticket
    }

    public sortear(): string {
        return `A ${this.nombre} le toco el ticket numero ${this.ticket}`
    }
}

const sorteo1 = new Sorteo<number>('Marcelo Werlen')
sorteo1.setTicket()
console.log(sorteo1.sortear())
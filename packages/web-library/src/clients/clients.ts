export class Clients {
    private readonly name: string = ""
    constructor(name: string) {
        this.name =  name
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

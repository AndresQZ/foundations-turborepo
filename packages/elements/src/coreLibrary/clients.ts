const internalToken = "internal Token"
class Clients {
    private token: string = "";
    private inputValue = ""
    constructor(value: string){
        this.token =  internalToken
        this.inputValue = value
    }
}

export {
    Clients
}
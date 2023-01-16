class User{
    name: string;
    email: string;
    constructor(email: string,name: string){
        this.email = email;
        this.name = name;
    }
}
const user = new User('salman@dv.com','salman')
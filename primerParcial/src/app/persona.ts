export class Persona {
    public nombre: string = '';
    public email: string = '';
    public sexo : number;
    public password : string;
    public id : number;

    constructor(name, email, sex, pass, id)
    {
        this.nombre = name;
        this.email = email;
        this.sexo = sex;
        this.password = pass;
        this.id = id;
    }
}

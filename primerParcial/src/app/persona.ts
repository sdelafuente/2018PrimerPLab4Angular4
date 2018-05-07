export class Persona {
    public nombre: string = '';
    public mail: string = '';
    public sexo : number;
    public password : string;


    constructor(name, mail, sex, pass)
    {
        this.nombre = name;
        this.mail = mail;
        this.sexo = sex;
        this.password = pass;
    }
}

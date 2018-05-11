import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Persona } from '../persona';

//Servicios
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {

    //Array de personas
    @Input() arrayPersonas : Array<any>;
    @Input() error : Array<any>;

    private estaCargado : boolean = false;
    //Objeto Persona
    persona : Persona;
    public miPersona = new Persona("","","","","");

    constructor(public service : ApiService) {
        this.arrayPersonas = new Array<any>();
    }

    ngOnInit() {
        this.buscarTodos();
    }

    //Traigo todas las personas
    buscarTodos(){

        this.service.traerPersonas().then(
            data => {
                this.estaCargado = true;
                this.arrayPersonas = data;
                //this.enviarPersonas.emit(this.arrData);
        });
    }

    public cargarPersona()
    {
        let privPersona = new Persona(
            this.miPersona.nombre,
            this.miPersona.email,
            this.miPersona.sexo,
            this.miPersona.password,
            this.miPersona.id
        );

        this.service.CargarPersona(privPersona)
        .subscribe(
           data => {
             // refresh the list
             this.buscarTodos();
             this.miPersona = new Persona("","","","","");
             return true;
           },
           error => {
             console.error("Error saving food!");
             return false;//Observable.throw(error);
           }
        );
    }

    modificarPersona()
    {
        let privPersona = new Persona(
            this.miPersona.nombre,
            this.miPersona.email,
            this.miPersona.sexo,
            this.miPersona.password,
            this.miPersona.id
        );

        this.service.modificarPersona('/modificar/',privPersona)
        .subscribe(
           data => {
                this.buscarTodos();
                return true;
           },
           error => {
             console.error("Error modificando persona");
             return false;//Observable.throw(error);
           }
        );

    }

    public cargarObjeto(persona)
    {
        this.miPersona = new Persona(persona.nombre, persona.email, persona.sexo,persona.password,persona.id);
        //console.error(this.miPersona);
        return true;
    }

    public borrarPersona(persona)
    {
        this.service.BorrarPersona('/borrar/',persona)
        .subscribe(
           data => {
                this.buscarTodos();
                return true;
           },
           error => {
             console.error("Error borrando persona");
             //console.error(error);
             return false;//Observable.throw(error);
           }
        );
    }



}

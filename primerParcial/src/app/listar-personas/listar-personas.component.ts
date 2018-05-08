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

    public estaCargado : boolean = false;

    //Objeto Persona
    persona : Persona;
    public miPersona = new Persona("","","","");

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
                this.arrayPersonas = data;
                this.estaCargado = true;
                //this.enviarPersonas.emit(this.arrData);
        });
    }

    public cargarPersona()
    {
        let privPersona = new Persona(
            this.miPersona.nombre,
            this.miPersona.email,
            this.miPersona.sexo,
            this.miPersona.password
        );
        console.log(privPersona);

        this.service.CargarPersona(privPersona)
        .subscribe(
           data => {
             // refresh the list
             this.buscarTodos();
             return true;
           },
           error => {
             console.error("Error saving food!");
             //console.error(error);
             return false;//Observable.throw(error);
           }
        );
    }

    public modificarPersona(persona)
    {
        this.miPersona.nombre = persona.nombre;
        //this.miPersona.email,
        //this.miPersona.sexo,
        //this.miPersona.password
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

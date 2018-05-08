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

    constructor(public service : ApiService) { }

    ngOnInit() {
        this.BuscarTodos();
    }


    public BorrarPersona(persona)
    {
        this.service.BorrarPersona('/borrar/',persona)
        .subscribe(
           data => {
             return true;
           },
           error => {
             console.error("Error borrando persona");
             //console.error(error);
             return false;//Observable.throw(error);
           }
        );
    }

    //Traigo todas las personas
    BuscarTodos(){

        this.service.traerPersonas().then(
            data => {
                this.arrayPersonas = data;
                this.estaCargado = true;
                //this.enviarPersonas.emit(this.arrData);
        });
    }

}

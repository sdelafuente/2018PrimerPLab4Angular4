import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona';

//Servicios
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {

    @Input() arrayPersonas : Array<any>;
    @Input() error : Array<any>;

    @Output() borrarPersona : EventEmitter<any> = new EventEmitter<any>();

    constructor(public service : ApiService) { }

    ngOnInit() {
    }


    public BorrarPersona(persona)
    {
        //console.log(persona);
        //this.borrarPersona.emit(persona);

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
}

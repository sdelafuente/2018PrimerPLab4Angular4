import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//Servicios
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-buscar-personas',
  templateUrl: './buscar-personas.component.html',
  styleUrls: ['./buscar-personas.component.css']
})
export class BuscarPersonasComponent implements OnInit {

    public nombre : string;
    public email : string;
    public password : string;
    public sexo : number;
    arrData : Array<any> = new Array<any>();

    prsnaBorrar : any;

    @Output() enviarPersonas : EventEmitter<any> = new EventEmitter<any>();

    constructor(public service : ApiService) { }

    ngOnInit() {}

    //Traigo todas las personas
    BuscarTodos(){
        this.service.traerPersonas().then(
            data => {
                this.arrData = data;
                this.enviarPersonas.emit(this.arrData);
        });
    }

    BorrarPersona(persona){
        console.log("Buscar persona borrar");
        console.log(persona);
    }
}

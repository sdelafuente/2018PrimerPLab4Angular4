import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Persona } from '../persona';
import { Observable } from 'rxjs/Observable';
//Servicios
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

    //@Output() enviarPersona : EventEmitter<Persona> = new EventEmitter<Persona>();

    public miPersona = new Persona("","","","");


    constructor(public service : ApiService) { }

    ngOnInit() {
    }

    public CargarPersona()
    {
        let privPersona = new Persona(
            this.miPersona.nombre,
            this.miPersona.mail,
            this.miPersona.sexo,
            this.miPersona.password
        );

        //let food = {name: name};
        this.service.CargarPersona(privPersona)
        .subscribe(
           data => {
             // refresh the list
             //this.getFoods();
             return true;
           },
           error => {
             console.error("Error saving food!");
             //console.error(error);
             return false;//Observable.throw(error);
           }
        );
    }



}

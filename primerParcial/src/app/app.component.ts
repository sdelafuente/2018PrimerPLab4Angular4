import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    arrPersonas : Array<any> = new Array<any>();
    mail : string;
    prsnaBorrar : any;
    //arrError : Array<any> = new Array<any>();

    Datos(evento,bool){
        this.arrPersonas = [];
        //this.arrError = [];

        if(bool == 1){
          this.arrPersonas = (evento);
        } else{

        //  this.arrError = (evento);
        }
    }


    Borrar(evento)
    {
        this.prsnaBorrar = evento;

    }

}

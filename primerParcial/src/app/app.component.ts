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

    Datos(evento,bool){
        this.arrPersonas = [];

        if(bool == 1){
          this.arrPersonas = (evento);
        } else{

        }
    }


    Borrar(evento)
    {
        this.prsnaBorrar = evento;

    }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { BuscarPersonasComponent } from './buscar-personas/buscar-personas.component';
import { ApiService } from './servicio/api.service';
import { FormPersonaComponent } from './form-persona/form-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonasComponent,
    BuscarPersonasComponent,
    FormPersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

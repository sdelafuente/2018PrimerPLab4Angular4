import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { ApiService } from './servicio/api.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarPersonasComponent
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

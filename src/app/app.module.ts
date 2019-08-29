import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PerfilService } from './perfil.service';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent
  ],
  imports:
  [  
    BrowserModule,
    HttpClientModule
  ],
  providers: [ PerfilService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

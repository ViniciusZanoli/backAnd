import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilService } from './perfil.service';
import { ContatosComponent } from './contatos/contatos.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    component: ContatosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent
  ],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule,

  
BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ PerfilService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

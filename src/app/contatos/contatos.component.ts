import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Array<any> = new Array();

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.perfilService.listar().subscribe(dados => this.contatos = dados)
  }

}

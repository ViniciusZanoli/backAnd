import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {


  listaDeContatos: Array<any>;

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.perfilService.listar().subscribe(dados => this.listaDeContatos = dados)
  }

}

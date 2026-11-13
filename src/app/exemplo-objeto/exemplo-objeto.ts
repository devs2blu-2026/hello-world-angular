import { Component } from '@angular/core';
import { Produto } from './produto';

@Component({
  imports: [],
  selector: 'app-exemplo-objeto',
  styleUrl: './exemplo-objeto.css',
  templateUrl: './exemplo-objeto.html',
})
export class ExemploObjeto {

  skate: Produto = {
    nome: 'Robson',
    descricao: 'Skate sem rodas',
    preco: 1000000
  };


}

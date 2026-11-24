import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-funcionalidades-angular',
  styleUrl: './funcionalidades-angular.css',
  templateUrl: './funcionalidades-angular.html',
})
export class FuncionalidadesAngular {

  texto = '';

  botaoDesabilitado = false;

  urlImagem = '';

  personagemCrepusculo = '';

  mostrarMensagem() {
    this.botaoDesabilitado = !this.botaoDesabilitado;
  }

}

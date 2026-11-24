import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-exercicio-6',
  styleUrl: './exercicio-6.css',
  templateUrl: './exercicio-6.html',
})
export class Exercicio6 {

  private contador = signal<number>(0);

  private incrementar() {
    if (this.contador() == 10) {
      this.redefinirValor();
    } else {
      this.contador.update(valorAtual => valorAtual + 1);
    }
  }

  private redefinirValor() {
    this.contador.set(0);
  }

}

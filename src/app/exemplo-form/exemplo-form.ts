import { Component, signal } from '@angular/core';
import { AlunoRequest } from './aluno-request';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-exemplo-form',
  styleUrl: './exemplo-form.css',
  templateUrl: './exemplo-form.html',
})
export class ExemploForm {

  private alunoModel = signal<AlunoRequest>({
    nome: '',
    email: '',
    senha: '',
    dataNascimento: '',
    media: null
  });

  private alunoForm = form(this.alunoModel);


  private cadastrarAluno(event: SubmitEvent) {
    event.preventDefault();

    console.log(this.alunoModel());
  }


}

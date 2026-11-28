import { Component, inject, signal } from '@angular/core';
import { AlunoRequest } from './aluno-request';
import { form, FormField } from '@angular/forms/signals';
import { AlunosService } from './alunos-service';

@Component({
  imports: [FormField],
  selector: 'app-exemplo-form',
  styleUrl: './exemplo-form.css',
  templateUrl: './exemplo-form.html',
})
export class ExemploForm {

  private readonly service = inject(AlunosService);

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

    this.service.cadastrarAluno(this.alunoModel()).subscribe({
      next: () => {
        alert('Deu certo a requisição!!!!');
      },
      error: () => {
        alert('Deu ruim :(');
      }
    });

  }


}

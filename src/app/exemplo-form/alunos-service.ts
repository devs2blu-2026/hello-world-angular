import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { AlunoRequest } from './aluno-request';

@Service()
export class AlunosService {

    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = 'http://localhost:8080/alunos';

    cadastrarAluno(aluno: AlunoRequest) {
        return this.httpClient.post(this.urlApi, aluno);
    }

}

import { Routes } from '@angular/router';
import { OiTurma } from './oi-turma/oi-turma';
import { ExemploObjeto } from './exemplo-objeto/exemplo-objeto';
import { PaginaNaoEncontrada } from './components/pagina-nao-encontrada/pagina-nao-encontrada';
import { FuncionalidadesAngular } from './funcionalidades-angular/funcionalidades-angular';
import { Exercicio6 } from './exercicio-6/exercicio-6';

export const routes: Routes = [

    { path: 'oi-turma', component: OiTurma },
    { path: 'skate', component: ExemploObjeto },
    { path: 'funcionalidades-angular', component: FuncionalidadesAngular },
    { path: 'ex-6', component: Exercicio6 },
    { path: '', redirectTo: 'oi-turma', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontrada }

];

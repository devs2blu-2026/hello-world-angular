import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { OiTurma } from './oi-turma/oi-turma';

@Component({
  imports: [RouterOutlet, HelloWorld, OiTurma],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hello-world');
}

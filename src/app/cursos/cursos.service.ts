import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] =['Angular 2', 'Java', 'Phonegap'];

  constructor() { }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }

}

import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService:CursosService;

  constructor(private cursosService:CursosService) {
    //this.cursosService = _cursosService;
   }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.cursosService.emitirCursoCriado.subscribe(curso => console.log(curso));
  }

}

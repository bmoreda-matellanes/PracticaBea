import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modif-pelicula',
  templateUrl: './modif-pelicula.component.html',
  styleUrls: ['./modif-pelicula.component.css']
})
export class ModifPeliculaComponent implements OnInit {

  @Input()
  pelicula;

  @Output()
  modifico = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  modifEnArray() {
    console.log("vamos por modifEnArray en el ts de modif-pelicula");
    /*console.dir(this.pelicula);*/
    this.pelicula.marcado = !this.pelicula.marcado;
    /*this.modifico.emit(this.pelicula);*/
  }

}

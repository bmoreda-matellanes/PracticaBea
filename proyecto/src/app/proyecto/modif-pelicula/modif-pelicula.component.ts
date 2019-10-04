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
    console.log("vemos marcado antes:" + this.pelicula.marcado);
  
    this.pelicula.marcado = !this.pelicula.marcado;
    console.log("vemos marcado despues:" + this.pelicula.marcado);
  }

}

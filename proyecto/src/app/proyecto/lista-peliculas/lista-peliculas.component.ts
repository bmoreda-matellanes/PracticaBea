import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  @Input()
  peliculas = [];

  @Input()
  titulo = '';

  @Input()
  textbAdd = '';

  @Input()
  textbDel = '';

  /*@Output()
  check = new EventEmitter<any>();*/

  @Output()
  guardo = new EventEmitter<any>();

  @Output()
  borro = new EventEmitter<any>();

  nuevaPelicula = [];

  pulsamos = false; 
  /*borramos = false;
  marcado = false;*/

  constructor() { }

  ngOnInit() {
  }

  guardarPelicula() {
    this.pulsamos = !this.pulsamos;
    this.nuevaPelicula = [];/* para insertar de nuevo, borramos lo que tenga en titulo el formulario*/
  }

  borrarPelicula(pelicula) {
    console.log("vamos por borrarPelicula en el ts de lista-peliculas");
    this.borro.emit(pelicula);
  }

  chequearPelicula(pelisel) {

    console.log("vamos por chequearPelicula en el ts de lista-peliculas");
    console.dir(pelisel);
    pelisel.marcado = !pelisel.marcado;
    /*pelisel.id = *//**/
    /*this.titulo = pelicula.titulo;*/
    /*this.check.emit(pelisel);*/
  }

  agregoAlArray(nuevapelicula)
  {
    this.pulsamos = !this.pulsamos;
    console.log("vamos por agregoAlArray en el ts de lista-peliculas");
    console.log(nuevapelicula);
    this.guardo.emit(nuevapelicula);
  }

}

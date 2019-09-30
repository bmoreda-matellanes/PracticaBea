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


  @Output()
  check = new EventEmitter<any>();


  @Output()
  guardo = new EventEmitter<any>();

  @Output()
  borro = new EventEmitter<any>();

  pulsamos = false;  /* borramos */

  constructor() { }

  ngOnInit() {
  }

  guardarPelicula(pelicula) {
  
    this.pulsamos = !this.pulsamos;
  }

  borrarPelicula(pelicula) {
    
    
    console.log("vamos por borrarPelicula en el ts de lista-peliculas");
    this.borro.emit(pelicula);
  }

  chequearPelicula(pelicula) {
  
    console.log("vamos por chequearPelicula en el ts de lista-peliculas");
    this.check.emit(pelicula);
  }

  agregoAlArray(nuevapelicula)
  {
    this.pulsamos = !this.pulsamos;
    console.log("vamos por agregoAlArray en el ts de lista-peliculas");
    this.guardo.emit(nuevapelicula);
  }
}

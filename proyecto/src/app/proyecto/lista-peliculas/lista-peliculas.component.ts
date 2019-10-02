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

  @Input()
  textbMod = '';

  @Input()
  contMarc = 0;

  @Output()
  guardo = new EventEmitter<any>();

  @Output()
  borro = new EventEmitter<any>();

  @Output()
  modifico = new EventEmitter<any>();

  nuevaPelicula = [];
  mdPelicula = [];

  pulsamos1 = false; 
  pulsamos2 = false;
  algunMarcado = false;
  variosMarcados = false;
  pelisel = [];

  constructor() { }

  ngOnInit() {
  }

  guardarPelicula() {
    console.log("vamos por guardarPelicula en el ts de lista-peliculas");
    this.pulsamos1 = !this.pulsamos1;
    this.nuevaPelicula = [];/* para insertar de nuevo, borramos lo que tenga en titulo el formulario*/
  }

  modificarPelicula() {
    console.log("vamos por modificarPelicula en el ts de lista-peliculas");
    this.pulsamos2 = !this.pulsamos2;
    /*this.mdPelicula = [];*//* para modificar de nuevo, borramos lo que tenga en titulo el formulario*/
    
  }

  borrarPelicula(pelicula) {
    console.log("vamos por borrarPelicula en el ts de lista-peliculas");
    this.contMarc = 0;
    this.algunMarcado = false;
    this.borro.emit(pelicula);
  }

  chequearPelicula(pelisel) {
    console.log("vamos por chequearPelicula en el ts de lista-peliculas");
    this.variosMarcados = false;
    this.algunMarcado = !this.algunMarcado;
    console.dir(pelisel);
    pelisel.marcado = !pelisel.marcado;
    if (pelisel.marcado){
      this.contMarc = this.contMarc + 1;
    }
    else{
      this.contMarc = this.contMarc - 1;
    }
    if (this.contMarc > 1){
      this.variosMarcados = true;
    }
    
    if (pelisel.marcado){
    this.mdPelicula = pelisel; /* muestra lo marcado a modificar */
    }
  }

  agregoAlArray(nuevapelicula)
  {
    console.log("vamos por agregoAlArray en el ts de lista-peliculas");
    this.pulsamos1 = !this.pulsamos1;
    this.guardo.emit(nuevapelicula);
  }

  modiEnElArray()
  {
    console.log("vamos por modiEnElArray en el ts de lista-peliculas");
    this.pulsamos2 = !this.pulsamos2;
    /*if (this.variosMarcados){
      alert("solo puedes tener un elemento seleccionado para modificar");
    }*/
    this.mdPelicula  = [];
    this.contMarc = 0;
  }

}

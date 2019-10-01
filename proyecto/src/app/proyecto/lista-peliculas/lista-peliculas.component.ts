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

  constructor() { }

  ngOnInit() {
  }

  guardarPelicula() {
    this.pulsamos1 = !this.pulsamos1;
    this.nuevaPelicula = [];/* para insertar de nuevo, borramos lo que tenga en titulo el formulario*/
  }

  modificarPelicula() {/*    aquiiiiiiiiiiiii*/
    console.log("vamos por modificarPelicula en el ts de lista-peliculas");
    if (this.contMarc > 1) {
      var aviso = alert("Solo se debe marcar una pelicula para modificar");
      
      for (let pelicula of this.peliculas){
  
        if (pelicula.marcado) {
          pelicula.marcado = !pelicula.marcado;
        } 

        return;
      }
    }
    else{
    
    this.pulsamos2 = !this.pulsamos2;
    this.mdPelicula = [];/* para modificar de nuevo, borramos lo que tenga en titulo el formulario*/
    }
  }

  borrarPelicula(pelicula) {
    console.log("vamos por borrarPelicula en el ts de lista-peliculas");
    this.borro.emit(pelicula);
  }

  chequearPelicula(pelisel) {
    this.algunMarcado = !this.algunMarcado;
    this.contMarc = this.contMarc + 1;
    console.log("contMarc:" + this.contMarc); 
    console.log("vamos por chequearPelicula en el ts de lista-peliculas");
    console.dir(pelisel);
    pelisel.marcado = !pelisel.marcado;
  }

  agregoAlArray(nuevapelicula)
  {
    this.pulsamos1 = !this.pulsamos1;
    console.log("vamos por agregoAlArray en el ts de lista-peliculas");
    console.log(nuevapelicula);
    this.guardo.emit(nuevapelicula);
  }

  modiEnElArray(mdpelicula)
  {
    
    console.log(mdpelicula);
    this.modifico.emit(mdpelicula);
  }

}

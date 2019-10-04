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

  /*@Input()
  contMarc = 0;*/

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
  pasePorMod = false;
  algunMarcado = false;
  variosMarcados = false;
  pelisel = [];

  contMarc = 0;

  constructor() { }

  ngOnInit() {
  }

  guardarPelicula() {
    console.log("vamos por guardarPelicula en el ts de lista-peliculas");
    this.pulsamos1 = !this.pulsamos1;
    this.nuevaPelicula = [];/* para insertar de nuevo, borramos lo que tenga en titulo el formulario*/
  }

  modificarPelicula(pelicula) {
    console.log("vamos por modificarPelicula en el ts de lista-peliculas");
    console.log("pulsamos antes:" + this.pulsamos2);
    this.pulsamos2 = !this.pulsamos2;
    console.log("pulsamos despues:" + this.pulsamos2);
    this.pasePorMod = true;
  }

  borrarPelicula(pelicula) {
    console.log("vamos por borrarPelicula en el ts de lista-peliculas");
    this.contMarc = 0;
    this.algunMarcado = false;
    this.borro.emit(pelicula);
  }

  chequearPelicula(pelisel) {
    console.log("vamos por chequearPelicula en el ts de lista-peliculas");
  
    if (this.pasePorMod){ 
      this.peliculas.forEach(peliTempo =>{
        if (peliTempo.id !== pelisel.id) {
          if (peliTempo.marcado === true){
            this.contMarc = this.contMarc - 1;
          }
          peliTempo.marcado = false;
          
        }
      });
    }
    
    pelisel.marcado = !pelisel.marcado; /*atencion con esto */

    console.log("vamos aqui:" + pelisel.marcado);
    if (pelisel.marcado){
      this.contMarc = this.contMarc + 1;
    }
    if (!pelisel.marcado){
      this.contMarc = this.contMarc - 1;
    }
    
    if (this.contMarc > 1){
      this.variosMarcados = true;
      this.algunMarcado = false;
    }

    if (this.contMarc === 1){
      this.algunMarcado = true;
      this.variosMarcados = false;
    }

    if (this.contMarc === 0){
      this.algunMarcado = false;
      this.variosMarcados = false;
    }
    
    if (pelisel.marcado){
    this.mdPelicula = pelisel; /* muestra lo marcado a modificar */
    }
    console.log("contMarcados:" + this.contMarc);
    console.log("variosMarcados:" + this.variosMarcados);
    console.log("algunMarcado:" + this.algunMarcado);
   
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
    console.log("pulsamoss antes:" + this.pulsamos2);
    this.pulsamos2 = !this.pulsamos2;
    console.log("pulsamoss despues:" + this.pulsamos2);
    this.contMarc = 0;
  
  }

}

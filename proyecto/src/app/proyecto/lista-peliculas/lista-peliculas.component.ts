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
  pelimod = [];

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
    console.dir(pelicula);
    this.pulsamos2 = !this.pulsamos2;
    this.pasePorMod = true;

    /*
    this.mdPelicula.find
    this.tareasAbiertas.find(t => t.id === tarea.id*/
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
    // console.dir(pelisel);
  
    this.peliculas.forEach(peliTempo =>{
      if (peliTempo.id !== pelisel.id) {
        peliTempo.marcado = false;
      }
    });

    if (this.pasePorMod){
      for (let peli of this.peliculas){
        console.log("vuelta:" + peli.id);
        console.dir(peli);
        if (!this.peliculas.find(t => t.id === pelisel.id)){
          peli.marcado = false;
        }
      }
      console.log("xxxx");
      
      console.dir(this.peliculas[0]);
      console.dir(this.peliculas[1]);
      console.dir(this.peliculas[2]);
      console.dir(this.peliculas[3]);
      console.log("xxxx");
  
    }
    pelisel.marcado = !pelisel.marcado; /*atencion con esto */
    console.log("quiero ver esto:" + pelisel.marcado);
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
    console.log("vemossss:");
    console.dir(this.mdPelicula);
    /*if (this.pasePorMod){
      this.peliculas.find(t => t.id != pelisel.id).marcado = false;
    }*/
   
    console.log("antencion1");
    console.dir(pelisel);
    console.log(this.contMarc);
    console.log(this.pasePorMod);
    console.log("antencion1");

    console.log("contMarcados:" + this.contMarc);
    console.log("variosMarcados:" + this.variosMarcados);
    console.log("algunMarcado:" + this.algunMarcado);
    console.log("marcado:" + pelisel.marcado);
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
  
    /*
    if (pelimod.marcado && this.contMarc > 1){
        for (let pelicula of this.peliculas){
          if (pelicula.id === pelimod.id){
          }
          else{
            if (pelicula.marcado){
              pelicula.marcado = !pelicula.marcado;
              this.peliculas.splice(pelicula);
            }
          }
        }
    }*/
    this.pulsamos2 = !this.pulsamos2;
    this.contMarc = 0;
  
  }

}

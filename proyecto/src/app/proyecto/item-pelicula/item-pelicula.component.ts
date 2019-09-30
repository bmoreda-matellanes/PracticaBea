import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-pelicula',
  templateUrl: './item-pelicula.component.html',
  styleUrls: ['./item-pelicula.component.css']
})
export class ItemPeliculaComponent implements OnInit {

  peliculasDisponibles = [
    { id: '1', titulo: 'El silencio de los corderos' },
    { id: '2', titulo: 'La mano que mece la cuna' },
    { id: '3', titulo: 'Titanic' },
    { id: '4', titulo: 'IT' }
  ];

  /*pulsamos = false;
  borramos = false;*/

  nuevaPelicula = [];

  constructor() {
    
   }

  ngOnInit() {
  }

  addPelicula(nuevapelicula){
    console.log('llamamos a addPelicula en el ts de item-pelicula');
    /*this.pulsamos = !this.pulsamos;

    console.log("NUEVA PELICULA");*/
    /* calculamos el nuevo id */
    nuevapelicula.id = this.peliculasDisponibles.length + 1; 

    if (this.peliculasDisponibles.find(t => t.id === nuevapelicula.id)){
      return;
    }
   
    console.log(nuevapelicula);
    
    this.peliculasDisponibles.push(nuevapelicula);
    console.log("lista de peliculas");
    this.nuevaPelicula = [];
   
    console.log(this.peliculasDisponibles);

    /*this.pulsamos = false;*/
   
  }

  delPelicula(pelicula){
    
    console.log('llamamos a delPelicula en el ts de item-pelicula');

   /* if (this.borramos){ 
      console.log("vamos a borrar" + pelicula.titulo);
      this.peliculasDisponibles.shift();
      console.log("lista de peliculas despues de borrar");
      console.log(this.peliculasDisponibles);
    }*/
  
  }

}

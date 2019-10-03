import { Component, OnInit, Input } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-item-pelicula',
  templateUrl: './item-pelicula.component.html',
  styleUrls: ['./item-pelicula.component.css']
})
export class ItemPeliculaComponent implements OnInit {

  peliculasDisponibles = [
    { id: '1', titulo: 'El silencio de los corderos', marcado:false},
    { id: '2', titulo: 'La mano que mece la cuna', marcado:false},
    { id: '3', titulo: 'Titanic' , marcado:false},
    { id: '4', titulo: 'IT' , marcado:false}
  ];

  nuevaPelicula = [];
  mdPelicula = [];
  
  constructor() {
    
   }

  ngOnInit() {
  }

  addPelicula(nuevapelicula){
    console.log('llamamos a addPelicula en el ts de item-pelicula');
   
    nuevapelicula.id = this.peliculasDisponibles.length + 1; 

    if (this.peliculasDisponibles.find(t => t.id === nuevapelicula.id)){
      return;
    }
    
    this.peliculasDisponibles.push(nuevapelicula);
    this.nuevaPelicula = [];


  }

  delPelicula(){
    
    console.log('llamamos a delPelicula en el ts de item-pelicula');
    
    for (let pelicula of this.peliculasDisponibles){

      if (pelicula.marcado) {
         this.peliculasDisponibles = this.peliculasDisponibles.filter(t => t.id !== pelicula.id);
      } 
    }
  }

  modiPelicula(mdpelicula){
    console.log('llamamos a modiPelicula en el ts de item-pelicula');
  }

}

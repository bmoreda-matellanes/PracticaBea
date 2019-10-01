import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nueva-pelicula',
  templateUrl: './nueva-pelicula.component.html',
  styleUrls: ['./nueva-pelicula.component.css']
})
export class NuevaPeliculaComponent implements OnInit {

  @Input()
  peliculas=[];

  @Output()
  agrego = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  metoEnArray(peliculas) {
    console.log("vamos por metoEnArray en el ts de nueva-pelicula");

  /*  console.log(this.pulsamos);*/
    this.agrego.emit(peliculas);
  }

}

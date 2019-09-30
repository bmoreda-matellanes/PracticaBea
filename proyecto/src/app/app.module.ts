import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './proyecto/inicio/inicio.component';
import { ItemReservaComponent } from './proyecto/item-reserva/item-reserva.component';
import { ItemPeliculaComponent } from './proyecto/item-pelicula/item-pelicula.component';
import { ListaPeliculasComponent } from './proyecto/lista-peliculas/lista-peliculas.component';
import { NuevaPeliculaComponent } from './proyecto/nueva-pelicula/nueva-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ItemReservaComponent,
    ItemPeliculaComponent,
    ListaPeliculasComponent,
    NuevaPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

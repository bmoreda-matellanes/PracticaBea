import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './proyecto/inicio/inicio.component';
import { ItemReservaComponent } from './proyecto/item-reserva/item-reserva.component';
import { ItemPeliculaComponent } from './proyecto/item-pelicula/item-pelicula.component';
import { NuevaPeliculaComponent } from './proyecto/nueva-pelicula/nueva-pelicula.component';
import { ModifPeliculaComponent } from './proyecto/modif-pelicula/modif-pelicula.component';


const routes: Routes = [
{ path: '', component: InicioComponent},
{ path: 'reservas', component: ItemReservaComponent},
{ path: 'peliculas', component: ItemPeliculaComponent},
{ path: 'nuevas', component: NuevaPeliculaComponent},
{path: 'modifica', component: ModifPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

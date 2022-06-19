import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetarySystemsComponent } from './pages/planetary-systems/planetary-systems.component';
import { KeplerComponent } from './pages/kepler/kepler.component';



@NgModule({
  declarations: [
    PlanetarySystemsComponent,
    KeplerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    KeplerComponent,
    PlanetarySystemsComponent
  ]
})
export class ExoplanetsModule { }

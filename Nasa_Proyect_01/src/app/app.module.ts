import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExoplanetsModule } from './exoplanets/exoplanets.module';
import { MainModule } from './main/main.module';
import { TechportModule } from './techport/techport.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ExoplanetsModule,
    TechportModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

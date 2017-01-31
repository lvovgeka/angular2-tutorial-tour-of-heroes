import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
     BrowserModule, 
     FormsModule 
  ],
  declarations: [ 
     AppComponent,
     HeroDetailComponent 
  ],
  bootstrap:    [ 
     AppComponent 
  ]
})
export class AppModule { }
//https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
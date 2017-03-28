import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }     from './dashboard.component';
import { AppComponent }  from './app.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroService }  from './hero.service';




@NgModule({
    imports:      [
       BrowserModule,
       FormsModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
       AppComponent,
       HeroDetailComponent,
        DashboardComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap:    [
       AppComponent
    ]
})
export class AppModule { }
//https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
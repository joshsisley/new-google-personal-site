import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {HomeComponent} from './home/home.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {NavbarComponent} from './search-results/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
    HomeComponent,
    SearchResultsComponent,
    NavbarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

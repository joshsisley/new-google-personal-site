import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {HomeComponent} from './home/home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
    HomeComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

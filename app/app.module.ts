import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'

import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    HomeComponent,
    AboutComponent,
    AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

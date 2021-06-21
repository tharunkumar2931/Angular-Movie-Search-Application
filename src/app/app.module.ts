import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './component/header/header.component';
import { MoviesComponent } from './component/movies/movies.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    FooterComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

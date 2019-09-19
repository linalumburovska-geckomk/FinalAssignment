import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import CurrentCityComponent from './current-city/current-city.component';
import SearchBarComponent from './search-bar/search-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { CitiesService } from './cities.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrentCityComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

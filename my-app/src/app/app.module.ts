import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CitiesService } from './cities.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectedCityComponent } from './selected-city/selected-city.component';
import { CurrentCityComponent } from './current-city/current-city.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {CurrentCityService} from './current-city/current-city.service';
import {SearchBarService} from './search-bar/search-bar.service';
import {SelectedCityService} from './selected-city/selected-city.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectedCityComponent,
    CurrentCityComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CitiesService,
    CurrentCityService,
    SearchBarService,
    SelectedCityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedCityComponent } from './selected-city/selected-city.component';
import {CurrentCityComponent} from './current-city/current-city.component';


const routes: Routes = [
  { path: '', component: CurrentCityComponent },
  { path: 'detail/:cityName', component: SelectedCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

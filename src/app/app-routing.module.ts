import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './restaurants/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants/restaurants.component';
import { WelcomeComponent } from './restaurants/welcome/welcome.component';

const routes: Routes = [
  {path: "home", component : WelcomeComponent},
  {path: "restaurants", component : RestaurantsComponent},
  {path: "restaurants/:cuisine", component : RestaurantsComponent},
  {path: "about", component :AboutComponent},
  {path: "", redirectTo: "home" , pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

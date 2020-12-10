import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HeaderComponent } from './core/header/header.component';
import { RestaurantsComponent } from './restaurants/restaurants/restaurants.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';
import { RestaurantListItemComponent } from './restaurants/restaurant-list-item/restaurant-list-item.component';
import { WelcomeComponent } from './restaurants/welcome/welcome.component';
import { AboutComponent } from './restaurants/about/about.component';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './restaurants/rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    RestaurantsComponent,
    RestaurantListComponent,
    RestaurantListItemComponent,
    WelcomeComponent,
    AboutComponent,
    RatingComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [
    ModalComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

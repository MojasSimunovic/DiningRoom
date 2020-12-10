import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/restaurant.service';
import { RestaurantList } from '../model/restaurant-list.model';
import { Restaurant } from '../model/restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants : Restaurant[];
  restaurantCount : number;
  params = {
    filter : {
      priceFrom : 0,
      priceTo: 5, 
      cuisine: ""
    },
    page: 4,
    pageSize :6
  }

  constructor(private restaurantService : RestaurantService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(x=> {
      let cuisine = x['cuisine'] == 'all' ? '' : x['cuisine'];
      this.params.filter.cuisine = cuisine;
      this.refresh()
    })
  }
  refresh(){
  this.restaurantService.getAll(this.params).subscribe( x =>{
    this.restaurants = x.results;
    this.restaurantCount = x.count;
    console.log(this.restaurantCount);
  })
    
  }
  changePage(value:number){
    this.params.page = value;
    this.refresh();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from '../restaurant.service';
import { Day } from '../restaurants/model/day';
import { Days } from '../restaurants/model/days';
import { Menu } from '../restaurants/model/menu.model';
import { Restaurant } from '../restaurants/model/restaurant.model';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  menu : Menu[] ;
  days;
  menuItems;
  Monday;
  Tuesday;
  Wednesday;
  Thursday;
  Friday;
  Saturday;
  workingHours;
  
  
  @Input() restaurant : Restaurant;
  

  constructor(public activeModal: NgbActiveModal,private restaurantService : RestaurantService) { }

  ngOnInit(){
    this.restaurantService.getMenu(this.restaurant._id).subscribe( menu=> {
      this.menu = menu.results;  
      this.menuItems = this.menu.map(elem=>elem.items);
      this.menuItems = this.menuItems[0];
    })
    this.days = this.restaurant.days.days;
    this.Monday = this.days['1'];
    this.Tuesday = this.days['2'];
    this.Wednesday = this.days['3']
    this.Thursday = this.days['4'];
    this.Friday = this.days ['5'];
    this.Saturday = this.days ['6'];
    console.log(this.days['4']);
  }

}
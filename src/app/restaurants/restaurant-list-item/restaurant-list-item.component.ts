import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';
import { Restaurant } from '../model/restaurant.model';
import { RestaurantListComponent} from '../restaurant-list/restaurant-list.component'

@Component({
  selector: 'app-restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.css']
})
export class RestaurantListItemComponent implements OnInit {
  

  @Input() restaurant : Restaurant;
  @Input() name;
  constructor(public modal : NgbModal) { }

  ngOnInit(): void {
  }
  openModal(){
    const modalRef= this.modal.open(ModalComponent);
    modalRef.componentInstance.restaurant = this.restaurant;
  }

}

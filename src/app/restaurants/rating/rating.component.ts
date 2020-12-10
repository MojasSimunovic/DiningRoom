import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() imageFull : string;
  @Input() imageEmpty : string;
  @Input() countFull: number;

  emptyList =[];
  fullList =[]




  constructor() { }

  ngOnInit(): void {
    this.fullList = new Array(this.countFull);
    this.emptyList = new Array(5 - this.countFull);
  }

}

import { Restaurant } from './restaurant.model';

export class RestaurantList {
    
    count : number;
    results : Restaurant[];


    constructor(obj?: any){
        this.results = obj && obj.results.map(elem=>{return new Restaurant(elem);}) || [];
        this.count = obj && obj.count ||0;
       
    }
}
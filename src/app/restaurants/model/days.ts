import { Day } from './day';
export class Days {
    
    days : Day[];

    constructor(obj? :any){
        this.days  = obj && obj.days.map(elem=>{return new Day(elem);}) || [];
    }
}
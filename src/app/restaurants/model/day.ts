import { WorkHours } from '../model/workHours.model'
export class Day {
    
       value : string;
       hours : WorkHours;
    
    constructor(obj?:any){
        this.value = obj && obj.value || "";
        this.hours = obj && obj.hours.map(elem=>{ return new WorkHours(elem);}) ||[];
    }
}
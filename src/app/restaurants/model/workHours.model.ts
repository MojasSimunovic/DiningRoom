export class WorkHours {

    opens : string;
    closes : string;

    constructor (obj?: any){
        this.closes = obj && obj.closes || "";
        this.opens = obj && obj.opens || "";
    }
}
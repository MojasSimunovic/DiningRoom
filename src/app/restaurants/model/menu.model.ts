
export class Menu {

    _id : number;
    restaurants : number;
    items : {

        name : string;
        price : number;
    }
   

    constructor(obj?: any){
        this._id =  obj && obj._id || 0;
        this.restaurants = obj && obj.restaurants || 0;
        this.items = obj && obj.items || [];
    }
}
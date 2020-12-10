import { Menu } from "./menu.model";

export class Menus {

    count : number;
    results : Menu[];

    constructor (obj?:any){
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map(elem =>{return new Menu(elem);}) || [];
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestaurantList } from './restaurants/model/restaurant-list.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Days } from './restaurants/model/days';
import { Menu } from './restaurants/model/menu.model';
import { Menus } from './restaurants/model/menus.model';


const baseUrl = "http://localhost:3000/api/restaurants";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http : HttpClient) { }

  getAll(params?:any): Observable<RestaurantList>{
    let queryParams = {};
    if(params){
      queryParams = { params : new HttpParams()
      .set("page", params.page || "")
      .set("pageSize", params.pageSize || "")
      .set("filter", params.filter && JSON.stringify(params.filter) || "")   
      }
    }
    return this.http.get(baseUrl,queryParams).pipe(map(x => {
      return new RestaurantList(x);
    }));
  }
  getMenu(id : number): Observable<Menus>{
    return this.http.get(baseUrl + "/" + id + "/menus").pipe(map(
      data => { return new Menus(data)}
    ))
  };
  
}

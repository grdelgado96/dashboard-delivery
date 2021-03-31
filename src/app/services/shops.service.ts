import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Shops, ShopsParams}from '../models/Shops';
@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  protected apiUrl: String;
  
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  public createShop(params:ShopsParams,options: any = {}){
    options.headers = new HttpHeaders().set("Content-Type", 'application/json');
    var body = {
      "name": params.name,
      "lat": params.lat,
      "lng": params.lng,
      "address":params.address,
    };
    return this.http.post(this.apiUrl + "/api/shops",body,options);
  }

  public updateShop(id:string, params:ShopsParams,options: any = {}){
    options.headers = new HttpHeaders().set("Content-Type", 'application/json');
    var body = {
      "name": params.name,
      "lat": params.lat,
      "lng": params.lng,
      "address":params.address,
    };
    return this.http.put(this.apiUrl + "/api/shops/"+id,body,options);
  }
  public getShopsResource(options:any={}){
    options.headers = new HttpHeaders().set("Content-Type", 'application/json');
    return this.http.get(this.apiUrl + "/api/shops", options);
  }

}

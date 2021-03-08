import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import {ParamsBussines}from '../models/Bussines';

@Injectable({
  providedIn: 'root'
})
export class BussinesService {
  protected apiUrl: String;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }
  public aBussinesResource(id:string,options: any = {}){
    options.headers = new HttpHeaders();
    return this.http.get(this.apiUrl + "/api/bussines/"+id);
  }
  public createBussines(params:ParamsBussines,options: any = {}){
    options.headers = new HttpHeaders().set("Content-Type", 'application/json');
    var body = {
      "type": params.type,
      "name": params.name,
    };
    return this.http.post(this.apiUrl + "/api/bussines",body,options);
  }
  public updateBussines(id:string, name:string,options: any = {}){
    options.headers = new HttpHeaders().set("Content-Type", 'application/json');
    var body = {
      "name": name,
    };

    return this.http.put(this.apiUrl + "/api/bussines/"+id,body,options);
  }


}

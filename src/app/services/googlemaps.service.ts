import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {
protected apiKey: String;
  constructor(private http: HttpClient) { 
    this.apiKey = environment.google_key;
  }
  public getAddress(lat:string, long:string){
  
  this.http.get<{ status: string, results: any[] }>(
     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${this.apiKey}`,
    { responseType: 'json' }
   ).subscribe(e => {
     if (e.status === 'OK') {
      console.log(e.results[0].formatted_address);
    }
   });
  }
}

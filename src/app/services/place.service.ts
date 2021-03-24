import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  protected apiUrl: String;
  
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public addPlaceImage(image:File,id:string){
    const formData:FormData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post(this.apiUrl + "/api/place/image/" + id,formData,{ 
      responseType: 'text'});
  }
}

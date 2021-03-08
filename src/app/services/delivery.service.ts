import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { UserInfo, Token, CurrentUserData,bussines } from '../../../src/app/models/User';
import { Observable } from 'rxjs';

class ParameterCodec implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
const PARAMETER_CODEC = new ParameterCodec();

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  protected apiUrl: String;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public postLogin(paramsI: UserInfo,options: any = {}){
    options.headers = new HttpHeaders().set("Content-Type", 'application/x-www-form-urlencoded');
    var body = {
      "username": paramsI.username,
      "password": paramsI.password,
      "grant_type": paramsI.grant_type,
      "client_id": paramsI.client_id,
      "client_secret": paramsI.client_secret
    };
    let p = new URLSearchParams();
    p.set("username", body.username)
    p.set("password", body.password)
    p.set("grant_type", body.grant_type)
    p.set("client_id", body.client_id)
    p.set("client_secret", body.client_secret)
  
    return this.http.post(this.apiUrl + "/api/login",p.toString(),options);
  }
  public currentUserData(options: any = {}){
    options.headers = new HttpHeaders().set("Authorization", 'Bearer '+localStorage.getItem("access_token"));
    return this.http.get(this.apiUrl + "/api/me",options);
  }


  public isGranted(): boolean
  {
    
    var accessToken=localStorage.getItem('access_token');
    var isChecked=localStorage.getItem('ischecked');
      if(isChecked=="true"){
        if (accessToken && !this.tokenExpired())
        {
          console.log("true");
          return true;
          
        } else
        {
          console.log("false");
          return false;
          
        }
      }else{
        console.log("false");
          return false;
      }

     
    
  }

  public isAuthenticated(): boolean
  {
    
    var accessToken=localStorage.getItem('access_token');
  
        if (accessToken && !this.tokenExpired())
        {
          console.log("true");
          return true;
          
        } else
        {
          console.log("false");
          return false;
          
        }
      

     
    
  }

  public tokenExpired(): boolean
    {
        //temporal
        var expired = true;
        var expiresIn: number= +localStorage.getItem('expires_in');
        var currentDate: number= +localStorage.getItem('current_date');
        if (expiresIn && currentDate) 
        {
            var currentTime = new Date().getTime();
            //            console.log("Auth date", new Date(this.getCurrentDate()));
            //            console.log("Expire date", new Date((this.getExpires_in() * 1000) + this.getCurrentDate()));
            //            console.log("Now date", new Date(currentTime));

            //multiplicate by 1000 to get milisecons
            if (+((expiresIn * 1000) + currentDate) > currentTime)
            {
                expired = false;
            }
        }
        return expired;
    }

}

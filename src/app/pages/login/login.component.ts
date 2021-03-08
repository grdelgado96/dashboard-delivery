import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { UserInfo, Token,CurrentUserData,bussines } from '../../../../src/app/models/User'
import { DeliveryService } from '../../../../src/app/services/delivery.service'
import {environment} from '../../../environments/environment';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
  
  username: string;
  pass: string ;
  public token: Token | undefined;
  public currentUserData: CurrentUserData;
  public load:boolean=false;
  public check1:Boolean=false;

  
  protected service: NbAuthService;

  protected cd: ChangeDetectorRef;
  protected router: Router;
  constructor(
    service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options,
    cd: ChangeDetectorRef,
    router: Router,
    private http: HttpClient,
    private deliveryService: DeliveryService,
  ) {
    super(service, options, cd, router);
  }


  login() {
    this.load=true;
    let params: UserInfo = <UserInfo>{};
    params.client_id = environment.client_id;
    params.client_secret = environment.client_secret;
    params.grant_type = environment.grant_type;
    params.password = this.pass;
    params.username = this.username;
    console.log(this.pass);
    this.deliveryService.postLogin(params).subscribe((resp: any) => {
      this.token = resp;
      if (this.token != null) {
        localStorage.clear();
        localStorage.setItem('access_token', this.token.access_token);
        localStorage.setItem('expires_in', this.token.expires_in.toString());
        localStorage.setItem('refresh_token', this.token.refresh_token);
        localStorage.setItem('ischecked',this.check1.toString());
        localStorage.setItem('current_date',new Date().getTime().toString());
        this.deliveryService.currentUserData().subscribe((resp:any)=>{
          this.currentUserData=resp;
          if(this.currentUserData != null){
            localStorage.setItem('user_id', this.currentUserData.id);
            localStorage.setItem('bussines', JSON.stringify(this.currentUserData.bussines));
          }

        }, error => {
          console.log(error);
    
        })
        this.router.navigateByUrl('/pages');
       
        
      }
    }, error => {
      console.log(error);

    })

  }
}
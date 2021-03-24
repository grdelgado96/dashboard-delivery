import { Component, Input, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Bussines,user} from '../../../../../src/app/models/Bussines';
import { BussinesService } from '../../../services/bussines.service';
import { UserInfo, Token,CurrentUserData,bussines } from '../../../../../src/app/models/User';

@Component({
  selector: 'ngx-bussines-data',
  templateUrl: './bussines-data.component.html',
  styleUrls: ['./bussines-data.component.scss']
})
export class BussinesDataComponent implements OnInit {

  @Input() isnull:boolean;
  currentTheme: string;
  themeSubscription: any;
  
  public bussinesr: Bussines;
  currentbussines:bussines;
  flag:boolean=false;
 img:string;

  constructor(private themeService: NbThemeService,private bussinesService: BussinesService) { 
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnInit(): void {
    this.getBussines();
  }
  getBussines(){
    this.currentbussines=JSON.parse(localStorage.getItem('bussines'));
   this.img= JSON.parse(localStorage.getItem('image'));
  console.log(this.img);
    if(this.currentbussines!= null){
      this.bussinesService.aBussinesResource(this.currentbussines.id).subscribe((resp:any)=>{
        this.bussinesr=resp;
        if(this.bussinesr != null){
          localStorage.setItem('Current_Bussines', JSON.stringify(this.bussinesr));
          this.flag=true;
        }
  
      }, error => {
        console.log(error);
  
      })
    }
  
  }
 

}

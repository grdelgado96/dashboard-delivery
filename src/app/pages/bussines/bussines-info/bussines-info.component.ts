import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Bussines, user ,ParamsBussines} from '../../../../../src/app/models/Bussines'
import { BussinesService } from '../../../../../src/app/services/bussines.service'



@Component({
  selector: 'ngx-bussines-info',
  templateUrl: './bussines-info.component.html',
  styleUrls: ['./bussines-info.component.scss']
})
export class BussinesInfoComponent implements OnInit {
  @Input() action:boolean;
  bussinesSuc:Bussines;
  type: string = "type_food";
  name:string = "";
  
  constructor(private bussinesService: BussinesService) { }

  ngOnInit(): void {
  }


  createBussines(){
    let params:ParamsBussines=<ParamsBussines>{};
    params.type= this.type;
    params.name= this.name
    if(this.type!=null && this.name!=null){
      this.bussinesService.createBussines(params).subscribe((resp: any) => {
        this.bussinesSuc = resp;
        console.log(resp);
        localStorage.setItem("type",this.type)
      }, error => {
        console.log(error);

      })
    }

  }
  updateBussines(){
    if(this.name!=null && this.bussinesSuc.id!= null){
      this.bussinesService.updateBussines(this.bussinesSuc.id, this.name).subscribe((resp: any) => {
        this.bussinesSuc = resp;
        console.log(resp);
        localStorage.setItem("type",this.type)
      }, error => {
        console.log(error);

      })
    }

  }
  ngOnChanges(changes: SimpleChanges) {
    if(this.action==true){
      if(this.bussinesSuc == null){
        this.createBussines();
      }else{
        this.updateBussines();
      }
      console.log("change action to true");
    }else{
      console.log("change action to false");
    }  
  }


}

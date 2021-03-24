import { Input, SimpleChanges } from '@angular/core';
import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { PlaceService } from '../../../services/place.service';
@Component({
  selector: 'ngx-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Input() actionrest: boolean;
  @Input() idSetImage: string;
  @Input() flagImage:string;
  @ViewChild('userPhoto') userPhoto: ElementRef;
  private file: File;
  fileToUpload: File = null;
  url: any;
  flag: boolean = false;
  urlResp:string;

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
  }

  private prepareSave(value): FormData {
    const formData: FormData = new FormData();
    formData.append('ParentUserID', value.parentUserID);
    formData.append('FirstName', value.firstName);
    formData.append('LastName', value.lastName);
    formData.append('Age', value.age);
    formData.append('Photo', this.file, this.file.name);
    return formData;
  }


  fileChange(event) {
    this.file = event.target.files[0];
    this.fileToUpload = event.target.files[0];
    var reader = new FileReader();
    let THIS = this;
    reader.onload = (event: any) => {
      var img = document.getElementById('img1');
      THIS.url = event.target.result;
    }

    reader.readAsDataURL(this.file);
    this.flag = true;
  }
  clearSelectedPhoto() {
    this.userPhoto.nativeElement.value = null;
    this.flag = false;

  }
  // imagen del usuario
  // setImage() {
  //   if (this.file != null) {
  //     this.bussinesService.addImage(this.file).subscribe((resp: any) => {
  //       var img = resp;
  //       console.log(resp);
  //     }, error => {
  //       console.log(error);
  //     })
  //   } 
  // }
  setImage() {
    if (this.file != null) {
      this.placeService.addPlaceImage(this.file,this.idSetImage).subscribe((resp: any) => {
        this.urlResp = resp;
        console.log(resp);
      }, error => {
        console.log(error);
      })
    } 
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.actionrest == true && this.flagImage) {
      this.setImage();
    }
  }

}
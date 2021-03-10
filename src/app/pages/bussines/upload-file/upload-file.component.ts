import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('userPhoto') userPhoto: ElementRef;
  private file: File;
  url: any;
  flag: boolean = false;

  contructor() { }

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
    var file = event.target.files[0];
    var reader = new FileReader();
    let THIS = this;
    reader.onload = (event: any) => {
      var img = document.getElementById('img1');
      THIS.url = event.target.result;
      //this.url=event.target.result;
    }
    
    reader.readAsDataURL(file);
    this.flag = true;
  }
  clearSelectedPhoto() {
    this.userPhoto.nativeElement.value = null;
    this.flag = false;

  }
  
}
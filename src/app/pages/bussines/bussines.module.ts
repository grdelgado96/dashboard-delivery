import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbStepperModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { BussinesComponent } from './bussines.component';
import { FormsModule } from '@angular/forms';
import { BussinesInfoComponent } from './bussines-info/bussines-info.component';
import { FoodShopComponent } from './food-shop/food-shop.component';
import { BussinesDataComponent } from './bussines-data/bussines-data.component';
import { AutocompleteComponent } from './google-places/google-places.component';
import {ImageUploadModule} from 'angular2-image-upload';
import { UploadFileComponent } from './upload-file/upload-file.component';
@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbStepperModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbCheckboxModule,
    NbInputModule,
    ImageUploadModule.forRoot(),
  ],
  declarations: [
    BussinesComponent,
    BussinesInfoComponent,
    FoodShopComponent,
    BussinesDataComponent,
    AutocompleteComponent,
    UploadFileComponent

  ],
})
export class BussinesModule { }

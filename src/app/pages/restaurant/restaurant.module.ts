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
  import { FormsModule } from '@angular/forms';

import { RestaurantComponent } from './restaurant.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { ShopCardComponent } from './shop-card/shop-card.component';


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
    NgxEchartsModule,
    NbCheckboxModule,
    NbInputModule,
    
  ],
  declarations: [
    RestaurantComponent,
    RestaurantCardComponent,
    ShopCardComponent

  ],
})
export class RestaurantModule { }

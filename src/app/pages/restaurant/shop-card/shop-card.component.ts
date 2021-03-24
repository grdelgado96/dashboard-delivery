import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Shops } from '../../../models/Shops';

@Component({
  selector: 'ngx-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  currentTheme: string;
  themeSubscription: any;
  @Input() shop: Shops;
  public address: any;
  flag: boolean = true;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnInit(): void {

    this.setflag();

  }

  setflag() {
    if (this.shop.image != null) {
      this.flag = false;
    }
  }

}

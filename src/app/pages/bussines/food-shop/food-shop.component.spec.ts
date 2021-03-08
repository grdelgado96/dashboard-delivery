import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodShopComponent } from './food-shop.component';

describe('FoodShopComponent', () => {
  let component: FoodShopComponent;
  let fixture: ComponentFixture<FoodShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

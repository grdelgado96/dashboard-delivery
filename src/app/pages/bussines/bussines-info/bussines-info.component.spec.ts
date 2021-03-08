import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesInfoComponent } from './bussines-info.component';

describe('BussinesInfoComponent', () => {
  let component: BussinesInfoComponent;
  let fixture: ComponentFixture<BussinesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

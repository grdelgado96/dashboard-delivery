import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesDataComponent } from './bussines-data.component';

describe('BussinesDataComponent', () => {
  let component: BussinesDataComponent;
  let fixture: ComponentFixture<BussinesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinesDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

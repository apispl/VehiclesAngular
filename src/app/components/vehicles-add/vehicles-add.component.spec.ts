import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesAddComponent } from './vehicles-add.component';

describe('VehiclesAddComponent', () => {
  let component: VehiclesAddComponent;
  let fixture: ComponentFixture<VehiclesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

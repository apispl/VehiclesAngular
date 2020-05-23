import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesModifyComponent } from './vehicles-modify.component';

describe('VehiclesModifyComponent', () => {
  let component: VehiclesModifyComponent;
  let fixture: ComponentFixture<VehiclesModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

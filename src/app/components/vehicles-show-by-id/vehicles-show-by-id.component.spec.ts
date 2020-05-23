import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesShowByIdComponent } from './vehicles-show-by-id.component';

describe('VehiclesShowByIdComponent', () => {
  let component: VehiclesShowByIdComponent;
  let fixture: ComponentFixture<VehiclesShowByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesShowByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesShowByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

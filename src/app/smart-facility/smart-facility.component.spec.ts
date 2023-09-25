import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFacilityComponent } from './smart-facility.component';

describe('SmartFacilityComponent', () => {
  let component: SmartFacilityComponent;
  let fixture: ComponentFixture<SmartFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartFacilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolloSCRComponent } from './wollo-scr.component';

describe('WolloSCRComponent', () => {
  let component: WolloSCRComponent;
  let fixture: ComponentFixture<WolloSCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolloSCRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WolloSCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

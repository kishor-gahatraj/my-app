import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescompComponent } from './servicescomp.component';

describe('ServicescompComponent', () => {
  let component: ServicescompComponent;
  let fixture: ComponentFixture<ServicescompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicescompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

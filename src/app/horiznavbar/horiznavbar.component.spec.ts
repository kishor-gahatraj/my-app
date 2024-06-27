import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoriznavbarComponent } from './horiznavbar.component';

describe('HoriznavbarComponent', () => {
  let component: HoriznavbarComponent;
  let fixture: ComponentFixture<HoriznavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoriznavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoriznavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

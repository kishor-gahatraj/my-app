import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompComponent } from './home-comp.component';

describe('HomeCompComponent', () => {
  let component: HomeCompComponent;
  let fixture: ComponentFixture<HomeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

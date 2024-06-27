import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumecompComponent } from './resumecomp.component';

describe('ResumecompComponent', () => {
  let component: ResumecompComponent;
  let fixture: ComponentFixture<ResumecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumecompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

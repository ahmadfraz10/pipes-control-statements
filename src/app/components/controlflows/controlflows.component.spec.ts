import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlflowsComponent } from './controlflows.component';

describe('ControlflowsComponent', () => {
  let component: ControlflowsComponent;
  let fixture: ComponentFixture<ControlflowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlflowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

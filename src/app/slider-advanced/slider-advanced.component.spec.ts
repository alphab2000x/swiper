import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAdvancedComponent } from './slider-advanced.component';

describe('SliderAdvancedComponent', () => {
  let component: SliderAdvancedComponent;
  let fixture: ComponentFixture<SliderAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderAdvancedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

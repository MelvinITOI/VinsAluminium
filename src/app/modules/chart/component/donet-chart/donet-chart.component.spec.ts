import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonetChartComponent } from './donet-chart.component';

describe('DonetChartComponent', () => {
  let component: DonetChartComponent;
  let fixture: ComponentFixture<DonetChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonetChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

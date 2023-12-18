import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './component/chart/chart.component';
import { DonetChartComponent } from './component/donet-chart/donet-chart.component';

@NgModule({
  declarations: [ChartComponent,DonetChartComponent],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports:[ChartComponent,DonetChartComponent]
})
export class ChartsModule { }

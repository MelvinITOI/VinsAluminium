import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ChartsModule } from '../chart/charts.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    ToastModule,
    MatCardModule,
    PanelMenuModule,
    CardModule,
    DockModule,
    RadioButtonModule,
    ChartsModule,
  ],
  providers:[]
})
export class DashboardModule { }

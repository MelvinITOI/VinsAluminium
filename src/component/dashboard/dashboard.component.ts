import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarModule, ButtonModule, MenuModule,ToastModule,MatListModule,PanelMenuModule,CardModule],
  templateUrl: './dashboard.component.html',
  providers: [MessageService],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sidebarVisible: boolean = false;
  popup: MenuItem[] | undefined;
  items = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'About', icon: 'pi pi-fw pi-info' },
    { label: 'Contact', icon: 'pi pi-fw pi-envelope' },
  ];
  constructor(private messageService: MessageService,private route:Router) { }

  ngOnInit() {
    this.usermenu();
  }

  usermenu(){
    this.popup = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
              this.update();
            }
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.delete();
            }
          }
        ]
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-external-link',
            command: () =>{
              this.logout();
            }
          },
        ]
      }
    ];
  }

  logout(){
    this.route.navigate(['/login'])
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }

}

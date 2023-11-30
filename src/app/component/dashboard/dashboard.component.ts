import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SidebarModule, ButtonModule, MenuModule,ToastModule,MatCardModule,PanelMenuModule,CardModule,DockModule,RadioButtonModule],
  templateUrl: './dashboard.component.html',
  providers: [MessageService],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
[x: string]: any;
  sidebarVisible: boolean = false;
  popup: MenuItem[] | undefined;
  docmenu: MenuItem[] | undefined;
  cards = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 4', description: 'Description for Card 4' }
  ];
  items = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'About', icon: 'pi pi-fw pi-info' },
    { label: 'Contact', icon: 'pi pi-fw pi-envelope' },
  ];
  position: any = 'left';

  constructor(private messageService: MessageService,private route:Router) { }

  ngOnInit() {
    this.usermenu();
    this.docmenu = [
      {
          label: 'Finder',
          icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
          command:()=>{
            this.update();
          }
      },
      {
          label: 'App Store',
          icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
      },
      {
          label: 'Photos',
          icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
      },
      {
          label: 'Trash',
          icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
      }
  ];
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

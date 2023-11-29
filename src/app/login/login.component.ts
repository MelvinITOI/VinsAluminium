import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,CardModule,InputTextModule,ImageModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goto_dashboard() {
    this.route.navigate(['/dashboard']);
  }

}

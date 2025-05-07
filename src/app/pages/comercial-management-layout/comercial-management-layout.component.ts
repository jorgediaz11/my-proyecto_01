// diccionario de datos 002

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-comercial-management-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule],
  templateUrl: './comercial-management-layout.component.html',
  styleUrl: './comercial-management-layout.component.css'
})
export class ComercialManagementLayoutComponent {
  name = 'Jorgito';
  constructor(private router: Router){}
  
  isActive(path:string):boolean{
    return this.router.url == path;
  }
}

// diccionario de datos 002

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  //proporciona directivas comunes como ngif y ngfor
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({                              // decorador que define que esta clase es un componenete angular
  selector: 'app-root',                   // define como se usara este componenete en las plantillas HTML <app-root></app-root>
  standalone: true,                       // indica que este componente no necesita ser declarado en un modulo, puede importar directamente sus dependencias sin depender de NgModule
  imports: [CommonModule,
    RouterOutlet,
    HttpClientModule],  //solo aplica si standalone es true
  templateUrl: './app.component.html',    //lo que renderiza
  styleUrl: './app.component.css'
})

export class AppComponent {
}

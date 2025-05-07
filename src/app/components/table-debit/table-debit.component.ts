//  diccionario de datos 002

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-table-debit',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './table-debit.component.html',
  styleUrl: './table-debit.component.css'
})
export class TableDebitComponent {
}

// diccionario de datos 002

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonClass : 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() text:string='';
  @Input() type:string='button';
  @Input() icon?: string;
  @Input() disabled:any;
  @Input() loading:boolean = false;
  @Output() onClick = new EventEmitter<Event>();

  handleClick(event: Event){
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}

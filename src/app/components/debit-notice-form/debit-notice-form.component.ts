//  diccionario de datos 002

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-debit-notice-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './debit-notice-form.component.html',
  styleUrl: './debit-notice-form.component.css'
})
export class DebitNoticeFormComponent {

  private dateNotFutureValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    
    try {
      const selectedDate = new Date(control.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      return selectedDate > today ? { futureDate: true } : null;
    } catch {
      return { invalidDate: true };
    }
  }

  private conditionalCurrencyValidator(control: AbstractControl): ValidationErrors | null {
    return (control: FormControl) => {
      const monedaControl = this.debitNoticeForm?.get('moneda');
      if (!monedaControl) return null;
      if (monedaControl.value !== 'USD' && !control.value) {
        return { required: true };
      }
      if (control.value && isNaN(Number(control.value))) {
        return { invalidNumber: true };
      }
      
      return null;
    };
  }

  debitNoticeForm = new FormGroup({
    fecha_emision: new FormControl('', [
      Validators.required,
      this.dateNotFutureValidator.bind(this)
    ]),
    cliente: new FormControl('', [
      Validators.required
    ]),
    moneda: new FormControl('', [
      Validators.required
    ]),
    tipo_cambio: new FormControl('', [
      this.conditionalCurrencyValidator.bind(this)
    ]),
    condicion_pago: new FormControl('', [
      Validators.required
    ]),
    estado: new FormControl('', [
      Validators.required
    ])
  });

  onSubmit() {
    if (this.debitNoticeForm.valid) {
      const formData = {
        ...this.debitNoticeForm.value,
        fecha_emision: this.debitNoticeForm.value.fecha_emision 
          ? new Date(this.debitNoticeForm.value.fecha_emision)
          : null,
        tipo_cambio: this.debitNoticeForm.value.tipo_cambio
          ? Number(this.debitNoticeForm.value.tipo_cambio)
          : null
      };
      
      console.log('Formulario válido:', formData);
    }
  }
}

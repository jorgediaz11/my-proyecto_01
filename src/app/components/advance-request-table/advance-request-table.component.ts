//  diccionario de datos 002

import { Component, OnInit } from '@angular/core';
import { AdvanceRequestService } from '../../services/advance-request.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AnticipoSchema, ResponseAnticipoSchema } from '../../interface/AnticipoSchema';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-advance-request-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './advance-request-table.component.html',
  styleUrl: './advance-request-table.component.css'
})

export class AdvanceRequestTableComponent implements OnInit {
  //datos inmutables
  private _solicitudes: ReadonlyArray<AnticipoSchema> = [];
  private _buscarNumero: ReadonlyArray<AnticipoSchema> = [];

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;

  numero_anticipo = '';

  //getter para el template
  get solicitudes():ReadonlyArray<AnticipoSchema>{
    return this._solicitudes;
  }

  //getter para el template
  get buscarNumero():ReadonlyArray<AnticipoSchema>{
    return this._buscarNumero;
  }

  //total de paginas
  get totalPage(): number{
    return Math.ceil(this.totalItems / this.pageSize)
  }

  //mostrardatos
  get mostrarDatos():ReadonlyArray<AnticipoSchema>{
    if (this._buscarNumero && this._buscarNumero.length > 0) {
      return this._buscarNumero as AnticipoSchema[];
    }
    return this._solicitudes;
  }
  
  constructor(
    private advanceRequestService: AdvanceRequestService,
    private toast: ToastrService
  ){}

  ngOnInit(): void{
    this.loadPage(this.currentPage)
  }

  loadPage(page:number): void {
    this.advanceRequestService.getAllAnticipo(null,page,this.pageSize)
      .subscribe((res: ResponseAnticipoSchema)=>{
        this._solicitudes = res.data;
        this.currentPage = res.current_page;
        this.totalItems = res.total_count;
      })
  }

  changePage(newPage:number):void{
    if(newPage >= 1 && newPage <=this.totalPage){
      this.loadPage(newPage)
    }
  }

  //buscarAnticipo
  changeNumeroAnticipo(numero_anticipo:string):void{
    this.advanceRequestService.getByNumeroAnticipo(numero_anticipo)
      .subscribe((res: ResponseAnticipoSchema)=>{
        if (!res.data || res.data.length === 0 ) {
          this.toast.error('No existe el número de anticipo','',{
            toastClass: 'ngx-toastr toast-error',
            disableTimeOut: false
          });
          this._buscarNumero = [];
        }
        this._buscarNumero = res.data;
        this.currentPage = res.current_page;
        this.totalItems = res.total_count;
        console.log(numero_anticipo, 'AQUI', this.buscarNumero)
      })
  }

  //limpiarAnticipo
  clearNumeroAnticipo():void{
    this.numero_anticipo = '';
    this._buscarNumero = [];
    console.log(this.numero_anticipo, 'AQUI', this.buscarNumero)
  }
}

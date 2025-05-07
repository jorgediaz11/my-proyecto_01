//  diccionario de datos 002

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDebitComponent } from './table-debit.component';

describe('TableDebitComponent', () => {
  let component: TableDebitComponent;
  let fixture: ComponentFixture<TableDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDebitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

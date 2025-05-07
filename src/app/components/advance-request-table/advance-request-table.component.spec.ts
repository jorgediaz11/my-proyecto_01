//  diccionario de datos 002

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceRequestTableComponent } from './advance-request-table.component';

describe('AdvanceRequestTableComponent', () => {
  let component: AdvanceRequestTableComponent;
  let fixture: ComponentFixture<AdvanceRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceRequestTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

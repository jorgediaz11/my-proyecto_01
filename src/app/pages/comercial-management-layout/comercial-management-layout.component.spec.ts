// diccionario de datos 002

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialManagementLayoutComponent } from './comercial-management-layout.component';

describe('ComercialManagementLayoutComponent', () => {
  let component: ComercialManagementLayoutComponent;
  let fixture: ComponentFixture<ComercialManagementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComercialManagementLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComercialManagementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//  diccionario de datos 002

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitNoticeFormComponent } from './debit-notice-form.component';

describe('DebitNoticeFormComponent', () => {
  let component: DebitNoticeFormComponent;
  let fixture: ComponentFixture<DebitNoticeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitNoticeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitNoticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmtationDiablogComponent } from './confirmtation-diablog.component';

describe('ConfirmtationDiablogComponent', () => {
  let component: ConfirmtationDiablogComponent;
  let fixture: ComponentFixture<ConfirmtationDiablogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmtationDiablogComponent]
    });
    fixture = TestBed.createComponent(ConfirmtationDiablogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

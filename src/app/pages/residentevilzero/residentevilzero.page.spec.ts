import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidentevilzeroPage } from './residentevilzero.page';

describe('ResidentevilzeroPage', () => {
  let component: ResidentevilzeroPage;
  let fixture: ComponentFixture<ResidentevilzeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentevilzeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

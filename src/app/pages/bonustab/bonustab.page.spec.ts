import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonustabPage } from './bonustab.page';

describe('BonustabPage', () => {
  let component: BonustabPage;
  let fixture: ComponentFixture<BonustabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BonustabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

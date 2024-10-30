import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TesteoapiPage } from './testeoapi.page';

describe('TesteoapiPage', () => {
  let component: TesteoapiPage;
  let fixture: ComponentFixture<TesteoapiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteoapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

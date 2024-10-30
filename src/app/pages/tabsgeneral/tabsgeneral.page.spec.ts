import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsgeneralPage } from './tabsgeneral.page';

describe('TabsgeneralPage', () => {
  let component: TabsgeneralPage;
  let fixture: ComponentFixture<TabsgeneralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsgeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

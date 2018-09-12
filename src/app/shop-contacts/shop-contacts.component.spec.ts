import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopContactsComponent } from './shop-contacts.component';

describe('ShopContactsComponent', () => {
  let component: ShopContactsComponent;
  let fixture: ComponentFixture<ShopContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

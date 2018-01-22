import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopClansComponent } from './shop-clans.component';

describe('ShopClansComponent', () => {
  let component: ShopClansComponent;
  let fixture: ComponentFixture<ShopClansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopClansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopClansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

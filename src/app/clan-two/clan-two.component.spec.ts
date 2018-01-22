import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanTwoComponent } from './clan-two.component';

describe('ClanTwoComponent', () => {
  let component: ClanTwoComponent;
  let fixture: ComponentFixture<ClanTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanOneComponent } from './clan-one.component';

describe('ClanOneComponent', () => {
  let component: ClanOneComponent;
  let fixture: ComponentFixture<ClanOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaitonModifyComponent } from './locaiton-modify.component';

describe('LocaitonModifyComponent', () => {
  let component: LocaitonModifyComponent;
  let fixture: ComponentFixture<LocaitonModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaitonModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaitonModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

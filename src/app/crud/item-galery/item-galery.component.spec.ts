import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGaleryComponent } from './item-galery.component';

describe('ItemGaleryComponent', () => {
  let component: ItemGaleryComponent;
  let fixture: ComponentFixture<ItemGaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGaleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

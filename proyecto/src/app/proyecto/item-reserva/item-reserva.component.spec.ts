import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReservaComponent } from './item-reserva.component';

describe('ItemReservaComponent', () => {
  let component: ItemReservaComponent;
  let fixture: ComponentFixture<ItemReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

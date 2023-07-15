import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiporutinaComponent } from './tiporutina.component';

describe('TiporutinaComponent', () => {
  let component: TiporutinaComponent;
  let fixture: ComponentFixture<TiporutinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiporutinaComponent]
    });
    fixture = TestBed.createComponent(TiporutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

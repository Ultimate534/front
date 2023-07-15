import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpecialistaComponent } from './epecialista.component';

describe('EpecialistaComponent', () => {
  let component: EpecialistaComponent;
  let fixture: ComponentFixture<EpecialistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpecialistaComponent]
    });
    fixture = TestBed.createComponent(EpecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

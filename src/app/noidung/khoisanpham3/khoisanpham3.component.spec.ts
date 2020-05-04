import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khoisanpham3Component } from './khoisanpham3.component';

describe('Khoisanpham3Component', () => {
  let component: Khoisanpham3Component;
  let fixture: ComponentFixture<Khoisanpham3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khoisanpham3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khoisanpham3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

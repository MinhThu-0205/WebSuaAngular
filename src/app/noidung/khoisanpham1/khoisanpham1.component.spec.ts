import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khoisanpham1Component } from './khoisanpham1.component';

describe('Khoisanpham1Component', () => {
  let component: Khoisanpham1Component;
  let fixture: ComponentFixture<Khoisanpham1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khoisanpham1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khoisanpham1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

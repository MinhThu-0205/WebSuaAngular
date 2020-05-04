import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khoisanpham2Component } from './khoisanpham2.component';

describe('Khoisanpham2Component', () => {
  let component: Khoisanpham2Component;
  let fixture: ComponentFixture<Khoisanpham2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khoisanpham2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khoisanpham2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

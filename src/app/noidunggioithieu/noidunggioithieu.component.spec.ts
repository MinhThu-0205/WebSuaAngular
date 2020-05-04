import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoidunggioithieuComponent } from './noidunggioithieu.component';

describe('NoidunggioithieuComponent', () => {
  let component: NoidunggioithieuComponent;
  let fixture: ComponentFixture<NoidunggioithieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoidunggioithieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoidunggioithieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

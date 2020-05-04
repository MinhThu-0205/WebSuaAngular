import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoidungcuahangComponent } from './noidungcuahang.component';

describe('NoidungcuahangComponent', () => {
  let component: NoidungcuahangComponent;
  let fixture: ComponentFixture<NoidungcuahangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoidungcuahangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoidungcuahangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

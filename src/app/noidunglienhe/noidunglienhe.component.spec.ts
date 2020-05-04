import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoidunglienheComponent } from './noidunglienhe.component';

describe('NoidunglienheComponent', () => {
  let component: NoidunglienheComponent;
  let fixture: ComponentFixture<NoidunglienheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoidunglienheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoidunglienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

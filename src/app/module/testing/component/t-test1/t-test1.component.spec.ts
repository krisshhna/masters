import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTest1Component } from './t-test1.component';

describe('TTest1Component', () => {
  let component: TTest1Component;
  let fixture: ComponentFixture<TTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TTest1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

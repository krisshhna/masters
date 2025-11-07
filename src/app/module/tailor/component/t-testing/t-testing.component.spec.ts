import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTestingComponent } from './t-testing.component';

describe('TTestingComponent', () => {
  let component: TTestingComponent;
  let fixture: ComponentFixture<TTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

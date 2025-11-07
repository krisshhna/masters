import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAllDetailsComponent } from './t-all-details.component';

describe('TAllDetailsComponent', () => {
  let component: TAllDetailsComponent;
  let fixture: ComponentFixture<TAllDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TAllDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

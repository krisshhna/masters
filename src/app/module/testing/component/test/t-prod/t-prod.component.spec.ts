import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TProdComponent } from './t-prod.component';

describe('TProdComponent', () => {
  let component: TProdComponent;
  let fixture: ComponentFixture<TProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

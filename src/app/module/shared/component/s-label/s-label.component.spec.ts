import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLabelComponent } from './s-label.component';

describe('SLabelComponent', () => {
  let component: SLabelComponent;
  let fixture: ComponentFixture<SLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

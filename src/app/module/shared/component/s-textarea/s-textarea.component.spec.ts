import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STextareaComponent } from './s-textarea.component';

describe('STextareaComponent', () => {
  let component: STextareaComponent;
  let fixture: ComponentFixture<STextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [STextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

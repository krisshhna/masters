import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBasicFormComponent } from './t-basic-form.component';

describe('TBasicFormComponent', () => {
  let component: TBasicFormComponent;
  let fixture: ComponentFixture<TBasicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TBasicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TBasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

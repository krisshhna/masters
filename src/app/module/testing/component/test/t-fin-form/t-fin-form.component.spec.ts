import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFinFormComponent } from './t-fin-form.component';

describe('TFinFormComponent', () => {
  let component: TFinFormComponent;
  let fixture: ComponentFixture<TFinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TFinFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TFinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

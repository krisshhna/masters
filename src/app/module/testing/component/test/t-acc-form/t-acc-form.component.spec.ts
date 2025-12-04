import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAccFormComponent } from './t-acc-form.component';

describe('TAccFormComponent', () => {
  let component: TAccFormComponent;
  let fixture: ComponentFixture<TAccFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TAccFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAccFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TMarketingComponent } from './t-marketing.component';

describe('TMarketingComponent', () => {
  let component: TMarketingComponent;
  let fixture: ComponentFixture<TMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

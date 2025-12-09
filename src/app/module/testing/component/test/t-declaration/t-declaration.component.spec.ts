import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDeclarationComponent } from './t-declaration.component';

describe('TDeclarationComponent', () => {
  let component: TDeclarationComponent;
  let fixture: ComponentFixture<TDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TDeclarationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

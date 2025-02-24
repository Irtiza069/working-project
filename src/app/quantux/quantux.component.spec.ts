import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantuxComponent } from './quantux.component';

describe('QuantuxComponent', () => {
  let component: QuantuxComponent;
  let fixture: ComponentFixture<QuantuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

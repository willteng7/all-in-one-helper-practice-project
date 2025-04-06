import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionComponent } from './decision.component';

describe('DecisionComponent', () => {
  let component: DecisionComponent;
  let fixture: ComponentFixture<DecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

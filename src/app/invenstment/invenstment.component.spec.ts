import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvenstmentComponent } from './invenstment.component';

describe('InvenstmentComponent', () => {
  let component: InvenstmentComponent;
  let fixture: ComponentFixture<InvenstmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvenstmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvenstmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

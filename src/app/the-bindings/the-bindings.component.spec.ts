import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBindingsComponent } from './the-bindings.component';

describe('TheBindingsComponent', () => {
  let component: TheBindingsComponent;
  let fixture: ComponentFixture<TheBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBindingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

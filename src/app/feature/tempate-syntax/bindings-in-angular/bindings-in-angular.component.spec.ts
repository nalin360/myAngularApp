import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsInAngularComponent } from './bindings-in-angular.component';

describe('BindingsInAngularComponent', () => {
  let component: BindingsInAngularComponent;
  let fixture: ComponentFixture<BindingsInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingsInAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BindingsInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

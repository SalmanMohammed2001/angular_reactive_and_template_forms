import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFromBuilderComponent } from './reactive-from-builder.component';

describe('ReactiveFromBuilderComponent', () => {
  let component: ReactiveFromBuilderComponent;
  let fixture: ComponentFixture<ReactiveFromBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFromBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFromBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

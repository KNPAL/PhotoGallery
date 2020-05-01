import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelboxComponent } from './modelbox.component';

describe('ModelboxComponent', () => {
  let component: ModelboxComponent;
  let fixture: ComponentFixture<ModelboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

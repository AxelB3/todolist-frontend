import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaFormComponent } from './tareaForm.component';

describe('TareaFormComponent', () => {
  let component: TareaFormComponent;
  let fixture: ComponentFixture<TareaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaFormComponent]
    });
    fixture = TestBed.createComponent(TareaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserCreatedComponent } from './dialog-user-created.component';

describe('DialogUserCreatedComponent', () => {
  let component: DialogUserCreatedComponent;
  let fixture: ComponentFixture<DialogUserCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUserCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserHeaderComponent } from './dialog-user-header.component';

describe('DialogUserHeaderComponent', () => {
  let component: DialogUserHeaderComponent;
  let fixture: ComponentFixture<DialogUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUserHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

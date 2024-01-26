import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserDetailComponent } from './dialog-user-detail.component';

describe('DialogUserDetailComponent', () => {
  let component: DialogUserDetailComponent;
  let fixture: ComponentFixture<DialogUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUserDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

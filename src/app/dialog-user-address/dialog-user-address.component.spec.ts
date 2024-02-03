import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserAddressComponent } from './dialog-user-address.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('DialogUserAddressComponent', () => {
  let component: DialogUserAddressComponent;
  let fixture: ComponentFixture<DialogUserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUserAddressComponent],
      providers: [MatDialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

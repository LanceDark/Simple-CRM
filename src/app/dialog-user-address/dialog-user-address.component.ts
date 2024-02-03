import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-user-address',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './dialog-user-address.component.html',
  styleUrl: './dialog-user-address.component.scss',
})
export class DialogUserAddressComponent {
  loading = false;
  usersCollectionRef = collection(this.firestore, 'users');
  userId: string;
  user: User;

  constructor(
    public dialogRef: MatDialogRef<DialogUserAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: string, user: User },
    private firestore: Firestore
  ) {
    this.userId = data.userId;
    this.user = data.user;
  }

  cancel() {
    this.dialogRef.close();
  }

  async addUser() {
    try {
      console.log(this.firestore, 'users', this.userId)
      const userDocRef = doc(this.firestore, 'users', this.userId);
      
      const updatedUserData = {
        street: this.user.street,
        city: this.user.city,
      };

      await updateDoc(userDocRef, updatedUserData);

      console.log('Benutzerdaten erfolgreich aktualisiert');
      this.cancel();
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Benutzerdaten', error);
    }
  }
}

import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-user-header',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './dialog-user-header.component.html',
  styleUrl: './dialog-user-header.component.scss',
})
export class DialogUserHeaderComponent {
  loading = false;
  userId!: string;
  user!: User;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogUserHeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: string; user: User },
    private firestore: Firestore
  ) {
    this.userId = data.userId;
    this.user = data.user;
  }

  cancel() {
    this.dialogRef.close();
    this.loading = false;
  }

  async addUser() {
    this.loading = true;
    try {
      console.log(this.firestore, 'users', this.userId);
      const userDocRef = doc(this.firestore, 'users', this.userId);

      const updatedUserData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        mail: this.user.mail,
      };

      await updateDoc(userDocRef, updatedUserData);

      console.log('Benutzerdaten erfolgreich aktualisiert');
      this.cancel();
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Benutzerdaten', error);
    }
  }
}

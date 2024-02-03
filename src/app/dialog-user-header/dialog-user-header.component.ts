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
import { FirebaseServiceService } from '../firebase-service.service';

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
    private firebaseService: FirebaseServiceService
  ) {
    this.userId = data.userId;
    this.user = data.user;
  }

  cancel() {
    this.dialogRef.close();
    this.loading = false;
  }

  async addUser() {
    try {
      const updatedUserData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        mail: this.user.mail,
      };
      await this.firebaseService.editUserData(this.userId, updatedUserData);
      this.cancel();
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Benutzerdaten', error);
    }
  }
}

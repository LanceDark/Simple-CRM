import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, DocumentData } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
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
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate!: Date;
  loading = false;

  constructor(
    private firestore: Firestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
  ) {}

  async addUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    const docRef = await addDoc(
      collection(this.firestore, 'users'),
      this.user.toJSON()
    );
    console.log('User added with id:', docRef.id);
    this.loading = false;
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}

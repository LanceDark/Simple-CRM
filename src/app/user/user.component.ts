import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import {
  Firestore,
  DocumentData,
  getDocs,
  getDoc,
} from '@angular/fire/firestore';
import { getFirestore, onSnapshot } from '@angular/fire/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirebaseServiceService } from '../firebase-service.service';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  user: User = new User();
  allUsers: any[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore, private firebaseService: FirebaseServiceService) {}

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  ngOnInit() {
    this.firebaseService.getCollection('users', this.allUsers);
  }
}

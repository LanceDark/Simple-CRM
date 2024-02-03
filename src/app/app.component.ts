import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Firestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { FirestoreModule } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirebaseServiceService } from './firebase-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    DashboardComponent,
    UserComponent,
    MatTooltipModule,
    MatDialogModule,
    DialogAddUserComponent,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
    FirestoreModule,
    MatProgressBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})


export class AppComponent {
  title = 'simple-crm';
  firestore: Firestore = Inject(Firestore);
  users: any = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private service: FirebaseServiceService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const firebaseConfig = {
        apiKey: 'AIzaSyCTEGRdV2N4sQVofiAnAzLnqTiUmfXroM4',
        authDomain: 'simple-crm-679ea.firebaseapp.com',
        projectId: 'simple-crm-679ea',
        storageBucket: 'simple-crm-679ea.appspot.com',
        messagingSenderId: '1007445618409',
        appId: '1:1007445618409:web:2fecb8aac3895696ce4a78',
        measurementId: 'G-8MPMJP7W68',
      };

      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
    }
  }

  refreshUser() {
    this.service.getData('users').subscribe((res) => {
      res.push(this.users);
    });
  }

  ngOnInit(): void {
    this.refreshUser();
    console.log(this.users);
  }
}

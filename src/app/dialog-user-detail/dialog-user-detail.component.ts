import { Component } from '@angular/core';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dialog-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './dialog-user-detail.component.html',
  styleUrl: './dialog-user-detail.component.scss',
})
export class DialogUserDetailComponent {
  userId = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      console.log(this.userId);
    });

    await this.getUser();
  }

  async getUser() {
    onSnapshot(doc(this.firestore, 'users', this.userId), (doc) => {
      if (doc.data()) {
        let userData = doc.data();
        this.user = userData as User;
        console.log(this.user);
      }
    });
  }

  openAddressDialog() {}

  openHeaderDialog() {}
}

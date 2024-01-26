import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dialog-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dialog-user-detail.component.html',
  styleUrl: './dialog-user-detail.component.scss',
})
export class DialogUserDetailComponent {}

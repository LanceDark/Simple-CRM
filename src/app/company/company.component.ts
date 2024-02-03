import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  company: any = {};
  constructor(private firebaseService: FirebaseServiceService) {}

  ngOnInit() {
    console.log('test')
    this.firebaseService.getData('companys').subscribe((res) => {
      res.push(this.company);
    });;
    console.log(this.company)
  }
}

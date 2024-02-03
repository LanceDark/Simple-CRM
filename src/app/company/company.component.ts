import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FirebaseServiceService } from '../firebase-service.service';
import { Company } from '../../models/company.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  company: any = new Company();
  allCompanys: any[] = [];
  constructor(private firebaseService: FirebaseServiceService) {}

  ngOnInit() {
    this.firebaseService.getCollection('companys', this.allCompanys);
    console.log(this.allCompanys[0].city);
  }
}

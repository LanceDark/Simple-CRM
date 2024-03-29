import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DialogUserDetailComponent } from './dialog-user-detail/dialog-user-detail.component';
import { CompanyComponent } from './company/company.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: DialogUserDetailComponent },
  { path: 'company', component: CompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

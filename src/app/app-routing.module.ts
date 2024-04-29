import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { BillDetailsComponent } from './expense-tracker/bill-details/bill-details.component';

const routes: Routes = [
  {path:'',redirectTo:'expense-tracker',pathMatch:'full'},
  { path: 'expense-tracker', component: ExpenseTrackerComponent },
  { path:'details/:id',component:BillDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

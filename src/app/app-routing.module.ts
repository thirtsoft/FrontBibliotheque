import { MenuComponent } from './menu/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CustomerComponent } from './customer/customer.component';
import { LoanComponent } from './loan/loan.component';

const routes: Routes = [
    {path: '', component: MenuComponent},
    {path: 'book-page', component: BookComponent},
    {path: 'customer-page', component: CustomerComponent},
    {path: 'loan-page', component: LoanComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

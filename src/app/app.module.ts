import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailModalComponent } from './modal/mail-modal/mail-modal.component';
import { MessageModalComponent } from './modal/message-modal/message-modal.component';
import { BackToMenuComponent } from './menu/back-to-menu/back-to-menu.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BookComponent } from './book/book.component';
import { CustomerComponent } from './customer/customer.component';
import { LoanComponent } from './loan/loan.component';

@NgModule({
  declarations: [
    AppComponent,
    MailModalComponent,
    MessageModalComponent,
    BackToMenuComponent,
    MenuComponent,
    BookComponent,
    CustomerComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

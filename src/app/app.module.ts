import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';


import { AddbillsComponent } from './expense-tracker/addbills/addbills.component';
import { TitleComponent } from './expense-tracker/title/title.component';
import { CardsComponent } from './expense-tracker/cards/cards.component';
import { HeaderComponent } from './expense-tracker/header/header.component';
import { BillDetailsComponent } from './expense-tracker/bill-details/bill-details.component';
import { CardTitleComponent } from './expense-tracker/card-title/card-title.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTrackerComponent,
    HeaderComponent,
    BillDetailsComponent,
    AddbillsComponent,
    TitleComponent,
    CardsComponent,
    CardTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

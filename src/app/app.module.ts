import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauranteFormComponent } from './restaurante-form/restaurante-form.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [AppComponent, RestauranteFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FontAwesomeModule,
    CalendarModule,
    BrowserAnimationsModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
    CurrencyMaskModule,    
    ReactiveFormsModule,
  ],
  providers: [RestauranteFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

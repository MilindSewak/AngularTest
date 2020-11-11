import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    // NgxPaginationModule
  ]
})

export class LoginModule { }

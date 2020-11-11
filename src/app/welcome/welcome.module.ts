import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule
  ]
})

export class WelcomeModule { }

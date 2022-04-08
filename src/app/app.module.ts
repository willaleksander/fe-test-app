import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './users-create/users-create.component';

import { MatButtonModule, MatFormField, MatFormFieldModule, MatSelect, MatSelectModule } from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxDatatableModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './users-create/users-create.component';

import { MatButtonModule, MatFormField, MatFormFieldModule, MatIconModule, MatSelect, MatSelectModule, MatToolbar, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSpinnerOverlayComponent } from './mat-spinner-overlay/mat-spinner-overlay.component';
import { DialogUserCreated } from './dialog-user-created/dialog-user-created.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersCreateComponent,
    MatSpinnerOverlayComponent,
    DialogUserCreated
  ],
  entryComponents: [DialogUserCreated],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxDatatableModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

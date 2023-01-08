import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeListContainerComponent } from './components/employee-list-container/employee-list-container.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { PushDetectionComponent } from './components/change-detection/push-detection/push-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeListContainerComponent,
    AddEmployeeComponent,
    FibonacciPipe,
    ChangeDetectionComponent,
    PushDetectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoHeaderComponent } from './components/todo/todo-header/todo-header.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeListContainerComponent } from './components/employee-list-container/employee-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoItemComponent,
    EmployeeListComponent,
    EmployeeListContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

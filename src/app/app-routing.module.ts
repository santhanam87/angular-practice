import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListContainerComponent } from './components/employee-list-container/employee-list-container.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'elist', component: EmployeeListContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

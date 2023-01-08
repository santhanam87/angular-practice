import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListContainerComponent } from './components/employee-list-container/employee-list-container.component';

const routes: Routes = [
  { path: 'elist', component: EmployeeListContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

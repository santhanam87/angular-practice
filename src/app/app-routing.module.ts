import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { DomesticItemsComponent } from './components/domestic-items/domestic-items.component';
import { EmployeeListContainerComponent } from './components/employee-list-container/employee-list-container.component';
ChangeDetectionComponent;
const routes: Routes = [
  { path: 'elist', component: EmployeeListContainerComponent },
  { path: 'changeDetection', component: ChangeDetectionComponent },
  { path: 'domesticItems', component: DomesticItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

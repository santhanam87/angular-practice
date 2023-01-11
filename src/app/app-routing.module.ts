import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinaryTreeComponent } from './components/binary-tree/binary-tree.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { DomesticItemsComponent } from './components/domestic-items/domestic-items.component';
import { EmployeeListContainerComponent } from './components/employee-list-container/employee-list-container.component';
import { LinkedListComponent } from './components/linked-list/linked-list.component';

const routes: Routes = [
  { path: 'elist', component: EmployeeListContainerComponent },
  { path: 'changeDetection', component: ChangeDetectionComponent },
  { path: 'domesticItems', component: DomesticItemsComponent },
  { path: 'linkedList', component: LinkedListComponent },
  { path: 'binnaryTree', component: BinaryTreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

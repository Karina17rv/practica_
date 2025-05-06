import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMiApiComponent } from './pages/list-mi-api/list-mi-api.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ListMiApiComponent, pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiApiRoutingModule { }

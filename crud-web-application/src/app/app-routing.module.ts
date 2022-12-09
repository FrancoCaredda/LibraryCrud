import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertPageComponent } from './components/insert-page/insert-page.component';
import { GetPageComponent } from './components/get-page/get-page.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import { DeletePageComponent } from './components/delete-page/delete-page.component';

//TODO: If you need changes 
const routes: Routes = [
  { path: "", component: GetPageComponent },
  { path: "insert", component: InsertPageComponent },
  { path: "update", component: UpdatePageComponent },
  { path: "delete", component: DeletePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

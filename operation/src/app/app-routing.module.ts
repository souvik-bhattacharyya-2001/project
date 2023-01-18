import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescComponent } from './comp/desc/desc.component';
import { DetailsComponent } from './comp/details/details.component';
import { FormComponent } from './comp/form/form.component';
import { HomeComponent } from './comp/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'desc/:pid/:id',component:DescComponent},
  {path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

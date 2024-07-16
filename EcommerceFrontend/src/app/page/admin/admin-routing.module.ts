import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
const routes: Routes = [
  {path: 'home', component:AdminHomeComponent,
    children:[
      {path:'add-products',component:AddProductsComponent}]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),LayoutsModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

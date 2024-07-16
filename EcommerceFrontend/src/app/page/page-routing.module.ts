import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CartComponent } from './home/cart/cart.component';
import { LayoutsModule } from '../layouts/layouts.module';

const routes: Routes = [
  
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}
    // { path: 'home', component: HomeComponent},
    // { path: 'product', component: ProductListComponent },
    // { path: 'product/:id', component: ProductDetailComponent },
    // { path: 'cart', component: CartComponent},
    // { path: 'orders', component: CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), LayoutsModule],
  exports: [RouterModule]
})
export class PageRoutingModule { }

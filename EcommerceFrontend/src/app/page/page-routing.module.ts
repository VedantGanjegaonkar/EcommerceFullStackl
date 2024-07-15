import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CartComponent } from './home/cart/cart.component';
const routes: Routes = [
  
    { path: 'home', component: HomeComponent},
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class pageRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { pageRoutingModule } from './page-routing.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './home/cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductDetailComponent,
    CartComponent,


  ],
  imports: [
    CommonModule,
    pageRoutingModule,
    FormsModule
  ]
})
export class PageModule { }

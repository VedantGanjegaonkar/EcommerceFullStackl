import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { PageRoutingModule } from './page-routing.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './home/cart/cart.component';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '../layouts/layouts.module';


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
    PageRoutingModule,
    FormsModule,
    RouterModule,
    LayoutsModule
  ]
})
export class PageModule { }

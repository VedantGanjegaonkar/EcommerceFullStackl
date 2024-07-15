import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from '../../../../../../Ecommerce/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  category= "Fashion"
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products
     
      console.log("data:",data);
      
    }, error => {
      console.error('Error fetching products:', error);
    });
  }
  
  viewProductDetails(eventId: any): void {
    this.router.navigate(['/product', eventId]);
  }
}

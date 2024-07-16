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
      this.products = data.products.map((item:any)=>({

        _id : item._id,
        name: item.name,
        description:item.description,
        images:`http://localhost:3000/${item.images}`,
        price:item.price,
        categoryName:item.categoryName,     //it is an array of categoryname
        venderName:item.venderName,
        
      }))
     
      console.log("data:",data.products);
      
    }, error => {
      console.error('Error fetching products:', error);
    });
  }
  
  viewProductDetails(eventId: any): void {
    this.router.navigate(['/product', eventId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  qnt:number=1
  imageUrl:string = "public/uploads/1720767307318-th.jfif"
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    
    this.productService.getProductById(productId).subscribe((data: any) => {
      console.log("prod: ",data.product);
      
      this.product = data.product;
    }, error => {
      console.error('Error fetching product details:', error);
    });
  }
  toProductList(): void {
    this.router.navigate(['/products']);
  }
  addToCart(): void {
    this.productService.addToCart(this.product._id, this.qnt).subscribe(response => {
      console.log('Product added to cart!', response);
    }, error => {
      console.error('Error adding product:', error);
    });
    console.log(this.qnt,this.product._id);
  }
}

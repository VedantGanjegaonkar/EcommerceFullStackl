import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductService) { }


  cart?:any[];
  total:number=0

  ngOnInit():void{
    this.loadCart()
   
    
  }

  loadCart(){

 this.productService.getCart().subscribe((data:any)=>{
  console.log(data);
  
  this.cart=data.userCart.map((item:any)=>({

    productname : item.productname,
    images:`http://localhost:3000/${item.images}`,
    price:item.price,
    quantity:item.quantity
  
  }))

  // this.cart=data.userCart
  this.total=data.total
  // console.log("this is data:",data)
  },error => {
  console.error('Error fetching cart:', error);
})


  }

}

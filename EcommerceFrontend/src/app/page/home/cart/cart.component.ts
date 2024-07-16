import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductService) { }


  cart?:any[];
  total:number=0
  newTotal:number=0

counpens:any[]=[
  {id:1, name:`10 percent, above 1478400 `, c_total:1478400,c_val:0.1},
  {id:1, name:"Flat 250rs cashback, above 2000", c_total:2000, c_val:250},
]

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

applyC(c_val:number){
  if(c_val<100){
    this.newTotal=this.total-(this.total*c_val)
  } 
  else{
    this.newTotal=this.total-c_val
  }
}

}

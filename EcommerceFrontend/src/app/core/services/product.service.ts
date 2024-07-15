import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { Observable } from 'rxjs';
import { IProduct} from '../../../../../Ecommerce/models/product.model';
import {Category, ICategory} from '../../../../../Ecommerce/models/category.model'
// import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {}

  createProduct(product:any):Observable<IProduct>{
    return this.http.post<any>(`product/create`,product);
  }

  getCategories():Observable<ICategory[]>{
    return this.http.get<any>(`category/get`);
  }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`product`);
  }

  getProductById(productId: string|null): Observable<any> {
    return this.http.get<any>(`product/${productId}`);
  }
  addToCart(productId: string|null,qnt:number):Observable<any>{
    return this.http.post<any>(`cart/add`,{productId,qnt})
  }
  getCart():Observable<any>{
    return this.http.get<any>(`cart`)
  }

}



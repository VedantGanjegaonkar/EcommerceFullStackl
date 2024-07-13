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
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  createProduct(product:any):Observable<IProduct>{
    return this.http.post<any>(`${this.apiUrl}/product/create`,product);
  }

  getCategories():Observable<ICategory[]>{
    return this.http.get<any>(`${this.apiUrl}/category/get`);
  }
  getProducts(category=""): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/product`,{params:{
      limit: 10,
      page:2,
      category:category
    }
    });
  }

  getProductById(productId: string|null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/product/${productId}`);
  }
  addToCart(productId: string|null,qnt:number):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/cart/add`,{productId,qnt})
  }

}



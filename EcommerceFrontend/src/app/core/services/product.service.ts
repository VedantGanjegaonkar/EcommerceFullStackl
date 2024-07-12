import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { Observable } from 'rxjs';
import { IProduct} from '../../../../../Ecommerce/models/product.model';
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

}



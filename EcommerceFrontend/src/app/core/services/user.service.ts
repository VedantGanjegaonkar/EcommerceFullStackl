import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { Observable } from 'rxjs';
import {IUser  } from '../../../../../Ecommerce/models/user.model';
// import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(`user/signup`,user);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`user/login`, credentials);
  }

  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    // For example, check if a token exists in local storage
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isAdmin():boolean{
    const token = localStorage.getItem('token');
    if(!token){
      return false;
    }
    const decodedToken = jwtDecode<any>(token);
    return decodedToken.role === '6654724561af1ee31ccc7a1a';
  }

  getUserIdFromToken(): string  {
    const token = localStorage.getItem('token');
    if (!token) {
      return "null";
    }

    try {
      const decodedToken = jwtDecode<any>(token);

      // Check if the token is expired
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        // Token is expired
        localStorage.removeItem('jwt_token');
        return "null";
      }

      return decodedToken.userId;
    } catch (error) {
      console.error('Error decoding token', error);
      return "null";
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }


}



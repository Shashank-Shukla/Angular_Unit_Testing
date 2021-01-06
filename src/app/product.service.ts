import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private baseUrl = 'http://localhost:8087/products';
  
  constructor(private httpClient:HttpClient) { }

  getProductList():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  createProduct(product:Object):Observable<Object>{
    return this.httpClient.post(this.baseUrl,product);
  }

  deleteProduct(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  getProduct(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id:number,value:any):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }
 
}

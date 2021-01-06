import { Injectable } from '@angular/core';
import {Stock} from './Stock'

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private items: Stock[];
  constructor() {
    this.items=[
      new Stock(1,'mouse',123),
      new Stock(2,'cable',234),
      new Stock(3,'pen',345)
    ]
   }
   getItems():Stock[]{
     return this.items
   }
   createProduct(stock: Stock){
     let findItem = this.items.find(each=>each.pId === stock.pId);
     if(findItem){
       return false;
     }
     this.items.push(stock);
     return false;
    }

   
}

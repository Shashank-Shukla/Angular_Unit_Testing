import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {
   product:Observable<Product[]>

  constructor(private proService:ProductService,
    private router:Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.product=this.proService.getProductList();
  }
   deleteProducts(id:number){
     this.proService.deleteProduct(id)
     .subscribe(data=>{console.log(data);
                        this.loadData();},
                        error=>console.log(error))
     
   }
  productDetails(id:number){
    this.router.navigate(['details',id]);
  } 
  updateProduct(id:number){
    this.router.navigate(['update',id]);
  }
}

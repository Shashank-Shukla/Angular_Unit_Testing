import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: []
})
export class CreateProductComponent implements OnInit {
  
  product: Product = new Product();
  submitted=false;

  constructor(private proService:ProductService,private router:Router) { }

  ngOnInit() {
  }
  newProduct():void{
    this.submitted = false;
    this.product = new Product();
  }

  addSave(){
    this.proService.createProduct(this.product)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.product=new Product();
    this.gotoList();
  }
  onSubmit(){
    this.submitted=true;
    this.addSave();
  }
  gotoList(){
    this.router.navigate(['/products'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: []
})
export class UpdateProductComponent implements OnInit {
  id:number;
  product:Product;

  constructor(private route:ActivatedRoute, private router:Router,
    private productService:ProductService) { }

  ngOnInit() {
    this.product = new Product();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id)
    .subscribe(data=>{
      console.log(data);
      this.product=data;
    },error=>console.log(error))
  }
  updateProducts(){
    this.productService.updateProduct(this.id , this.product)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.product = new Product();
    this.gotoList();
  }

  onSubmit(){
    this.updateProducts();
  }
  gotoList(){
    this.router.navigate(['/products'])
  }

}

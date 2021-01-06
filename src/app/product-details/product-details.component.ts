import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: []
})
export class ProductDetailsComponent implements OnInit {
   id:number;
   product:Product;

  constructor(private route:ActivatedRoute,
    private router:Router, private proService:ProductService) { }

  ngOnInit() {
    this.product=new Product();
    this.id = this.route.snapshot.params['id'];
    this.proService.getProduct(this.id)
    .subscribe(data=>{
      console.log(data);
      this.product=data;      
    },error=>console.log(error));
  }

  list(){
    this.router.navigate(['/products'])
  }
}

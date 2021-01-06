import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {ProductService} from '../product.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController }
from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let httpBackend: HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientModule,HttpClientTestingModule],
      declarations: [ ProductListComponent ],
      providers:[ProductService]
    })
    .compileComponents();
  }));
  beforeEach(inject([HttpTestingController],
    (backend: HttpTestingController) => {
    httpBackend = backend;
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpBackend.expectOne({
    url: 'http://localhost:8087/products',
    method: 'GET'
    }, 'Get list of stocks').flush([{
      pId:123,
      pName:'Laptop',
      pPrice:3456
    }, {
      pId:1,
      pName:'Mobile',
      pPrice:3246
    }]);
    }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should load the stock from react service',async(()=>{
  expect(component).toBeTruthy();
  expect(component.product).toBeTruthy();

  fixture.whenStable().then(() => {
    fixture.detectChanges();
    const productItems = fixture.debugElement.queryAll(
      By.css('app-product-list'));
      expect(productItems.length).toEqual(2);
      });
 }))
 afterEach(() => {
  httpBackend.verify();
  });

});

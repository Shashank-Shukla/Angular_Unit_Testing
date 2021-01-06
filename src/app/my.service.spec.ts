import { TestBed ,inject} from '@angular/core/testing';

import { MyService } from './my.service';
import {Stock} from './Stock';

fdescribe('MyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  var stockService : MyService
  beforeEach(inject([MyService],
    (service: MyService) => {
    stockService = service;
    }));


  it('should be created', () => {
    const service: MyService = TestBed.get(MyService);
    expect(service).toBeTruthy();
  });

  it('should allow adding items',()=>{
    expect(stockService.getItems().length).toEqual(3);
    let stock = new Stock(4,'mask',234);
    expect(stockService.createProduct(stock)).toBeTruthy();
    expect(stockService.getItems().length).toEqual(4);
  })
  it('should fetch a list of stocks', () => {
    expect(stockService.getItems().length).toEqual(3);
   // expect(stockService.getItems[0]).toEqual(1);
  })

});

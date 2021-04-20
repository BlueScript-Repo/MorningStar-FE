import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private http:PackageServiceService) { } 

    productDetails:any;


  getProductDetails(){

  }

  ngOnInit(): void {
    this.productDetails=this.http.getArray()
    console.log("In details component calling array: "+JSON.stringify(this.productDetails));
    
  }

}


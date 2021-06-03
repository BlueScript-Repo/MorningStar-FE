import { Component, OnInit } from '@angular/core';
import {DomesticPackage} from './DomesticPackage';
import {PackageServiceService} from './../package-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-domestic-packages',
  templateUrl: './domestic-packages.component.html',
  styleUrls: ['./domestic-packages.component.css']
})
export class DomesticPackagesComponent implements OnInit {

  constructor(public http:PackageServiceService,private router:Router) { }

  ngOnInit(): void {
    this.packagetype={
      productType:"domestic"
    }
    this.GetDomesticPackage();
  }
  domesticPackages:any={};
  packagetype:DomesticPackage={
    productType:''
  }
  i=0;
  GetDomesticPackage(){
    return this.http.getDomesticPackages(this.packagetype).subscribe(res => {
      this.domesticPackages=res;
      this.i=Object.keys(this.domesticPackages).length;
      console.log(this.i);
      
      console.log(this.domesticPackages);
    })
  }

productCode:any ={};

  role=localStorage.getItem('role');
  products:any={};
  productDetails:any={};
  getData(val:any){
  let code1=val.code;
  console.log(code1);
  this.productCode=val.code;
  console.log(this.productCode);

    this.http.getProductDetails(this.productCode).subscribe(res=>{
    this.productDetails=res;
    console.log(this.productDetails);
    if (this.role=='ADMIN'){
      
    this.router.navigate(["/productDetails"]);
    this.http.setArray(this.productDetails);

    }
    else if(this.role=='USER'){
      this.router.navigate(["/UserproductDetails"]);
      this.http.setArray(this.productDetails);  
    }
    else if(this.role=='AGENT'){
      this.router.navigate(["/AgentProductDetails"]);
      this.http.setArray(this.productDetails);  
    }
    else {
      this.router.navigate(["/LoginPage"])
    }
  })
  
  }
}

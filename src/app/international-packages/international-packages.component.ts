import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service';
import { Router } from '@angular/router';
import {InternationalPackages} from './InternationalPackages';

@Component({
  selector: 'app-international-packages',
  templateUrl: './international-packages.component.html',
  styleUrls: ['./international-packages.component.css']
})
export class InternationalPackagesComponent implements OnInit {

  constructor(public http:PackageServiceService,private router:Router) { }

  ngOnInit(): void {
    this.packagetype={
      productType:"international"
    }
    this.GetInternationalPackage();
  }
  InternationalPackages:any={};
  packagetype:InternationalPackages={
    productType:''
  }
  i=0;
  GetInternationalPackage(){
    return this.http.getInternationalPackages(this.packagetype).subscribe(res => {
      this.InternationalPackages=res;
      this.i=Object.keys(this.InternationalPackages).length;
      console.log(this.i);
      
      console.log(this.InternationalPackages);
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

import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service'
import {Router} from "@angular/router";
import {CodeArr} from "./CodeArr";
@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  constructor(private http:PackageServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  role=localStorage.getItem('role');
  products:any={};
  key=10;
keyword="";
productCode:CodeArr[]=[];
  search(searchForm:any){
    console.log(searchForm);  
    this.keyword=searchForm.Package;
    console.log("Calling Keyword: " + this.keyword);
    return this.http.getProduct(this.keyword).subscribe((res=>{
      console.log(res);
      if (Object.keys(res).length===0) {
        this.key=Object.keys(this.products).length;
        this.key=0
        console.log(this.key);
        
      }
      else{ 
      this.products=res;
      this.key=Object.keys(this.products).length;
      this.productCode=this.products[0].productCode;
      console.log(this.key);
      console.log(this.products);
      console.log(this.productCode);
      }
      
    }))
  }
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
  })
  
  }
  nav(){
    this.router.navigate(["/customPackage"])
  }

}

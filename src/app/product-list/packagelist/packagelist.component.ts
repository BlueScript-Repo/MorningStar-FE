import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../../package-service.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.css']
})
export class PackagelistComponent implements OnInit {

  constructor(private http:PackageServiceService,private router:Router) { }

  ngOnInit(): void {
    this.package={
      productType:localStorage.getItem('productType')
    }
    if(this.package.productType){
      this.GetPackagefromType();
      console.log(this.package);
      localStorage.removeItem('productType');
    }
  }

  package:any={
    productType:''
  }
  GetPackagefromType(){
    return this.http.getProduct(this.package).subscribe((res=>{
      console.log(res);
      this.products=res;
      this.key=Object.keys(this.products).length;
      // this.total="Total "+ this.key+" results found";
    }))
  }

  bucketName:any='';
  mainPage='PackageList Page';
  section="Header";
  Header:any=[];
role=localStorage.getItem('role');
products:any={};
key=10;
keyword="";
total:any;
searchData:any;
productCode:any[]=[];

// Filter code

filter:any={
  PriceRangeStart:0,
  PriceRangeEnd:0,
  packageType:'',
  packageCategory:'',
  packageInclusion:''
}
type='';
RangeStart=1;
RangeEnd=0;
category='';
inclusion='';
filters(val:any){
 console.log(val);
 if(val.family==true && val.adventure==false && val.couple==false){
  this.category="Family"
 }
 else if(val.family==false && val.adventure==true && val.couple==false){
  this.category="Adventure"
 }
 else if(val.family==false && val.adventure==false && val.couple==true){
  this.category="couple"

 }
 else if(val.family==true && val.adventure==true && val.couple==false){
  this.category="Family,adventure"

 }
 if(val.family==true && val.adventure==false && val.couple==true){
  this.category="Family,couple"

 }
 else if(val.family==false && val.adventure==true && val.couple==true){
  this.category="adventure,couple"
 }
 else if(val.family==true && val.adventure==true && val.couple==true){
  this.category="Family,adventure,couple"
 }
 if(val.india==true && val.overseas==false){
   this.type='Domestic';
 }
 else if(val.overseas==true && val.india==false){
   this.type="international";
 }
 else if(val.overseas==true && val.india==true){
   this.type="Domestic,international";
 }
 if(val.below10000==true && val.from10000to20000==false && val.from20000to40000==false){
  this.RangeStart=1;
  this.RangeEnd=10000;
 }
 else if(val.below10000==false && val.from10000to20000==true && val.from20000to40000==false){
  this.RangeStart=10000;
  this.RangeEnd=20000;
 }
 else if(val.below10000==false && val.from10000to20000==false && val.from20000to40000==true){
  this.RangeStart=20000;
  this.RangeEnd=40000;
 }
 else if(val.below10000==true && val.from10000to20000==true && val.from20000to40000==false){
  this.RangeStart=1;
  this.RangeEnd=20000;
 }
 if(val.below10000==true && val.from10000to20000==false && val.from20000to40000==true){
  this.RangeStart=1;
  this.RangeEnd=40000;
 }
 else if(val.below10000==false && val.from10000to20000==true && val.from20000to40000==true){
  this.RangeStart=10000;
  this.RangeEnd=40000;
 }
 else if(val.below10000==true && val.from10000to20000==true && val.from20000to40000==true){
  this.RangeStart=1;
  this.RangeEnd=40000;
 }
 else if(val.above40000==true){
   this.RangeStart=40000;
   this.RangeEnd=1000000;
 }

// Inclusion

 if(val.accomodation==true && val.meal==false && val.flight==false){
  this.inclusion="accomodation"
 }
 else if(val.accomodation==false && val.meal==true && val.flight==false){
  this.inclusion="meal"
 }
 else if(val.accomodation==false && val.meal==false && val.flight==true){
  this.inclusion="flight"

 }
 else if(val.accomodation==true && val.meal==true && val.flight==false){
  this.inclusion="accomodation,meal"

 }
 if(val.accomodation==true && val.meal==false && val.flight==true){
  this.inclusion=="accomodation,flight"

 }
 else if(val.accomodation==false && val.meal==true && val.flight==true){
  this.inclusion="meal,flight"
 }
 else if(val.accomodation==true && val.meal==true && val.flight==true){
  this.inclusion="accomodation,meal,flight"
 }


 this.filter={
   PriceRangeStart:this.RangeStart,
   PriceRangeEnd:this.RangeEnd,
   packageType:this.type,
   packageCategory:this.category,
   packageInclusion:this.inclusion
  //  package1:this.searchData
 }
//  console.log(this.filter);
 
}


filterData:any={
  
   priceRangeStart:0,
   priceRangeEnd:0,
   productType:'',
   productCategory:'',
  keyword:''
}

  search(searchForm:any){
    console.log(searchForm); 
    this.searchData=searchForm; 
    this.keyword=searchForm.Package;
    this.filterData={
    priceRangeStart:this.filter.PriceRangeStart,
    priceRangeEnd:this.filter.PriceRangeEnd,
    productType:this.filter.packageType,
    productCategory:this.filter.packageCategory,
    // PackageInclusions:this.filter.packageInclusion,
    keyword:this.keyword
  }
    Object.keys(this.filterData).forEach((key) => (this.filterData[key] == '' || this.filterData[key]==0) && delete this.filterData[key]);
    console.log(JSON.stringify(this.filterData));
    console.log(this.filterData);
    console.log("Calling Keyword: " + this.keyword);
    // this.http.postdemo(this.filterData).subscribe((res=>{
    // console.log(res);
    // }));
      return this.http.getProduct(this.filterData).subscribe((res=>{
      console.log(res);
        if (Object.keys(res).length===0) {
          this.key=Object.keys(this.products).length;
          this.key=0
          console.log(this.key);
          this.total='';
        }
      else{ 
      this.products=res;
      this.key=Object.keys(this.products).length;
      this.productCode=this.products[0].productCode;
      console.log(this.key);
      console.log(this.products);
      console.log(this.productCode);
        this.total="Total "+ this.key+" results found"; 
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
    this.router.navigate(["/productDetails"])
    this.http.setArray(this.productDetails);

    // if (this.role=='ADMIN'){
      
    // this.router.navigate(["/productDetails"]);
    // this.http.setArray(this.productDetails);

    // }
    // else if(this.role=='USER'){
    //   this.router.navigate(["/UserproductDetails"]);
    //   this.http.setArray(this.productDetails);  
    // }
    // else if(this.role=='AGENT'){
    //   this.router.navigate(["/AgentProductDetails"]);
    //   this.http.setArray(this.productDetails);  
    // }
    // else {
    //   this.router.navigate(["/productDetails"])
    //   this.http.setArray(this.productDetails);
    // }
  })
  
  }
  nav(){
    this.router.navigate(["/customPackage"]);
  }

}
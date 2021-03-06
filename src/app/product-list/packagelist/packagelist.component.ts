import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../../package-service.service'
import {Router} from "@angular/router";
import {Filter} from './Filter';
import {UserService} from './../../user/user.service';
@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.css']
})

export class PackagelistComponent implements OnInit {

  constructor(private http:PackageServiceService,private router:Router,public authenticate:UserService) { }

  ngOnInit(): void {
    const arr = [{id: 2, name: 'one'}, {id: 2, name: 'two'}, {id: 1, name: 'three'}]

const ids = arr.map(o => o.id)
const filtered = arr.filter(({id}, index) => !ids.includes(id, index + 1))

console.log(filtered)

    this.gettype();
    this.getCategory();
    this.getInclusions();
    this.getTags();
    
    this.package={
      keyword:localStorage.getItem('package'),
      productType:localStorage.getItem('productType')
    }
    this.Category={
      theme:localStorage.getItem('category')
    }
    console.log(this.Category );
    this.tag={
      tag:this.http.getName()
    }
    console.log(this.tag);
    if(this.tag.tag){
      this.GetPackagefromTags()
    }
    if(this.package.productType){
      this.GetPackagefromType();
      console.log(this.package);
      localStorage.removeItem('productType');
      localStorage.removeItem('package');
    }
    if(this.Category.theme){
      this.getPackageFromCategory();
      console.log(this.Category);
      localStorage.removeItem('category');
    }
  }

  package:any={
    keyword:'',
    productType:''
  }

  tag:any={
    tag:""
  }

  Category:any={
    theme:''
  }
  
subd:any=[];
  GetPackagefromType(){
    return this.http.getProduct(this.package).subscribe((res=>{
      console.log(res);
      this.products=res;
      for (let i = 0; i < this.products.length; i++) {
        let service = this.products[i].servicesIncluded;
       if(service!=null){
        this.services=service.split('|').sort();
        // console.log(this.products);
        this.products[i].servicesIncluded=this.services;
        console.log(this.services);
        // console.log(this.products); 
       }
      }
      for (let i = 0; i < this.products.length; i++) {
        this.subd=this.products[i].subDestinations; 
        const ids = this.subd.map((o:any) => o.subDestinationName)
        this.subd1=this.subd.filter(({subDestinationName}:any, index:any) => !ids.includes(subDestinationName, index + 1));
        // console.log(filtered)
        this.products[i].subDestinations=this.subd1;
      }
      console.log(this.subd);
      
      console.log(this.subd);
      
      this.key=Object.keys(this.products).length;
      this.total="Total "+ this.key+" results found";
    }))
  }

  subd1:any=[];
  GetPackagefromTags(){
    return this.http.getProduct(this.tag).subscribe((res=>{
      console.log(res);
      this.products=res;
      for (let i = 0; i < this.products.length; i++) {
        let service = this.products[i].servicesIncluded;
       if(service!=null){
        this.services=service.split('|').sort();
        // console.log(this.products);
        this.products[i].servicesIncluded=this.services;
        console.log(this.services);
        // console.log(this.products); 
       }
      }
      for (let i = 0; i < this.products.length; i++) {
        this.subd=this.products[i].subDestinations; 
        const ids = this.subd.map((o:any) => o.subDestinationName)
        this.subd1=this.subd.filter(({subDestinationName}:any, index:any) => !ids.includes(subDestinationName, index + 1));
        // console.log(filtered)
        this.products[i].subDestinations=this.subd1;
      }
      console.log(this.subd);
      
      // const arr = [{id: 2, name: 'one'}, {id: 2, name: 'two'}, {id: 1, name: 'three'}]

      // const ids = this.subd.map((o:any) => o.subDestinationName)
      // const filtered = this.subd.filter(({subDestinationName}:any, index:any) => !ids.includes(subDestinationName, index + 1))

      // console.log(this.subd);

      for (let i = 0; i < this.products.length; i++) {
        this.subd = this.products[i].subDestinations; 
      }



      this.key=Object.keys(this.products).length;
      this.total="Total "+ this.key+" results found";
    }))
  }



  getPackageFromCategory(){
    return this.http.getProduct(this.Category).subscribe(res=>{
      console.log(res);
      this.products=res;
      for (let i = 0; i < this.products.length; i++) {
        let service = this.products[i].servicesIncluded;
       if(service!=null){
        this.services=service.split('|').sort();
        // console.log(this.products);
        this.products[i].servicesIncluded=this.services;
        console.log(this.services);
        // console.log(this.products); 
       }
      }
      for (let i = 0; i < this.products.length; i++) {
        this.subd=this.products[i].subDestinations; 
        const ids = this.subd.map((o:any) => o.subDestinationName)
        this.subd1=this.subd.filter(({subDestinationName}:any, index:any) => !ids.includes(subDestinationName, index + 1));
        // console.log(filtered)
        this.products[i].subDestinations=this.subd1;
      }
      console.log(this.subd);
      this.key=Object.keys(this.products).length;
      this.total="Total "+ this.key+" results found";
    })
  }
  packagetype:Filter[]=[];
  packageCategory:Filter[]=[];
  ServicesIncludes:Filter[]=[];
  recommend:Filter[]=[];
  gettype(){
    this.packagetype=[
      {id:1,name:"Domestic",isselected:false},
      {id:2,name:"International",isselected:false}
    ]
  }
  getTags() {
    this.recommend=[
      {id:1,name:"Best Seller",isselected:false},
      {id:1,name:"MSH Recommended",isselected:false},
      {id:1,name:"Popular",isselected:false},
    ]
  }
  getCategory(){
    this.packageCategory=[
      {id:1,name:"Family",isselected:false},
      {id:2,name:"Couple",isselected:false},
      {id:3,name:"Adventure",isselected:false},
      {id:4,name:"Solo",isselected:false},
      {id:5,name:"Beaches",isselected:false},
      {id:6,name:"Scenic",isselected:false},
      {id:7,name:"Biking Tours",isselected:false},
      {id:8,name:"Trekking",isselected:false},
      {id:9,name:"Religious",isselected:false},
    ]
  }

  getInclusions() {
    this.ServicesIncludes=[
      {id:1,name:"Hotel",isselected:false},
      {id:2,name:"Sightseeing",isselected:false},
      {id:3,name:"Transfer",isselected:false},
      {id:4,name:"Meal",isselected:false},
      {id:5,name:"Visa",isselected:false}
    ]
  }
  onchange(){
    console.log(this.packagetype);
    console.log(this.packageCategory);
    console.log(this.ServicesIncludes);
  }




  bucketName:any='';
  mainPage='PackageList Page';
  section="Header";
  Header:any=[];
role=localStorage.getItem('role');
products:any={};
packages:any={};
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
RangeStart=0;
RangeEnd=0;
category='';
inclusion='';
tags='';
filters(val:any){
  this.category=this.packageCategory.filter(x=>x.isselected==true).map(x=>x.name).join(',').toString();
  this.type=this.packagetype.filter(x=>x.isselected==true).map(x=>x.name).join(',').toString();
  this.inclusion=this.ServicesIncludes.filter(x=>x.isselected==true).map(x=>x.name).join(',').toString();
  this.tags=this.recommend.filter(x=>x.isselected==true).map(x=>x.name).join(',').toString();
  console.log("Product Type is "+this.type);
  console.log("Category is "+this.category);
  console.log("Services Included is "+this.inclusion);
  console.log(val);
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


 this.filter={
   PriceRangeStart:this.RangeStart,
   PriceRangeEnd:this.RangeEnd,
   packageType:this.type,
   packageCategory:this.category,
   packageInclusion:this.inclusion
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
  services:any=[]
  search(searchForm:any){
    console.log(searchForm); 
    this.searchData=searchForm; 
    this.keyword=searchForm.Package;
    this.filterData={
    priceRangeStart:this.filter.PriceRangeStart,
    priceRangeEnd:this.filter.PriceRangeEnd,
    productType:this.filter.packageType,
    theme:this.filter.packageCategory,
    servicesIncluded:this.filter.packageInclusion,
    tag:this.tags,
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
      
      for (let i = 0; i < this.products.length; i++) {
          let service = this.products[i].servicesIncluded;
         if(service!=null){
          this.services=service.split('|').sort();
          // console.log(this.products);
          this.products[i].servicesIncluded=this.services;
          console.log(this.services);
          // console.log(this.products);  
         }
      }
      for (let i = 0; i < this.products.length; i++) {
        this.subd=this.products[i].subDestinations; 
        const ids = this.subd.map((o:any) => o.subDestinationName)
        this.subd1=this.subd.filter(({subDestinationName}:any, index:any) => !ids.includes(subDestinationName, index + 1));
        // console.log(filtered)
        this.products[i].subDestinations=this.subd1;
      }
      console.log(this.subd);
      // console.log(this.products);
      this.key=Object.keys(this.products).length;
      this.productCode=this.products[0].productCode;
      console.log(this.key);
      // console.log(this.products);
      console.log(this.productCode);
        this.total="Total "+ this.key+" results found"; 
    }
      
    }))
  }
  productDetails:any={};
  getData(val:any){
  let code1=val.code;
  console.log(code1);
  let Rate=val.rate;
  console.log(Rate);
  this.http.setPrice(Rate);
  this.productCode=val.code;
  console.log(this.productCode);
    
    this.http.getProductDetails(this.productCode).subscribe(res=>{
    this.productDetails=res;
    console.log(this.productDetails);
    this.router.navigate(["/details/productdetails"])
    this.http.setArray(this.productDetails);

    // if (this.role=='ADMIN'){
      
    // this.router.navigate(["/details/productdetails"]);
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
    //   this.router.navigate(["/details/productdetails"])
    //   this.http.setArray(this.productDetails);
    // }
  })
  
  }
  nav(){
    this.router.navigate(["/customPackage"]);
  }


  // decide(productcode:any){
  //  console.log(productcode);
  //   this.productCode=productcode;
  //   this.http.getProductDetails(this.productCode).subscribe(res=>{
  //     this.productDetails=res;
  //     console.log("result============"+res);
   
  //     if('EditProduct')
  //     {
  //       this.router.navigate(['/editproduct/edit']);
  //       this.http.setArray(this.productDetails);
  //     }
  //     else if('CloneProduct')
  //     {
  //       this.http.setName(this.productDetails);
  //         this.router.navigate(['/newproduct/new'])
  //     }
  //   })
  // }
  
  EditProduct(productcode:any,edit:any) {
    console.log(edit);
    console.log(productcode);
    this.productCode=productcode;
    this.http.getProductDetails(this.productCode).subscribe(res=>{
      this.productDetails=res;
      console.log("result============"+JSON.stringify(res));
      this.http.setArray(this.productDetails);
      this.http.setChoice(edit);
      this.router.navigate(['/editproduct/edit'])
    })
  
  }
 
  
   
   
 
           
  
   CloneProduct(productcode:any,clone:any){
      console.log("calling clone :"+clone);
     this.productCode=productcode;
    this.http.getProductDetails(this.productCode).subscribe(result=>{
      this.productDetails=result;
      this.http.setArray(this.productDetails);
       this.http.setName(clone);
      this.router.navigate(['/editproduct/edit'])

      
  
    })
    //this.router.navigate(['/newproduct/new'])
  }
  
 
}

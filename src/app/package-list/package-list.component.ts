import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  constructor(private http:PackageServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  products:any={};
  key=10;
keyword="";
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
      console.log(this.key);
      
      }
      
    }))
  }
  nav(){
    this.router.navigate(["/customPackage"])
  }

}

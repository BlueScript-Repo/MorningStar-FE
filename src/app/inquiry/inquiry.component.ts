import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PackageServiceService} from './../package-service.service'
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  constructor(private http:PackageServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getProductInquiry();
  }
  role=localStorage.getItem('role');
Inquiries:any = {}
details:any = {}
  getProductInquiry(){
    if(this.role=='AGENT'){
      return this.http.getInquiry().subscribe(data =>{
        console.log(data);
        this.Inquiries = data;
        console.log(this.Inquiries);
      })    
    }
    else if(this.role =='ADMIN'){
      return this.http.getInquiryAll().subscribe(data =>{
        console.log(data);
        this.Inquiries = data;
        console.log(this.Inquiries);
      })
    }
    return console.log("Getting null");
    
  }
  getDetails(detail:any){
    console.log(detail)
    var code=detail.product;
    console.log(detail.product);
   this.http.getProductDetails(code).subscribe(data=>{
     this.details=data;
     console.log(this.details);
     this.router.navigate(["/productDetails"]);
     this.http.setArray(this.details);
   }) 
  }

}

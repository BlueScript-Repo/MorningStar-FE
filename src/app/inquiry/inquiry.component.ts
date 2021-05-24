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
  action=["HOLD","DROP","BOOKED"];
  role=localStorage.getItem('role');
Inquiries:any = {};
details:any = {};
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
     if (this.role=='AGENT') {
      this.router.navigate(["/AgentProductDetails"]);
      this.http.setArray(this.details);
     }
     else if(this.role=='ADMIN'){
      this.router.navigate(["/productDetails"]);
      this.http.setArray(this.details);
     }
     else if(this.role=='USER'){
      this.router.navigate(["/UserproductDetails"]);
      this.http.setArray(this.details);
     } 
   }) 
  }
  email='';
  productCode='';
  inquiryId="";
  newInquiries:any={}
  UpdateStatus(status:any,remark:any,id:any){
    console.log(status,remark);  
    console.log(this.Inquiries[0]);
    this.productCode=this.Inquiries[id].productCode;
      this.email=this.Inquiries[id].emailId;
      this.inquiryId=this.Inquiries[id].productInquiryId;
      console.log(this.email);
      console.log(this.productCode);
    
    this.newInquiries={
      bookingAmount:10000,
      bookingDate:"24 May",
      emailId:this.email,
      inquiryStatus:status,
      productCode:this.productCode,
      remark:remark
    }
    console.log(this.newInquiries);
    this.http.updateStatus(this.newInquiries,this.inquiryId).subscribe(res =>{
      console.log(res);
      
    })
  }
 
  deleteTodo(id: number) {
      
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PackageServiceService} from './../../package-service.service'
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  constructor(private http:PackageServiceService,private router:Router) { }

  ngOnInit(): void {
    this.pdf="https://morning-star-image-store.s3.ap-south-1.amazonaws.com/"+this.Code+"/PDF.pdf"
    this.getProductInquiry();
  }
  pdf:any='';
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
      this.router.navigate(["/details/productdetails"]);
      this.http.setArray(this.details);
     }
     else if(this.role=='ADMIN'){
      this.router.navigate(["/details/productdetails"]);
      this.http.setArray(this.details);
     }
     else if(this.role=='USER'){
      this.router.navigate(["/details/productdetails"]);
      this.http.setArray(this.details);
     } 
   }) 
  }
  email='';
  productCode='';
  inquiryId="";
  newInquiries:any={}
  updateStatus='';
  bookStatus:any='';
  amount=0;
  booked(val:any,j:any){
    this.updateStatus=val.target.value;
    if(this.updateStatus=='BOOKED'){
      this.bookStatus='BOOKED';
    document.getElementById("Status"+j)?.addEventListener("click",function(){
      document.getElementsByClassName('bookingInput')[j].classList.add('active');
    })
    document.getElementById("Status")?.addEventListener("click",function(){
      document.getElementsByClassName('bookingHeading')[j].classList.add('active1');
    })  
  }
  else{
    document.getElementById("Status"+j)?.addEventListener("click",function(){
      document.getElementsByClassName('bookingInput')[j].classList.remove('active');
    })
    document.getElementById("Status"+j)?.addEventListener("click",function(){
      document.getElementsByClassName('bookingHeading')[j].classList.remove('active1');
    })  
  }
    console.log(val.target.value)
  }
  UpdateStatus(status:any,remark:any,amount:any,id:any){
    console.log(status,remark);  
    console.log(this.Inquiries[0]);
    this.productCode=this.Inquiries[id].productCode;
      this.email=this.Inquiries[id].emailId;
      this.inquiryId=this.Inquiries[id].productInquiryId;
      console.log(this.email);
      console.log(this.productCode);
    if(this.bookStatus=='BOOKED'){
      this.amount=amount;
    }
    else{
      this.amount=0;
    }
    this.newInquiries={
      bookingAmount:this.amount,
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
  Code:any='';
  DownloadPdf(code:any){
    console.log("Working");
    this.Code=code; 
    console.log(this.Code);
    
  }
}

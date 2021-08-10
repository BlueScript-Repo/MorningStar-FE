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
    if(this.updateStatus=='BOOK'){
      this.bookStatus='BOOK';
    document.getElementById("Status"+j)?.addEventListener("click",function(){
      document.getElementsByClassName('bookingInput')[j].classList.add('active');
    })
    document.getElementById("Status")?.addEventListener("click",function(){
      document.getElementsByClassName('bookingHeading')[j].classList.add('active1');
    }) 
    this.bookStatus='';
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
  status:any=0;
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
      this.status=200;
      console.log(id);
      // document.querySelector("#status"+id)?.classList.remove('active');
      document.getElementById("update"+id)?.addEventListener("mouseout",function(){
        document.getElementsByClassName('bookingInput')[id].classList.remove('active');
      })
      document.getElementById("update"+id)?.addEventListener("mouseout",function(){
        document.getElementsByClassName('bookingHeading')[id].classList.remove('active1');
      }) 
      
      if(this.status==200){
        const container = document.querySelector('.popup');
        container?.classList.toggle('active');
        console.log("Error code is equals to 200");
      }
    },(error=>{
      this.status=error.status;
      if(this.status!=200){
        const container = document.querySelector('.popup1');
        container?.classList.toggle('active');
        console.log("Error code is not equals to 200");     
      } 
      
    }))
 
  }
 
  deleteTodo(id: number) {
      
  }
  Code:any='';
  DownloadPdf(code:any){
    console.log("Working");
    this.Code=code; 
    console.log(this.Code);
    this.pdf="https://morning-star-image-store.s3.ap-south-1.amazonaws.com/"+this.Code+"/"+this.Code+".pdf"
    
  }
  modal(){
    document.getElementById("open-popup-btn")?.addEventListener("click",function(){
      document.getElementsByClassName("popup")[0].classList.add("active");
    });
   }
   closeModal(){
     
    document.getElementById("dismiss-popup-btn")?.addEventListener("click",function(){
      document.getElementsByClassName("popup")[0].classList.remove("active");
    });
   }
   closeModal1(){
   
    document.getElementById("dismiss-popup1-btn")?.addEventListener("click",function(){
      document.getElementsByClassName("popup1")[0].classList.remove("active");
    });
   }
}

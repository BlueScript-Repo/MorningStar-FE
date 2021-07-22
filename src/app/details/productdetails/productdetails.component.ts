import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../../package-service.service';
import {InquiryDetails} from './InquiryDetails';
import {UserService} from './../../user/user.service'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {

  constructor(private http:PackageServiceService,public authenticate:UserService) { } 

    productDetails:any;


  getProductDetails(){
}

role:any;

  ngOnInit(): void {
    this.productDetails=this.http.getArray();
    this.Code=this.productDetails.productCode;
    this.images=[
      {url:"https://morning-star-image-store.s3.ap-south-1.amazonaws.com/"+this.Code+"/day_1.jpg"},
      {url:"https://morning-star-image-store.s3.ap-south-1.amazonaws.com/"+this.Code+"/day_2.jpg"},
      {url:"https://morning-star-image-store.s3.ap-south-1.amazonaws.com/"+this.Code+"/day_3.jpg"},
      {url:"https://morning-star-image-store.s3.ap-south-1.amazonaws.com/"+this.Code+"/day_4.jpg"},
      {url:"https://morning-star-image-store.s3.ap-south-1.amazonaws.com/"+this.Code+"/day_5.jpg"}
    ];
    console.log(this.Code);
    this.pdf="https://morning-star-image-store.s3.ap-south-1.amazonaws.com/"+this.Code+"/PDF.pdf"
    
    console.log("In details component calling array: "+JSON.stringify(this.productDetails));
    this.role=localStorage.getItem('role');
    console.log(this.role);
    
  }
  Code:any='';
  images:any=[];
  pdf:any="";
  inquery:InquiryDetails[]=[];
  Inquiry(InquiryForm:any){
    let user=InquiryForm.name;
    let email=InquiryForm.email;
    let Contact=InquiryForm.phone;
    let code=InquiryForm.productCode;
    let City=InquiryForm.city;
    let Date=InquiryForm.date;
    console.log(InquiryForm);
    this.inquery.push({
      // agentId:"",
    contactNo:Contact,
    productCode:code,
    city:City,
    emaiId:email,
    name:user
    })
    alert("Your Inquiry has been successfully sent to the Inquiry List")
    console.log(this.inquery);
    return this.http.postInquiry(this.inquery).subscribe(response =>{
      console.log(response);
    })
  }
  deal1(dealForm1:any){
    let deal=dealForm1.deal_Percent;
    console.log(deal);    
  }
  deal(dealForm:any){
    let deal=dealForm.deal_Percent;
    console.log(deal);    
  }
}


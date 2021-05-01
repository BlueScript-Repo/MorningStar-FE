import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service';
import {InquiryDetails} from './InquiryDetails';
import {UserService} from './../user/user.service'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private http:PackageServiceService,public authenticate:UserService) { } 

    productDetails:any;


  getProductDetails(){
}

role:any;

  ngOnInit(): void {
    this.productDetails=this.http.getArray()
    console.log("In details component calling array: "+JSON.stringify(this.productDetails));
    this.role=localStorage.getItem('role');
    console.log(this.role);
    
  }
  inquery:InquiryDetails={
    // agentId:'',
    contactNo:'',
    productCode:'',
    userCity:'',
    userEmail:'',
    userName:''
  }
  Inquiry(InquiryForm:any){
    let user=InquiryForm.name;
    let email=InquiryForm.email;
    let Contact=InquiryForm.phone;
    let code=InquiryForm.productCode;
    let City=InquiryForm.city;
    let Date=InquiryForm.date;
    console.log(InquiryForm);
    this.inquery={
      // agentId:"",
    contactNo:Contact,
    productCode:code,
    userCity:City,
    userEmail:email,
    userName:user
    }
    alert("Your Inquiry has been successfully sent to the Inquiry List")
    console.log(this.inquery);
    return this.http.postInquiry(this.inquery).subscribe(response =>{
      console.log(response);
    })
    alert("Your Inquiry has been successfully sent to the Inquiry List")
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


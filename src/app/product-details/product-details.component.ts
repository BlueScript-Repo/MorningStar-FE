import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service';
import {InquiryDetails} from './InquiryDetails'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private http:PackageServiceService) { } 

    productDetails:any;


  getProductDetails(){

  }

  ngOnInit(): void {
    this.productDetails=this.http.getArray()
    console.log("In details component calling array: "+JSON.stringify(this.productDetails));
    
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
}


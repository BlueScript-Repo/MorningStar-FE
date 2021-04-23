import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder, FormArray, Validators} from '@angular/forms';
import {Subdestination} from './Subdestinations';
import {SubdestinationHotel} from './SubdestinationHotel';
import {Price} from './Price';
import {Inclusion} from "./Inclusion";
import {Exclusion} from "./Exclusion";
import {Day} from './Day';
import {UploadData} from './UploadData';
import {PackageServiceService} from '././../package-service.service'
@Component({ 
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  subdestinations:Subdestination[]=[];
  productSubDestination:SubdestinationHotel[]=[];
  productPrice:Price[] = [];
  productInclusion:Inclusion[] = [];
  productExclusion:Exclusion[] = [];
  productDays:Day[] = [];
  upload:UploadData = {
    description:'',
    destination:'',
    duration:'',
    productCategory:'',
    productDays:[],
    productExclusion:[],
    productInclusion:[],
    productName:'',
    productPrice:[],
    productSubDestination:[],
    productType:''
  };
  constructor(private http:PackageServiceService) { }
  
  
  Product=new FormGroup({
    name:new FormControl('',Validators.required),
    duration:new FormControl(''),
    category: new FormControl(''),
    destination: new FormControl(''),
    subdestination: new FormControl(''),
    Description: new FormControl(''),
    type:new FormControl(''),
    subd:new FormControl(''),
    hotel:new FormControl(''),
    ProductType: new FormControl(''),
    adult: new FormControl(''),
    child: new FormControl(''),
    infant: new FormControl(''),
    inclusion:new FormControl(''),
    exclusion: new FormControl(''),
    days: new FormControl(''),
    description: new FormControl(''),
    productCodeMorningStar:new FormControl('')
  });
  getsubd(sub:any){
    let subd=sub;
    console.log(subd);
    this.subdestinations.push({
      name:subd
    })
    console.log(this.subdestinations);
    sub=" ";
  }

  showSubdestination(type:any,subdesti:any,hot:any){
    let ptype=type;
    let subd=subdesti;
    let hotels=hot;    
    this.productSubDestination.push({
      productType:ptype,
      hotelName:hotels,
      subDestinationName:subd
    })
    console.log(this.productSubDestination);  
  }
  ShowData(prType:any,Adlt:any,Chld:any,Infnt:any){
    let adlt=Adlt;
    let prtyp=prType;
    let chld=Chld
    let ifnt=Infnt
    this.productPrice.push({
      adultPrice:adlt,
      childrenPrice:chld,
      infantPrice:ifnt,
      productType:prtyp
    })
    console.log(this.productPrice);
    
  }
  ShowInclusion(val:any){
    let inclusn=val;
    this.productInclusion.push({
      inclusionText:inclusn
    })
    console.log(this.productInclusion);
    
  }
  ShowExclusion(val:any){
    let exclusn=val;
    this.productExclusion.push({
      exclusionText:exclusn
    })
    console.log(this.productInclusion);
    
  }
  ShowDay(day:any,desc:any){
    let days=day;
    let descrip=desc;
    this.productDays.push({
      day:days,
      dayDescription:descrip
    })
    console.log(this.productDays);
    
  }
 
  ngOnInit(): void {
  }

  deleteTodo(id: number) {
    this.subdestinations = this.subdestinations.filter((v, i) => i != id);
    this.productSubDestination = this.productSubDestination.filter((v, i) => i != id);
    this.productPrice = this.productPrice.filter((v, i) => i != id);
    this.productInclusion = this.productInclusion.filter((v, i) => i != id);
    this.productExclusion = this.productExclusion.filter((v, i) => i != id);
    this.productDays = this.productDays.filter((v, i) => i != id);
  }

  Submit(){
    console.log(this.Product.value);
    this.upload={
      description:this.Product.value.Description,
      destination:this.Product.value.destination,
      duration:this.Product.value.duration,
      productCategory:this.Product.value.category,
      productDays:this.productDays,
      productExclusion:this.productExclusion,
      productInclusion:this.productInclusion,
      productName:this.Product.value.name,
      productPrice:this.productPrice,
      productSubDestination:this.productSubDestination,
      productType:this.Product.value.type
    }
    console.log(this.upload);
    // this.http.uploadProduct(this.upload).subscribe(res=>{
    //   console.log(res);
    // })
    // this.upload=[];
  }

}

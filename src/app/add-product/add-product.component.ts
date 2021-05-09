import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder, FormArray, Validators} from '@angular/forms';
import {Subdestination} from './Subdestinations';
import {SubdestinationHotel} from './SubdestinationHotel';
import {Price} from './Price';
import {Inclusion} from "./Inclusion";
import {Exclusion} from "./Exclusion";
import {Day} from './Day';
import {UploadData} from './UploadData';
import {PackageServiceService} from '././../package-service.service';
import {Images} from './MultiImages';
@Component({ 
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  subdestinations:Subdestination[]=[];
  subdestinationOptions:Subdestination[]=[];
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
    this.subdestinationOptions=this.subdestinations;
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
  deletePrice(id:number){
    this.productPrice = this.productPrice.filter((v, i) => i != id);
  }
  deleteSubdestination(id:any){

    this.subdestinations = this.subdestinations.filter((v, i) => i != id);
  }
  deleteSubdest(id:any){
    this.productSubDestination = this.productSubDestination.filter((v, i) => i != id);
  }
  deleteExclusion(id:any){
    this.productExclusion = this.productExclusion.filter((v, i) => i != id);
  }
  deleteInclusion(id:any){
    this.productInclusion = this.productInclusion.filter((v, i) => i != id);
  }
  deleteDays(id:any){
    this.productDays = this.productDays.filter((v, i) => i != id);
  }
  deleteTodo(id: number) {
    this.images = this.images.filter((v:any,i:any) => i != id);
  }

  productCode:any={};
  selectedFile=[];
  images:any=[];
  onFileChange(event:any){
      this.selectedFile = event.target.files[0];
  this.images.push(
  this.selectedFile
  )
  console.log(this.images[0].name);
  // console.log("Selected File is "+this.selectedFile);
  console.log(this.images);
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
    this.http.uploadProduct(this.upload).subscribe(res=>{
      console.log(res);
      this.productCode=res;
      console.log(this.productCode.productCode);
      localStorage.setItem('productCode', this.productCode.productCode);
      let bucket=localStorage.getItem('productCode');
      console.log("bucket "+bucket);
      for (var i = 0; i < this.images.length; i++) {
        const img=this.images[i];
        this.http.postImage(img).subscribe(res => {
          console.log("value is "+  JSON.stringify(res));
                  })
                  console.log("images are: "+img);
                  
      }
    })
    
    
    // this.upload=[];
  }
  
  
  getImg(value:any){
  
  }
  onUpload(){

  }



}

import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../../package-service.service';
import {Subdestination} from './Subdestinations';
import {Service} from './Services';
import {SubdestinationHotel} from './SubdestinationHotel';
import {Price} from './Price';
import {Inclusion} from "./Inclusion";
import {Exclusion} from "./Exclusion";
import {Day} from './Day';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private http:PackageServiceService) { }
  ngOnInit(): void {
   this.choice=this.http.getName();
   console.log(this.choice);
    this.getService();
    this.productDetails=this.http.getArray();
    console.log(this.productDetails);
    console.log(this.productDetails.productCode);
    this.Code=this.productDetails.productCode;
    localStorage.setItem("code",this.Code);
    console.log(this.productDetails.productSubDestinations);  
    // this.productSubDestination=this.productDetails.productSubDestinations;
    this.subdestinationOptions=this.productDetails.productSubDestinations;
    this.subdestinations=this.productDetails.productSubDestinations;
    this.productPrice=this.productDetails.productPrice;
    this.productExclusion=this.productDetails.productExclusion;
    this.productInclusion=this.productDetails.productInclusion;
    for (let i = 0; i < this.productDetails.productSubDestinations.length; i++) {
      this.productSubDestination.push({
        productType:this.productDetails.productSubDestinations[i].productType,
        hotelName:this.productDetails.productSubDestinations[i].hotelName,
        subDestinationName:this.productDetails.productSubDestinations[i].subDestinationName
      }
      )
    }
    for (let i = 0; i < this.productDetails.productDays.length; i++) {
      this.productDays.push({
        day:this.productDetails.productDays[i].day,
        dayDescription:this.productDetails.productDays[i].dayDescription
     })       
    }
    console.log(this.productDays);
    this.productDetails.productDays;
    console.log(this.productDays);
    let service=this.productDetails.servicesIncluded;
    this.service=service.split("|");
    console.log(this.service);
    for (let i = 0; i < this.service.length; i++) {
      this.UserService.filter(x=>x.name==this.service[i]).map(x=>x.isSelected=true);
    }
  }

  choice:any='';
  cities:any='';
  service:any=[];
  subdestinations:Subdestination[]=[];
  subdestinationOptions:Subdestination[]=[];
  productSubDestination:SubdestinationHotel[]=[];
  productPrice:Price[] = [];
  productInclusion:Inclusion[] = [];
  productExclusion:Exclusion[] = [];
  productDays:Day[] = [];
  UserService:Service[]=[]
  Code:any='';
  upload:any = {
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
    productType:'',
    servicesIncluded:'',
    tag:'',
    theme:''
  };
  

 productDetails:any={};
  getService(){
    this.UserService=[
      {id:1,name:"Hotel",isSelected:false},
      {id:2,name:"Sightseeing",isSelected:false},
      {id:3,name:"Transfer",isSelected:false},
      {id:4,name:"Meal",isSelected:false},
      {id:5,name:"Visa",isSelected:false},
    ];
    console.log(this.UserService);
    
  }
  Onchange(){
    console.log(this.UserService);
    
  }

  getsubd(sub:any){
    let subd=sub;
    console.log(subd);
    this.subdestinations.push({
      subDestinationName:subd
    })
    console.log(this.subdestinations);
    sub=" ";
    // this.subdestinationOptions=this.subdestinations;
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
      type:prtyp
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
    console.log(this.productExclusion);
    
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
  selectedFile:any=[];
  images:any=[];
  imageName:string='';
  onFileChange(event:any){
      this.selectedFile = event.target.files[0];
  this.images.push(
  this.selectedFile
  )
  console.log(this.images[0].name);
  // console.log("Selected File is "+this.selectedFile);
  console.log(this.images);
}



code='';
getProductCode(productcode:any){
  console.log(productcode);
  this.code=productcode;
}
      Submit(val:any){
      console.log(val);
      let service=this.UserService.filter(x=>x.isSelected==true).map(x=>x.name).join('|');
      console.log(service);
      this.upload={
      description:val.Description,
      destination:val.destination,
      duration:val.duration,
      tag:val.tag,
      productCategory:val.category,
      productDays:this.productDays,
      productExclusion:this.productExclusion,
      productInclusion:this.productInclusion,
      productName:val.name,
      productPrice:this.productPrice,
      productSubDestination:this.productSubDestination,
      productType:val.producttype,
      servicesIncluded:service,
      theme:val.category,
      // productCode:this.code
    } 
      if(this.choice=='clone'){
        // alert('Your product is being cloned successfully')
        console.log(this.upload);
        this.http.uploadProduct(this.upload).subscribe(res=>{
          console.log(res);
          this.productCode=res;
          console.log("ProductCode : " +JSON.stringify(this.productCode));
          
        console.log(this.productCode.productCode);
       console.log("bucket "+this.Code);
      for (var i = 0; i < this.images.length; i++) {
      const img=this.images[i];
      this.imageName="day_"+[i+1]+".jpg";
      this.http.postImage(img,this.imageName).subscribe(res => {
        console.log("value is "+  JSON.stringify(res));
      })
        console.log("images are: "+img);
    }
        })
        console.log("Clone");
      }
      if(this.choice=='edit'){
    this.http.editProduct(this.code,this.upload).subscribe(res=>{
    console.log(res);
    this.productCode=res;
          console.log("ProductCode : " +JSON.stringify(this.productCode));
          console.log(this.productCode.productCode);
    console.log("bucket "+this.Code);
    for (var i = 0; i < this.images.length; i++) {
      const img=this.images[i];
      this.imageName="day_"+[i+1]+".jpg";
      this.http.postImage(img,this.imageName).subscribe(res => {
        console.log("value is "+  JSON.stringify(res));
      })
        console.log("images are: "+img);
    }
   })
        console.log("Edited");
      }
   
    
    
    this.upload=[];
  }
  
  
  getImg(value:any){
  
  }
  onUpload(){

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
   

}

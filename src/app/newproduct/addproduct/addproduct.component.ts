import { Component, OnInit } from '@angular/core';
import {Subdestination} from './Subdestinations';
import {Service} from './Services';
import {SubdestinationHotel} from './SubdestinationHotel';
import {Price} from './Price';
import {Inclusion} from "./Inclusion";
import {Exclusion} from "./Exclusion";
import {Day} from './Day';
import {PackageServiceService} from '././../../package-service.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  subdestinations:Subdestination[]=[];
  subdestinationOptions:Subdestination[]=[];
  productSubDestination:SubdestinationHotel[]=[];
  productPrice:Price[] = [];
  productInclusion:Inclusion[] = [];
  productExclusion:Exclusion[] = [];
  productDays:Day[] = [];
  UserService:Service[]=[]
  
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
  constructor(private http:PackageServiceService) { }

  getService(){
    this.UserService=[
      {id:1,name:"Hotel",isSelected:false},
      {id:2,name:"Sightseeing",isSelected:false},
      {id:3,name:"Transfer",isSelected:false},
      {id:4,name:"Meal",isSelected:false},
      {id:5,name:"Visa",isSelected:false},
    ]
    console.log(this.UserService);
    
  }
  Onchange(){
    console.log(this.UserService);
    
  }

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

  showSubdestination(type:any,subdesti:any,hot:any,srNo:any){
    let ptype=type;
    let subd=subdesti;
    let hotels=hot;    
    this.productSubDestination.push({
      serialNo:srNo,
      productType:ptype,
      hotelName:hotels,
      subDestinationName:subd
    })
    console.log(this.productSubDestination);  
  }
  ShowData(prType:any,Adlt:any,Chld:any,Infnt:any,srno:any){
  
    let adlt=Adlt;
    let prtyp=prType;
    let chld=Chld
    let ifnt=Infnt
    this.productPrice.push({
      serialNo:srno,
      adultPrice:adlt,
      childrenPrice:chld,
      infantPrice:ifnt,
      type:prtyp
    })
    console.log(this.productPrice);
    
  }
  ShowInclusion(val:any,srNo:any){
    let inclusn=val;
    this.productInclusion.push({
      serialNo:srNo,
      inclusionText:inclusn
    })
    console.log(this.productInclusion);
    
  }
  ShowExclusion(val:any,srNo:any){
    let exclusn=val;
    this.productExclusion.push({
      serialNo:srNo,
      exclusionText:exclusn
    })
    console.log(this.productExclusion);
    
  }
  ShowDay(day:any,desc:any,srno:any){
    let days=day;
    let descrip=desc;
    this.productDays.push({
      serialNo:srno,
      day:days,
      dayDescription:descrip
    })
    console.log(this.productDays);
    
  }
 
  ngOnInit(): void {
    this.getService();
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
  imageName:any="";
  onFileChange(event:any){
    
      this.selectedFile = event.target.files[0];
  
      this.images.push(
  this.selectedFile,
  )
  // for (let i = 0; i < this.images.length; i++) {
  //   const element = this.images[i];
  //   let name=this.images[i].name.split('.').slice(-1)[0];
  //   console.log(name);
  // }
  console.log(this.images);
}



errCode:any=0;
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
      theme:val.category
    }
      console.log(this.upload);
      this.http.uploadProduct(this.upload).subscribe(res=>{
      console.log(res);
      this.productCode=res;
      console.log(this.productCode.productCode);
      localStorage.setItem('productCode', this.productCode.productCode);
      let bucket=localStorage.getItem('productCode');
      console.log("bucket "+bucket);
      this.errCode=200;
      console.log("Error code is");
      
      console.log(this.errCode);
      
      for (var i = 0; i < this.images.length; i++) {
        const img=this.images[i];
        let name=this.images[i].name.split('.').slice(-1)[0];
        console.log(name);
        if (name=="pdf") {
          
          let code=localStorage.getItem('productCode');
          let pdfName=code+".pdf";
          console.log(code);
          this.http.postImage1(img,pdfName).subscribe(res => {
            console.log("value is "+  JSON.stringify(res));
          })
          console.log("Pdf is uploaded");
        }
        else{
        this.imageName="day_"+[i+1]+".jpg";
        this.http.postImage1(img,this.imageName).subscribe(res => {
          console.log("value is "+  JSON.stringify(res));
        })
      }
          console.log("images are: "+img);
      }
      if (this.errCode==200){
        const container = document.querySelector('.popup');
         container?.classList.toggle('active');
         console.log("Error code is equals to 200");
      }
    },(error) =>{
      console.log(error);
          this.errCode=error.status;
          console.log(this.errCode);
          if (this.errCode!=200) {
            const container = document.querySelector('.popup1');
            container?.classList.toggle('active');
            console.log("Error code is not equals to 200");     
          } 
    })
  
    
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
   closeModal1(){
   
    document.getElementById("dismiss-popup1-btn")?.addEventListener("click",function(){
      document.getElementsByClassName("popup1")[0].classList.remove("active");
    });
   }
   

}

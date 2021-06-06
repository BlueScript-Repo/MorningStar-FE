import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service'
import {Files} from './Files';
import {Upload} from './Upload';
import {CMSServiceService} from './../cms-service.service';
@Component({
  selector: 'app-site-images',
  templateUrl: './site-images.component.html',
  styleUrls: ['./site-images.component.css']
})
export class SiteImagesComponent implements OnInit {

  constructor( private http:PackageServiceService,private imgService:CMSServiceService) { }
  File:any={};
  images:any=[];
  FileName:any='';
  onFileChange(event:any){
    this.File = event.target.files[0];
this.images.push(
this.File
)
console.log(this.images[0].name);
this.FileName=this.File.name;
console.log("Selected File is "+this.File);
console.log(this.File);
}
  ngOnInit(): void {
  }
  mainPage='';
  sectionPart='';
  subsectionPart='';
  getData(main:any,sub:any,nextSub:any){
    console.log(main.value,sub.value,nextSub.value);
   this.mainPage=main.value;
   this.sectionPart=sub.value;
   this.subsectionPart=nextSub.value;
   console.log(this.sectionPart);
    
  }
    bucketName:any='';
    uploadData:Upload[]=[];
    UploadData(submitForm:any){
    console.log(submitForm);
    let Name = submitForm.name;
    let Price = submitForm.price;
    this.bucketName =submitForm.bucketName;
    this.uploadData.push({
    name:Name,
    price:Price,
    file:this.File,
    fileName:this.FileName
    }
    )
    console.log(this.uploadData);
    console.log(this.uploadData[0]);
    // this.http.postimages(this.File,Name,Price,BucketName).subscribe(data =>{
    //   console.log(data);  
    // }) 
    
  }
  UploadAllData(){
    for (let i = 0; i < this.uploadData.length; i++) {
      const image1= this.uploadData[i].file;
      const price1 = this.uploadData[i].price;
      const name1 = this.uploadData[i].name;
      if (this.bucketName=='landing-page/trending-domestic-destinations') {
      this.imgService.ForLandingSection1(image1,name1,price1,this.bucketName).subscribe(data =>{
        console.log(data);  
        })  
      }
      else if (this.bucketName=='landing-page/trending-international-destinations') {
        this.imgService.ForLandingSection2(image1,name1,price1,this.bucketName).subscribe(data =>{
          console.log(data);  
          })  
        }
     else if (this.bucketName=='landing-page/explore-by-themes') {
        this.imgService.ForLandingSection3(image1,name1,price1,this.bucketName).subscribe(data =>{
          console.log(data);  
          })  
        }
      else if (this.bucketName=='landing-page/popular/left') {
        this.imgService.ForLandingSubsection1(image1,name1,price1,this.bucketName).subscribe(data =>{
          console.log(data);  
          })  
        }
      else if (this.bucketName=='landing-page/popular/right') {
        this.imgService.ForLandingSubsection2(image1,name1,price1,this.bucketName).subscribe(data =>{
          console.log(data);  
          })  
          }
      else if (this.bucketName=='deals-page/deals-for-domestic-packages') {
        this.imgService.ForDealSection1(image1,name1,price1,this.bucketName).subscribe(data =>{
          console.log(data);  
          })  
          }
      else if (this.bucketName=='deals-page/deals-for-international-packages') {
        this.imgService.ForDealSection2(image1,name1,price1,this.bucketName).subscribe(data =>{
          console.log(data);  
          })  
          }
      else if (this.bucketName=='deals-page/exotic-deals') {
        this.imgService.ForDealSection3(image1,name1,price1,this.bucketName).subscribe(data =>{
          console.log(data);  
          })  
          }

        else if (this.bucketName=='deals-page/deals-for-every-pocket/left') {
            this.imgService.ForDealSubSection1(image1,name1,price1,this.bucketName).subscribe(data =>{
              console.log(data);  
              })  
              } 
              else if (this.bucketName=='deals-page/deals-for-every-pocket/right') {
                this.imgService.ForDealSubSection2(image1,name1,price1,this.bucketName).subscribe(data =>{
                  console.log(data);  
                  })  
                  }
    }
    this.uploadData=[];
  }
  deleteData(id:any){
    this.uploadData = this.uploadData.filter((v, i) => i != id);
  }

}

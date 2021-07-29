import { Component, OnInit } from '@angular/core';
import {Upload} from './Upload';
import {CMSServiceService} from './../../cms-service.service';
@Component({
  selector: 'app-uploadimages',
  templateUrl: './uploadimages.component.html',
  styleUrls: ['./uploadimages.component.css']
})
export class UploadimagesComponent implements OnInit {

  constructor( private imgService:CMSServiceService) { }
  File:any={};
  File1:any={};
  images:any=[];
  FileName:any='';
  onFileChange(event:any){
    this.File = event.target.files[0];
    this.File1 = new FormData();
    this.File1.append('file',this.File,'Image1.jpg');
    console.log(this.File1);
    let fileSize=this.File.size/1024;
    console.log(fileSize);
    
    if (fileSize>150) {
  alert("The image size you have uploaded exceed 150kb")  
  this.File={};   
  this.FileName=''; 
    }
    else{
      this.images.push(
        this.File1
        )
        console.log(this.images[0].name);
        this.FileName=this.File.name;
        console.log("Selected File is "+this.File1);
        console.log(this.File);
    }

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
    let PageName = submitForm.page;
    let Price = submitForm.price;
    let Section=submitForm.section;
    let SubSection=submitForm.subsection;
    let name = submitForm.name
    this.uploadData.push({
    pageName:PageName,
    section:Section,
    subSection:SubSection,
    file:this.File,
    nameOnImage:name,
    priceOnImage:Price,
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
      const price1 = this.uploadData[i].priceOnImage;
      const page1 = this.uploadData[i].pageName;
      const section1 = this.uploadData[i].section;
      const subSection1 = this.uploadData[i].subSection;
      const name1 = this.uploadData[i].nameOnImage;     
      this.imgService.UploadImages(image1,name1,price1,page1,section1,subSection1).subscribe(data =>{
        console.log(data);  
        })  
    //   else if (this.bucketName=='landing-page/trending-international-destinations') {
    //     this.imgService.ForLandingSection2(image1,name1,price1,this.bucketName).subscribe(data =>{
    //       console.log(data);  
    //       })  
    //     }
    //  else if (this.bucketName=='landing-page/explore-by-themes') {
    //     this.imgService.ForLandingSection3(image1,name1,price1,this.bucketName).subscribe(data =>{
    //       console.log(data);  
    //       })  
    //     }
    //   else if (this.bucketName=='landing-page/popular/left') {
    //     this.imgService.ForLandingSubsection1(image1,name1,price1,this.bucketName).subscribe(data =>{
    //       console.log(data);  
    //       })  
    //     }
    //   else if (this.bucketName=='landing-page/popular/right') {
    //     this.imgService.ForLandingSubsection2(image1,name1,price1,this.bucketName).subscribe(data =>{
    //       console.log(data);  
    //       })  
    //       }
    //   else if (this.bucketName=='deals-page/deals-for-domestic-packages') {
    //     this.imgService.ForDealSection1(image1,name1,price1,this.bucketName).subscribe(data =>{
    //       console.log(data);  
    //       })  
    //       }
    //   else if (this.bucketName=='deals-page/deals-for-international-packages') {
    //     this.imgService.ForDealSection2(image1,name1,price1,this.bucketName).subscribe(data =>{
    //       console.log(data);  
    //       })  
    //       }
    //   else if (this.bucketName=='deals-page/exotic-deals') {
    //     this.imgService.ForDealSection3(image1,name1,price1,this.bucketName).subscribe(data =>{
    //       console.log(data);  
    //       })  
    //       }

    //     else if (this.bucketName=='deals-page/deals-for-every-pocket/left') {
    //         this.imgService.ForDealSubSection1(image1,name1,price1,this.bucketName).subscribe(data =>{
    //           console.log(data);  
    //           })  
    //           } 
    //           else if (this.bucketName=='deals-page/deals-for-every-pocket/right') {
    //             this.imgService.ForDealSubSection2(image1,name1,price1,this.bucketName).subscribe(data =>{
    //               console.log(data);  
    //               })  
    //               }
    }

    console.log(this.uploadData);
    

    this.uploadData=[];
  }
  deleteData(id:any){
    this.uploadData = this.uploadData.filter((v, i) => i != id);
  }


// Delete Name
bucket:any;
ImageData:any;
getBucketName(bucketName:any){
  console.log(bucketName);
  this.bucket=bucketName;
  
  if(this.bucket=='landing-page/trending-domestic-destinations'){
    this.imgService.getLandingPageSection1().subscribe(res=>{
      this.ImageData=res;
      console.log(this.ImageData);
    })
  }
  else if(this.bucket=='landing-page/trending-international-destinations'){
    this.imgService.getLandingPageSection2().subscribe(res=>{
      this.ImageData=res;
      console.log(this.ImageData);
    })
  }
  else if(this.bucket=='landing-page/explore-by-themes'){
    this.imgService.getLandingPageSection3().subscribe(res=>{
    this.ImageData=res;
    console.log(this.ImageData);
    })
  }
  else if(this.bucket=='landing-page/popular/left'){
    this.imgService.getLandingPageSubSection1().subscribe(res=>{
      this.ImageData=res;
      console.log(this.ImageData);
    })
  }
  else if(this.bucket=='landing-page/popular/right'){
    this.imgService.getLandingPageSubSection2().subscribe(res=>{
      this.ImageData=res;
      console.log(this.ImageData);
    })
  }
  else if(this.bucket=='deals-page/deals-for-domestic-packages'){
    this.imgService.getDealPageSection1().subscribe(res=>{
      this.ImageData=res;
      console.log(this.ImageData);
    })
  }
  else if(this.bucket=='deals-page/deals-for-international-packages'){
    this.imgService.getDealPageSection2().subscribe(res=>{
      this.ImageData=res;
      console.log(this.ImageData);
    })
  }

  else if(this.bucket=='deals-page/deals-for-every-pocket/left'){
    this.imgService.getDealPageSubSection1().subscribe(res=>{
      this.ImageData=res;
      console.log(this.ImageData);
    })
  }
  else if(this.bucket=='deals-page/deals-for-every-pocket/right'){
    this.imgService.getDealPageSubSection2().subscribe(res=>{
      this.ImageData=res;
      console.log(this.ImageData);
    })
  }

  else if(this.bucket=='deals-page/exotic-deals'){
    this.imgService.getDealPageSection3().subscribe(res=>{
      this.ImageData=res;
      console.log(this.ImageData);
    })
  }

}
filename:any=[];
file:any;
delete(id:any,name:string){
  console.log(id);
  console.log(name);
  this.filename=name.split("/");
  console.log(this.filename);
  this.file=this.filename.slice(-1)[0];
  console.log(this.filename.slice(-1)[0]);
  this.ImageData = this.ImageData.filter((v:any, i:any) => i != id);
  if(this.bucket=='landing-page/trending-domestic-destinations'){
  this.imgService.DeleteLandingPageSection1(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }
  else if(this.bucket=='landing-page/trending-international-destinations'){
    this.imgService.DeleteLandingPageSection2(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }
  else if(this.bucket=='landing-page/explore-by-themes'){
    this.imgService.DeleteLandingPageSection3(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }
  else if(this.bucket=='landing-page/popular/left'){
    this.imgService.DeleteLandingPageSubsection1(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }
  else if(this.bucket=='landing-page/popular/right'){
    this.imgService.DeleteLandingPageSubsection2(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }
  else if(this.bucket=='deals-page/deals-for-domestic-packages'){
    this.imgService.DeleteDealsPageSection1(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }
  else if(this.bucket=='deals-page/deals-for-international-packages'){
    this.imgService.DeleteDealsPageSection2(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }

  else if(this.bucket=='deals-page/deals-for-every-pocket/left'){
    this.imgService.DeleteDealsPageSubSection1(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }
  else if(this.bucket=='deals-page/deals-for-every-pocket/right'){
    this.imgService.DeleteDealsPageSubSection2(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }

  else if(this.bucket=='deals-page/exotic-deals'){
    this.imgService.DeleteDealsPageSection3(this.bucket,this.file).subscribe(res=>{
      console.log(res);
    })
  }

}


}

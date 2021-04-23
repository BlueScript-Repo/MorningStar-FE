import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SiteImagesService } from '../site-images.service';
import {PackageServiceService} from './../package-service.service'
import {Files} from './Files';
@Component({
  selector: 'app-site-images',
  templateUrl: './site-images.component.html',
  styleUrls: ['./site-images.component.css']
})
export class SiteImagesComponent implements OnInit {

  constructor(private siteImagesService : SiteImagesService, private http:PackageServiceService) { }

  // page:string='';
  // section:string='';
  // subSection: string='';

  // arr=[
  //   {value:"landing-page"},
  // ] 

  // sectionArr=[
  //   {value:"SEC123456"},
    
  // ]

  // subSectionArr=[
  //   {value:"SUBSEC123456"},
  // ]
  // pageOption:any;
  // sectionOption:any;
  // subsectionOption:any;

  // getImages(directory:any){
    
  //     console.log(directory);
  //     let page=directory.page;
  //     let section=directory.section;
  //     let subsection=directory.subSection;
  //     console.log(section+page+subsection);
  
  //   let keyVal=page+'/'+section+'/'+subsection;
  //   console.log(keyVal);
  //   this.siteImagesService.getImages(keyVal).subscribe((result)=>{       
  //     console.log(result);
  // });
  // }
  // getPage(value:any){
  //   console.log("Calling function "+value);
    
  // }
  // getSection(value:any){
  //   console.log("getting section:"+value);
    
  // }
  // getsub(value:any){
  //   console.log("getting subsection "+value);
    
  // }

  uploadImageData:Files={
    file:{},
    bucketName:''
  };
  selectedFile: any;
  onFileChange(event:any){
      //Select File
      this.selectedFile = event.target.files[0];
  localStorage.setItem('image',this.selectedFile.name)
      
    }
  
  
  onUpload(){
  console.log(this.selectedFile);
  // const uploadImageData = new FormData();
 
  console.log(this.uploadImageData);
  
  console.log(this.selectedFile);
  console.log(this.uploadImageData);
  // this.http.postImage(this.uploadImageData).subscribe(res => {
  //   console.log("value is "+  res);
  //   // this.uploadImageData={};
  // })
  }

  ngOnInit(): void {
  }
  getImg(value:any){
    this.uploadImageData={
      file:value.image,
      bucketName:"Mayur"
     };
    console.log("getting Value "+JSON.stringify(value));
    this.http.postImage(this.uploadImageData).subscribe(res => {
      console.log("value is "+  res);
    })
  }
}

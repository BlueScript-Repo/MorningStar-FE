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
  File=[];
  images:any=[];
  onFileChange(event:any){
    this.File = event.target.files[0];
this.images.push(
this.File
)
console.log(this.images[0].name);
console.log("Selected File is "+this.File);
console.log(this.images);
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
  onUpload(){
    if(this.sectionPart==''){
      this.bucketName=this.mainPage;
    }
    else if(this.subsectionPart==''){
      this.bucketName=this.mainPage+"/"+this.sectionPart;
    }
    else{
      this.bucketName=this.mainPage+"/"+this.sectionPart+"/"+this.subsectionPart;
    }
    console.log(this.bucketName);
    localStorage.setItem('path',this.bucketName);
    for (var i = 0; i < this.images.length; i++) {
      const img=this.images[i];
    console.log("images are: "+img);
    this.http.PostImagesCMS(img).subscribe(res=>{
      console.log(res);      
    })
    }
    this.images=[];
    localStorage.removeItem('path');
  }
  
}

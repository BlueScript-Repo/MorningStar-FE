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

  myFiles:string [] = [];
  selectedFile: any;
  onFileChange(event:any){ 
    
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
  }
     // this.selectedFile = event.target.files[0];
}
image:any=[];
  onUpload(){
  //const file=this.selectedFile; 
  const formData=new FormData();
  for (var i = 0; i < this.myFiles.length; i++) { 
    const file=this.myFiles[i];
    //formData.append("file[]", this.myFiles[i]);

    //console.log(formData);
    
    this.http.postImage(file).subscribe(res => {
      console.log("value is "+  res);
              })
  }

  // console.log("formData :" +formData);
  // this.image.push(formData)
  // console.log("in ts file: "+this.image);
  
  //console.log("file",file)
  // this.http.postImage(file).subscribe(res => {
  //   console.log("value is "+  res);
  //           })
  // }

  // this.http.postImage(formData).subscribe(res => {
  //   console.log("value is "+  res);
  //           })
  }

  ngOnInit(): void {
  }
  getImg(value:any){
  
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SiteImagesService } from '../site-images.service';

@Component({
  selector: 'app-site-images',
  templateUrl: './site-images.component.html',
  styleUrls: ['./site-images.component.css']
})
export class SiteImagesComponent implements OnInit {

  constructor(private siteImagesService : SiteImagesService) { }

  page:string='';
  section:string='';
  subSection: string='';

  arr=[
    {value:"landing-page"},
  ] 

  sectionArr=[
    {value:"SEC123456"},
    
  ]

  subSectionArr=[
    {value:"SUBSEC123456"},
  ]
  pageOption:any;
  sectionOption:any;
  subsectionOption:any;

  getImages(directory:any){
    
      console.log(directory);
      let page=directory.page;
      let section=directory.section;
      let subsection=directory.subSection;
      console.log(section+page+subsection);
  
    let keyVal=page+'/'+section+'/'+subsection;
    console.log(keyVal);
    this.siteImagesService.getImages(keyVal).subscribe((result)=>{       
      console.log(result);
  });
  }
  getPage(value:any){
    console.log("Calling function "+value);
    
  }
  getSection(value:any){
    console.log("getting section:"+value);
    
  }
  getsub(value:any){
    console.log("getting subsection "+value);
    
  }

  ngOnInit(): void {
  }

}

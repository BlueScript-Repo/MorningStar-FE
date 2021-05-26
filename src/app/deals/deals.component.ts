import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service'
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(public http:PackageServiceService) { }

  ngOnInit(): void {
    this.getImages();
  }
  Domestic:any=[];
  International:any=[];
  everyPocketLeft:any=[];
  ExoticDealsLeft:any=[];
  ExoticDealsRight:any=[];
  everyPocketRight:any=[];
  bucketName:any={};
  mainPage="Deals Page";
  section1="Deals for Domestic Packages";
  section2="Deals For every Pocket";
  section3="Deals for International Packages";
  section4="Exotic Deals";
  subsection="Left";
  subsection1="Right";

getImages(){
  this.bucketName=this.mainPage+"/"+this.section1;
  this.http.getImages(this.bucketName).subscribe(res=>{
    console.log(res);
    this.Domestic=res;
  })

  this.bucketName=this.mainPage+"/"+this.section2+"/"+this.subsection;
  this.http.getImages(this.bucketName).subscribe(res=>{
    console.log(res);
    this.everyPocketLeft=res;
  })
  this.bucketName=this.mainPage+"/"+this.section2+"/"+this.subsection1;
  this.http.getImages(this.bucketName).subscribe(res=>{
    console.log(res);
    this.everyPocketRight=res;
  })
  this.bucketName=this.mainPage+"/"+this.section3;
  this.http.getImages(this.bucketName).subscribe(res=>{
    console.log(res);
    this.International=res;
  })
  this.bucketName=this.mainPage+"/"+this.section4+"/"+this.subsection1;
  this.http.getImages(this.bucketName).subscribe(res=>{
    console.log(res);
    this.ExoticDealsRight=res;
  })
  this.bucketName=this.mainPage+"/"+this.section4+"/"+this.subsection;
  this.http.getImages(this.bucketName).subscribe(res=>{
    console.log(res);
    this.ExoticDealsLeft=res;
  })
}

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: true,
    navSpeed: 700,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      440: {
        items: 3
      },
      600: {
        items: 4
      },
      // 800: {
      //   items:5
      // }
      // 1000: {
      //   items: 6
      // }
    },
  }


  

}

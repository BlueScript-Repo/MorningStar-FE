import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service';
import {CMSServiceService} from './../cms-service.service';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(public http:PackageServiceService,private imgService:CMSServiceService) { }

  ngOnInit(): void {
    this.getImages();
  }
  Domestic:any=[];
  International:any=[];
  everyPocketLeft:any=[];
  ExoticDeals:any=[];
  everyPocketRight:any=[];

getImages(){
  this.imgService.getDealPageSection1().subscribe(res=>{
    this.Domestic=res;
    console.log(this.Domestic);
    
  })

  this.imgService.getDealPageSection2().subscribe(res=>{
    this.International=res;
    console.log(this.International);
    
  })

  this.imgService.getDealPageSection3().subscribe(res=>{
    this.ExoticDeals=res;
    console.log(this.ExoticDeals);
    
  })

  this.imgService.getDealPageSubSection1().subscribe(res=>{
  this.everyPocketLeft=res;
  console.log(this.everyPocketLeft);
  
  })
  this.imgService.getDealPageSubSection1().subscribe(res=>{
    this.everyPocketLeft=res;
    console.log(this.everyPocketLeft);
  })
  
  this.imgService.getDealPageSubSection2().subscribe(res=>{
    this.everyPocketRight=res;
    console.log(this.everyPocketRight);
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

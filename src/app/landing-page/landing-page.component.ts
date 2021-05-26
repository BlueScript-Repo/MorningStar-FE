import { Component, OnInit } from '@angular/core';
import {UserService} from './../user/user.service'
import {Router} from '@angular/router';
import {PackageServiceService} from './../package-service.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public router: Router,public authenticate:UserService,public http:PackageServiceService) { }

  ngOnInit(): void {
  if(this.role!='AGENT' && this.role!='USER' && this.role!='ADMIN'){
    this.value='null';
  }
  this.GetImages();
  }
  domestic:any=[];
  international:any=[];
  Themes:any=[];
  leftSubsection:any=[];
  rightSubsection:any=[];
  BucketName1:any={};
  BucketName2:any={};
  BucketName3:any={};
  BucketName4:any={};
  BucketName5:any={};
  pageName="Landing Page";
  section1="Trending Domestic Destination";
  section2="Trending International Destination";
  section3="Explore by Themes";
  section4="Popular";
  subsection1="Left";
  subsection2="Right";
  GetImages(){
    this.BucketName1=this.pageName+"/"+this.section1;
    this.http.getImages(this.BucketName1).subscribe(res=>{
      console.log("Calling Domestic destinations");
      this.domestic=res;
      console.log(this.domestic);
      
    })
    this.BucketName2=this.pageName+"/"+this.section2;
    this.http.getImages(this.BucketName2).subscribe(res=>{
            console.log("Calling Internation destinations");
      this.international=res;
      console.log(this.international);
    })
    this.BucketName3=this.pageName+"/"+this.section3;
    this.http.getImages(this.BucketName3).subscribe(res=>{
            console.log("Calling themes");
      this.Themes=res;
      console.log(this.Themes);
    })
    this.BucketName4=this.pageName+"/"+this.section4+"/"+this.subsection1;
    this.http.getImages(this.BucketName4).subscribe(res=>{
            console.log("Calling left subsection");
      this.leftSubsection=res;
      console.log(this.leftSubsection);
    })
    this.BucketName5=this.pageName+"/"+this.section4+"/"+this.subsection2;
    this.http.getImages(this.BucketName5).subscribe(res=>{
            console.log("Calling right subsection");
            console.log(res);
      this.rightSubsection=res;
      console.log(this.rightSubsection);
    })
  }
  role=localStorage.getItem('role');
  value='';
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
      800: {
        items:5
      }
      // 1000: {
      //   items: 6
      // }
    },
  }
  customOptions1: any = {
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
       300: {
         items: 3
       },
      400: {
        items: 4
      },
      500: {
        items:5
      },
      600: {
        items: 6
      },
      700:{
        items:7
      },
      800:{
        items:8
      },
      900:{
        items:9
      }
    },
  }
  nav(){
    this.router.navigate(['/packageList']);
  }
}

